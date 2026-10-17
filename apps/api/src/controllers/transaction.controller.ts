import { Request, Response } from "express";
import { mockTransactions } from "../data/mockData.js";
import { CustomApiResponse } from "../models/response.js";
import { I18nSuccess as I18n } from "@fintech/i18n";
export const getMyTransaction = (request: Request, response: Response) => {
  const { id } = request.body;
  const accounts = mockTransactions.filter(
    (transaction) => transaction.id === id,
  );
  response.json(
    new CustomApiResponse(
      200,
      "TRANSACTION_RETRIEVED",
      I18n.success.TRANSACTION_RETRIEVED,
      true,
      accounts,
    ),
  );
};
