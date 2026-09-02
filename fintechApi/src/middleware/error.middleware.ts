import type { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Joi validation error
  if (Joi.isError(err)) {
    return res.status(400).json({
      success: false,
      error: {
        type: "VALIDATION_ERROR",
        details: err.details.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        })),
      },
      message: "Invalid request data",
    });
  }

  // Unknown/unexpected error
  console.error(err);

  return res.status(500).json({
    success: false,
    error: {
      type: "INTERNAL_SERVER_ERROR",
    },
    message: "Internal server error",
  });
};
