/**
 * データエクスポートファイル
 * アプリケーション全体で使用するデータをエクスポートします
 */

import { Card } from '../lib/types';
import { serviceCards } from './cards';
import { serviceCards2 } from './cards2';
import { serviceCards3 } from './cards3';
import { serviceCards4 } from './cards4';
import { serviceCards5 } from './cards5';
import { serviceCards6 } from './cards6';
import { serviceCards7 } from './cards7';
import { supportCards } from './supportCards';
import { supportCards2 } from './supportCards2';
import { challenges } from './challenges';
import { ec2ManagementCards } from './ec2ManagementCards';
import { ec2ManagementChallenges } from './ec2ManagementChallenges';

// Combine all service cards
export const allServiceCards: Card[] = [
  ...serviceCards,
  ...serviceCards2,
  ...serviceCards3,
  ...serviceCards4,
  ...serviceCards5,
  ...serviceCards6,
  ...serviceCards7
];

// Combine all support cards
export const allSupportCards: Card[] = [
  ...supportCards
];

// All cards combined
export const allCards: Card[] = [
  ...allServiceCards,
  ...allSupportCards
];

// Export challenges
export { challenges };
export { ec2ManagementCards, ec2ManagementChallenges };
