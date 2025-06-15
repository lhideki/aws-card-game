/**
 * サービスカードデータ（パート2）
 * AWSサービスを表すカードのデータを定義します
 */

import { Card } from '../lib/types';

// Service Cards (Part 2)
export const serviceCards2: Card[] = [
  {
    id: 11,
    name: 'AWS Elastic Beanstalk',
    type: 'service',
    cost: 2,
    effect: 'アプリケーションのデプロイと管理を自動化し、インフラストラクチャの詳細を抽象化します。',
    description: 'アプリケーションをアップロードするだけで、キャパシティのプロビジョニング、ロードバランシング、オートスケーリング、アプリケーションの状態監視を自動的に処理します。',
    category: 'コンピューティング',
    keywords: ['PaaS', 'デプロイ', '自動化', 'アプリケーション管理']
  },
  {
    id: 12,
    name: 'Amazon ECS',
    type: 'service',
    cost: 2,
    effect: 'コンテナ化されたアプリケーションを実行するための高度にスケーラブルなオーケストレーションサービスを提供します。',
    description: 'Docker コンテナをサポートし、EC2インスタンスのクラスターでアプリケーションを実行できます。コンテナのデプロイ、管理、スケーリングを簡素化します。',
    category: 'コンテナ',
    keywords: ['コンテナ', 'Docker', 'オーケストレーション', 'マイクロサービス']
  },
  {
    id: 13,
    name: 'Amazon EKS',
    type: 'service',
    cost: 3,
    effect: 'マネージドKubernetesサービスを提供し、複雑なクラスター管理を簡素化します。',
    description: 'Kubernetesを実行するためのコントロールプレーンをプロビジョニングし、管理する手間を省きます。複数のAZにわたる高可用性を確保します。',
    category: 'コンテナ',
    keywords: ['Kubernetes', 'コンテナ', 'オーケストレーション', 'マネージド']
  },
  {
    id: 14,
    name: 'AWS Fargate',
    type: 'service',
    cost: 2,
    effect: 'サーバーレスコンテナ実行環境を提供し、インフラストラクチャ管理の負担を軽減します。',
    description: 'サーバーを管理することなくコンテナを実行できるコンピューティングエンジンです。ECSやEKSと連携し、コンテナのプロビジョニングと管理を自動化します。',
    category: 'コンテナ',
    keywords: ['サーバーレス', 'コンテナ', '管理不要', 'ECS/EKS互換']
  },
  {
    id: 15,
    name: 'Amazon Aurora',
    type: 'service',
    cost: 4,
    effect: 'MySQL/PostgreSQL互換の高性能マネージドリレーショナルデータベースを提供します。',
    description: '商用データベースのパフォーマンスと可用性を1/10のコストで実現します。自動スケーリング、バックアップ、レプリケーション、フェイルオーバーを組み込みで提供します。',
    category: 'データベース',
    keywords: ['リレーショナル', '高性能', '高可用性', 'MySQL/PostgreSQL互換']
  },
  {
    id: 16,
    name: 'Amazon ElastiCache',
    type: 'service',
    cost: 2,
    effect: 'インメモリキャッシュを提供し、データベースの負荷を軽減してアプリケーションのパフォーマンスを向上させます。',
    description: 'Redis または Memcached 互換のインメモリデータストアで、マイクロ秒単位のレイテンシーを実現し、リアルタイムアプリケーションに最適です。',
    category: 'データベース',
    keywords: ['キャッシュ', 'インメモリ', '高速', 'Redis/Memcached']
  },
  {
    id: 17,
    name: 'Amazon Redshift',
    type: 'service',
    cost: 4,
    effect: 'ペタバイト規模のデータウェアハウスを提供し、高速なクエリパフォーマンスを実現します。',
    description: '高速で完全マネージド型のデータウェアハウスで、シンプルかつコスト効率よくデータを分析できます。SQLベースのクエリと高度な圧縮技術を提供します。',
    category: 'データベース',
    keywords: ['データウェアハウス', '分析', 'ビッグデータ', 'SQL']
  },
  {
    id: 18,
    name: 'AWS IAM',
    type: 'service',
    cost: 0,
    effect: 'AWSリソースへのアクセスを安全に管理し、きめ細かなアクセス制御を実現します。',
    description: 'ユーザーとグループを作成・管理し、AWSリソースへのアクセス権限を制御します。最小権限の原則に基づいたセキュリティポリシーを実装できます。',
    category: 'セキュリティ',
    keywords: ['認証', '認可', 'アクセス管理', 'アイデンティティ']
  },
  {
    id: 19,
    name: 'Amazon Cognito',
    type: 'service',
    cost: 1,
    effect: 'ウェブおよびモバイルアプリの認証、認可、ユーザー管理を提供します。',
    description: 'アプリケーションにユーザーサインアップ、サインイン、アクセス制御を簡単に追加できます。ソーシャルIDプロバイダーとの統合やMFAもサポートします。',
    category: 'セキュリティ',
    keywords: ['認証', 'ユーザー管理', 'モバイル', 'ID連携']
  },
  {
    id: 20,
    name: 'AWS WAF',
    type: 'service',
    cost: 2,
    effect: 'ウェブアプリケーションを保護するファイアウォールを提供し、一般的な攻撃からアプリを守ります。',
    description: 'SQLインジェクション、クロスサイトスクリプティングなどの一般的なウェブの脆弱性やボットからアプリケーションを保護します。CloudFrontやALBと統合できます。',
    category: 'セキュリティ',
    keywords: ['セキュリティ', 'ファイアウォール', '保護', 'ウェブアプリケーション']
  }
];
