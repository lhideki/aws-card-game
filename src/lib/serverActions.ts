'use server';

/**
 * サーバーサイドで実行されるアクション
 * APIリクエストやデータ処理をサーバーサイドで行います
 */

import { Card, Challenge, EvaluationResult, FinalEvaluationResult, TurnHistory } from "./types";
import { challenges, ssmChallenges } from "../data/index";
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

// サーバーサイドでのBedrockクライアントの初期化
const bedrockClient = new BedrockRuntimeClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION || "us-east-1",
});

// プロンプトテンプレート
const EVALUATION_PROMPT = `
あなたはAWSのエキスパートで、クラウドアーキテクチャの評価を行うゲームマスターです。
プレイヤーが提出したAWSサービスが、与えられた課題を解決できるかどうかを評価してください。

## 課題
{challenge}

## 予算
{budget}

## 現在の課題の状況
{currentStatus}

## プレイヤーが提出したサービス
{services}

## 評価基準
1. 提出されたサービスが課題の解決に貢献するか
2. アーキテクチャとしての完成度
3. コスト効率（予算内に収まっているか）
4. セキュリティ面での考慮
5. 運用面での考慮

## 指示
- 提出されたサービスが課題の解決にどのように貢献するかを簡潔に評価してください。
- 課題の状況がどのように変化したかを1-2文で説明してください。
- 課題の状況を0-100のスケールで評価してください（100が完全に解決された状態）。
- 良い点と改善点を箇条書きで簡潔に指摘してください。
- 回答は日本語で、ゲームマスターとしてプレイヤーに語りかける形で返してください。
- 回答は全体で100-150単語程度に収めてください。
- 回答の最後に、「課題の状況: XX/100」の形式で必ず含めてください。
- 回答はMarkdown形式で記述してください。
`;

// 最終評価用のプロンプトテンプレート
const FINAL_EVALUATION_PROMPT = `
あなたはAWSのエキスパートで、クラウドアーキテクチャの評価を行うゲームマスターです。
プレイヤーが提出した一連の解決策が、与えられた課題を解決できたかどうかを最終評価してください。

## 課題
{challenge}

## 予算
{budget}

## プレイヤーが提出した解決策の履歴
{solutionHistory}

## 最終的な課題の状況
{finalStatus}

## 予算状況
{budgetInfo}

## 評価基準
1. 提出された解決策が課題を解決できたか
2. アーキテクチャとしての完成度
3. コスト効率（予算内に収まっているか）
4. セキュリティ面での考慮
5. 運用面での考慮

## 指示
- 提出された一連の解決策が課題を解決できたかどうかを総合的に評価してください。
- 良かった点と改善点を簡潔に指摘してください。
- 予算内に収まっているかどうかを評価に含めてください。予算を超過している場合は減点要素となります。
- 回答は日本語で、ゲームマスターとしてプレイヤーに語りかける形で返してください。
- 回答は全体で150-200単語程度に収めてください。
- 回答の最後に、100点満点で点数をつけ、「評価: XX点/100点」の形式で必ず含めてください。
- 回答はMarkdown形式で記述してください。
`;

/**
 * ランダムなチャレンジを選択する関数
 * @param excludeIds 除外するチャレンジIDの配列（オプション）
 * @returns 選択されたチャレンジ
 */
export async function getRandomChallenge(
  excludeIds: number[] = [],
  mode: 'default' | 'ssm' = 'default'
): Promise<Challenge> {
  const list = mode === 'ssm' ? ssmChallenges : challenges;
  const availableChallenges = list.filter(c => !excludeIds.includes(c.id));
  const shuffledChallenges = [...availableChallenges].sort(() => Math.random() - 0.5);
  return shuffledChallenges[0];
}

/**
 * ターン毎の評価を行う関数
 * @param challenge 現在のチャレンジ
 * @param serviceCards 選択されたサービスカード
 * @param supportCards 有効化されたサポートカード
 * @param currentStatus 現在の状況メッセージ
 * @param currentStatusLevel 現在の状況レベル
 * @returns 評価結果
 */
export async function evaluateTurnServer(
  challenge: Challenge,
  serviceCards: Card[],
  supportCards: Card[],
  currentStatus: string,
  currentStatusLevel: number
): Promise<EvaluationResult> {
  try {
    // サービスカードとサポートカードの情報を整形
    const serviceText = serviceCards.length > 0
      ? `## サービスカード\n` + serviceCards.map(card => 
          `- ${card.name}（コスト: ${card.cost}）: ${card.effect}`
        ).join('\n')
      : `## サービスカード\n提出されていません`;
    
    const supportsText = supportCards.length > 0 
      ? '\n\n## サポートカード\n' + supportCards.map(card => 
          `- ${card.name}（コスト: ${card.cost}）: ${card.effect}`
        ).join('\n')
      : '\n\n## サポートカード\n有効化されていません';
    
    // 総コストを計算
    const totalCost = serviceCards.reduce((sum, card) => sum + card.cost, 0);
    
    // プロンプトを作成
    const prompt = EVALUATION_PROMPT
      .replace('{challenge}', `${challenge.title}\n${challenge.description}`)
      .replace('{budget}', `${challenge.budgetCost}（プレイヤーの使用コスト: ${totalCost}）`)
      .replace('{currentStatus}', `${currentStatus}（現在の状況レベル: ${currentStatusLevel}/100）`)
      .replace('{services}', serviceText + supportsText);
    
    // Bedrockモデルを呼び出す
    const modelId = process.env.NEXT_PUBLIC_BEDROCK_MODEL_ID || "anthropic.claude-3-sonnet-20240229-v1:0";
    
    const payload = {
      modelId,
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    };
    
    const command = new InvokeModelCommand(payload);
    const response = await bedrockClient.send(command);
    
    // レスポンスをパース
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const message = responseBody.content[0].text;
    
    // 状況レベルを抽出
    const statusMatch = message.match(/課題の状況:\s*(\d+)\/100/);
    const statusLevel = statusMatch ? parseInt(statusMatch[1], 10) : currentStatusLevel;
    
    return {
      message,
      statusLevel
    };
  } catch (error) {
    console.error("Bedrock API error:", error);
    return {
      message: "申し訳ありません。評価中にエラーが発生しました。別の解決策を試してみてください。",
      statusLevel: currentStatusLevel
    };
  }
}

