import { Card } from '../lib/types';

export const ssmServiceCards: Card[] = [
  {
    id: 71,
    name: 'Parameter Store',
    type: 'service',
    cost: 1,
    effect: 'アプリケーション設定やシークレットを安全に管理します。',
    description: '安全な階層型ストレージで設定データやシークレットを集中管理します。',
    category: 'Systems Manager',
    keywords: ['設定管理', 'シークレット', '自動化']
  },
  {
    id: 72,
    name: 'Session Manager',
    type: 'service',
    cost: 2,
    effect: 'インスタンスへ安全にリモートアクセスできます。',
    description: 'SSH不要でブラウザやCLIから安全にEC2インスタンスへアクセスします。',
    category: 'Systems Manager',
    keywords: ['リモートアクセス', 'セキュリティ', '運用']
  },
  {
    id: 73,
    name: 'Automation',
    type: 'service',
    cost: 2,
    effect: '定型的な運用タスクを自動化します。',
    description: 'AWSリソースに対するオペレーションを自動化し、ミスを減らします。',
    category: 'Systems Manager',
    keywords: ['自動化', '運用', 'タスク']
  },
  {
    id: 74,
    name: 'Run Command',
    type: 'service',
    cost: 1,
    effect: '複数インスタンスへ一括でコマンドを実行します。',
    description: 'エージェントを通じてインスタンスへコマンドを配信し、結果を収集します。',
    category: 'Systems Manager',
    keywords: ['自動化', '運用', 'インスタンス']
  },
  {
    id: 75,
    name: 'Patch Manager',
    type: 'service',
    cost: 2,
    effect: 'OSやソフトウェアのパッチ適用を自動化します。',
    description: 'WindowsおよびLinuxインスタンスのパッチ適用をスケジュールして実行します。',
    category: 'Systems Manager',
    keywords: ['パッチ管理', '自動化', 'セキュリティ']
  },
  {
    id: 76,
    name: 'State Manager',
    type: 'service',
    cost: 1,
    effect: 'インスタンスの望ましい状態を維持します。',
    description: '構成を定義し、定期的に適用することでリソースの状態を自動で保ちます。',
    category: 'Systems Manager',
    keywords: ['構成管理', '自動化', '運用']
  },
  {
    id: 77,
    name: 'OpsCenter',
    type: 'service',
    cost: 1,
    effect: 'インシデントを集中管理し、解決を支援します。',
    description: '運用イベントやアラームを一元管理し、トラブルシューティングを容易にします。',
    category: 'Systems Manager',
    keywords: ['運用', 'インシデント', '通知']
  },
  {
    id: 78,
    name: 'Distributor',
    type: 'service',
    cost: 1,
    effect: 'ソフトウェアの配布とバージョン管理を行います。',
    description: 'エージェントを通じてインスタンスにアプリケーションやパッチを配布します。',
    category: 'Systems Manager',
    keywords: ['配布', 'ソフトウェア', '運用']
  }
];
