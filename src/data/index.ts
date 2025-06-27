/**
 * データエクスポートファイル
 * アプリケーション全体で使用するデータをエクスポートします
 */

import { Card } from '../lib/types';
import { allServiceCards } from './serviceCards';
import { allSupportCards } from './supportCards';
import { challenges } from './challenges';
import { ec2ManagementCards } from './ec2ManagementCards';
import { ec2ManagementChallenges } from './ec2ManagementChallenges';

// Re-export for convenience
export { allServiceCards } from './serviceCards';
export { allSupportCards } from './supportCards';

// All cards combined
export const allCards: Card[] = [
  ...allServiceCards,
  ...allSupportCards
];

// Export challenges
export { challenges };
export { ec2ManagementCards, ec2ManagementChallenges };
