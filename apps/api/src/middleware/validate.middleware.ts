import type { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateRequest = (
  schema: Joi.ObjectSchema,
  source: "body" | "params" | "query" = "body",
) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return next(error);
    }

    req[source] = value;

    return next();
  };
};
