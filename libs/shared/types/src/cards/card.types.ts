export type CardStatus = "ACTIVE" | "FROZEN" | "BLOCKED";

export type CardNetwork = "VISA" | "MASTERCARD";

export type CardType = "DEBIT" | "CREDIT";

export interface Card {
  id: string;
  userId: string;
  accountId: string;
  cardNumber: string;
  expiryDate: string;
  nameOnCard: string;
  cardType: CardType;
  cardNetwork: CardNetwork;
  status: CardStatus;
  currency: string;
  isDefault: boolean;
  contactlessEnabled: boolean;
  onlinePaymentsEnabled: boolean;
  internationalPaymentsEnabled: boolean;
  dailySpendingLimit: number;
  dailyCashWithdrawalLimit: number;
  createdAt: string;
  updatedAt: string;
}

export type CardList = Card[];
