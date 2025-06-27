import { NextRequest, NextResponse } from 'next/server';
import { getRandomChallenge } from '@/lib/serverActions';

/**
 * チャレンジAPIのエンドポイント
 * ランダムなチャレンジを取得します
 * 
 * @param request APIリクエスト
 * @returns APIレスポンス
 */
export const dynamic = 'force-dynamic'; // 動的ルートとして明示的に設定

export async function GET(request: NextRequest) {
  try {
    // URLからexcludeパラメータを取得
    const excludeParam = request.nextUrl.searchParams.get('exclude');
    const excludeIds = excludeParam 
      ? excludeParam.split(',').map(id => parseInt(id, 10))
      : [];
    
    const mode = request.nextUrl.searchParams.get('mode') || 'general';
    const challenge = await getRandomChallenge(excludeIds, mode as any);
    return NextResponse.json(challenge);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to get challenge' }, { status: 500 });
  }
}
