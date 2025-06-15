import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';

export class AwsCardGameStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AppRunnerサービスのIAMロールを作成
    const instanceRole = new iam.Role(this, 'AppRunnerInstanceRole', {
      assumedBy: new iam.ServicePrincipal('tasks.apprunner.amazonaws.com'),
    });

    // BedrockへのアクセスポリシーをIAMロールに追加
    instanceRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'bedrock:InvokeModel',
        ],
        resources: ['*'], // 本番環境では特定のモデルARNに制限することを推奨
      })
    );

    // ECRリポジトリのURIを構築
    const accountId = cdk.Stack.of(this).account;
    const region = cdk.Stack.of(this).region;
    const repositoryUri = `${accountId}.dkr.ecr.${region}.amazonaws.com/aws-card-game`;

    // AppRunnerサービスの作成
    const appRunnerService = new apprunner.CfnService(this, 'AwsCardGameService', {
      serviceName: 'aws-card-game',
      sourceConfiguration: {
        autoDeploymentsEnabled: true,
        imageRepository: {
          imageIdentifier: `${repositoryUri}:latest`,
          imageRepositoryType: 'ECR',
          imageConfiguration: {
            port: '3000',
            runtimeEnvironmentVariables: [
              {
                name: 'NEXT_PUBLIC_AWS_REGION',
                value: this.region,
              },
              {
                name: 'NEXT_PUBLIC_BEDROCK_MODEL_ID',
                value: 'anthropic.claude-3-haiku-20240307-v1:0',
              },
            ],
          },
        },
        authenticationConfiguration: {
          accessRoleArn: new iam.Role(this, 'AppRunnerAccessRole', {
            assumedBy: new iam.ServicePrincipal('build.apprunner.amazonaws.com'),
            managedPolicies: [
              iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSAppRunnerServicePolicyForECRAccess'),
            ],
          }).roleArn,
        },
      },
      instanceConfiguration: {
        cpu: '1 vCPU',
        memory: '2 GB',
        instanceRoleArn: instanceRole.roleArn,
      },
    });

    // 出力
    new cdk.CfnOutput(this, 'AppRunnerServiceUrl', {
      value: `https://${appRunnerService.attrServiceUrl}`,
      description: 'URL of the AWS Card Game App Runner Service',
    });

    new cdk.CfnOutput(this, 'ECRRepositoryUri', {
      value: repositoryUri,
      description: 'URI of the ECR Repository',
    });
  }
}
