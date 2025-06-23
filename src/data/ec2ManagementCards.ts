import { Card } from '../lib/types';

export const ec2ManagementCards: Card[] = [
  {
    id: 201,
    name: 'パッチマネージャ',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスへ自動でパッチを適用します。',
    description:
      'AWS Systems Manager Patch Manager を利用し、定期的なパッチ適用を自動化してセキュリティを向上させます。',
    category: '管理とガバナンス',
    keywords: ['パッチ管理', '自動化', '運用', 'EC2']
  },
  {
    id: 202,
    name: 'メトリクス監視とアラーム',
    type: 'service',
    cost: 1,
    effect: 'インスタンスのメトリクスを収集し、条件を満たすと通知します。',
    description:
      'Amazon CloudWatch を使って CPU 使用率などを監視し、しきい値超過時にアラームを送信します。',
    category: '管理とガバナンス',
    keywords: ['モニタリング', 'アラーム', '通知', 'EC2']
  },
  {
    id: 203,
    name: '操作ログトレイル',
    type: 'service',
    cost: 0,
    effect: 'API 操作の履歴を保存し、監査を容易にします。',
    description:
      'AWS CloudTrail で取得したログを CloudWatch Logs に送信し、操作履歴を集中管理します。',
    category: '管理とガバナンス',
    keywords: ['ログ', '監査', 'セキュリティ', 'EC2']
  },
  {
    id: 204,
    name: '設定コンプライアンス評価',
    type: 'service',
    cost: 1,
    effect: 'インスタンス設定を継続的に評価し、逸脱を通知します。',
    description:
      'AWS Config Rules を活用して EC2 構成がポリシーに準拠しているか自動でチェックします。',
    category: '管理とガバナンス',
    keywords: ['コンプライアンス', '設定管理', 'EC2']
  },
  {
    id: 205,
    name: '自動スケーリングポリシー',
    type: 'service',
    cost: 2,
    effect: '負荷に合わせてインスタンス数を自動調整します。',
    description:
      'EC2 Auto Scaling グループを利用し、需要に応じて最適なインスタンス数を維持してコストを抑えます。',
    category: 'コンピューティング',
    keywords: ['スケーリング', '自動化', 'EC2']
  }
];
