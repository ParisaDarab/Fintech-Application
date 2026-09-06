export const apiList = {
  authentication: {
    login: { method: "POST", url: "/auth/login", headers: {} },
    logout: { method: "POST", url: "/auth/logout", headers: {} },
  },
  accounts: {
    accounts: { method: "POST", url: "/accounts", headers: {} },
    account: { method: "GET", url: "/account", headers: {} },
  },
  Transactions: {
    transactions: { method: "POST", url: "/transactions", headers: {} },
    transaction: { method: "GET", url: "/transaction", headers: {} },
  },
};
