'use client';

/**
 * 結果ページコンポーネント
 * ゲーム終了後の結果を表示します
 */

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';
  const [showConfetti, setShowConfetti] = useState(true);
  
  // スコアに応じたメッセージを取得
  const getMessage = (score: number) => {
    if (score >= 90) return 'すばらしい！あなたはAWSマスターです！';
    if (score >= 70) return '素晴らしい結果です！AWSの知識が豊富ですね。';
    if (score >= 50) return '良い結果です。さらなる学習で改善できるでしょう。';
    return 'もう少し学習が必要かもしれません。次回に期待しています！';
  };
  
  // スコアに応じた色を取得
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-blue-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  // スコアを取得
  useEffect(() => {
    // セッションストレージから評価データを取得
    const storedData = sessionStorage.getItem('evaluationData');
    
    if (storedData) {
      const data = JSON.parse(storedData);
      const finalScore = data.finalEvaluation.score;
      
      // URLパラメータがない場合はセッションストレージのスコアを使用
      if (!searchParams.get('score')) {
        router.replace(`/results?score=${finalScore}`);
      }
    }
    
    // 5秒後に紙吹雪を非表示にする
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [router, searchParams]);
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-card p-8 max-w-2xl w-full text-center relative overflow-hidden border border-gray-200">
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="confetti-container">
              {Array.from({ length: 100 }).map((_, i) => (
                <div 
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    backgroundColor: ['#FF9900', '#232F3E', '#67ADDB', '#FFCC66', '#545B64'][Math.floor(Math.random() * 5)]
                  }}
                />
              ))}
            </div>
          </div>
        )}
        
        <h1 className="text-3xl font-bold text-aws-blue mb-6">ゲーム結果</h1>
        
        <div className="mb-8">
          <p className="text-xl mb-4 text-gray-700">あなたのスコア:</p>
          <p className={`text-6xl font-bold ${getScoreColor(parseInt(score))}`}>
            {score}
          </p>
          <p className="text-xl mt-4 text-gray-700">{getMessage(parseInt(score))}</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Link href="/" className="btn btn-primary px-8 py-3 text-lg block">
            トップページに戻る
          </Link>
          <button
            onClick={() => router.push('/game/modes')}
            className="btn btn-secondary px-8 py-3 text-lg block w-full"
          >
            もう一度プレイする
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">読み込み中...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
