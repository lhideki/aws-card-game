'use client';

/**
 * チャレンジ状況コンポーネント
 * 現在のチャレンジの状況を表示します
 */

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface ChallengeStatusProps {
  status: string;
  statusLevel: number;
  typingSpeed?: number;
}

const ChallengeStatus: React.FC<ChallengeStatusProps> = ({ 
  status, 
  statusLevel,
  typingSpeed = 30
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // ステータスレベルに応じた色を取得
  const getStatusColor = () => {
    if (statusLevel >= 80) return 'bg-green-500';
    if (statusLevel >= 60) return 'bg-blue-500';
    if (statusLevel >= 40) return 'bg-yellow-500';
    if (statusLevel >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };
  
  // タイピングアニメーション
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText(status.substring(0, 2)); // 最初の2文字を即時表示
    
    let i = 2;
    const typingInterval = setInterval(() => {
      if (i < status.length) {
        setDisplayedText(status.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [status, typingSpeed]);
  
  return (
    <div className="mt-4 bg-white rounded-lg shadow-card border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-aws-blue">課題の状況</h3>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium text-gray-700">進捗:</span>
          <div className="w-32 bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${getStatusColor()}`} 
              style={{ width: `${statusLevel}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{statusLevel}%</span>
        </div>
      </div>
      
      <div className="prose prose-sm max-w-none text-gray-700">
        <ReactMarkdown>{displayedText}</ReactMarkdown>
      </div>
      
      {isTyping && (
        <span className="inline-block w-2 h-4 bg-gray-500 ml-1 animate-pulse"></span>
      )}
    </div>
  );
};

export default ChallengeStatus;
