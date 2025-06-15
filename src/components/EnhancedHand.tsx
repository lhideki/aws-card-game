'use client';

/**
 * 強化された手札コンポーネント
 * カテゴリ別タブ表示、カード情報の階層化、インタラクティブな選択UIを実装
 */

import React, { useState, useEffect } from 'react';
import { Card as CardType } from '../lib/types';
import Card from './Card';

interface EnhancedHandProps {
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
  challenge?: any; // 課題情報
}

const EnhancedHand: React.FC<EnhancedHandProps> = ({ 
  serviceCards, 
  supportCards,
  onServiceCardSelect,
  onSupportCardToggle,
  onDiscardCards,
  selectedServiceCards,
  activatedSupportCards,
  maxServiceCards,
  maxCost,
  currentCost,
  challenge
}) => {
  // 状態管理
  const [cardsToDiscard, setCardsToDiscard] = useState<CardType[]>([]);
  const [isDiscardMode, setIsDiscardMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    service: true,
    support: true
  });
  const [activeCategory, setActiveCategory] = useState<string>('すべて');
  const [hoveredCard, setHoveredCard] = useState<CardType | null>(null);

  // カードのカテゴリを抽出
  const categories = ['すべて', ...Array.from(new Set(serviceCards.map(card => card.category || '未分類')))];

  // カードをフィルタリング
  const filteredServiceCards = serviceCards.filter(card => {
    // カテゴリフィルターのみ適用
    return activeCategory === 'すべて' || card.category === activeCategory;
  });

  // 並び替えなしでカードを表示
  const sortedServiceCards = [...filteredServiceCards];

  // セクションの展開/折りたたみを切り替え
  const toggleSection = (section: 'service' | 'support') => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

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

  // 相性の良いカードを取得
  const getSynergyCards = (card: CardType): CardType[] => {
    // カードの効果や説明文からキーワードを抽出して関連するカードを見つける
    // 実際の実装ではより複雑なロジックになる可能性がある
    return serviceCards.filter(c => 
      c.id !== card.id && 
      c.keywords.some(keyword => card.keywords.includes(keyword))
    ).slice(0, 3); // 最大3枚まで表示
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
      
      {/* フィルターとソートオプションを削除 */}
      
      <div className="space-y-6">
        {/* サービスカードセクション */}
        <div>
          <div 
            className="flex justify-between items-center text-lg font-semibold mb-2 text-aws-blue bg-white p-3 rounded-t-lg border border-gray-200 border-b-0 cursor-pointer"
            onClick={() => toggleSection('service')}
          >
            <h3>サービスカード ({serviceCards.length}枚)</h3>
            <span className="transform transition-transform">
              {expandedSections.service ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.service && (
            <>
              {/* カテゴリタブ */}
              <div className="flex overflow-x-auto bg-white border-l border-r border-gray-200 py-2 px-1 space-x-1">
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
                      activeCategory === category 
                        ? 'bg-aws-blue text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {sortedServiceCards.length === 0 ? (
                <div className="bg-white rounded-b-lg p-6 text-center text-gray-400 border border-gray-200">
                  条件に一致するカードがありません
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-white p-4 rounded-b-lg border border-gray-200 border-t-0">
                  {sortedServiceCards.map(card => (
                    <div key={card.id} className="relative">
                      <div 
                        className="card-wrapper transition-all"
                        onMouseEnter={() => setHoveredCard(card)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
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
                    </div>
                  ))}
                </div>
              )}
            </>
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
        
        {/* サポートカードセクション */}
        <div>
          <div 
            className="flex justify-between items-center text-lg font-semibold mb-2 text-aws-light-blue bg-white p-3 rounded-t-lg border border-gray-200 border-b-0 cursor-pointer"
            onClick={() => toggleSection('support')}
          >
            <h3>サポートカード ({supportCards.length}枚)</h3>
            <span className="transform transition-transform">
              {expandedSections.support ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.support && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4 rounded-b-lg border border-gray-200">
              {supportCards.map(card => (
                <div key={card.id} className="relative">
                  <div 
                    className="card-wrapper transition-all"
                    onMouseEnter={() => setHoveredCard(card)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card 
                      card={card} 
                      isActivated={activatedSupportCards.some(c => c.id === card.id)}
                      onClick={() => !isDiscardMode && onSupportCardToggle(card)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* カード詳細パネル */}
      {hoveredCard && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
          <h3 className="text-lg font-bold text-aws-blue">{hoveredCard.name}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="bg-aws-gray text-gray-700 px-2 py-1 rounded-md text-sm">
              コスト: {hoveredCard.cost}
            </span>
            {hoveredCard.category && (
              <span className="bg-aws-light-blue bg-opacity-10 text-aws-blue px-2 py-1 rounded-md text-sm">
                {hoveredCard.category}
              </span>
            )}
          </div>
          <div className="mt-2 text-sm">
            <p className="font-semibold text-gray-700">効果:</p>
            <p className="text-gray-600">{hoveredCard.effect}</p>
          </div>
          <div className="mt-2 text-sm">
            <p className="font-semibold text-gray-700">説明:</p>
            <p className="text-gray-600">{hoveredCard.description}</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-sm text-gray-700">キーワード:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {hoveredCard.keywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedHand;
