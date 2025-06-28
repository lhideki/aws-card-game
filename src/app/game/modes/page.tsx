'use client'

import React from 'react';
import Link from 'next/link';
import { gameModes } from '../../../data/gameModes';

export default function GameModeSelection() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-aws-blue mb-8">
          ゲームモードを選択
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(gameModes).map(mode => (
            <div
              key={mode.id}
              className="bg-white rounded-lg shadow-card border border-gray-200 p-6 flex flex-col hover:shadow-card-hover transition-shadow"
            >
              <h2 className="text-2xl font-bold text-aws-blue mb-2">{mode.title}</h2>
              <p className="text-gray-700 flex-grow whitespace-pre-wrap mb-4">
                {mode.description}
              </p>
              <Link href={`/game?mode=${mode.id}`} className="btn btn-primary mt-auto">
                このモードで開始
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
