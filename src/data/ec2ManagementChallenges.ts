import { Challenge } from '../lib/types';

export const ec2ManagementChallenges: Challenge[] = [
  {
    id: 201,
    title: 'EC2インスタンスのパッチ管理自動化',
    description: '複数のEC2インスタンスに定期的なパッチを適用し、運用負荷を減らしたいと考えています。最適な方法を提案してください。',
    budgetCost: 4,
    difficulty: 'medium',
    keywords: ['パッチ管理', '自動化', '運用', 'EC2']
  },
  {
    id: 202,
    title: 'EC2状態監視とアラーム設定',
    description: 'EC2インスタンスのCPU使用率やディスク使用量を監視し、異常時に通知する仕組みを構築してください。',
    budgetCost: 3,
    difficulty: 'easy',
    keywords: ['モニタリング', 'アラーム', '通知', 'EC2']
  },
  {
    id: 203,
    title: '操作ログの集中管理',
    description: 'EC2インスタンスの操作ログを集中管理し、セキュリティ監査を容易にしたいと考えています。',
    budgetCost: 3,
    difficulty: 'medium',
    keywords: ['ログ', '監査', 'セキュリティ', 'EC2']
  },
  {
    id: 204,
    title: 'EC2構成の継続的コンプライアンスチェック',
    description: '社内ポリシーに沿ってEC2インスタンスの設定を継続的に評価し、逸脱があれば通知する仕組みが必要です。',
    budgetCost: 5,
    difficulty: 'medium',
    keywords: ['コンプライアンス', '設定管理', 'EC2']
  },
  {
    id: 205,
    title: 'スケーリングポリシーの最適化',
    description: 'アクセスの増減に応じてEC2インスタンスを自動的に増減させ、コストを最適化したいと考えています。',
    budgetCost: 4,
    difficulty: 'medium',
    keywords: ['スケーリング', '自動化', 'コスト最適化', 'EC2']
  }
];
