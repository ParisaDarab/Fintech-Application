import { NextFunction, Request, Response } from "express";
import { mockUsers } from "../data/mockData.js";
import I18nError from "../lib/I18n/errors.json" with { type: "json" };
import I18n from "../lib/I18n/en.json" with { type: "json" };
import argon2 from "argon2";
import { CustomError } from "../models/error.js";
import { CustomApiResponse } from "../models/response.js";
export const userLogin = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { email, password } = request.body;
  const user = mockUsers.find((user) => user.email === email);
  if (!user) {
    return response
      .status(404)
      .json(
        new CustomError(
          404,
          "USER_NOT_FOUND",
          I18nError.errors.USER_NOT_FOUND,
          false,
        ),
      );
  }
  try {
    const isValidPassword = await argon2.verify(user.passwordHash, password);
    if (!isValidPassword) {
      return response
        .status(401)
        .json(
          new CustomError(
            401,
            "INVALID_CREDENTIALS",
            I18nError.errors.INVALID_CREDENTIALS,
            false,
          ),
        );
    }
    request.session.userId = user.id;
    return response.json(
      new CustomApiResponse(
        200,
        "LOGIN_SUCCESS",
        I18n.success.LOGIN_SUCCESS,
        true,
         user ,
      ),
    );
  } catch (error) {
    next(error);
  }
};
