'use client';

/**
 * カードコンポーネント
 * サービスカードまたはサポートカードを表示します
 */

import React from 'react';
import { Card as CardType } from '../lib/types';

interface CardProps {
  card: CardType;
  isSelected?: boolean;
  isActivated?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  card,
  isSelected = false,
  isActivated = false,
  onClick
}) => {
  // カードタイプに応じたスタイルを設定
  const cardTypeStyles = {
    service: {
      header: 'bg-aws-blue',
      border: isSelected ? 'border-aws-orange border-2' : 'border-gray-200',
    },
    support: {
      header: 'bg-aws-light-blue',
      border: isActivated ? 'border-aws-orange border-2' : 'border-gray-200',
    }
  };
  
  const style = cardTypeStyles[card.type];

  const animationClass = (isSelected || isActivated) ? 'animate-card-select' : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-card overflow-hidden ${style.border} hover:shadow-card-hover transition-all duration-200 cursor-pointer ${animationClass}`}
      onClick={onClick}
      style={{ minHeight: '200px' }}
    >
      <div className={`${style.header} p-3 flex justify-between items-center`}>
        <h3 className="text-white font-bold truncate" title={card.name}>{card.name}</h3>
        <span className="bg-white text-aws-blue text-xs font-bold px-2 py-1 rounded-full">
          コスト: {card.cost}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-700 mb-2 line-clamp-2" title={card.effect}>{card.effect}</p>
        <p className="text-xs text-gray-600 line-clamp-2" title={card.description}>{card.description}</p>
        
        {card.category && (
          <div className="mt-2">
            <span className="bg-aws-gray text-aws-dark-gray text-xs px-2 py-1 rounded-full">
              {card.category}
            </span>
          </div>
        )}
        
        <div className="mt-2 flex flex-wrap gap-1">
          {card.keywords.slice(0, 3).map((keyword, index) => (
            <span 
              key={index} 
              className="bg-aws-gray text-aws-dark-gray text-xs px-1 py-0.5 rounded-full"
            >
              #{keyword}
            </span>
          ))}
          {card.keywords.length > 3 && (
            <span className="text-xs text-gray-500">+{card.keywords.length - 3}</span>
          )}
        </div>
      </div>
      
      {(isSelected || isActivated) && (
        <div className="absolute top-0 right-0 bg-aws-orange text-white rounded-bl-lg px-2 py-1 text-xs font-bold">
          {card.type === 'service' ? '選択中' : '有効化'}
        </div>
      )}
    </div>
  );
};

export default Card;
