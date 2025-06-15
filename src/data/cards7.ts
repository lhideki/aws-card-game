import { Card } from '../lib/types';

// Service Cards (Part 7)
export const serviceCards7: Card[] = [
  {
    id: 61,
    name: 'AWS Backup',
    type: 'service',
    cost: 1,
    effect: 'AWSサービス全体のデータバックアップを一元管理するサービスを提供します。',
    description: 'クラウドおよびオンプレミスのAWSサービス全体でデータバックアップを一元的に管理および自動化します。',
    category: 'ストレージ',
    keywords: ['バックアップ', '復元', 'データ保護']
  },
  {
    id: 62,
    name: 'Amazon Managed Blockchain',
    type: 'service',
    cost: 4,
    effect: '人気のあるブロックチェーンフレームワークを使用してネットワークを作成および管理するサービスを提供します。',
    description: 'スケーラブルなブロックチェーンネットワークを簡単に作成および管理できます。',
    category: 'ブロックチェーン',
    keywords: ['ブロックチェーン', '分散台帳', 'スマートコントラクト']
  },
  {
    id: 63,
    name: 'Amazon Managed Streaming for Kafka',
    type: 'service',
    cost: 3,
    effect: 'Apache Kafkaと互換性のあるフルマネージドサービスを提供します。',
    description: 'Apache Kafkaを使用してストリーミングデータを処理するアプリケーションを構築および実行します。',
    category: 'アプリケーション統合',
    keywords: ['Kafka', 'ストリーミング', 'データ処理']
  },
  {
    id: 64,
    name: 'AWS DataSync',
    type: 'service',
    cost: 2,
    effect: 'オンプレミスストレージとAWSストレージサービス間のデータ転送を簡素化するサービスを提供します。',
    description: 'オンプレミスストレージとAWSストレージサービス間のデータ移動を簡素化、自動化、高速化します。',
    category: 'ストレージ',
    keywords: ['データ転送', 'オンプレミス', '移行']
  },
  {
    id: 65,
    name: 'AWS Transfer Family',
    type: 'service',
    cost: 2,
    effect: 'SFTP、FTPS、FTPを使用してAmazon S3およびAmazon EFSとの間でファイル転送を行うサービスを提供します。',
    description: 'AWSストレージサービスとの間でファイル転送を行うためのフルマネージドサポートを提供します。',
    category: 'ストレージ',
    keywords: ['ファイル転送', 'SFTP', 'FTP']
  },
  {
    id: 66,
    name: 'Amazon Polly',
    type: 'service',
    cost: 1,
    effect: 'テキストを生きているような音声に変換するサービスを提供します。',
    description: 'テキストを自然な音声に変換し、音声対応のアプリケーションを作成できます。',
    category: '機械学習',
    keywords: ['音声合成', 'TTS', '音声']
  },
  {
    id: 67,
    name: 'Amazon Translate',
    type: 'service',
    cost: 1,
    effect: '高品質な言語翻訳サービスを提供します。',
    description: 'ニューラルマシン翻訳システムを使用して、テキストをさまざまな言語に翻訳します。',
    category: '機械学習',
    keywords: ['翻訳', '多言語', 'AI']
  },
  {
    id: 68,
    name: 'Amazon Transcribe',
    type: 'service',
    cost: 1,
    effect: '音声をテキストに変換する自動音声認識サービスを提供します。',
    description: '開発者がアプリケーションに音声分析機能を簡単に追加できるようにします。',
    category: '機械学習',
    keywords: ['音声認識', 'STT', '文字起こし']
  },
  {
    id: 69,
    name: 'AWS Outposts',
    type: 'service',
    cost: 5,
    effect: 'AWSインフラストラクチャとサービスをオンプレミスで実行するサービスを提供します。',
    description: 'AWSインフラストラクチャ、サービス、ツール、APIをデータセンター、コロケーション空間、オンプレミス施設に拡張します。',
    category: 'ハイブリッドクラウド',
    keywords: ['オンプレミス', 'ハイブリッド', 'エッジ']
  },
  {
    id: 70,
    name: 'AWS Wavelength',
    type: 'service',
    cost: 4,
    effect: '5Gネットワークのエッジでアプリケーションを提供するサービスを提供します。',
    description: '通信事業者の5Gネットワーク内にAWSコンピューティングおよびストレージサービスを埋め込み、超低レイテンシーアプリケーションを可能にします。',
    category: 'エッジコンピューティング',
    keywords: ['5G', 'エッジ', '低レイテンシー']
  }
];
