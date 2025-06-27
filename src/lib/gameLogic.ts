/**
 * ゲームロジックを管理するモジュール
 * ゲームの状態管理や操作に関するロジックを提供します
 */

import { Card, Challenge, GameState, CompletedChallenge } from './types';

// 定数
const INITIAL_SERVICE_HAND_SIZE = 10; // 初期サービスカード手札サイズを10枚に変更
const INITIAL_SUPPORT_CARDS_SIZE = 5; // 初期サポートカードサイズを5枚に変更
const TOTAL_TURNS = 3; // 1ゲームは3ターン
const DEFAULT_STATUS_LEVEL = 50;
const MAX_SERVICE_CARDS = 3; // 一度に選択できるサービスカードの最大数

/**
 * ゲームの初期状態を作成する関数
 * @returns 初期化されたゲーム状態
 */
export function initializeGame(
  serviceCards: Card[],
  supportCards: Card[],
  mode: string
): GameState {
  // 初期状態では手札を空にする
  return {
    currentTurn: 1,
    totalTurns: TOTAL_TURNS,
    serviceHand: [], // 空の配列で初期化
    supportCards: [], // 空の配列で初期化
    activatedSupportCards: [],
    selectedServiceCards: [],
    currentChallenge: null,
    challengeStatus: "課題が提示されました。解決策を考えてください。",
    challengeStatusLevel: DEFAULT_STATUS_LEVEL,
    discardedCards: [],
    cardsToDrawNextTurn: 1,
    selectedCardForNextTurn: null,
    cardSelectionOptions: [],
    completedChallenges: [],
    totalScore: 0,
    serviceDeck: [...serviceCards],
    supportDeck: [...supportCards],
    mode,
    isGameOver: false,
    usedServiceCards: [],
    usedSupportCards: [],
    totalCostUsed: 0
  };
}

/**
 * カードをシャッフルする関数
 * @param cards シャッフルするカードの配列
 * @returns シャッフルされたカードの配列
 */
