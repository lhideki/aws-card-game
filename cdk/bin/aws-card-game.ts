#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCardGameStack } from '../lib/aws-card-game-stack';

const app = new cdk.App();
new AwsCardGameStack(app, 'AwsCardGameStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID, 
    region: process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1'
  },
  description: 'AWS Card Game - A game to solve AWS architecture challenges',
});

app.synth();
