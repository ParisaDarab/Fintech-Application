import type { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { CustomError } from "../models/error.js";
import I18n from "../lib/I18n/errors.json" with { type: "json" };
export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Joi validation error
  if (Joi.isError(error)) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: error.message,
        details: error.details.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        })),
      },
    });
  }

  // Unknown/unexpected error
  console.error(error);

  return res
    .status(500)
    .json(
      new CustomError(
        500,
        "INTERNAL_SERVER_ERROR",
        I18n.errors.INTERNAL_SERVER_ERROR,
        false,
      ),
    );
};
