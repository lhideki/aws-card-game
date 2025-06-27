import {
  BedrockRuntimeClient,
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { Card, Challenge } from "../lib/types";

// Bedrockクライアントの初期化
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
1. 提出されたサービスが課題を解決に貢献するか
2. アーキテクチャとしての完成度
3. コスト効率（予算内に収まっているか）
4. セキュリティ面での考慮
5. 運用面での考慮

## 指示
- 提出されたサービスが課題の解決にどのように貢献するかを評価してください。
- 課題の状況がどのように変化したかを説明してください。
- 課題の状況を0-100のスケールで評価してください（100が完全に解決された状態）。
- 良い点と改善点を具体的に指摘してください。
- 予算を超過している場合は、その点を考慮して評価を下げてください。
- 回答は日本語で、ゲームマスターとしてプレイヤーに語りかける形で返してください。
- 回答の最後に、「課題の状況: XX/100」の形式で必ず含めてください。
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

## 評価基準
1. 提出された解決策が課題を解決できたか
2. アーキテクチャとしての完成度
3. コスト効率（予算内に収まっているか）
4. セキュリティ面での考慮
5. 運用面での考慮

## 指示
- 提出された一連の解決策が課題を解決できたかどうかを総合的に評価してください。
- 良かった点と改善点を具体的に指摘してください。
- 予算を超過している場合は、その点を考慮して評価を下げてください。
- 回答は日本語で、ゲームマスターとしてプレイヤーに語りかける形で返してください。
- 回答の最後に、100点満点で点数をつけ、「評価: XX点/100点」の形式で必ず含めてください。
`;

interface EvaluationResult {
  message: string;
  statusLevel: number;
}

interface FinalEvaluationResult {
  message: string;
  score: number;
}

// ターン毎の評価
export async function evaluateTurn(
  challenge: Challenge,
  serviceCard: Card | null,
  supportCards: Card[],
  currentStatus: string,
  currentStatusLevel: number
): Promise<EvaluationResult> {
  try {
    // サービスカードとサポートカードの情報を整形
    const serviceText = serviceCard
      ? `## サービスカード\n- ${serviceCard.name}（コスト: ${serviceCard.cost}）: ${serviceCard.effect}`
      : `## サービスカード\n提出されていません`;

    const supportsText = supportCards.length > 0
      ? '\n\n## サポートカード\n' + supportCards.map(card =>
          `- ${card.name}（コスト: ${card.cost}）: ${card.effect}`
        ).join('\n')
      : '\n\n## サポートカード\n有効化されていません';

    // 総コストを計算
    const totalCost = serviceCard ? serviceCard.cost : 0;

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

// スキップ時の評価
export async function evaluateSkip(
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

// 最終評価
export async function evaluateFinalSolution(
  challenge: Challenge,
  solutionHistory: {
    serviceCard: Card | null;
    supportCards: Card[];
    evaluation: string;
    statusLevel: number;
  }[],
  finalStatusLevel: number
): Promise<FinalEvaluationResult> {
  try {
    // 解決策の履歴を整形
    const historyText = solutionHistory.map((solution, index) => {
      const turnNumber = index + 1;
      const serviceText = solution.serviceCard
        ? `- サービスカード: ${solution.serviceCard.name}（コスト: ${solution.serviceCard.cost}）`
        : `- サービスカード: なし`;

      const supportsText = solution.supportCards.length > 0
        ? `- サポートカード: ${solution.supportCards.map(card => card.name).join(', ')}`
        : `- サポートカード: なし`;

      return `### ターン${turnNumber}\n${serviceText}\n${supportsText}\n- 評価結果: 状況レベル ${solution.statusLevel}/100`;
    }).join('\n\n');

    // プロンプトを作成
    const prompt = FINAL_EVALUATION_PROMPT
      .replace('{challenge}', `${challenge.title}\n${challenge.description}`)
      .replace('{budget}', `${challenge.budgetCost}`)
      .replace('{solutionHistory}', historyText)
      .replace('{finalStatus}', `最終的な状況レベル: ${finalStatusLevel}/100`);

    // Bedrockモデルを呼び出す
    const modelId = process.env.NEXT_PUBLIC_BEDROCK_MODEL_ID || "anthropic.claude-3-haiku-20240307-v1:0";

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
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : Math.round(finalStatusLevel * 0.8); // デフォルト値

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

// Bedrockモデルのレスポンスをストリーミングで取得する
export async function* streamModelResponse(
  prompt: string,
  maxTokens = 1000
): AsyncGenerator<string> {
  const modelId =
    process.env.NEXT_PUBLIC_BEDROCK_MODEL_ID ||
    "anthropic.claude-3-sonnet-20240229-v1:0";

  const command = new InvokeModelWithResponseStreamCommand({
    modelId,
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: maxTokens,
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const response = await bedrockClient.send(command);
  const decoder = new TextDecoder();

  for await (const event of response.body) {
    const bytes = event.chunk?.bytes;
    if (!bytes) continue;
    const json = JSON.parse(decoder.decode(bytes));
    const text = json.delta?.text || json.content_block?.text;
    if (text) {
      yield text as string;
    }
  }
}
