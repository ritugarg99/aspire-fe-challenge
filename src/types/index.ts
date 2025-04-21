export interface Card {
  id: string;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  frozen: boolean;
  spendLimit?: number;
}

export interface Transaction {
  id: string;
  cardId: string;
  amount: number;
  merchant: string;
  date: string;
  type: 'charge' | 'refund';
}

export interface CardContextType {
  cards: Card[];
  addCard: (cardholderName: string) => void;
  freezeCard: (cardId: string) => void;
  unfreezeCard: (cardId: string) => void;
  setSpendLimit: (cardId: string, limit: number) => void;
} 