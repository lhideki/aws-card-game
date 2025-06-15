import { Card } from '../lib/types';

// Service Cards (Part 3)
export const serviceCards3: Card[] = [
  {
    id: 21,
    name: 'Amazon Route 53',
    type: 'service',
    cost: 1,
    effect: 'スケーラブルなDNSとドメイン登録サービスを提供します。',
    description: '高可用性と拡張性に優れたDNSウェブサービスです。',
    category: 'ネットワーキング',
    keywords: ['DNS', 'ドメイン', 'ルーティング']
  },
  {
    id: 22,
    name: 'Elastic Load Balancing',
    type: 'service',
    cost: 2,
    effect: '複数のターゲットにトラフィックを分散させるロードバランサーを提供します。',
    description: '受信アプリケーショントラフィックを複数のターゲットに自動的に分散します。',
    category: 'ネットワーキング',
    keywords: ['ロードバランサー', 'スケーラビリティ', '高可用性']
  },
  {
    id: 23,
    name: 'AWS Direct Connect',
    type: 'service',
    cost: 3,
    effect: 'オンプレミス環境からAWSへの専用ネットワーク接続を提供します。',
    description: 'インターネットを経由せずにAWSに直接接続することで、安定したネットワークパフォーマンスを実現します。',
    category: 'ネットワーキング',
    keywords: ['専用線', 'ハイブリッド', 'オンプレミス連携']
  },
  {
    id: 24,
    name: 'Amazon CloudWatch',
    type: 'service',
    cost: 1,
    effect: 'AWSリソースとアプリケーションのモニタリングサービスを提供します。',
    description: 'メトリクスの収集と追跡、ログファイルの収集と監視、アラームの設定を行います。',
    category: '管理とガバナンス',
    keywords: ['モニタリング', 'ログ', 'アラート']
  },
  {
    id: 25,
    name: 'AWS CloudTrail',
    type: 'service',
    cost: 1,
    effect: 'AWSアカウントのガバナンス、コンプライアンス、運用監査を提供します。',
    description: 'AWSアカウント内のアクティビティを記録し、継続的に監視してセキュリティ分析を可能にします。',
    category: '管理とガバナンス',
    keywords: ['監査', 'コンプライアンス', 'セキュリティ']
  },
  {
    id: 26,
    name: 'AWS Config',
    type: 'service',
    cost: 1,
    effect: 'AWSリソースの設定を評価、監査、確認するサービスを提供します。',
    description: 'リソース設定の変更を継続的に監視・記録し、望ましい設定に対する評価を自動化します。',
    category: '管理とガバナンス',
    keywords: ['コンプライアンス', '設定管理', '監査']
  },
  {
    id: 27,
    name: 'AWS CloudFormation',
    type: 'service',
    cost: 0,
    effect: 'AWSリソースをコードとしてモデル化し、プロビジョニングするサービスを提供します。',
    description: 'インフラストラクチャをコードとして記述し、自動的にデプロイします。',
    category: '管理とガバナンス',
    keywords: ['IaC', '自動化', 'テンプレート']
  },
  {
    id: 28,
    name: 'Amazon EventBridge',
    type: 'service',
    cost: 1,
    effect: 'イベント駆動型アプリケーションを構築するためのサーバーレスイベントバスを提供します。',
    description: 'アプリケーション間でリアルタイムデータのストリームを配信し、イベントに基づいてアクションをトリガーします。',
    category: 'アプリケーション統合',
    keywords: ['イベント駆動', 'サーバーレス', '自動化']
  },
  {
    id: 29,
    name: 'AWS Step Functions',
    type: 'service',
    cost: 1,
    effect: 'ビジュアルワークフローを使用してアプリケーションを構築するサービスを提供します。',
    description: '分散アプリケーションのコンポーネントを視覚的なワークフローで調整します。',
    category: 'アプリケーション統合',
    keywords: ['ワークフロー', 'オーケストレーション', 'ステートマシン']
  },
  {
    id: 30,
    name: 'Amazon Kinesis',
    type: 'service',
    cost: 2,
    effect: 'リアルタイムでのデータストリーミングの収集、処理、分析を提供します。',
    description: 'ビデオ、オーディオ、アプリケーションログ、ウェブサイトクリックストリーム、IoTテレメトリデータなどのリアルタイムデータを処理します。',
    category: '分析',
    keywords: ['ストリーミング', 'リアルタイム', 'データ処理']
  }
];
