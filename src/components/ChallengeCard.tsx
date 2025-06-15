'use client';

/**
 * チャレンジカードコンポーネント
 * 現在のチャレンジを表示します
 */

import React from 'react';
import { Challenge } from '../lib/types';

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-200 hover:shadow-card-hover transition-shadow duration-300">
      <div className="bg-aws-blue p-4 text-white">
        <h2 className="text-xl font-bold">{challenge.title}</h2>
        <div className="flex items-center mt-2">
          <span className="bg-aws-orange text-white text-xs px-2 py-1 rounded-full mr-2">
            {challenge.difficulty}
          </span>
          <span className="bg-aws-light-blue text-white text-xs px-2 py-1 rounded-full">
            予算: {challenge.budgetCost}
          </span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-700 whitespace-pre-wrap">{challenge.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {challenge.keywords.map((keyword, index) => (
            <span 
              key={index} 
              className="bg-aws-gray text-aws-dark-gray text-xs px-2 py-1 rounded-full"
            >
              #{keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
