'use client';

/**
 * トップページコンポーネント
 * ゲームの紹介とスタートボタンを表示します
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-aws-blue mb-4">
            AWS <span className="text-aws-orange">カードゲーム</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            AWSのサービスを使って課題を解決するカードゲームです。
            ゲームマスターが提示した課題に対し、手札からカードを選んで解決策を提出しましょう。
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white p-6 rounded-lg shadow-card border border-gray-200">
            <h2 className="text-2xl font-bold text-aws-blue mb-4">ゲームの特徴</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-aws-orange font-bold mr-2">•</span>
                <span>AWSの様々なサービスを学べる実践的なカードゲーム</span>
              </li>
              <li className="flex items-start">
                <span className="text-aws-orange font-bold mr-2">•</span>
                <span>ゲームマスターはAmazon Bedrockを使用したAIが担当</span>
              </li>
              <li className="flex items-start">
                <span className="text-aws-orange font-bold mr-2">•</span>
                <span>サービスカードとサポートカードを組み合わせて最適な解決策を提案</span>
              </li>
              <li className="flex items-start">
                <span className="text-aws-orange font-bold mr-2">•</span>
                <span>コスト効率、セキュリティ、運用性など多角的な評価</span>
              </li>
              <li className="flex items-start">
                <span className="text-aws-orange font-bold mr-2">•</span>
                <span>3ターン制で手軽に遊べるゲーム性</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-white rounded-lg shadow-card overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/screenshots/game-screen.png" 
                  alt="ゲーム画面" 
                  width={400} 
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-aws-blue mb-6">ゲームの流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card border border-gray-200">
              <div className="w-16 h-16 bg-aws-light-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-aws-blue mb-2">課題の提示</h3>
              <p className="text-gray-700">ゲームマスターがシステム構成に関する課題と予算を提示します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-gray-200">
              <div className="w-16 h-16 bg-aws-light-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-aws-blue mb-2">カードの選択</h3>
              <p className="text-gray-700">手札からサービスカードを選び、サポートカードを有効化して解決策を提出します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-gray-200">
              <div className="w-16 h-16 bg-aws-light-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-aws-blue mb-2">評価と結果</h3>
              <p className="text-gray-700">3ターン後に最終評価が行われ、解決策の総合スコアが表示されます。</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/game/modes"
            className="btn btn-primary px-12 py-4 text-xl inline-block animate-bounce-slow"
          >
            ゲームを始める
          </Link>
        </div>
      </div>
      
      <footer className="bg-aws-blue text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AWS Card Game. All rights reserved.</p>
          <p className="text-sm mt-2">
            このゲームはAWSの公式製品ではありません。AWSは、Amazon Web Services, Inc.の商標です。
          </p>
        </div>
      </footer>
    </div>
  );
}