/**
 * スキップ時の評価を行う関数
 * @param challenge 現在のチャレンジ
 * @param currentStatus 現在の状況メッセージ
 * @param currentStatusLevel 現在の状況レベル
 * @returns 評価結果
 */
export async function evaluateSkipServer(
  challenge: Challenge,
  currentStatus: string,
  currentStatusLevel: number
): Promise<EvaluationResult> {
  // 状況レベルを10%下げる（最低0%）
  const newStatusLevel = Math.max(0, currentStatusLevel - 10);
  
  return {
    message: `ターンをスキップしました。課題の解決が遅れ、状況が悪化しています。\n\n課題の状況: ${newStatusLevel}/100`,
    statusLevel: newStatusLevel
  };
}

/**
 * 最終評価を行う関数
 * @param challenge 現在のチャレンジ
 * @param solutionHistory 解決策の履歴
 * @param finalStatusLevel 最終状況レベル
 * @param totalCostUsed 使用した総コスト
 * @param budgetCost 予算コスト
 * @returns 最終評価結果
 */
export async function evaluateFinalSolutionServer(
  challenge: Challenge,
  solutionHistory: TurnHistory[],
  finalStatusLevel: number,
  totalCostUsed: number = 0,
  budgetCost: number = 0
): Promise<FinalEvaluationResult> {
  try {
    // 解決策の履歴を整形
    const historyText = solutionHistory.map((solution, index) => {
      const turnNumber = index + 1;
      const serviceText = solution.serviceCards.length > 0
        ? `- サービスカード: ${solution.serviceCards.map(card => `${card.name}（コスト: ${card.cost}）`).join(', ')}`
        : `- サービスカード: なし`;
      
      const supportsText = solution.supportCards.length > 0
        ? `- サポートカード: ${solution.supportCards.map(card => card.name).join(', ')}`
        : `- サポートカード: なし`;
      
      return `### ターン${turnNumber}\n${serviceText}\n${supportsText}\n- 評価結果: 状況レベル ${solution.statusLevel}/100`;
    }).join('\n\n');
    
    // 予算情報を追加
    const actualBudget = budgetCost || challenge.budgetCost;
    const budgetInfo = `総コスト: ${totalCostUsed} / 予算: ${actualBudget} (${totalCostUsed > actualBudget ? '予算超過' : '予算内'})`;
    
    // プロンプトを作成
    const prompt = FINAL_EVALUATION_PROMPT
      .replace('{challenge}', `${challenge.title}\n${challenge.description}`)
      .replace('{budget}', `${actualBudget}`)
      .replace('{solutionHistory}', historyText)
      .replace('{finalStatus}', `最終的な状況レベル: ${finalStatusLevel}/100`)
      .replace('{budgetInfo}', budgetInfo);
    
    // Bedrockモデルを呼び出す
    const modelId = process.env.NEXT_PUBLIC_BEDROCK_MODEL_ID || "anthropic.claude-3-sonnet-20240229-v1:0";
    
    const payload = {
      modelId,
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1500,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    };
    
    const command = new InvokeModelCommand(payload);
    const response = await bedrockClient.send(command);
    
    // レスポンスをパース
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const message = responseBody.content[0].text;
    
    // 評価点数を抽出
    const scoreMatch = message.match(/評価:\s*(\d+)点/);
    
    // 予算超過の場合はペナルティを適用
    let score = scoreMatch ? parseInt(scoreMatch[1], 10) : Math.round(finalStatusLevel * 0.8);
    if (totalCostUsed > actualBudget) {
      // 予算超過率に応じてペナルティを適用
      const overBudgetRatio = totalCostUsed / actualBudget;
      if (overBudgetRatio > 2) {
        score = Math.round(score * 0.5); // 予算の2倍以上超過: 50%減点
      } else if (overBudgetRatio > 1.5) {
        score = Math.round(score * 0.7); // 予算の1.5倍以上超過: 30%減点
      } else {
        score = Math.round(score * 0.9); // 予算超過: 10%減点
      }
    }
    
    return {
      message,
      score
    };
  } catch (error) {
    console.error("Bedrock API error:", error);
    return {
      message: "申し訳ありません。最終評価中にエラーが発生しました。",
      score: Math.round(finalStatusLevel * 0.7) // エラー時のデフォルト値
    };
  }
}
