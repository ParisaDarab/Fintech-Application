import { Request, Response } from "express";
import { mockCardList } from "../data/mockData.js";
import { CustomApiResponse } from "../models/response.js";
import { I18nSuccess as I18n } from "@fintech/i18n";
export const getCardList = (request: Request, response: Response) => {
  const { user } = request.session;
  const cardList = mockCardList.filter(
    (item, _) =>
      item.accountId === request.body?.accountId ||
      item.userId === user?.userId,
  );
  return response.json(
    new CustomApiResponse(
      200,
      "CARD_RETRIEVED",
      I18n.success.CARDS_RETRIEVED,
      true,
      cardList,
    ),
  );
};
