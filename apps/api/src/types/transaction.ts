export type TransactionStatus = "completed" | "pending" | "failed";

export type TransactionType =
  | "card_payment"
  | "income"
  | "transfer"
  | "subscription"
  | "bill_payment";

export interface Transaction {
  id: string;
  accountId: string;
  merchant: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  type: TransactionType;
  createdAt: string;
}
