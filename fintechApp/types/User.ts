export type UserRole = "admin" | "risk_analyst" | "support" | "viewer";

export type KycStatus = "pending" | "verified" | "rejected";

export type RiskLevel = "low" | "medium" | "high";

export type User = {
  id: string;
  name: string;
  email: string;

  role: UserRole;

  accountStatus: "active" | "frozen" | "closed";

  kycStatus: KycStatus;

  riskLevel: RiskLevel;

  createdAt: string;
  lastActivityAt: string;
};
