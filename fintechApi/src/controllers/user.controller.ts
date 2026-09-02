import { Request, Response } from "express";
import { mockUsers } from "../data/mockData.js";
import I18n from "../lib/I18n/errors.json" with { type: "json" };
import { CustomError } from "../models/error.js";
export const getCurrentUser = (request: Request, response: Response) => {
  const user = mockUsers.find((user) => user.id === request.session.userId);

  if (!user) {
    return response
      .status(404)
      .json(
        new CustomError(
          404,
          "USER_NOT_FOUND",
          I18n.errors.USER_NOT_FOUND,
          false,
        ),
      );
  }

  return response.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};
