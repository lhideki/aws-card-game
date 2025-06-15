import { NextRequest, NextResponse } from 'next/server';
import { evaluateTurnServer, evaluateSkipServer, evaluateFinalSolutionServer } from '@/lib/serverActions';
import { Card, Challenge, TurnHistory } from '@/lib/types';

/**
 * 評価APIのエンドポイント
 * クライアントからの評価リクエストを処理します
 * 
 * @param request APIリクエスト
 * @returns APIレスポンス
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      action, 
      challenge, 
      serviceCards, 
      supportCards, 
      currentStatus, 
      currentStatusLevel, 
      solutionHistory, 
      finalStatusLevel,
      totalCostUsed,
      budgetCost
    } = body;

    let result;

    switch (action) {
      case 'evaluateTurn':
        result = await evaluateTurnServer(
          challenge as Challenge,
          serviceCards as Card[],
          supportCards as Card[],
          currentStatus as string,
          currentStatusLevel as number
        );
        break;
      
      case 'evaluateSkip':
        result = await evaluateSkipServer(
          challenge as Challenge,
          currentStatus as string,
          currentStatusLevel as number
        );
        break;
      
      case 'evaluateFinal':
        result = await evaluateFinalSolutionServer(
          challenge as Challenge,
          solutionHistory as TurnHistory[],
          finalStatusLevel as number,
          totalCostUsed as number,
          budgetCost as number
        );
        break;
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
