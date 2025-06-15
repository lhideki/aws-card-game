import { Card } from '../lib/types';

// Service Cards (Part 4)
export const serviceCards4: Card[] = [
  {
    id: 31,
    name: 'Amazon EMR',
    type: 'service',
    cost: 3,
    effect: 'ビッグデータフレームワークを実行するためのマネージドクラスターを提供します。',
    description: 'Apache Spark、Hive、HBase、Flink、Hudi、Prestoなどのオープンソースツールを使用してペタバイト規模のデータを処理します。',
    category: '分析',
    keywords: ['ビッグデータ', 'Hadoop', '分散処理']
  },
  {
    id: 32,
    name: 'Amazon Athena',
    type: 'service',
    cost: 1,
    effect: 'S3に保存されたデータに対してSQLクエリを実行するサービスを提供します。',
    description: 'サーバーレスでインタラクティブなクエリサービスで、標準SQLを使用してS3のデータを直接分析できます。',
    category: '分析',
    keywords: ['SQL', 'クエリ', 'データ分析']
  },
  {
    id: 33,
    name: 'Amazon QuickSight',
    type: 'service',
    cost: 2,
    effect: 'ビジネスインテリジェンスサービスを提供し、データの可視化を支援します。',
    description: 'クラウドスケールのビジネスインテリジェンスサービスで、組織全体でデータを共有し、インサイトを得ることができます。',
    category: '分析',
    keywords: ['BI', 'ダッシュボード', 'データ可視化']
  },
  {
    id: 34,
    name: 'AWS Glue',
    type: 'service',
    cost: 2,
    effect: 'データの抽出、変換、ロード(ETL)を簡素化するサービスを提供します。',
    description: 'データの検出、準備、結合を簡単にするサーバーレスのデータ統合サービスです。',
    category: '分析',
    keywords: ['ETL', 'データカタログ', 'データ統合']
  },
  {
    id: 35,
    name: 'Amazon SageMaker',
    type: 'service',
    cost: 3,
    effect: '機械学習モデルの構築、トレーニング、デプロイを支援するサービスを提供します。',
    description: '開発者や科学者が機械学習モデルを迅速に構築、トレーニング、デプロイできるようにします。',
    category: '機械学習',
    keywords: ['ML', 'AI', 'モデルトレーニング']
  },
  {
    id: 36,
    name: 'Amazon Rekognition',
    type: 'service',
    cost: 2,
    effect: '画像と動画の分析を行うAIサービスを提供します。',
    description: '画像や動画内のオブジェクト、人物、テキスト、シーン、アクティビティを識別します。',
    category: '機械学習',
    keywords: ['画像認識', '動画分析', 'AI']
  },
  {
    id: 37,
    name: 'Amazon Comprehend',
    type: 'service',
    cost: 2,
    effect: '自然言語処理(NLP)を使用してテキストからインサイトを抽出するサービスを提供します。',
    description: 'テキスト内の感情、キーフレーズ、エンティティ、言語を検出します。',
    category: '機械学習',
    keywords: ['NLP', 'テキスト分析', '感情分析']
  },
  {
    id: 38,
    name: 'Amazon Lex',
    type: 'service',
    cost: 2,
    effect: '音声やテキストを理解するチャットボットを構築するサービスを提供します。',
    description: 'Alexaと同じ技術を使用して、音声やテキストのチャットボットを構築します。',
    category: '機械学習',
    keywords: ['チャットボット', '音声認識', '自然言語理解']
  },
  {
    id: 39,
    name: 'AWS IoT Core',
    type: 'service',
    cost: 2,
    effect: 'IoTデバイスをクラウドに接続するサービスを提供します。',
    description: 'IoTデバイスをAWSクラウドに安全に接続し、他のAWSサービスと対話できるようにします。',
    category: 'IoT',
    keywords: ['IoT', 'デバイス管理', 'MQTT']
  },
  {
    id: 40,
    name: 'AWS IoT Greengrass',
    type: 'service',
    cost: 2,
    effect: 'エッジデバイス上でのローカル処理、メッセージング、データキャッシングを提供します。',
    description: 'デバイスがローカルで動作し、クラウドに接続せずにデータを生成・分析できるようにします。',
    category: 'IoT',
    keywords: ['エッジコンピューティング', 'ローカル処理', 'IoT']
  }
];