function shuffleCards<T>(cards: T[]): T[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * カードと課題の関連性をスコア化する関数
 * @param card カード
 * @param challenge 課題
 * @returns 関連性スコア（0〜100）
 */
function calculateRelevanceScore(card: Card, challenge: Challenge): number {
  if (!challenge) return 0;
  
  // キーワードの一致数をカウント
  let matchCount = 0;
  for (const keyword of card.keywords) {
    if (challenge.keywords.includes(keyword)) {
      matchCount++;
    }
  }
  
  // 一致するキーワードがない場合は0を返す
  if (matchCount === 0) return 0;
  
  // カードのキーワード数に対する一致率を計算（最大100）
  const matchRatio = (matchCount / card.keywords.length) * 100;
  
  // カードのコストと課題の予算を考慮したボーナス
  // コストが予算以下の場合はボーナス、超える場合はペナルティ
  const costFactor = card.cost <= challenge.budgetCost ? 10 : -10;
  
  // 最終スコアを計算（0〜100の範囲に収める）
  const score = Math.min(100, Math.max(0, matchRatio + costFactor));
  
  return score;
}

/**
 * チャレンジに関連するカードをフィルタリングする関数
 * @param cards カードの配列
 * @param challenge チャレンジ
 * @returns チャレンジに関連するカードの配列
 */
function filterCardsByChallenge(cards: Card[], challenge: Challenge): Card[] {
  if (!challenge) return cards;
  
  return cards.filter(card => {
    // カードのキーワードとチャレンジのキーワードが一致するものを探す
    return card.keywords.some(keyword => 
      challenge.keywords.includes(keyword)
    );
  });
}

/**
 * カードを関連性スコアでソートする関数
 * @param cards カードの配列
 * @param challenge チャレンジ
 * @returns 関連性スコアでソートされたカードの配列
 */
function sortCardsByRelevance(cards: Card[], challenge: Challenge): Card[] {
  if (!challenge) return cards;
  
  // 各カードの関連性スコアを計算し、ソート
  return [...cards].sort((a, b) => {
    const scoreA = calculateRelevanceScore(a, challenge);
    const scoreB = calculateRelevanceScore(b, challenge);
    return scoreB - scoreA; // 降順ソート
  });
}

/**
 * カードをカテゴリごとにグループ化する関数
 * @param cards カードの配列
 * @returns カテゴリごとにグループ化されたカードのマップ
 */
function groupCardsByCategory(cards: Card[]): Map<string, Card[]> {
  const categoryMap = new Map<string, Card[]>();
  
  for (const card of cards) {
    if (card.category) {
      if (!categoryMap.has(card.category)) {
        categoryMap.set(card.category, []);
      }
      categoryMap.get(card.category)!.push(card);
    }
  }
  
  return categoryMap;
}

/**
 * 各カテゴリから均等にカードを選択する関数
 * @param categoryMap カテゴリごとにグループ化されたカードのマップ
 * @param count 選択するカードの総数
 * @returns 選択されたカードの配列
 */
function selectCardsFromCategories(categoryMap: Map<string, Card[]>, count: number): Card[] {
  const result: Card[] = [];
  const categories = Array.from(categoryMap.keys());
  
  // カテゴリがない場合は空配列を返す
  if (categories.length === 0) return result;
  
  // 各カテゴリから選択するカードの数を計算
  const cardsPerCategory = Math.floor(count / categories.length);
  let remaining = count % categories.length;
  
  // 各カテゴリからカードを選択
  for (const category of categories) {
    const categoryCards = categoryMap.get(category)!;
    const shuffledCards = shuffleCards(categoryCards);
    
    // このカテゴリから選択するカード数
    const selectCount = cardsPerCategory + (remaining > 0 ? 1 : 0);
    if (remaining > 0) remaining--;
    
    // カードを選択
    const selectedCards = shuffledCards.slice(0, Math.min(selectCount, shuffledCards.length));
    result.push(...selectedCards);
  }
  
  // 必要な数に達していない場合は、ランダムにカードを追加
  if (result.length < count) {
    const allCards = Array.from(categoryMap.values()).flat();
    const remainingCards = allCards.filter(card => !result.includes(card));
    const shuffledRemaining = shuffleCards(remainingCards);
    result.push(...shuffledRemaining.slice(0, count - result.length));
  }
  
  return shuffleCards(result);
}

/**
 * チャレンジに関連するカードと関連しないカードを取得する関数
 * @param cards カードの配列
 * @param challenge チャレンジ
 * @param minCount 最低限必要なカード数
 * @returns チャレンジに関連するカードと関連しないカードの配列
 */
function getRelatedAndUnrelatedCards(cards: Card[], challenge: Challenge, minCount: number): Card[] {
  // チャレンジに関連するカードをフィルタリング
  const relatedCards = filterCardsByChallenge(cards, challenge);
  
  console.log(`Found ${relatedCards.length} cards related to challenge "${challenge.title}"`);
  
  // 関連するカードが最低限必要な数に満たない場合は、関連しないカードも追加
  if (relatedCards.length < minCount) {
    // 関連しないカードをフィルタリング
    const unrelatedCards = cards.filter(card => 
      !card.keywords.some(keyword => challenge.keywords.includes(keyword))
    );
    
    console.log(`Adding ${minCount - relatedCards.length} unrelated cards to meet minimum count`);
    
    // 関連しないカードをシャッフル
    const shuffledUnrelatedCards = shuffleCards(unrelatedCards);
    
    // 必要な数だけ関連しないカードを追加
    const additionalCards = shuffledUnrelatedCards.slice(0, minCount - relatedCards.length);
    
    // 関連するカードと関連しないカードを結合してシャッフル
    return shuffleCards([...relatedCards, ...additionalCards]);
  }
  
  // 関連するカードが十分にある場合はシャッフルして返す
  return shuffleCards(relatedCards);
}

/**
 * 新しいチャレンジを選択する関数
 * @param challenges チャレンジの配列
 * @param excludeIds 除外するチャレンジIDの配列（オプション）
 * @returns 選択されたチャレンジ
 */
export function selectNewChallenge(challenges: Challenge[], excludeIds: number[] = []): Challenge {
  const availableChallenges = challenges.filter(c => !excludeIds.includes(c.id));
  const shuffledChallenges = [...availableChallenges].sort(() => Math.random() - 0.5);
  return shuffledChallenges[0];
}

/**
 * 新しいチャレンジを選択し、関連するカードを配る関数
 * @param gameState 現在のゲーム状態
 * @param challenge 選択されたチャレンジ
 * @returns 更新されたゲーム状態
 */
export function selectNewChallengeAndDealCards(
  gameState: GameState,
  challenge: Challenge
): GameState {
  console.log(`Challenge selected: ${challenge.title} with keywords: ${challenge.keywords.join(', ')}`);
  
  // 全サービスカードを関連性スコアでソート
  const sortedServiceCards = sortCardsByRelevance(gameState.serviceDeck, challenge);
  
  // 関連性の高いカードを取得（上位50%）
  const highRelevanceCount = Math.ceil(sortedServiceCards.length * 0.5);
  const highRelevanceCards = sortedServiceCards.slice(0, highRelevanceCount);
  
  console.log(`Found ${highRelevanceCards.length} high relevance service cards`);
  
  // カードをカテゴリごとにグループ化
  const categoryMap = groupCardsByCategory(highRelevanceCards);
  
  // 各カテゴリから均等にカードを選択
  let initialServiceHand: Card[] = [];
  if (categoryMap.size > 0) {
    initialServiceHand = selectCardsFromCategories(categoryMap, INITIAL_SERVICE_HAND_SIZE);
  } else {
    // カテゴリがない場合は関連性の高いカードから選択
    initialServiceHand = highRelevanceCards.slice(0, INITIAL_SERVICE_HAND_SIZE);
  }
  
  // 必要な枚数に満たない場合は、残りのカードからランダムに選択
  if (initialServiceHand.length < INITIAL_SERVICE_HAND_SIZE) {
    const remainingCards = sortedServiceCards.slice(highRelevanceCount);
    const shuffledRemaining = shuffleCards(remainingCards);
    initialServiceHand.push(...shuffledRemaining.slice(0, INITIAL_SERVICE_HAND_SIZE - initialServiceHand.length));
  }
  
  // 全サポートカードを関連性スコアでソート
  const sortedSupportCards = sortCardsByRelevance(gameState.supportDeck, challenge);
  
  // 関連性の高いサポートカードを選択
  const initialSupportCards = sortedSupportCards.slice(0, INITIAL_SUPPORT_CARDS_SIZE);
  
  // 残りのサービスカードデッキを作成
  const remainingServiceDeck = sortedServiceCards.filter(card => 
    !initialServiceHand.some(handCard => handCard.id === card.id)
  );
  
  console.log(`Dealt ${initialServiceHand.length} service cards and ${initialSupportCards.length} support cards`);
  
  // カードの関連性スコアをログ出力
  initialServiceHand.forEach(card => {
    const score = calculateRelevanceScore(card, challenge);
    console.log(`Service card: ${card.name}, Relevance: ${score}, Category: ${card.category}`);
  });
  
  initialSupportCards.forEach(card => {
    const score = calculateRelevanceScore(card, challenge);
    console.log(`Support card: ${card.name}, Relevance: ${score}`);
  });
  
  return {
    ...gameState,
    currentChallenge: challenge,
    serviceHand: initialServiceHand,
    supportCards: initialSupportCards,
    serviceDeck: remainingServiceDeck,
    challengeStatus: `課題「${challenge.title}」が提示されました。解決策を考えてください。`,
    challengeStatusLevel: DEFAULT_STATUS_LEVEL,
    selectedCardForNextTurn: null,
    cardSelectionOptions: []
  };
}

/**
 * サービスカードを選択する関数
 * @param gameState 現在のゲーム状態
 * @param card 選択するカード
 * @returns 更新されたゲーム状態
 */
export function selectServiceCard(gameState: GameState, card: Card): GameState {
  // すでに選択されているカードかチェック
  const isAlreadySelected = gameState.selectedServiceCards.some(c => c.id === card.id);
  
  if (isAlreadySelected) {
    // すでに選択されている場合は選択を解除
    return {
      ...gameState,
      selectedServiceCards: gameState.selectedServiceCards.filter(c => c.id !== card.id),
      serviceHand: [...gameState.serviceHand, card]
    };
  } else {
    // 最大選択可能数を超える場合は選択しない
    if (gameState.selectedServiceCards.length >= MAX_SERVICE_CARDS) {
      return gameState;
    }
    
    // 新しく選択する場合
    return {
      ...gameState,
      selectedServiceCards: [...gameState.selectedServiceCards, card],
      serviceHand: gameState.serviceHand.filter(c => c.id !== card.id)
    };
  }
}

/**
 * サポートカードを有効化/無効化する関数
 * @param gameState 現在のゲーム状態
 * @param card 有効化/無効化するカード
 * @returns 更新されたゲーム状態
 */
export function toggleSupportCard(gameState: GameState, card: Card): GameState {
  // すでに有効化されているカードかチェック
  const isAlreadyActivated = gameState.activatedSupportCards.some(c => c.id === card.id);

  if (isAlreadyActivated) {
    // すでに有効化されている場合は無効化
    const returnOptions = card.allowsCardSelection ? [...gameState.cardSelectionOptions] : [];
    return {
      ...gameState,
      activatedSupportCards: [],
      cardSelectionOptions: [],
      selectedCardForNextTurn: null,
      serviceDeck: [...gameState.serviceDeck, ...returnOptions]
    };
  } else {
    // すでに別のサポートカードが有効化されている場合は置き換える
    let newDeck = [...gameState.serviceDeck];
    if (gameState.activatedSupportCards.length > 0) {
      const prev = gameState.activatedSupportCards[0];
      if (prev.allowsCardSelection) {
        newDeck = [...newDeck, ...gameState.cardSelectionOptions];
      }
    }

    let newState: GameState = {
      ...gameState,
      activatedSupportCards: [card],
      cardSelectionOptions: [],
      selectedCardForNextTurn: null,
      serviceDeck: newDeck
    };

    if (card.allowsCardSelection && newState.serviceDeck.length > 0) {
      const options = newState.serviceDeck.slice(0, 5);
      newState = {
        ...newState,
        cardSelectionOptions: options,
        serviceDeck: newState.serviceDeck.filter(c => !options.includes(c))
      };
    }

    return newState;
  }
}

/**
 * 次のターンで引くカードを選択する関数
 * @param gameState 現在のゲーム状態
 * @param card 選択したカード
 * @returns 更新されたゲーム状態
 */
export function selectCardForNextTurn(gameState: GameState, card: Card): GameState {
  const remainingOptions = gameState.cardSelectionOptions.filter(c => c.id !== card.id);
  return {
    ...gameState,
    selectedCardForNextTurn: card,
    cardSelectionOptions: remainingOptions
  };
}

/**
 * サービスカードを捨てる関数
 * @param gameState 現在のゲーム状態
 * @param cards 捨てるカードの配列
 * @returns 更新されたゲーム状態
 */
export function discardServiceCards(gameState: GameState, cards: Card[]): GameState {
  if (cards.length === 0) return gameState;
  
  return {
    ...gameState,
    serviceHand: gameState.serviceHand.filter(card => !cards.some(c => c.id === card.id)),
    discardedCards: [...gameState.discardedCards, ...cards],
    cardsToDrawNextTurn: gameState.cardsToDrawNextTurn + cards.length
  };
}

/**
 * ターンをスキップする関数
 * @param gameState 現在のゲーム状態
 * @returns 更新されたゲーム状態
 */
export function skipTurn(gameState: GameState): GameState {
  // 課題の状況が悪化
  const newStatusLevel = Math.max(0, gameState.challengeStatusLevel - 10);
  
  // 現在のターン数を更新
  const newTurn = gameState.currentTurn + 1;
  
  return {
    ...gameState,
    currentTurn: newTurn,
    challengeStatusLevel: newStatusLevel,
    challengeStatus: `ターンをスキップしたため、課題の状況が悪化しました。(${newStatusLevel}%)`,
    cardsToDrawNextTurn: gameState.cardsToDrawNextTurn + 1 // スキップすると1枚多く引ける
  };
}

/**
 * 解決策を提出する関数
 * @param gameState 現在のゲーム状態
 * @returns 更新されたゲーム状態
 */
export function submitSolution(gameState: GameState): GameState {
  if (gameState.selectedServiceCards.length === 0) return gameState;
  
  // 現在のターン数を更新
  const newTurn = gameState.currentTurn + 1;
  
  // 使用したカードを記録
  const usedServiceCards = [...gameState.usedServiceCards, ...gameState.selectedServiceCards];
  const usedSupportCards = [...gameState.usedSupportCards, ...gameState.activatedSupportCards];
  
  // 総コストを計算
  const currentTurnCost = calculateTotalCost(gameState.selectedServiceCards, gameState.activatedSupportCards);
  const totalCostUsed = gameState.totalCostUsed + currentTurnCost;
  
  return {
    ...gameState,
    currentTurn: newTurn,
    selectedServiceCards: [],
    discardedCards: [...gameState.discardedCards, ...gameState.selectedServiceCards],
    usedServiceCards,
    usedSupportCards,
    totalCostUsed
  };
}

/**
 * 次のターンに進む関数
 * @param gameState 現在のゲーム状態
 * @param evaluation 評価メッセージ
 * @param newStatusLevel 新しい状況レベル
 * @returns 更新されたゲーム状態
 */
export function advanceToNextTurn(
  gameState: GameState,
  evaluation: string,
  newStatusLevel: number
): GameState {
  const nextTurn = gameState.currentTurn;
  const isGameOver = nextTurn > gameState.totalTurns;
  
  if (isGameOver) {
    return {
      ...gameState,
      challengeStatus: evaluation,
      challengeStatusLevel: newStatusLevel,
      isGameOver: true
    };
  }
  
  // チャレンジに関連するカードを優先して引く
  let newCards: Card[] = [];
  let newDeck = [...gameState.serviceDeck];

  let drawCount = gameState.cardsToDrawNextTurn;

  // サポートカードによる次ターンのドロー枚数増加を適用
  for (const support of gameState.activatedSupportCards) {
    if (support.drawMultiplier && support.drawMultiplier > 1) {
      drawCount = Math.ceil(drawCount * support.drawMultiplier);
    }
    if (support.extraCardsNextTurn) {
      drawCount += support.extraCardsNextTurn;
    }
  }

  if (gameState.selectedCardForNextTurn) {
    newCards.push(gameState.selectedCardForNextTurn);
    drawCount = Math.max(0, drawCount - 1);
  }
  
  if (gameState.currentChallenge) {
    // デッキからチャレンジに関連するカードをフィルタリング
    const relatedCards = filterCardsByChallenge(gameState.serviceDeck, gameState.currentChallenge);
    
    // 関連するカードが十分にある場合
    if (relatedCards.length >= drawCount) {
      // 関連するカードをシャッフルして必要な枚数だけ取得
      const shuffledRelatedCards = shuffleCards(relatedCards).slice(0, drawCount);
      newCards = shuffledRelatedCards;

      // デッキから引いたカードを除外
      newDeck = gameState.serviceDeck.filter(card =>
        !shuffledRelatedCards.some(drawnCard => drawnCard.id === card.id)
      );
    } else {
      // 関連するカードが十分にない場合は通常通りデッキから引く
      const drawn = gameState.serviceDeck.slice(0, drawCount);
      newCards = newCards.concat(drawn);
      newDeck = gameState.serviceDeck.slice(drawCount);
    }
  } else {
    // チャレンジがない場合は通常通りデッキから引く
    const drawn = gameState.serviceDeck.slice(0, drawCount);
    newCards = newCards.concat(drawn);
    newDeck = gameState.serviceDeck.slice(drawCount);
  }
  
  return {
    ...gameState,
    serviceHand: [...gameState.serviceHand, ...newCards],
    activatedSupportCards: [], // サポートカードの有効化をリセット
    challengeStatus: evaluation,
    challengeStatusLevel: newStatusLevel,
    cardsToDrawNextTurn: 1, // リセット
    serviceDeck: newDeck,
    selectedCardForNextTurn: null,
    cardSelectionOptions: []
  };
}

/**
 * ゲームを終了する関数
 * @param gameState 現在のゲーム状態
 * @param finalEvaluation 最終評価メッセージ
 * @param score スコア
 * @returns 更新されたゲーム状態
 */
export function finishGame(
  gameState: GameState, 
  finalEvaluation: string, 
  score: number
): GameState {
  // 現在のチャレンジと解決策を記録
  const completedChallenge: CompletedChallenge = {
    challenge: gameState.currentChallenge!,
    solution: [
      ...gameState.usedServiceCards,
      ...gameState.usedSupportCards
    ],
    evaluation: finalEvaluation,
    score
  };
  
  console.log(`finishGame: currentTurn=${gameState.currentTurn}, totalTurns=${gameState.totalTurns}, isGameOver=true, totalCostUsed=${gameState.totalCostUsed}`);
  
  return {
    ...gameState,
    completedChallenges: [...gameState.completedChallenges, completedChallenge],
    totalScore: gameState.totalScore + score,
    isGameOver: true
  };
}

/**
 * 総コストを計算する関数
 * @param serviceCards サービスカードの配列
 * @param supportCards サポートカードの配列
 * @returns 総コスト
 */
export function calculateTotalCost(serviceCards: Card[], supportCards: Card[]): number {
  const serviceCost = serviceCards.reduce((sum, card) => sum + card.cost, 0);
  const supportCost = supportCards.reduce((sum, card) => sum + card.cost, 0);

  // サポートカードがある場合、サービスカードの合計コストを減らす
  const reducedServiceCost = Math.max(0, serviceCost - supportCards.length);

  return reducedServiceCost + supportCost;
}

/**
 * サポートカードとサービスカード、課題のシナジーによるボーナスを計算
 * @param serviceCards 今回提出したサービスカード
 * @param supportCards 今回有効化したサポートカード
 * @param challenge 現在の課題
 * @returns シナジーによる状況レベルボーナス
 */
export function calculateSynergyBonus(
  serviceCards: Card[],
  supportCards: Card[],
  challenge?: Challenge | null
): number {
  let bonus = 0;

  for (const support of supportCards) {
    // サポートカードとサービスカードのキーワードが一致しているか
    const hasServiceSynergy = serviceCards.some(service =>
      service.keywords.some(k => support.keywords.includes(k))
    );
    if (hasServiceSynergy) {
      bonus += 5;
    }

    // サポートカードと課題のキーワードが一致しているか
    if (challenge && support.keywords.some(k => challenge.keywords.includes(k))) {
      bonus += 5;
    }
  }

  return bonus;
}
