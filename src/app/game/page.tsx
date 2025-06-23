'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function GameModeSelect() {
  const router = useRouter();

  const handleSelect = (mode: string) => {
    router.push(`/game/play?mode=${mode}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold text-aws-blue mb-4">ゲームモードを選択</h1>
      <button
        className="btn btn-primary px-8 py-3"
        onClick={() => handleSelect('default')}
      >
        AWSサービス全般
      </button>
      <button
        className="btn btn-secondary px-8 py-3"
        onClick={() => handleSelect('ssm')}
      >
        Systems Manager専用
      </button>
    </div>
  );
}
