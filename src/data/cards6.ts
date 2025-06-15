import { Card } from '../lib/types';

// Service Cards (Part 6)
export const serviceCards6: Card[] = [
  {
    id: 51,
    name: 'Amazon Timestream',
    type: 'service',
    cost: 2,
    effect: '時系列データベースサービスを提供します。',
    description: 'IoTアプリケーションやモニタリングシステムからの時系列データを効率的に保存・分析します。',
    category: 'データベース',
    keywords: ['時系列', 'IoT', 'モニタリング']
  },
  {
    id: 52,
    name: 'AWS Shield',
    type: 'service',
    cost: 2,
    effect: 'DDoS攻撃からの保護サービスを提供します。',
    description: 'AWSで実行されているウェブアプリケーションを保護するマネージドDDoS保護サービスです。',
    category: 'セキュリティ',
    keywords: ['DDoS', '保護', 'セキュリティ']
  },
  {
    id: 53,
    name: 'AWS KMS',
    type: 'service',
    cost: 1,
    effect: '暗号化キーの作成と管理を行うサービスを提供します。',
    description: 'データの暗号化に使用する暗号化キーを簡単に作成および管理できるマネージドサービスです。',
    category: 'セキュリティ',
    keywords: ['暗号化', 'キー管理', 'セキュリティ']
  },
  {
    id: 54,
    name: 'AWS Secrets Manager',
    type: 'service',
    cost: 1,
    effect: 'シークレット情報を保護するサービスを提供します。',
    description: 'データベース認証情報、APIキー、その他のシークレットを保護し、ライフサイクルを通じて管理します。',
    category: 'セキュリティ',
    keywords: ['シークレット', '認証情報', 'セキュリティ']
  },
  {
    id: 55,
    name: 'AWS Certificate Manager',
    type: 'service',
    cost: 0,
    effect: 'SSL/TLS証明書のプロビジョニング、管理、デプロイを行うサービスを提供します。',
    description: 'AWSサービスで使用するパブリックおよびプライベートSSL/TLS証明書を簡単にプロビジョニング、管理、デプロイできます。',
    category: 'セキュリティ',
    keywords: ['SSL', 'TLS', '証明書']
  },
  {
    id: 56,
    name: 'AWS Transit Gateway',
    type: 'service',
    cost: 2,
    effect: 'VPCとオンプレミスネットワークを接続するハブを提供します。',
    description: 'VPC、AWSアカウント、オンプレミスネットワークを接続するための中央ハブとして機能します。',
    category: 'ネットワーキング',
    keywords: ['ネットワーク', 'VPC', '接続']
  },
  {
    id: 57,
    name: 'AWS Global Accelerator',
    type: 'service',
    cost: 2,
    effect: 'グローバルユーザーのアプリケーションパフォーマンスを向上させるサービスを提供します。',
    description: 'AWSグローバルネットワークを使用して、ユーザーからアプリケーションへのトラフィックのパフォーマンスを向上させます。',
    category: 'ネットワーキング',
    keywords: ['グローバル', 'パフォーマンス', 'アクセラレーション']
  },
  {
    id: 58,
    name: 'AWS Organizations',
    type: 'service',
    cost: 0,
    effect: '複数のAWSアカウントを一元管理するサービスを提供します。',
    description: '複数のAWSアカウントを作成して一元管理し、リソースを統合し、請求を一括管理します。',
    category: '管理とガバナンス',
    keywords: ['組織', 'アカウント管理', 'ガバナンス']
  },
  {
    id: 59,
    name: 'AWS Control Tower',
    type: 'service',
    cost: 0,
    effect: '安全で準拠したマルチアカウント環境をセットアップおよび管理するサービスを提供します。',
    description: 'ベストプラクティスに基づいたマルチアカウント環境を設定および管理します。',
    category: '管理とガバナンス',
    keywords: ['マルチアカウント', 'ガバナンス', 'コンプライアンス']
  },
  {
    id: 60,
    name: 'AWS Systems Manager',
    type: 'service',
    cost: 0,
    effect: 'AWSリソースの運用データの表示と制御を行うサービスを提供します。',
    description: 'インフラストラクチャを可視化し、制御するための統合されたインターフェースを提供します。',
    category: '管理とガバナンス',
    keywords: ['運用', '自動化', 'パッチ管理']
  }
];
