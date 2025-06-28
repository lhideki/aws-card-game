'use client'

/**
 * ゲームページコンポーネント
 * ゲームの主要な画面とロジックを提供します
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card as CardType, Challenge, GameState, TurnHistory } from '../../lib/types';
import { gameModes, GameMode } from '../../data/gameModes';
import ChallengeCard from '../../components/ChallengeCard';
import ChallengeStatus from '../../components/ChallengeStatus';
import EnhancedHand from '../../components/EnhancedHand';
import SelectedCards from '../../components/SelectedCards';
import LoadingSpinner from '../../components/LoadingSpinner';
import LoadingOverlay from '../../components/LoadingOverlay';
import CardSelectionModal from '../../components/CardSelectionModal';
import { 
  initializeGame, 
  selectNewChallenge,
  selectNewChallengeAndDealCards,
  selectServiceCard, 
  toggleSupportCard,
  discardServiceCards,
  skipTurn,
  submitSolution,
  advanceToNextTurn,
  finishGame,
  calculateTotalCost,
  calculateSynergyBonus,
  selectCardForNextTurn
} from '../../lib/gameLogic';
import { evaluateTurn, evaluateSkip, evaluateFinalSolution, getChallenge } from '../../lib/clientActions';

export default function Game() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [turnHistory, setTurnHistory] = useState<TurnHistory[]>([]);
  const [mode, setMode] = useState<GameMode | null>(null);
  
  // ゲームの初期化
  useEffect(() => {
    if (!mode) return;

    const config = gameModes[mode];
    console.log('Initializing game...', mode);
    const initialGameState = initializeGame(
      config.serviceCards,
      config.supportCards,
      mode
    );
    setGameState(initialGameState);

    setTimeout(async () => {
      try {
        const challenge = await getChallenge([], mode);
        setGameState(prevState => {
          if (!prevState) return null;
          return selectNewChallengeAndDealCards(prevState, challenge);
        });
      } catch (error) {
        console.error('Failed to fetch challenge:', error);
        const challenge = selectNewChallenge(config.challenges);
        setGameState(prevState => {
          if (!prevState) return null;
          return selectNewChallengeAndDealCards(prevState, challenge);
        });
      }
    }, 1500);
  }, [mode]);
  
  // サービスカードを選択する処理
  const handleServiceCardSelect = (card: CardType) => {
    if (!gameState) return;
    setGameState(selectServiceCard(gameState, card));
  };
  
  // サポートカードを有効化/無効化する処理
  const handleSupportCardToggle = (card: CardType) => {
    if (!gameState) return;
    setGameState(toggleSupportCard(gameState, card));
  };
  
  // サービスカードを捨てる処理
  const handleDiscardCards = (cards: CardType[]) => {
    if (!gameState || cards.length === 0) return;
    setGameState(discardServiceCards(gameState, cards));
  };
  
  // サービスカードの選択を解除する処理
  const handleServiceCardRemove = (card: CardType) => {
    if (!gameState) return;
    setGameState({
      ...gameState,
      selectedServiceCards: gameState.selectedServiceCards.filter(c => c.id !== card.id),
      serviceHand: [...gameState.serviceHand, card]
    });
  };
  
  // サポートカードの有効化を解除する処理
  const handleSupportCardDeactivate = (card: CardType) => {
    if (!gameState) return;
    setGameState({
      ...gameState,
      activatedSupportCards: gameState.activatedSupportCards.filter(c => c.id !== card.id)
    });
  };

  // 次のターンで引くカードを選択する
  const handleSelectNextTurnCard = (card: CardType) => {
    if (!gameState) return;
    setGameState(selectCardForNextTurn(gameState, card));
  };

  const handleCloseCardSelection = () => {
    if (!gameState) return;
    setGameState({ ...gameState, cardSelectionOptions: [] });
  };
  
  // ターンをスキップする処理
  const handleSkipTurn = async () => {
    if (!gameState || !gameState.currentChallenge) return;
    
    setIsLoading(true);
    
    try {
      // スキップの評価 - サーバーサイドAPIを使用
      const result = await evaluateSkip(
        gameState.currentChallenge,
        gameState.challengeStatus,
        gameState.challengeStatusLevel
      );
      
      // 状態を更新
      const newGameState = skipTurn(gameState);
      newGameState.challengeStatus = result.message;
      newGameState.challengeStatusLevel = result.statusLevel;
      
      // 次のターンに進む
      setTimeout(() => {
        // 新しいカードを引く
        const nextGameState = advanceToNextTurn(newGameState, result.message, result.statusLevel);
        
        // 状態を更新
        setGameState(nextGameState);
        
        // ターン履歴を更新
        const newTurnHistory: TurnHistory = {
          serviceCards: [],
          supportCards: [],
          evaluation: result.message,
          statusLevel: result.statusLevel
        };
        
        const updatedTurnHistory = [...turnHistory, newTurnHistory];
        setTurnHistory(updatedTurnHistory);
        
        // 3ターン目の場合は直接最終評価へ進む
        if (nextGameState.currentTurn > nextGameState.totalTurns) {
          handleFinalEvaluation(nextGameState.currentChallenge!, updatedTurnHistory, result.statusLevel);
        } else {
          setIsLoading(false);
        }
      }, 1000);
    } catch (error) {
      console.error('Error skipping turn:', error);
      setIsLoading(false);
    }
  };
  
  // 解決策を提出する処理
  const handleSubmitSolution = async () => {
    if (!gameState || !gameState.currentChallenge || gameState.selectedServiceCards.length === 0) return;
    
    setIsLoading(true);
    
    try {
      // 解決策を評価 - サーバーサイドAPIを使用
      const result = await evaluateTurn(
        gameState.currentChallenge,
        gameState.selectedServiceCards,
        gameState.activatedSupportCards,
        gameState.challengeStatus,
        gameState.challengeStatusLevel
      );

      // サポートカードのシナジー効果を計算
      const synergyBonus = calculateSynergyBonus(
        gameState.selectedServiceCards,
        gameState.activatedSupportCards,
        gameState.currentChallenge
      );
      const adjustedStatusLevel = Math.min(100, result.statusLevel + synergyBonus);
      result.statusLevel = adjustedStatusLevel;
      
      // 解決策を記録
      const submittedServiceCards = [...gameState.selectedServiceCards];
      const activatedSupportCards = [...gameState.activatedSupportCards];
      
      // 状態を更新
      const updatedGameState = submitSolution(gameState);
      updatedGameState.challengeStatus = result.message;
      updatedGameState.challengeStatusLevel = result.statusLevel;
      
      // 次のターンに進む
      setTimeout(() => {
        const nextGameState = advanceToNextTurn(updatedGameState, result.message, result.statusLevel);
        
        // 状態を更新
        setGameState(nextGameState);
        
        // ターン履歴を更新
        const newTurnHistory: TurnHistory = {
          serviceCards: submittedServiceCards,
          supportCards: activatedSupportCards,
          evaluation: result.message,
          statusLevel: result.statusLevel
        };
        
        const updatedTurnHistory = [...turnHistory, newTurnHistory];
        setTurnHistory(updatedTurnHistory);
        
        // 3ターン目の場合は直接最終評価へ進む
        if (nextGameState.currentTurn > nextGameState.totalTurns) {
          handleFinalEvaluation(nextGameState.currentChallenge!, updatedTurnHistory, result.statusLevel);
        } else {
          setIsLoading(false);
        }
      }, 1000);
    } catch (error) {
      console.error('Error evaluating solution:', error);
      setIsLoading(false);
    }
  };
  
  // 最終評価を行う処理
  const handleFinalEvaluation = async (
    challenge: Challenge,
    history: TurnHistory[],
    finalStatusLevel: number
  ) => {
    try {
      // 最終評価中のローディング表示
      setIsLoading(true);
      
      // 最終評価 - サーバーサイドAPIを使用
      const result = await evaluateFinalSolution(
        challenge,
        history,
        finalStatusLevel,
        gameState?.totalCostUsed || 0
      );
      
      // 評価データをセッションストレージに保存
      const evaluationData = {
        challenge: challenge,
        turnHistory: history,
        finalStatusLevel: finalStatusLevel,
        totalCostUsed: gameState?.totalCostUsed || 0,
        finalEvaluation: result
      };
      
      // セッションストレージに保存
      sessionStorage.setItem('evaluationData', JSON.stringify(evaluationData));
      
      // 評価ページに遷移
      router.push('/evaluation');
      
    } catch (error) {
      console.error('Error in final evaluation:', error);
      setIsLoading(false);
    }
  };
  
  if (!mode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {Object.values(gameModes).map(m => (
            <div key={m.id} className="bg-white rounded-lg shadow-card border border-gray-200 p-6 flex flex-col">
              <h2 className="text-xl font-bold text-aws-blue mb-2">{m.title}</h2>
              <p className="text-gray-700 flex-grow whitespace-pre-wrap">{m.description}</p>
              <button
                className="btn btn-primary mt-4"
                onClick={() => setMode(m.id as GameMode)}
              >
                このモードで開始
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <LoadingSpinner size="lg" text="ゲームを準備中..." />
        </div>
      </div>
    );
  }
  
  const totalCost = calculateTotalCost(gameState.selectedServiceCards, gameState.activatedSupportCards);
  const budgetCost = gameState.currentChallenge?.budgetCost || 0;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-aws-blue">AWS カードゲーム</h1>
        <div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200 text-aws-blue">
          ターン: {gameState.currentTurn} / {gameState.totalTurns}
        </div>
      </div>
      
      {gameState.currentChallenge && (
        <div className="mt-6 sticky top-0 z-20 bg-white">
          <ChallengeCard challenge={gameState.currentChallenge} />
          <ChallengeStatus
            status={gameState.challengeStatus}
            statusLevel={gameState.challengeStatusLevel}
            typingSpeed={20} // 少し速めのタイピング速度
          />
        </div>
      )}
      
      <SelectedCards 
        serviceCards={gameState.selectedServiceCards}
        activatedSupportCards={gameState.activatedSupportCards}
        onServiceCardRemove={handleServiceCardRemove}
        onSupportCardDeactivate={handleSupportCardDeactivate}
        totalCost={totalCost}
        budgetCost={budgetCost}
        totalCostUsed={gameState.totalCostUsed}
      />
      
      <EnhancedHand 
        serviceCards={gameState.serviceHand}
        supportCards={gameState.supportCards}
        onServiceCardSelect={handleServiceCardSelect}
        onSupportCardToggle={handleSupportCardToggle}
        onDiscardCards={handleDiscardCards}
        selectedServiceCards={gameState.selectedServiceCards}
        activatedSupportCards={gameState.activatedSupportCards}
        maxServiceCards={3} // 最大3枚まで選択可能
        maxCost={budgetCost * 2} // 予算の2倍までは選択可能に
        currentCost={totalCost}
        challenge={gameState.currentChallenge}
      />
      
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="btn btn-primary px-8 py-3 text-lg relative flex items-center justify-center"
          onClick={handleSubmitSolution}
          disabled={gameState.selectedServiceCards.length === 0 || isLoading}
        >
          {isLoading ? (
            <>
              <span className="mr-2">評価中</span>
              <LoadingSpinner size="sm" />
            </>
          ) : (
            "解決策を提出する"
          )}
        </button>
        
        <button
          className="btn btn-secondary px-8 py-3 text-lg relative flex items-center justify-center"
          onClick={handleSkipTurn}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="mr-2">スキップ中</span>
              <LoadingSpinner size="sm" />
            </>
          ) : (
            "ターンをスキップ"
          )}
        </button>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-300">
        {gameState.cardsToDrawNextTurn > 1 && (
          <div>次のターンで引くカード: {gameState.cardsToDrawNextTurn}枚</div>
        )}
      </div>

      {gameState.cardSelectionOptions.length > 0 && (
        <CardSelectionModal
          cards={gameState.cardSelectionOptions}
          onSelect={handleSelectNextTurnCard}
          onClose={handleCloseCardSelection}
        />
      )}

      {isLoading && <LoadingOverlay text="LLMの回答を待っています..." />}
    </div>
  );
}
