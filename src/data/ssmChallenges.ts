import { Challenge } from '../lib/types';

export const ssmChallenges: Challenge[] = [
  {
    id: 201,
    title: 'インスタンスのパッチ適用自動化',
    description: '多数のEC2インスタンスに対してセキュリティパッチを自動で適用したいと考えています。',
    budgetCost: 3,
    difficulty: 'easy',
    keywords: ['パッチ管理', '自動化', 'セキュリティ']
  },
  {
    id: 202,
    title: '安全なリモートアクセスの実現',
    description: 'SSHポートを開放せずにインスタンスへ安全にアクセスする仕組みを構築したいと考えています。',
    budgetCost: 2,
    difficulty: 'easy',
    keywords: ['リモートアクセス', 'セキュリティ', '運用']
  },
  {
    id: 203,
    title: '構成情報の一元管理',
    description: 'アプリケーションの設定値を環境ごとに管理し、変更履歴を追跡できるようにしたいと考えています。',
    budgetCost: 2,
    difficulty: 'medium',
    keywords: ['設定管理', 'シークレット', '運用']
  },
  {
    id: 204,
    title: '運用タスクの自動化',
    description: '定期的に実施するインスタンス設定変更を自動化し、作業ミスをなくしたいと考えています。',
    budgetCost: 3,
    difficulty: 'medium',
    keywords: ['自動化', '運用', 'タスク']
  },
  {
    id: 205,
    title: 'インシデント対応の効率化',
    description: 'システム障害発生時に情報を集約し、迅速に対処できるようにしたいと考えています。',
    budgetCost: 3,
    difficulty: 'medium',
    keywords: ['インシデント', '運用', '通知']
  }
];
