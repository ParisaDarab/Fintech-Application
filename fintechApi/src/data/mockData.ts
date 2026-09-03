import { Account } from "../types/account.js";
import { Transaction } from "../types/transaction.js";
import { User } from "../types/user.js";

export const mockUser: User = {
  id: "user-001",
  name: "Parisa Darab",
  email: "parisa.darab@example.com",
  passwordHash:
    "$argon2id$v=19$m=65536,p=4,t=3$aiOGXX1ZK0hmjfJLAFAzfw$nKyziM7ORyMdYbS886jxXYPYQVEP/CDzfR0Hk2lRNwM",
  role: "user",
};

export const mockUsers: User[] = [
  {
    id: "user-001",
    name: "Parisa Darab",
    email: "parisa.darab@example.com",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$aiOGXX1ZK0hmjfJLAFAzfw$nKyziM7ORyMdYbS886jxXYPYQVEP/CDzfR0Hk2lRNwM",
    role: "user",
  },
];

export const mockAccounts: Account[] = [
  {
    id: "account-001",
    userId: "user-001",
    accountNumber: "**** 4821",
    currency: "GBP",
    balance: 8450.75,
  },
  {
    id: "account-002",
    userId: "user-001",
    accountNumber: "**** 7312",
    currency: "GBP",
    balance: 12500.0,
  },
  {
    id: "account-003",
    userId: "user-002",
    accountNumber: "**** 9182",
    currency: "USD",
    balance: 5200.5,
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "transaction-001",
    accountId: "account-001",
    merchant: "Tesco",
    amount: -54.2,
    currency: "GBP",
    status: "completed",
    type: "card_payment",
    createdAt: "2026-08-04T10:30:00Z",
  },
  {
    id: "transaction-002",
    accountId: "account-001",
    merchant: "Salary",
    amount: 3200.0,
    currency: "GBP",
    status: "completed",
    type: "income",
    createdAt: "2026-08-01T08:00:00Z",
  },
  {
    id: "transaction-003",
    accountId: "account-001",
    merchant: "Netflix",
    amount: -15.99,
    currency: "GBP",
    status: "completed",
    type: "subscription",
    createdAt: "2026-07-30T19:15:00Z",
  },
  {
    id: "transaction-004",
    accountId: "account-001",
    merchant: "Amazon",
    amount: -89.99,
    currency: "GBP",
    status: "completed",
    type: "card_payment",
    createdAt: "2026-07-28T14:20:00Z",
  },
  {
    id: "transaction-005",
    accountId: "account-001",
    merchant: "John Smith",
    amount: 150.0,
    currency: "GBP",
    status: "completed",
    type: "transfer",
    createdAt: "2026-07-25T16:45:00Z",
  },
  {
    id: "transaction-006",
    accountId: "account-001",
    merchant: "Shell",
    amount: -62.4,
    currency: "GBP",
    status: "completed",
    type: "card_payment",
    createdAt: "2026-07-22T09:10:00Z",
  },
  {
    id: "transaction-007",
    accountId: "account-001",
    merchant: "Uber",
    amount: -24.5,
    currency: "GBP",
    status: "pending",
    type: "card_payment",
    createdAt: "2026-07-20T18:30:00Z",
  },
  {
    id: "transaction-008",
    accountId: "account-001",
    merchant: "Electricity Provider",
    amount: -120.0,
    currency: "GBP",
    status: "completed",
    type: "bill_payment",
    createdAt: "2026-07-18T11:00:00Z",
  },
];
