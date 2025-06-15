'use client';

/**
 * 最終評価ページコンポーネント
 * ゲーム終了時の最終評価を表示します
 */

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import LoadingSpinner from '../../components/LoadingSpinner';

interface TurnEvaluation {
  turn: number;
  serviceCards: string[];
  supportCards: string[];
  cost: number;
  evaluation: string;
  statusLevel: number;
}

interface FinalEvaluation {
  totalCost: number;
  budgetCost: number;
  finalStatusLevel: number;
  evaluation: string;
  score: number;
  challenge: {
    title: string;
    description: string;
  };
}

function EvaluationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [turnEvaluations, setTurnEvaluations] = useState<TurnEvaluation[]>([]);
  const [finalEvaluation, setFinalEvaluation] = useState<FinalEvaluation | null>(null);
  
  // 評価データを取得
  useEffect(() => {
    try {
      // セッションストレージから評価データを取得
      const storedData = sessionStorage.getItem('evaluationData');
      
      if (storedData) {
        const data = JSON.parse(storedData);
        
        // ターン毎の評価データを作成
        const turnEvals = data.turnHistory.map((turn: any, index: number) => ({
          turn: index + 1,
          serviceCards: turn.serviceCards.map((card: any) => card.name),
          supportCards: turn.supportCards.map((card: any) => card.name),
          cost: turn.serviceCards.reduce((sum: number, card: any) => sum + card.cost, 0),
          evaluation: turn.evaluation,
          statusLevel: turn.statusLevel
        }));
        
        setTurnEvaluations(turnEvals);
        
        // 最終評価データを作成
        setFinalEvaluation({
          totalCost: data.totalCostUsed,
          budgetCost: data.challenge.budgetCost,
          finalStatusLevel: data.finalStatusLevel,
          evaluation: data.finalEvaluation.message,
          score: data.finalEvaluation.score,
          challenge: {
            title: data.challenge.title,
            description: data.challenge.description
          }
        });
        
        setIsLoading(false);
      } else {
        // データがない場合はダミーデータを使用（デモ用）
        setTimeout(() => {
          const dummyTurnEvaluations: TurnEvaluation[] = [
            {
              turn: 1,
              serviceCards: ['EC2', 'S3'],
              supportCards: ['FinOps'],
              cost: 4,
              evaluation: "EC2インスタンスとS3バケットの組み合わせは基本的な構成として適切です。FinOpsの活用でコスト効率も向上しています。ただし、セキュリティ面での考慮が不足しています。",
              statusLevel: 35
            },
            {
              turn: 2,
              serviceCards: ['VPC', 'Security Group'],
              supportCards: [],
              cost: 3,
              evaluation: "VPCとセキュリティグループの追加により、セキュリティ面が大幅に改善されました。ネットワーク分離とアクセス制御が適切に設定されています。",
              statusLevel: 65
            },
            {
              turn: 3,
              serviceCards: ['CloudFront', 'WAF'],
              supportCards: ['Well-Architected Framework'],
              cost: 5,
              evaluation: "CloudFrontとWAFの追加により、コンテンツ配信の高速化とセキュリティ強化が実現しました。Well-Architected Frameworkの適用で全体的なアーキテクチャの質が向上しています。",
              statusLevel: 90
            }
          ];
          
          const dummyFinalEvaluation: FinalEvaluation = {
            totalCost: 12,
            budgetCost: 15,
            finalStatusLevel: 90,
            evaluation: "提案されたアーキテクチャは、セキュリティ、パフォーマンス、コスト効率のバランスが取れています。EC2とS3による基本構成に、VPCとセキュリティグループでセキュリティを強化し、CloudFrontとWAFでパフォーマンスと保護を向上させています。予算内に収まっており、Well-Architected Frameworkの原則に従った優れた設計です。",
            score: 85,
            challenge: {
              title: "セキュアなウェブアプリケーションの構築",
              description: "高いセキュリティ要件を満たしながら、グローバルに展開可能なウェブアプリケーションのインフラを設計してください。予算は15コストユニットです。"
            }
          };
          
          setTurnEvaluations(dummyTurnEvaluations);
          setFinalEvaluation(dummyFinalEvaluation);
          setIsLoading(false);
        }, 1500);
      }
    } catch (error) {
      console.error('Error loading evaluation data:', error);
      // エラー時もダミーデータを表示
      setTimeout(() => {
        const dummyTurnEvaluations: TurnEvaluation[] = [
          {
            turn: 1,
            serviceCards: ['EC2', 'S3'],
            supportCards: ['FinOps'],
            cost: 4,
            evaluation: "EC2インスタンスとS3バケットの組み合わせは基本的な構成として適切です。FinOpsの活用でコスト効率も向上しています。ただし、セキュリティ面での考慮が不足しています。",
            statusLevel: 35
          },
          {
            turn: 2,
            serviceCards: ['VPC', 'Security Group'],
            supportCards: [],
            cost: 3,
            evaluation: "VPCとセキュリティグループの追加により、セキュリティ面が大幅に改善されました。ネットワーク分離とアクセス制御が適切に設定されています。",
            statusLevel: 65
          },
          {
            turn: 3,
            serviceCards: ['CloudFront', 'WAF'],
            supportCards: ['Well-Architected Framework'],
            cost: 5,
            evaluation: "CloudFrontとWAFの追加により、コンテンツ配信の高速化とセキュリティ強化が実現しました。Well-Architected Frameworkの適用で全体的なアーキテクチャの質が向上しています。",
            statusLevel: 90
          }
        ];
        
        const dummyFinalEvaluation: FinalEvaluation = {
          totalCost: 12,
          budgetCost: 15,
          finalStatusLevel: 90,
          evaluation: "提案されたアーキテクチャは、セキュリティ、パフォーマンス、コスト効率のバランスが取れています。EC2とS3による基本構成に、VPCとセキュリティグループでセキュリティを強化し、CloudFrontとWAFでパフォーマンスと保護を向上させています。予算内に収まっており、Well-Architected Frameworkの原則に従った優れた設計です。",
          score: 85,
          challenge: {
            title: "セキュアなウェブアプリケーションの構築",
            description: "高いセキュリティ要件を満たしながら、グローバルに展開可能なウェブアプリケーションのインフラを設計してください。予算は15コストユニットです。"
          }
        };
        
        setTurnEvaluations(dummyTurnEvaluations);
        setFinalEvaluation(dummyFinalEvaluation);
        setIsLoading(false);
      }, 1500);
    }
  }, []);
  
  // ステータスレベルに応じた色を取得
  const getStatusColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    if (level >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };
  
  // スコアに応じた色を取得
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-blue-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <LoadingSpinner size="lg" text="評価データを読み込み中..." />
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-aws-blue mb-2">最終評価</h1>
        <div className="bg-white rounded-lg shadow-card border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-aws-blue mb-4">課題: {finalEvaluation?.challenge.title}</h2>
          <p className="text-gray-700 mb-4">{finalEvaluation?.challenge.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-aws-gray rounded-lg p-3 flex items-center">
              <span className="text-gray-700 mr-2">予算:</span>
              <span className="font-bold">{finalEvaluation?.budgetCost} コスト</span>
            </div>
            <div className="bg-aws-gray rounded-lg p-3 flex items-center">
              <span className="text-gray-700 mr-2">使用コスト:</span>
              <span className={`font-bold ${finalEvaluation && finalEvaluation.totalCost > finalEvaluation.budgetCost ? 'text-red-500' : 'text-green-500'}`}>
                {finalEvaluation?.totalCost} コスト
              </span>
            </div>
            <div className="bg-aws-gray rounded-lg p-3 flex items-center">
              <span className="text-gray-700 mr-2">最終状況:</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div 
                    className={`h-2.5 rounded-full ${getStatusColor(finalEvaluation?.finalStatusLevel || 0)}`} 
                    style={{ width: `${finalEvaluation?.finalStatusLevel || 0}%` }}
                  ></div>
                </div>
                <span className="font-bold">{finalEvaluation?.finalStatusLevel}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-aws-blue mb-4">ターン毎の評価</h2>
        <div className="space-y-4">
          {turnEvaluations.map((turn, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-aws-blue">ターン {turn.turn}</h3>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">状況:</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className={`h-2.5 rounded-full ${getStatusColor(turn.statusLevel)}`} 
                      style={{ width: `${turn.statusLevel}%` }}
                    ></div>
                  </div>
                  <span className="font-bold">{turn.statusLevel}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-aws-blue mb-2">使用したサービスカード</h4>
                  <div className="flex flex-wrap gap-2">
                    {turn.serviceCards.map((card, i) => (
                      <span key={i} className="bg-aws-light-blue text-white px-2 py-1 rounded-md text-sm">
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-aws-blue mb-2">使用したサポートカード</h4>
                  <div className="flex flex-wrap gap-2">
                    {turn.supportCards.length > 0 ? turn.supportCards.map((card, i) => (
                      <span key={i} className="bg-aws-light-orange text-aws-blue px-2 py-1 rounded-md text-sm">
                        {card}
                      </span>
                    )) : (
                      <span className="text-gray-500 text-sm">なし</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mb-2">
                <h4 className="font-semibold text-aws-blue mb-2">コスト</h4>
                <span className="bg-aws-gray text-gray-700 px-2 py-1 rounded-md text-sm">
                  {turn.cost} コスト
                </span>
              </div>
              
              <div>
                <h4 className="font-semibold text-aws-blue mb-2">評価</h4>
                <div className="prose prose-sm max-w-none text-gray-700">
                  <ReactMarkdown>{turn.evaluation}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-aws-blue mb-4">総合評価</h2>
        <div className="bg-white rounded-lg shadow-card border border-gray-200 p-6">
          <div className="prose prose-sm max-w-none text-gray-700 mb-6">
            <ReactMarkdown>{finalEvaluation?.evaluation || ''}</ReactMarkdown>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-xl font-bold mb-2">最終スコア</p>
              <p className={`text-6xl font-bold ${getScoreColor(finalEvaluation?.score || 0)}`}>
                {finalEvaluation?.score}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Link 
          href="/"
          className="btn btn-secondary px-8 py-3 text-lg"
        >
          トップページに戻る
        </Link>
        <Link 
          href={`/results?score=${finalEvaluation?.score || 0}`}
          className="btn btn-primary px-8 py-3 text-lg"
        >
          結果を見る
        </Link>
      </div>
    </div>
  );
}

export default function Evaluation() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <LoadingSpinner size="lg" text="評価データを読み込み中..." />
      </div>
    </div>}>
      <EvaluationContent />
    </Suspense>
  );
}
