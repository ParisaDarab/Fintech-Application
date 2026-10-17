import { Request, Response } from "express";
import { mockAccounts } from "../data/mockData.js";
import { CustomApiResponse } from "../models/response.js";
import { I18nSuccess as I18n } from "@fintech/i18n";
export const getMyAccounts = (request: Request, response: Response) => {
  const { userId } = request.body;
  const accounts = mockAccounts.filter((account) => account.userId === userId);
  response.json(
    new CustomApiResponse(
      200,
      "ACCOUNTS_RETRIEVED",
      I18n.success.ACCOUNTS_RETRIEVED,
      true,
      accounts,
    ),
  );
};
