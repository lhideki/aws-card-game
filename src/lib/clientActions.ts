'use client';

/**
 * クライアントサイドで実行されるアクション
 * サーバーAPIを呼び出すためのクライアント関数を提供します
 */

import { Card, Challenge, EvaluationResult, FinalEvaluationResult, TurnHistory } from "./types";

/**
 * ターン毎の評価を行うAPI呼び出し
 */
export async function evaluateTurn(
  challenge: Challenge,
  serviceCards: Card[],
  supportCards: Card[],
  currentStatus: string,
  currentStatusLevel: number
): Promise<EvaluationResult> {
  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'evaluateTurn',
        challenge,
        serviceCards,
        supportCards,
        currentStatus,
        currentStatusLevel
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    return {
      message: "申し訳ありません。評価中にエラーが発生しました。別の解決策を試してみてください。",
      statusLevel: currentStatusLevel
    };
  }
}

/**
 * ターンスキップ時の評価を行うAPI呼び出し
 */
export async function evaluateSkip(
  challenge: Challenge,
  currentStatus: string,
  currentStatusLevel: number
): Promise<EvaluationResult> {
  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'evaluateSkip',
        challenge,
        currentStatus,
        currentStatusLevel
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    return {
      message: "申し訳ありません。ターンのスキップ中にエラーが発生しました。",
      statusLevel: Math.max(0, currentStatusLevel - 10)
    };
  }
}

/**
 * 最終評価を行うAPI呼び出し
 */
export async function evaluateFinalSolution(
  challenge: Challenge,
  solutionHistory: TurnHistory[],
  finalStatusLevel: number,
  totalCostUsed: number = 0
): Promise<FinalEvaluationResult> {
  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'evaluateFinal',
        challenge,
        solutionHistory,
        finalStatusLevel,
        totalCostUsed,
        budgetCost: challenge.budgetCost
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    return {
      message: "申し訳ありません。最終評価中にエラーが発生しました。",
      score: Math.round(finalStatusLevel * 0.7)
    };
  }
}

/**
 * ランダムなチャレンジを取得するAPI呼び出し
 */
export async function getChallenge(
  excludeIds: number[] = [],
  mode: 'default' | 'ssm' = 'default'
): Promise<Challenge> {
  try {
    const params = new URLSearchParams();
    if (excludeIds.length > 0) params.append('exclude', excludeIds.join(','));
    if (mode) params.append('mode', mode);

    const query = params.toString() ? `?${params.toString()}` : '';

    const response = await fetch(`/api/challenge${query}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
}
