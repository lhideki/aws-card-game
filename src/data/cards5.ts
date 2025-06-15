import { Card } from '../lib/types';

// Service Cards (Part 5)
export const serviceCards5: Card[] = [
  {
    id: 41,
    name: 'AWS AppSync',
    type: 'service',
    cost: 2,
    effect: 'GraphQL APIを簡単に開発できるマネージドサービスを提供します。',
    description: 'リアルタイムデータ同期、オフラインデータアクセス、データ操作のためのGraphQL APIを作成します。',
    category: 'アプリケーション統合',
    keywords: ['GraphQL', 'API', 'リアルタイム']
  },
  {
    id: 42,
    name: 'Amazon Amplify',
    type: 'service',
    cost: 1,
    effect: 'フルスタックのウェブおよびモバイルアプリケーションを構築するためのツールセットを提供します。',
    description: 'フロントエンドのウェブおよびモバイルデベロッパーがAWSでフルスタックアプリケーションを簡単に構築できるようにします。',
    category: 'フロントエンド',
    keywords: ['フルスタック', 'モバイル', 'ウェブ']
  },
  {
    id: 43,
    name: 'AWS App Runner',
    type: 'service',
    cost: 2,
    effect: 'コンテナ化されたウェブアプリケーションを簡単にデプロイするサービスを提供します。',
    description: 'インフラストラクチャやコンテナの経験がなくても、コンテナ化されたアプリケーションを簡単にデプロイできます。',
    category: 'コンピューティング',
    keywords: ['コンテナ', 'デプロイ', 'ウェブアプリ']
  },
  {
    id: 44,
    name: 'AWS Batch',
    type: 'service',
    cost: 1,
    effect: 'バッチコンピューティングワークロードを効率的に実行するサービスを提供します。',
    description: '必要なインフラストラクチャを自動的にプロビジョニングし、バッチジョブを効率的に実行します。',
    category: 'コンピューティング',
    keywords: ['バッチ処理', 'ワークロード', 'スケジューリング']
  },
  {
    id: 45,
    name: 'Amazon EFS',
    type: 'service',
    cost: 2,
    effect: 'EC2インスタンス用のスケーラブルなファイルストレージを提供します。',
    description: 'EC2インスタンスにマウントできる、シンプルでスケーラブル、フルマネージドの弾力的なNFSファイルシステムです。',
    category: 'ストレージ',
    keywords: ['ファイルストレージ', 'NFS', 'スケーラブル']
  },
  {
    id: 46,
    name: 'Amazon FSx',
    type: 'service',
    cost: 3,
    effect: '人気のあるファイルシステムを実行するためのフルマネージドサービスを提供します。',
    description: 'Windows File Server、Lustre、NetApp ONTAPなどの人気のあるファイルシステムを実行します。',
    category: 'ストレージ',
    keywords: ['ファイルシステム', 'Windows', 'Lustre']
  },
  {
    id: 47,
    name: 'AWS Storage Gateway',
    type: 'service',
    cost: 2,
    effect: 'オンプレミスアプリケーションとクラウドストレージを接続するサービスを提供します。',
    description: 'オンプレミスのIT環境とAWSのストレージインフラストラクチャをシームレスに統合します。',
    category: 'ストレージ',
    keywords: ['ハイブリッド', 'オンプレミス連携', 'バックアップ']
  },
  {
    id: 48,
    name: 'Amazon DocumentDB',
    type: 'service',
    cost: 3,
    effect: 'MongoDB互換のドキュメントデータベースサービスを提供します。',
    description: 'MongoDB互換性を持つフルマネージドのドキュメントデータベースサービスです。',
    category: 'データベース',
    keywords: ['ドキュメントDB', 'MongoDB', 'NoSQL']
  },
  {
    id: 49,
    name: 'Amazon Neptune',
    type: 'service',
    cost: 3,
    effect: 'フルマネージドのグラフデータベースサービスを提供します。',
    description: '高度に接続されたデータセットを扱うアプリケーションを簡単に構築・実行できます。',
    category: 'データベース',
    keywords: ['グラフDB', '関係性', 'ネットワーク']
  },
  {
    id: 50,
    name: 'Amazon QLDB',
    type: 'service',
    cost: 2,
    effect: 'フルマネージドの台帳データベースを提供します。',
    description: '変更履歴を追跡し、検証可能な完全なトランザクション履歴を提供します。',
    category: 'データベース',
    keywords: ['台帳', '監査', 'トランザクション']
  }
];
