import type { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error.js";
import { I18nError as I18n } from "@fintech/i18n";
export const requireRole = (role: "user" | "admin") => {
  return (request: Request, response: Response, next: NextFunction) => {
    if (request.user?.role !== role) {
      return response
        .status(403)
        .json(
          new CustomError(
            403,
            "AUTHORIZATION_ERROR",
            I18n.errors.AUTHORIZATION_ERROR,
            false,
          ),
        );
    }

    next();
  };
};
