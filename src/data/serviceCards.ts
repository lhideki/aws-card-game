import { Card } from '../lib/types';

/**
 * サービスカードデータ
 * すべてのAWSサービスカードをまとめた単一のファイル
 */

export const allServiceCards: Card[] = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

