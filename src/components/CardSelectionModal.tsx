'use client';

import React from 'react';
import { Card as CardType } from '../lib/types';
import Card from './Card';

interface CardSelectionModalProps {
  cards: CardType[];
  onSelect: (card: CardType) => void;
  onClose: () => void;
}

const CardSelectionModal: React.FC<CardSelectionModalProps> = ({ cards, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-aws-blue">次のターンで引くカードを選択</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {cards.map(card => (
            <div key={card.id} className="cursor-pointer" onClick={() => onSelect(card)}>
              <Card card={card} />
            </div>
          ))}
        </div>
        <div className="text-right">
          <button className="btn btn-secondary" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  );
};

export default CardSelectionModal;
