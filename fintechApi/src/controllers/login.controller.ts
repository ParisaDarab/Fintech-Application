import { NextFunction,Request,Response } from "express";
import { mockUsers } from "../data/mockData.js";
import I18n from "../lib/I18n/errors.json" with { type: "json" };
import argon2 from "argon2";
import { CustomError } from "../models/error.js";
export const userLogin = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { email, password } = request.body;
  const user = mockUsers.find((user) => user.email === email);
  if (!user) {
    return response.send(I18n.errors.USER_NOT_FOUND);
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
            I18n.errors.INVALID_CREDENTIALS,
            false,
          ),
        );
    }
    request.session.userId = user.id;
    return response.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
