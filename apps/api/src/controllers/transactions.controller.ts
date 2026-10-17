import { Request, Response } from "express";
import { mockTransactions } from "../data/mockData.js";
import { CustomApiResponse } from "../models/response.js";
import I18n from "../lib/I18n/en.json" with { type: "json" };
export const getMyTransactions = (request: Request, response: Response) => {
  const { accountId } = request.body;
  const accounts = mockTransactions.filter(
    (transaction) => transaction.accountId === accountId,
  );
  response.json(
    new CustomApiResponse(
      200,
      "TRANSACTIONS_RETRIEVED",
      I18n.success.TRANSACTIONS_RETRIEVED,
      true,
      accounts,
    ),
  );
};
