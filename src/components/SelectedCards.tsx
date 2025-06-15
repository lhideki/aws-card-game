'use client';

/**
 * 選択されたカードコンポーネント
 * プレイヤーが選択したカードを表示します
 */

import React from 'react';
import { Card as CardType } from '../lib/types';
import Card from './Card';

interface SelectedCardsProps {
  serviceCards: CardType[];
  activatedSupportCards: CardType[];
  onServiceCardRemove: (card: CardType) => void;
  onSupportCardDeactivate: (card: CardType) => void;
  totalCost: number;
  budgetCost: number;
  totalCostUsed: number;
}

const SelectedCards: React.FC<SelectedCardsProps> = ({ 
  serviceCards, 
  activatedSupportCards,
  onServiceCardRemove,
  onSupportCardDeactivate,
  totalCost,
  budgetCost,
  totalCostUsed
}) => {
  // 現在のターンのコストと、これまでの累積コストを合計
  const projectedTotalCost = totalCostUsed + totalCost;
  const isOverBudget = projectedTotalCost > budgetCost;
  
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3 bg-white p-4 rounded-lg shadow-card border border-gray-200">
        <h2 className="text-xl font-bold text-aws-blue">選択したカード</h2>
        <div className="flex items-center">
          <span className="mr-2 text-gray-700">総コスト:</span>
          <span className={`font-bold text-lg ${isOverBudget ? 'text-red-500' : 'text-green-500'}`}>
            {projectedTotalCost} / {budgetCost}
          </span>
          <span className="ml-4 text-sm text-gray-500">
            (今回: {totalCost} + これまで: {totalCostUsed})
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-aws-blue bg-white p-2 rounded-t-lg border border-gray-200 border-b-0">サービスカード</h3>
          {serviceCards.length === 0 ? (
            <div className="bg-white rounded-b-lg p-6 text-center text-gray-400 border border-gray-200 border-dashed">
              サービスカードを選択してください
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-b-lg border border-gray-200">
              {serviceCards.map(card => (
                <div key={card.id} className="relative">
                  <Card card={card} isSelected={true} />
                  <button 
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                    onClick={() => onServiceCardRemove(card)}
                    aria-label="サービスカードを削除"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-aws-light-blue bg-white p-2 rounded-t-lg border border-gray-200 border-b-0">有効化したサポートカード</h3>
          {activatedSupportCards.length === 0 ? (
            <div className="bg-white rounded-b-lg p-6 text-center text-gray-400 border border-gray-200 border-dashed">
              サポートカードを有効化できます
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-b-lg border border-gray-200">
              {activatedSupportCards.map(card => (
                <div key={card.id} className="relative">
                  <Card card={card} isActivated={true} />
                  <button 
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                    onClick={() => onSupportCardDeactivate(card)}
                    aria-label="サポートカードを無効化"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {isOverBudget && (
        <div className="mt-2 text-red-500 text-sm bg-red-50 p-2 rounded-lg border border-red-200">
          予算を超過しています。評価が低くなる可能性があります。
        </div>
      )}
    </div>
  );
};

export default SelectedCards;
