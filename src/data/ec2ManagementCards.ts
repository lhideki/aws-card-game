import { Card } from '../lib/types';

export const ec2ManagementCards: Card[] = [
  {
    id: 201,
    name: 'AWS Systems Manager Patch Manager',
    type: 'service',
    cost: 1,
    effect: 'マネージドノードに対してセキュリティ関連の更新プログラムやその他の更新プログラムを自動的にパッチ適用します。',
    description:
      'AWS Systems Manager の Patch Manager は、EC2インスタンス、エッジデバイス、オンプレミスサーバー、仮想マシンに対してパッチ適用プロセスを自動化します。オペレーティングシステムとアプリケーションの両方にパッチを適用でき、集中的なパッチ制御と柔軟なパッチスケジューリングを提供します。',
    category: '管理とガバナンス',
    keywords: ['パッチ管理', '自動化', 'セキュリティ更新', 'Systems Manager']
  },
  {
    id: 202,
    name: 'Amazon CloudWatch Alarms',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスのメトリクスを監視し、しきい値を超えた場合にアラームを発生させます。',
    description:
      'Amazon CloudWatch を使用してEC2インスタンスのCPU使用率、ディスク読み取り/書き込み、ネットワーク使用率などのメトリクスを監視します。設定したしきい値を超えた場合、Amazon SNSを通じて通知を送信したり、Auto Scalingアクションをトリガーできます。',
    category: '管理とガバナンス',
    keywords: ['モニタリング', 'アラーム', 'メトリクス', 'CloudWatch']
  },
  {
    id: 203,
    name: 'AWS CloudTrail Management Events',
    type: 'service',
    cost: 0,
    effect: 'AWS API呼び出しの詳細なログを記録し、監査証跡を提供します。',
    description:
      'AWS CloudTrail は、AWSアカウント内で行われた管理イベント（API呼び出し）を記録します。EC2インスタンスの起動、停止、設定変更などの操作履歴を追跡し、セキュリティ分析、リソース変更の追跡、コンプライアンス監査に活用できます。',
    category: 'セキュリティ、アイデンティティ、コンプライアンス',
    keywords: ['監査ログ', 'API追跡', 'コンプライアンス', 'CloudTrail']
  },
  {
    id: 204,
    name: 'AWS Config Rules',
    type: 'service',
    cost: 1,
    effect: 'AWSリソースの設定を継続的に評価し、コンプライアンス違反を検出します。',
    description:
      'AWS Config は、AWSリソースの設定を詳細に記録し、設定の変更を時系列で追跡します。Config Rules を使用して、EC2インスタンスの設定がセキュリティポリシーやベストプラクティスに準拠しているかを自動的に評価し、違反があった場合に通知します。',
    category: '管理とガバナンス',
    keywords: ['設定管理', 'コンプライアンス', '自動評価', 'Config']
  },
  {
    id: 205,
    name: 'Amazon EC2 Auto Scaling',
    type: 'service',
    cost: 2,
    effect: 'EC2インスタンスの数を需要に応じて自動的にスケールイン・スケールアウトします。',
    description:
      'Amazon EC2 Auto Scaling を使用して、アプリケーションの可用性を維持し、需要の変化に応じてEC2容量を動的に調整します。Auto Scaling グループは、設定された最小・最大・希望容量の範囲内でインスタンス数を自動調整し、ヘルスチェックによる自動復旧機能も提供します。',
    category: 'コンピューティング',
    keywords: ['自動スケーリング', '可用性', '容量管理', 'Auto Scaling']
  },
  {
    id: 206,
    name: 'AWS Systems Manager Session Manager',
    type: 'service',
    cost: 0,
    effect: 'インバウンドポートを開くことなく、ブラウザベースまたはCLIでEC2インスタンスに安全に接続します。',
    description:
      'AWS Systems Manager Session Manager は、SSHキーやバスティオンホストを管理することなく、EC2インスタンスへの安全なアクセスを提供します。IAMポリシーによる集中的なアクセス制御、セッションログの記録、ワンクリックアクセスが可能で、セキュリティ体制を大幅に向上させます。',
    category: '管理とガバナンス',
    keywords: ['リモートアクセス', 'セキュリティ', 'セッション管理', 'Systems Manager']
  },
  {
    id: 207,
    name: 'AWS Backup',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスとEBSボリュームの自動バックアップを集中管理します。',
    description:
      'AWS Backup は、EC2インスタンスやEBSボリュームなどのAWSリソースのバックアップを集中的に管理する完全マネージド型サービスです。バックアップポリシーの設定、スケジュール管理、タグベースのバックアップ適用により、データ保護を自動化し、コンプライアンス要件を満たします。',
    category: 'ストレージ',
    keywords: ['バックアップ', 'データ保護', '自動化', 'ディザスタリカバリ']
  },
  {
    id: 208,
    name: 'Amazon EBS Snapshots',
    type: 'service',
    cost: 1,
    effect: 'EBSボリュームのポイントインタイム増分バックアップを作成します。',
    description:
      'Amazon EBS Snapshots は、EBSボリュームの増分バックアップを作成し、Amazon S3に保存します。初回は完全バックアップ、以降は変更されたブロックのみを保存するため、ストレージコストを最適化しながら、新しいボリュームの作成やデータ復旧のベースラインとして活用できます。',
    category: 'ストレージ',
    keywords: ['スナップショット', '増分バックアップ', 'EBS', 'データ復旧']
  },
  {
    id: 209,
    name: 'Amazon EC2 Security Groups',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスレベルでネットワークトラフィックを制御する仮想ファイアウォールです。',
    description:
      'Amazon EC2 Security Groups は、EC2インスタンスの仮想ファイアウォールとして機能し、インバウンドとアウトバウンドのトラフィックを制御します。ステートフルな動作により、許可されたインバウンド接続に対する応答は自動的に許可され、きめ細かいネットワークセキュリティ制御を提供します。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['ファイアウォール', 'ネットワークセキュリティ', 'アクセス制御', 'セキュリティグループ']
  },
  {
    id: 210,
    name: 'VPC Network ACLs',
    type: 'service',
    cost: 0,
    effect: 'サブネットレベルでネットワークトラフィックを制御するステートレスファイアウォールです。',
    description:
      'VPC Network ACLs（Access Control Lists）は、サブネットレベルでトラフィックを制御するステートレスファイアウォールです。Security Groupsと組み合わせて多層防御を実現し、番号付きルールによる優先順位制御と、明示的な許可・拒否ルールの設定が可能です。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['ネットワークACL', 'サブネットセキュリティ', 'ステートレス', '多層防御']
  },
  {
    id: 211,
    name: 'Application Load Balancer',
    type: 'service',
    cost: 2,
    effect: 'HTTP/HTTPSトラフィックを複数のEC2インスタンスに分散し、高可用性を実現します。',
    description:
      'Application Load Balancer（ALB）は、レイヤー7（アプリケーション層）で動作するロードバランサーです。パスベースルーティング、ホストベースルーティング、WebSocketサポート、HTTP/2サポートなどの高度な機能を提供し、マイクロサービスアーキテクチャに最適です。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['ロードバランサー', '高可用性', 'HTTP', 'トラフィック分散']
  },
  {
    id: 212,
    name: 'Network Load Balancer',
    type: 'service',
    cost: 2,
    effect: 'TCP/UDPトラフィックを超高性能で複数のEC2インスタンスに分散します。',
    description:
      'Network Load Balancer（NLB）は、レイヤー4（トランスポート層）で動作する高性能ロードバランサーです。毎秒数百万のリクエストを処理でき、超低レイテンシを実現します。静的IPアドレスの割り当て、Elastic IPアドレスのサポート、クライアントIPアドレスの保持が可能です。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['ロードバランサー', '高性能', 'TCP', 'UDP', '低レイテンシ']
  },
  {
    id: 213,
    name: 'EC2 Instance Connect',
    type: 'service',
    cost: 0,
    effect: 'ブラウザベースのSSH接続でEC2インスタンスに安全にアクセスします。',
    description:
      'EC2 Instance Connect は、ブラウザベースのSSH接続を提供し、長期的なSSHキーを管理することなくEC2インスタンスにアクセスできます。IAMポリシーによるアクセス制御、一時的なSSHキーの自動生成、監査ログの記録により、セキュアなインスタンスアクセスを実現します。',
    category: 'セキュリティ、アイデンティティ、コンプライアンス',
    keywords: ['SSH', 'ブラウザアクセス', 'セキュリティ', 'インスタンス接続']
  },
  {
    id: 214,
    name: 'Instance Metadata Service v2 (IMDSv2)',
    type: 'service',
    cost: 0,
    effect: 'セッショントークンベースの認証でインスタンスメタデータへの安全なアクセスを提供します。',
    description:
      'Instance Metadata Service Version 2（IMDSv2）は、EC2インスタンスのメタデータへのアクセスをセキュアにするセッション指向のサービスです。トークンベースの認証、HTTPヘッダーの必須化、ホップ制限の設定により、SSRF攻撃やその他のセキュリティ脅威からインスタンスを保護します。',
    category: 'セキュリティ、アイデンティティ、コンプライアンス',
    keywords: ['メタデータサービス', 'セキュリティ', 'SSRF対策', 'トークン認証']
  },
  {
    id: 215,
    name: 'AWS Systems Manager Parameter Store',
    type: 'service',
    cost: 0,
    effect: '設定データとシークレットの階層的で安全な保存・管理を提供します。',
    description:
      'AWS Systems Manager Parameter Store は、設定データ管理とシークレット管理のための安全で階層的なストレージを提供します。プレーンテキストやSecureString（KMS暗号化）でのデータ保存、バージョン管理、IAMによるアクセス制御、CloudWatchとの統合が可能です。',
    category: '管理とガバナンス',
    keywords: ['パラメータ管理', 'シークレット管理', '設定管理', 'Systems Manager']
  },
  {
    id: 216,
    name: 'Amazon CloudWatch Logs',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスからのログファイルを集中的に監視・保存・分析します。',
    description:
      'Amazon CloudWatch Logs は、EC2インスタンスやアプリケーションからのログデータを集中的に収集、監視、保存するサービスです。リアルタイムでのログ監視、メトリクスフィルターによるアラート設定、ログの長期保存、他のAWSサービスとの統合が可能です。',
    category: '管理とガバナンス',
    keywords: ['ログ管理', 'ログ監視', 'ログ分析', 'CloudWatch']
  },
  {
    id: 217,
    name: 'AWS Systems Manager Run Command',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスに対してリモートでコマンドを安全に実行します。',
    description:
      'AWS Systems Manager Run Command を使用すると、EC2インスタンスやオンプレミスサーバーに対してリモートでコマンドを実行できます。SSHやRDPアクセスなしで、スクリプトの実行、ソフトウェアのインストール、設定変更などの管理タスクを大規模に自動化できます。',
    category: '管理とガバナンス',
    keywords: ['リモートコマンド実行', '自動化', '管理タスク', 'Systems Manager']
  },
  {
    id: 218,
    name: 'Amazon EC2 Spot Instances',
    type: 'service',
    cost: 1,
    effect: '未使用のEC2容量を大幅な割引価格で利用し、コストを最適化します。',
    description:
      'Amazon EC2 Spot Instances は、未使用のEC2容量をオンデマンド価格より最大90%安い価格で利用できるサービスです。フォルトトレラントなアプリケーション、バッチ処理、データ分析などの用途に適しており、Auto Scalingグループとの統合により可用性を向上させることができます。',
    category: 'コンピューティング',
    keywords: ['コスト最適化', 'スポットインスタンス', '割引価格', 'バッチ処理']
  },
  {
    id: 219,
    name: 'Amazon EC2 Reserved Instances',
    type: 'service',
    cost: 2,
    effect: '1年または3年の期間でEC2容量を予約し、大幅なコスト削減を実現します。',
    description:
      'Amazon EC2 Reserved Instances は、1年または3年の期間でEC2インスタンスの容量を予約することで、オンデマンド価格と比較して最大75%のコスト削減を実現します。予測可能なワークロードに最適で、Standard、Convertible、Scheduledの3つのタイプから選択できます。',
    category: 'コンピューティング',
    keywords: ['コスト削減', '予約インスタンス', '長期契約', '容量予約']
  },
  {
    id: 220,
    name: 'AWS Trusted Advisor',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスのコスト最適化、セキュリティ、パフォーマンス改善の推奨事項を提供します。',
    description:
      'AWS Trusted Advisor は、AWSベストプラクティスに基づいてEC2インスタンスの使用状況を分析し、コスト最適化、セキュリティ、パフォーマンス、フォルトトレランス、サービス制限に関する推奨事項を提供します。未使用のインスタンス、セキュリティグループの設定ミス、パフォーマンスの問題を特定できます。',
    category: '管理とガバナンス',
    keywords: ['最適化', 'ベストプラクティス', 'コスト削減', 'セキュリティ推奨']
  },
  {
    id: 221,
    name: 'Amazon VPC NAT Gateway',
    type: 'service',
    cost: 2,
    effect: 'プライベートサブネット内のEC2インスタンスがインターネットにアウトバウンド接続できるようにします。',
    description:
      'Amazon VPC NAT Gateway は、プライベートサブネット内のEC2インスタンスがインターネットやその他のAWSサービスに接続できるようにする完全マネージド型のネットワークアドレス変換サービスです。高可用性、高帯域幅を提供し、管理オーバーヘッドを削減します。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['NAT', 'プライベートサブネット', 'アウトバウンド接続', 'ネットワーク']
  },
  {
    id: 222,
    name: 'Amazon EC2 Placement Groups',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスの物理的配置を制御し、ワークロードの要件に応じて最適化します。',
    description:
      'Amazon EC2 Placement Groups を使用して、インスタンスの物理的配置を制御できます。Cluster（低レイテンシ）、Partition（分散ワークロード）、Spread（障害分離）の3つの配置戦略により、HPC、分散システム、高可用性アプリケーションを最適化します。',
    category: 'コンピューティング',
    keywords: ['配置制御', 'HPC', '低レイテンシ', '高可用性']
  },
  {
    id: 223,
    name: 'Amazon EC2 Dedicated Hosts',
    type: 'service',
    cost: 3,
    effect: '物理的に分離された専用サーバーでEC2インスタンスを実行し、ライセンス要件とコンプライアンスを満たします。',
    description:
      'Amazon EC2 Dedicated Hosts は、お客様専用の物理サーバーを提供し、既存のサーバーバウンドソフトウェアライセンスの使用、規制要件やコンプライアンス要件の満足、インスタンス配置の可視性と制御を実現します。',
    category: 'コンピューティング',
    keywords: ['専用ホスト', 'ライセンス', 'コンプライアンス', '物理分離']
  },
  {
    id: 224,
    name: 'Amazon Data Lifecycle Manager',
    type: 'service',
    cost: 1,
    effect: 'EBSスナップショットとAMIのライフサイクルを自動化し、バックアップポリシーを管理します。',
    description:
      'Amazon Data Lifecycle Manager（DLM）は、EBSスナップショットとEBSバックアップAMIの作成、保持、削除を自動化します。タグベースのポリシー、スケジュール設定、クロスリージョンコピーにより、データ保護とコスト最適化を実現します。',
    category: 'ストレージ',
    keywords: ['ライフサイクル管理', 'スナップショット自動化', 'AMI管理', 'データ保護']
  },
  {
    id: 225,
    name: 'Amazon EC2 Launch Templates',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンス起動設定をテンプレート化し、一貫性のあるインスタンス作成を実現します。',
    description:
      'Amazon EC2 Launch Templates は、インスタンス起動に必要な設定（AMI、インスタンスタイプ、セキュリティグループ、ユーザーデータなど）をテンプレート化します。バージョン管理、Auto Scaling、EC2 Fleetとの統合により、インスタンス管理を効率化します。',
    category: 'コンピューティング',
    keywords: ['起動テンプレート', '設定管理', 'バージョン管理', '自動化']
  },
  {
    id: 226,
    name: 'Amazon EC2 Hibernation',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスのメモリ内容をEBSに保存し、高速な再開を可能にします。',
    description:
      'Amazon EC2 Hibernation は、インスタンスのRAM内容をEBSルートボリュームに保存し、インスタンスを停止します。再開時には以前の状態が復元され、長時間のブートストラップ処理をスキップできるため、アプリケーションの起動時間を大幅に短縮します。',
    category: 'コンピューティング',
    keywords: ['ハイバネーション', '高速起動', 'メモリ保存', '状態復元']
  },
  {
    id: 227,
    name: 'AWS Systems Manager Inventory',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスからメタデータを収集し、ソフトウェアとハードウェア構成を可視化します。',
    description:
      'AWS Systems Manager Inventory は、マネージドノードからアプリケーション、AWSコンポーネント、ネットワーク設定、Windowsアップデート、サービス、レジストリなどのメタデータを収集します。中央のS3バケットに保存し、Athenaで分析できます。',
    category: '管理とガバナンス',
    keywords: ['インベントリ', 'メタデータ収集', '構成管理', '可視化']
  },
  {
    id: 228,
    name: 'AWS Systems Manager State Manager',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスの設定ドリフトを防止し、一貫した設定状態を維持します。',
    description:
      'AWS Systems Manager State Manager は、マネージドノードの設定を定義された状態に維持し、設定ドリフトを防止します。定期的な設定チェック、自動修復、コンプライアンス監視により、インフラストラクチャの一貫性を保証します。',
    category: '管理とガバナンス',
    keywords: ['設定管理', 'ドリフト防止', '自動修復', 'コンプライアンス']
  },
  {
    id: 229,
    name: 'Amazon Elastic IP Addresses',
    type: 'service',
    cost: 1,
    effect: '静的なパブリックIPアドレスを提供し、インスタンス間でIPアドレスを再マッピングできます。',
    description:
      'Amazon Elastic IP Addresses（EIP）は、動的クラウドコンピューティング用に設計された静的IPv4アドレスです。EIPをアカウントに割り当て、必要に応じて任意のインスタンスに関連付けることで、インスタンス障害時の高速フェイルオーバーを実現します。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['静的IP', 'フェイルオーバー', 'パブリックIP', 'ネットワーク']
  },
  {
    id: 230,
    name: 'VPC Endpoints',
    type: 'service',
    cost: 1,
    effect: 'インターネットゲートウェイを経由せずにAWSサービスにプライベート接続します。',
    description:
      'VPC Endpoints は、インターネットゲートウェイ、NAT デバイス、VPN接続、AWS Direct Connect接続を必要とせずに、VPCからAWSサービスにプライベートに接続できます。Gateway EndpointsとInterface Endpointsの2種類があり、セキュリティとコストを最適化します。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['プライベート接続', 'VPCエンドポイント', 'セキュリティ', 'コスト最適化']
  },
  {
    id: 231,
    name: 'Amazon EC2 Fleet',
    type: 'service',
    cost: 2,
    effect: '複数のインスタンスタイプとAZにわたってEC2容量を効率的にプロビジョニングします。',
    description:
      'Amazon EC2 Fleet を使用すると、複数のインスタンスタイプ、購入オプション（オンデマンド、スポット、リザーブド）、アベイラビリティーゾーンにわたって、単一のAPIコールでEC2容量をプロビジョニングできます。コスト最適化と可用性向上を同時に実現します。',
    category: 'コンピューティング',
    keywords: ['フリート管理', '容量プロビジョニング', 'コスト最適化', '可用性']
  },
  {
    id: 232,
    name: 'Amazon EC2 Capacity Reservations',
    type: 'service',
    cost: 2,
    effect: '特定のAZでEC2容量を予約し、必要な時に確実にインスタンスを起動できます。',
    description:
      'Amazon EC2 Capacity Reservations を使用すると、特定のアベイラビリティーゾーンで任意の期間EC2容量を予約できます。長期契約なしで容量を確保し、重要なワークロードが必要な時に確実にインスタンスを起動できることを保証します。',
    category: 'コンピューティング',
    keywords: ['容量予約', '可用性保証', 'オンデマンド', '重要ワークロード']
  },
  {
    id: 233,
    name: 'AWS Nitro System',
    type: 'service',
    cost: 0,
    effect: '専用ハードウェアとハイパーバイザーによりEC2インスタンスのセキュリティとパフォーマンスを向上させます。',
    description:
      'AWS Nitro System は、専用のNitroカード、Nitroセキュリティチップ、軽量なNitroハイパーバイザーで構成される次世代EC2インスタンスの基盤です。ハードウェアレベルでのセキュリティ、高いネットワークとストレージパフォーマンス、Nitro Enclavesサポートを提供します。',
    category: 'コンピューティング',
    keywords: ['Nitro', 'セキュリティ', 'パフォーマンス', 'ハードウェア最適化']
  },
  {
    id: 234,
    name: 'Enhanced Networking',
    type: 'service',
    cost: 0,
    effect: 'SR-IOVとDPDKを使用してEC2インスタンスのネットワークパフォーマンスを大幅に向上させます。',
    description:
      'Enhanced Networking は、SR-IOV（Single Root I/O Virtualization）を使用して、EC2インスタンスに高いパケット毎秒（PPS）パフォーマンス、低レイテンシ、低ジッターを提供します。Intel 82599 VF、Elastic Network Adapter（ENA）をサポートします。',
    category: 'ネットワーキングとコンテンツ配信',
    keywords: ['高性能ネットワーク', 'SR-IOV', '低レイテンシ', 'ENA']
  },
  {
    id: 235,
    name: 'Amazon EC2 User Data',
    type: 'service',
    cost: 0,
    effect: 'インスタンス起動時にスクリプトを自動実行し、初期設定とアプリケーションデプロイを自動化します。',
    description:
      'Amazon EC2 User Data を使用すると、インスタンス起動時にスクリプトやコマンドを自動実行できます。ソフトウェアのインストール、設定ファイルの更新、アプリケーションの起動など、インスタンスの初期化プロセスを完全に自動化できます。',
    category: 'コンピューティング',
    keywords: ['自動化', '初期設定', 'スクリプト実行', 'ブートストラップ']
  },
  {
    id: 236,
    name: 'AWS Systems Manager Compliance',
    type: 'service',
    cost: 1,
    effect: 'パッチ適用、State Manager関連付け、カスタムコンプライアンスの状況を統合表示します。',
    description:
      'AWS Systems Manager Compliance は、Patch Manager、State Manager、カスタムコンプライアンスタイプの状況を統合して表示します。コンプライアンス違反の特定、修復アクション、レポート生成により、組織のコンプライアンス要件を満たします。',
    category: '管理とガバナンス',
    keywords: ['コンプライアンス監視', '統合表示', '修復アクション', 'レポート']
  },
  {
    id: 237,
    name: 'Amazon EBS Encryption',
    type: 'service',
    cost: 0,
    effect: 'EBSボリューム、スナップショット、AMIを暗号化し、データ保護を強化します。',
    description:
      'Amazon EBS Encryption は、AWS KMSキーを使用してEBSボリューム、スナップショット、AMIを暗号化します。保存時暗号化、転送時暗号化、暗号化されたスナップショットからの暗号化ボリューム作成により、包括的なデータ保護を提供します。',
    category: 'セキュリティ、アイデンティティ、コンプライアンス',
    keywords: ['暗号化', 'データ保護', 'KMS', 'セキュリティ']
  },
  {
    id: 238,
    name: 'Amazon EC2 Instance Types',
    type: 'service',
    cost: 0,
    effect: 'ワークロードの要件に応じて最適化されたハードウェア構成を選択できます。',
    description:
      'Amazon EC2 Instance Types は、汎用（T、M、A）、コンピューティング最適化（C）、メモリ最適化（R、X、z）、ストレージ最適化（I、D、H）、高速コンピューティング（P、G、F）など、様々なワークロードに最適化されたハードウェア構成を提供します。',
    category: 'コンピューティング',
    keywords: ['インスタンスタイプ', 'ワークロード最適化', 'ハードウェア選択', 'パフォーマンス']
  },
  {
    id: 239,
    name: 'Amazon EC2 Instance Store',
    type: 'service',
    cost: 0,
    effect: 'インスタンスに物理的に接続された高性能な一時ストレージを提供します。',
    description:
      'Amazon EC2 Instance Store は、EC2インスタンスのホストコンピュータに物理的に接続されたディスクからの一時ブロックレベルストレージを提供します。非常に高いランダムI/Oパフォーマンスと低レイテンシを実現し、キャッシュやバッファに最適です。',
    category: 'ストレージ',
    keywords: ['一時ストレージ', '高性能', '低レイテンシ', 'インスタンスストア']
  },
  {
    id: 240,
    name: 'AWS Resource Groups',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスやその他のAWSリソースをグループ化し、一括管理を可能にします。',
    description:
      'AWS Resource Groups を使用すると、タグやCloudFormationスタックに基づいてEC2インスタンスやその他のAWSリソースをグループ化できます。リソースの一括操作、監視、自動化により、大規模環境での管理効率を向上させます。',
    category: '管理とガバナンス',
    keywords: ['リソースグループ', '一括管理', 'タグベース', '管理効率']
  },
  {
    id: 241,
    name: 'AWS Compute Optimizer',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスの使用パターンを分析し、コストとパフォーマンスの最適化を推奨します。',
    description:
      'AWS Compute Optimizer は、機械学習を使用してEC2インスタンスの過去の使用パターンを分析し、最適なインスタンスタイプを推奨します。CPU使用率、メモリ使用率、ネットワーク使用率を考慮して、コスト削減とパフォーマンス向上の両方を実現します。',
    category: '管理とガバナンス',
    keywords: ['最適化推奨', '機械学習', 'コスト削減', 'パフォーマンス向上']
  },
  {
    id: 242,
    name: 'Amazon EC2 Serial Console',
    type: 'service',
    cost: 0,
    effect: 'ネットワーク接続に依存せずにEC2インスタンスのシリアルコンソールにアクセスします。',
    description:
      'Amazon EC2 Serial Console は、ネットワーク接続やSSHに依存せずにEC2インスタンスのシリアルコンソールにアクセスできるブラウザベースの対話型コンソールです。ネットワーク設定の問題やブート問題のトラブルシューティングに有効です。',
    category: '管理とガバナンス',
    keywords: ['シリアルコンソール', 'トラブルシューティング', 'ブラウザアクセス', 'ネットワーク非依存']
  },
  {
    id: 243,
    name: 'AWS License Manager',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスで使用するソフトウェアライセンスを一元管理し、コンプライアンスを確保します。',
    description:
      'AWS License Manager は、Microsoft、Oracle、IBM、SAPなどのベンダーからのソフトウェアライセンスを一元管理します。ライセンス使用量の追跡、コンプライアンス監視、自動ライセンス配布により、ライセンス違反のリスクを軽減します。',
    category: '管理とガバナンス',
    keywords: ['ライセンス管理', 'コンプライアンス', '使用量追跡', 'ベンダーライセンス']
  },
  {
    id: 244,
    name: 'Amazon EC2 Image Builder',
    type: 'service',
    cost: 1,
    effect: 'セキュアで最新のカスタムAMIの作成、テスト、配布を自動化します。',
    description:
      'Amazon EC2 Image Builder は、セキュアで最新のLinuxまたはWindowsサーバーイメージの作成、管理、配布を簡素化します。自動パッチ適用、セキュリティ強化、テスト実行、複数リージョンへの配布により、AMI管理を完全に自動化します。',
    category: 'コンピューティング',
    keywords: ['AMI作成', '自動化', 'セキュリティ強化', 'イメージ管理']
  },
  {
    id: 245,
    name: 'AWS Systems Manager Distributor',
    type: 'service',
    cost: 0,
    effect: 'ソフトウェアパッケージをEC2インスタンスに安全に配布・インストールします。',
    description:
      'AWS Systems Manager Distributor を使用すると、ソフトウェアパッケージをマネージドノードに安全に配布・インストールできます。パッケージのバージョン管理、段階的デプロイメント、インストール状況の監視により、大規模なソフトウェア配布を効率化します。',
    category: '管理とガバナンス',
    keywords: ['ソフトウェア配布', 'パッケージ管理', 'バージョン管理', '段階的デプロイ']
  },
  {
    id: 246,
    name: 'Amazon EC2 Spot Fleet',
    type: 'service',
    cost: 1,
    effect: '複数のスポットインスタンスプールから最適なインスタンスを自動選択し、コストを最小化します。',
    description:
      'Amazon EC2 Spot Fleet は、指定された目標容量を満たすために、複数のスポットインスタンスプールから最適なインスタンスを起動・管理します。価格とキャパシティの最適化、自動スケーリング、多様化戦略により、コスト効率的な容量管理を実現します。',
    category: 'コンピューティング',
    keywords: ['スポットフリート', 'コスト最適化', '容量管理', '多様化戦略']
  },
  {
    id: 247,
    name: 'AWS Systems Manager Maintenance Windows',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンスのメンテナンス作業を定期的にスケジュール実行します。',
    description:
      'AWS Systems Manager Maintenance Windows を使用すると、パッチ適用、ドライバー更新、ソフトウェアインストールなどのメンテナンス作業を定期的にスケジュール実行できます。ビジネスへの影響を最小限に抑えながら、システムの健全性を維持します。',
    category: '管理とガバナンス',
    keywords: ['メンテナンス窓', 'スケジュール実行', 'パッチ適用', '定期メンテナンス']
  },
  {
    id: 248,
    name: 'Amazon EC2 Instance Metadata Service',
    type: 'service',
    cost: 0,
    effect: 'EC2インスタンス内からインスタンスメタデータとユーザーデータにアクセスできます。',
    description:
      'Amazon EC2 Instance Metadata Service（IMDS）は、実行中のインスタンス内からインスタンスメタデータとユーザーデータにアクセスするためのサービスです。IMDSv1とIMDSv2をサポートし、セキュリティ強化のためIMDSv2の使用が推奨されます。',
    category: 'コンピューティング',
    keywords: ['メタデータサービス', 'インスタンス情報', 'ユーザーデータ', 'IMDS']
  },
  {
    id: 249,
    name: 'AWS Config Conformance Packs',
    type: 'service',
    cost: 1,
    effect: 'EC2インスタンスのセキュリティとコンプライアンスのベストプラクティスを一括適用します。',
    description:
      'AWS Config Conformance Packs は、セキュリティ、運用、コスト最適化のベストプラクティスに基づいたConfig Rulesのコレクションです。EC2インスタンスに対してCIS、PCI DSS、NIST等の標準に準拠した設定を一括で評価・適用できます。',
    category: 'セキュリティ、アイデンティティ、コンプライアンス',
    keywords: ['コンプライアンスパック', 'ベストプラクティス', 'セキュリティ標準', '一括適用']
  },
  {
    id: 250,
    name: 'Amazon EC2 Global View',
    type: 'service',
    cost: 0,
    effect: '全リージョンのEC2リソースを単一のコンソールで統合表示・管理します。',
    description:
      'Amazon EC2 Global View を使用すると、すべてのAWSリージョンのEC2インスタンス、AMI、スナップショット、ボリューム、セキュリティグループを単一のコンソールで表示・管理できます。グローバルなリソース管理と運用効率の向上を実現します。',
    category: '管理とガバナンス',
    keywords: ['グローバルビュー', '統合管理', 'マルチリージョン', '運用効率']
  }
];
