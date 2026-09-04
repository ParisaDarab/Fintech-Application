export const apiList = {
  login: {
    login: { method: "POST", baseUrl: "/login", headers: {} },
    logout: { method: "POST", baseUrl: "/logout", headers: {} },
  },
  accounts: {
    accounts: { method: "POST", baseUrl: "/accounts", headers: {} },
    account: { method: "GET", baseUrl: "/account", headers: {} },
  },
  Transactions: {
    transactions: { method: "POST", baseUrl: "/transactions", headers: {} },
    transaction: { method: "GET", baseUrl: "/transaction", headers: {} },
  },
};
