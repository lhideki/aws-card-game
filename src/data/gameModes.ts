import { serviceCards } from './cards';
import { serviceCards2 } from './cards2';
import { serviceCards3 } from './cards3';
import { serviceCards4 } from './cards4';
import { serviceCards5 } from './cards5';
import { serviceCards6 } from './cards6';
import { serviceCards7 } from './cards7';
import { supportCards } from './supportCards';
import { challenges } from './challenges';
import { ec2ManagementCards } from './ec2ManagementCards';
import { ec2ManagementChallenges } from './ec2ManagementChallenges';
import { Card, Challenge } from '../lib/types';

// Combine all service cards locally to avoid circular dependency
const allServiceCards: Card[] = [
  ...serviceCards,
  ...serviceCards2,
  ...serviceCards3,
  ...serviceCards4,
  ...serviceCards5,
  ...serviceCards6,
  ...serviceCards7
];

const allSupportCards: Card[] = [
  ...supportCards
];

export interface GameModeConfig {
  id: string;
  title: string;
  description: string;
  serviceCards: Card[];
  supportCards: Card[];
  challenges: Challenge[];
}

export const gameModes: Record<string, GameModeConfig> = {
  general: {
    id: 'general',
    title: 'AWSサービス全般',
    description:
      '既存のゲームモードです。サービスカードはAWSサービスを表現し、課題も一般的な課題から選択されます。',
    serviceCards: allServiceCards,
    supportCards: allSupportCards,
    challenges
  },
  ec2: {
    id: 'ec2',
    title: 'EC2管理',
    description:
      'AWS Systems ManagerなどのEC2管理に関する専用のゲームモードです。サービスカードはAWS Systems ManagerやCloudWatchなどのEC2管理で使用されるサービスの機能を表現したものになります。課題もEC2管理に関する課題に限定されます。',
    serviceCards: ec2ManagementCards,
    supportCards: allSupportCards,
    challenges: ec2ManagementChallenges
  }
};

export type GameMode = keyof typeof gameModes;
