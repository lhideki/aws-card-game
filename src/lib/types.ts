/**
 * 共通型定義ファイル
 * アプリケーション全体で使用する型を定義します
 */

// カードの型定義
export interface Card {
  id: number;
  name: string;
  type: 'service' | 'support';
  cost: number;
  effect: string;
  description: string;
  imageUrl?: string;
  category?: string;
  keywords: string[];
  /** 次のターンで引くカードを選択できるサポートカードか */
  allowsCardSelection?: boolean;
  /** 次のターンで引くカード枚数を倍増させる係数 */
  drawMultiplier?: number;
  /** 次のターンで引くカード枚数を追加する値 */
  extraCardsNextTurn?: number;
  /** サービスカード合計コストから減らす値 */
  costReduction?: number;
  /** サービスカード1枚あたりのコスト削減量 */
  costReductionPerService?: number;
}

// チャレンジの型定義
export interface Challenge {
  id: number;
  title: string;
  description: string;
  budgetCost: number;
  difficulty: 'easy' | 'medium' | 'hard';
  keywords: string[];
}

// ゲームの状態を表す型
export interface GameState {
  currentTurn: number; // 現在のターン数
  totalTurns: number; // 合計ターン数
  serviceHand: Card[];
  supportCards: Card[];
  activatedSupportCards: Card[];
  selectedServiceCards: Card[]; // 複数のサービスカードを選択できるように配列に変更
  currentChallenge: Challenge | null;
  challengeStatus: string;
  challengeStatusLevel: number;
  discardedCards: Card[];
  cardsToDrawNextTurn: number;
  /** サポートカード効果で選択した次のターンで引くカード */
  selectedCardForNextTurn: Card | null;
  /** 選択肢として提示されているカード */
  cardSelectionOptions: Card[];
  completedChallenges: CompletedChallenge[];
  totalScore: number;
  serviceDeck: Card[];
  supportDeck: Card[];
  mode: string;
  isGameOver: boolean;
  usedServiceCards: Card[]; // これまでのターンで使用したサービスカード
  usedSupportCards: Card[]; // これまでのターンで使用したサポートカード
  totalCostUsed: number; // これまでのターンで使用した総コスト
}

// 完了したチャレンジの型
export interface CompletedChallenge {
  challenge: Challenge;
  solution: Card[];
  evaluation: string;
  score: number;
}

// ターン履歴の型
export interface TurnHistory {
  serviceCards: Card[]; // 複数のサービスカードに対応
  supportCards: Card[];
  evaluation: string;
  statusLevel: number;
}

// 評価結果の型
export interface EvaluationResult {
  message: string;
  statusLevel: number;
}

// 最終評価結果の型
export interface FinalEvaluationResult {
  message: string;
  score: number;
}
