import { RiskLevel } from "./User";

export type TransactionType =
  | "payment"
  | "card_payment"
  | "bank_transfer"
  | "withdrawal";

export type TransactionStatus = "pending" | "completed" | "failed";

export type Transaction = {
  id: string;
  customerId: string;

  amount: number;
  currency: "GBP" | "EUR" | "USD";

  type: TransactionType;
  status: TransactionStatus;
  riskLevel: RiskLevel;

  createdAt: string;
};
