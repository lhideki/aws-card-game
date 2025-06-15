'use client';

/**
 * 手札コンポーネント
 * プレイヤーの手札を表示します
 */

import React, { useState } from 'react';
import { Card as CardType } from '../lib/types';
import Card from './Card';

interface HandProps {
  serviceCards: CardType[];
  supportCards: CardType[];
  onServiceCardSelect: (card: CardType) => void;
  onSupportCardToggle: (card: CardType) => void;
  onDiscardCards: (cards: CardType[]) => void;
  selectedServiceCards: CardType[];
  activatedSupportCards: CardType[];
  maxServiceCards: number;
  maxCost: number;
  currentCost: number;
}

const Hand: React.FC<HandProps> = ({ 
  serviceCards, 
  supportCards,
  onServiceCardSelect,
  onSupportCardToggle,
  onDiscardCards,
  selectedServiceCards,
  activatedSupportCards,
  maxServiceCards,
  maxCost,
  currentCost
}) => {
  const [cardsToDiscard, setCardsToDiscard] = useState<CardType[]>([]);
  const [isDiscardMode, setIsDiscardMode] = useState(false);
  
  // カードを捨てるモードの切り替え
  const toggleDiscardMode = () => {
    setIsDiscardMode(!isDiscardMode);
    setCardsToDiscard([]);
  };
  
  // 捨てるカードの選択/解除
  const toggleCardToDiscard = (card: CardType) => {
    if (cardsToDiscard.some(c => c.id === card.id)) {
      setCardsToDiscard(cardsToDiscard.filter(c => c.id !== card.id));
    } else {
      setCardsToDiscard([...cardsToDiscard, card]);
    }
  };
  
  // 選択したカードを捨てる
  const handleDiscardCards = () => {
    onDiscardCards(cardsToDiscard);
    setCardsToDiscard([]);
    setIsDiscardMode(false);
  };
  
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3 bg-white p-4 rounded-lg shadow-card border border-gray-200">
        <h2 className="text-xl font-bold text-aws-blue">手札</h2>
        <div className="flex space-x-2">
          {isDiscardMode ? (
            <>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDiscardCards}
                disabled={cardsToDiscard.length === 0}
              >
                {cardsToDiscard.length}枚のカードを捨てる
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-colors"
                onClick={toggleDiscardMode}
              >
                キャンセル
              </button>
            </>
          ) : (
            <button
              className="bg-aws-light-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-colors"
              onClick={toggleDiscardMode}
            >
              カードを捨てる
            </button>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-aws-blue bg-white p-2 rounded-t-lg border border-gray-200 border-b-0">サービスカード ({serviceCards.length}枚)</h3>
          {serviceCards.length === 0 ? (
            <div className="bg-white rounded-b-lg p-6 text-center text-gray-400 border border-gray-200">
              手札にサービスカードがありません
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded-b-lg border border-gray-200">
              {serviceCards.map(card => (
                <div key={card.id} className="relative">
                  <Card 
                    card={card} 
                    onClick={() => isDiscardMode ? toggleCardToDiscard(card) : onServiceCardSelect(card)}
                  />
                  {isDiscardMode && cardsToDiscard.some(c => c.id === card.id) && (
                    <div className="absolute inset-0 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                        捨てる
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {!isDiscardMode && selectedServiceCards.length >= maxServiceCards && (
            <div className="mt-2 text-amber-600 text-sm bg-amber-50 p-2 rounded-lg border border-amber-200">
              最大{maxServiceCards}枚のサービスカードを選択できます。
            </div>
          )}
          
          {!isDiscardMode && currentCost > maxCost && (
            <div className="mt-2 text-red-500 text-sm bg-red-50 p-2 rounded-lg border border-red-200">
              コストが予算を超えています。評価が低くなる可能性があります。
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-aws-light-blue bg-white p-2 rounded-t-lg border border-gray-200 border-b-0">サポートカード ({supportCards.length}枚)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-b-lg border border-gray-200">
            {supportCards.map(card => (
              <div key={card.id} className="relative">
                <Card 
                  card={card} 
                  isActivated={activatedSupportCards.some(c => c.id === card.id)}
                  onClick={() => !isDiscardMode && onSupportCardToggle(card)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hand;
