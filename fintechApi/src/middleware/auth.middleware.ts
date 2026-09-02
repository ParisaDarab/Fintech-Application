import { CustomError } from "../models/error.js";
import I18n from "../lib/I18n/errors.json" with { type: "json" };
import type { NextFunction, Request, Response } from "express";
import { mockUsers } from "../data/mockData.js";

export const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const userId = request.session.userId;

  if (!userId) {
    return response
      .status(401)
      .json(
        new CustomError(
          401,
          "AUTHENTICATION_ERROR",
          I18n.errors.AUTHENTICATION_ERROR,
          false,
        ),
      );
  }

  const user = mockUsers.find((user) => user.id === userId);

  if (!user) {
    return response
      .status(401)
      .json(
        new CustomError(
          401,
          "AUTHENTICATION_ERROR",
          I18n.errors.AUTHENTICATION_ERROR,
          false,
        ),
      );
  }

  request.user = user;

  next();
};
