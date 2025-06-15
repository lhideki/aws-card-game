/**
 * サービスカードデータ（パート1）
 * AWSサービスを表すカードのデータを定義します
 */

import { Card } from '../lib/types';

// Service Cards (Part 1)
export const serviceCards: Card[] = [
  {
    id: 1,
    name: 'Amazon S3',
    type: 'service',
    cost: 1,
    effect: 'スケーラブルなオブジェクトストレージを提供し、99.999999999%の耐久性を実現します。',
    description: '高い耐久性と可用性を持つオブジェクトストレージサービスで、静的ウェブサイトホスティングやデータレイクの構築にも利用できます。',
    category: 'ストレージ',
    keywords: ['ストレージ', 'オブジェクト', '静的ウェブサイト', '高耐久性']
  },
  {
    id: 2,
    name: 'Amazon EC2',
    type: 'service',
    cost: 3,
    effect: 'クラウド内の仮想サーバーを提供し、コンピューティングリソースを完全に制御できます。',
    description: 'さまざまなインスタンスタイプを選択でき、アプリケーションに最適なメモリ、CPU、ストレージ、ネットワーク性能を組み合わせることができます。',
    category: 'コンピューティング',
    keywords: ['コンピューティング', '仮想サーバー', 'インスタンス', 'スケーラブル']
  },
  {
    id: 3,
    name: 'Amazon RDS',
    type: 'service',
    cost: 3,
    effect: 'マネージドリレーショナルデータベースサービスを提供し、運用負荷を軽減します。',
    description: 'データベースの管理作業を自動化し、スケーラブルなリレーショナルデータベースを提供。MySQL、PostgreSQL、MariaDB、Oracle、SQL Serverなど複数のエンジンをサポートします。',
    category: 'データベース',
    keywords: ['データベース', 'リレーショナル', 'マネージド', '自動バックアップ']
  },
  {
    id: 4,
    name: 'Amazon DynamoDB',
    type: 'service',
    cost: 2,
    effect: 'フルマネージドのNoSQLデータベースサービスを提供し、ミリ秒単位のレイテンシーを実現します。',
    description: '高速で予測可能なパフォーマンスを持つNoSQLデータベースで、自動スケーリング機能を備え、どのような規模でも一貫した低レイテンシーを維持します。',
    category: 'データベース',
    keywords: ['データベース', 'NoSQL', '高速', 'スケーラブル']
  },
  {
    id: 5,
    name: 'AWS Lambda',
    type: 'service',
    cost: 1,
    effect: 'サーバーレスでコードを実行でき、使用した分だけ料金が発生します。',
    description: 'サーバーのプロビジョニングや管理なしでコードを実行でき、イベント駆動型アプリケーションの構築に最適です。自動的にスケールし、高可用性を維持します。',
    category: 'コンピューティング',
    keywords: ['サーバーレス', '関数', 'イベント駆動', '自動スケーリング']
  },
  {
    id: 6,
    name: 'Amazon CloudFront',
    type: 'service',
    cost: 2,
    effect: 'グローバルなコンテンツ配信ネットワーク(CDN)を提供し、低レイテンシーでコンテンツを配信します。',
    description: '世界中のエッジロケーションを通じて、低レイテンシーと高速な転送速度でコンテンツをエンドユーザーに配信します。静的・動的コンテンツの両方をサポートします。',
    category: 'ネットワーキング',
    keywords: ['CDN', 'エッジロケーション', 'グローバル', '低レイテンシー']
  },
  {
    id: 7,
    name: 'Amazon VPC',
    type: 'service',
    cost: 1,
    effect: '論理的に分離された仮想ネットワークを提供し、AWSリソースを安全に配置できます。',
    description: 'AWSクラウド内の論理的に分離されたセクションを提供し、サブネット、IPアドレス範囲、ルートテーブル、ネットワークゲートウェイなどを完全に制御できます。',
    category: 'ネットワーキング',
    keywords: ['ネットワーク', 'セキュリティ', 'プライベート', '論理分離']
  },
  {
    id: 8,
    name: 'Amazon API Gateway',
    type: 'service',
    cost: 2,
    effect: 'APIの作成、公開、管理、モニタリングを行うフルマネージドサービスを提供します。',
    description: 'あらゆる規模のAPIを作成、公開、維持、モニタリング、保護するためのフルマネージドサービスで、RESTful APIとWebSocket APIの両方をサポートします。',
    category: 'アプリケーション統合',
    keywords: ['API', 'ゲートウェイ', 'マイクロサービス', 'RESTful']
  },
  {
    id: 9,
    name: 'Amazon SNS',
    type: 'service',
    cost: 1,
    effect: 'パブリッシュ/サブスクライブメッセージングサービスを提供し、アプリケーション間の疎結合を実現します。',
    description: 'アプリケーション間のメッセージ配信を調整し、システムの分離を可能にします。プッシュ通知、メール、SMSなど複数のプロトコルをサポートします。',
    category: 'アプリケーション統合',
    keywords: ['メッセージング', '通知', 'パブサブ', '疎結合']
  },
  {
    id: 10,
    name: 'Amazon SQS',
    type: 'service',
    cost: 1,
    effect: 'フルマネージドのメッセージキューイングサービスを提供し、分散システムの信頼性を向上させます。',
    description: 'マイクロサービス、分散システム、サーバーレスアプリケーション間のメッセージの送受信を可能にし、コンポーネント間の疎結合を実現します。',
    category: 'アプリケーション統合',
    keywords: ['キュー', 'メッセージング', '非同期', '分散システム']
  }
];
