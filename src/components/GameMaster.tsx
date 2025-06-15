'use client';

/**
 * ゲームマスターコンポーネント
 * ゲームマスターのメッセージを表示し、タイピングアニメーションを提供します
 */

import React, { useState, useEffect, useRef } from 'react';

interface GameMasterProps {
  message: string;
  isLoading?: boolean;
  typingSpeed?: number; // タイピング速度（ミリ秒）
}

const GameMaster: React.FC<GameMasterProps> = ({ 
  message, 
  isLoading = false, 
  typingSpeed = 30 // デフォルトは30ミリ秒ごとに1文字
}) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const previousMessageRef = useRef('');
  
  useEffect(() => {
    // メッセージが変更された場合
    if (message !== previousMessageRef.current && !isLoading) {
      // 新しいメッセージの場合は表示をリセット
      setDisplayedMessage(''); // 初期化
      setIsTyping(true);
      
      let index = 0;
      // 最初の2文字を即座に表示（欠けるのを防ぐため）
      if (message.length > 0) {
        setDisplayedMessage(message.substring(0, Math.min(2, message.length)));
        index = Math.min(2, message.length);
      }
      
      const timer = setInterval(() => {
        if (index < message.length) {
          setDisplayedMessage(prev => prev + message.charAt(index));
          index++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      // クリーンアップ関数
      return () => clearInterval(timer);
    }
    
    // 現在のメッセージを記録
    previousMessageRef.current = message;
  }, [message, isLoading, typingSpeed]);

  // SSRでの初期表示用
  if (typeof window === 'undefined') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-aws-orange/30">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-aws-orange flex items-center justify-center">
              <span className="text-white text-xl font-bold">GM</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-aws-orange mb-2">ゲームマスター</h3>
            <div className="text-gray-200 whitespace-pre-line">
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-aws-orange/30">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-aws-orange flex items-center justify-center">
            <span className="text-white text-xl font-bold">GM</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-aws-orange mb-2">ゲームマスター</h3>
          
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-pulse text-gray-300">考え中...</div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-aws-orange rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-aws-orange rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-aws-orange rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          ) : (
            <div className="text-gray-200 whitespace-pre-line">
              {displayedMessage}
              {isTyping && (
                <span className="inline-block w-2 h-4 ml-1 bg-aws-orange animate-blink"></span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameMaster;
