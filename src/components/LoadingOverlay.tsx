'use client';

import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps {
  text?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ text = '回答を生成中...' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <LoadingSpinner size="lg" />
        <p className="mt-2 text-aws-blue font-semibold animate-pulse">{text}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
