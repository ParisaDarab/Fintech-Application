import type { Request, Response } from "express";
import { CustomError } from "../models/error.js";
import { I18nError as I18n, I18nSuccess } from "@fintech/i18n";

import { CustomApiResponse } from "../models/response.js";
export const userLogout = (request: Request, response: Response) => {
  request.session.destroy((error) => {
    if (error) {
      response
        .status(500)
        .json(
          new CustomError(
            500,
            "INTERNAL_SERVER_ERROR",
            I18n.errors.INTERNAL_SERVER_ERROR,
            false,
          ),
        );

      return;
    }

    response.clearCookie("connect.sid");
    response
      .status(204)
      .json(
        new CustomApiResponse(
          204,
          "LOGOUT_SUCCESS",
          I18nSuccess.success.LOGOUT_SUCCESS,
          true,
          {},
        ),
      );
  });
};
