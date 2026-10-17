import type { Request, Response } from "express";

import { mockUsers } from "../data/mockData.js";
import I18n from "../lib/I18n/errors.json" with { type: "json" };
import { CustomError } from "../models/error.js";

export const getCurrentUser = (
  request: Request,
  response: Response,
): Response => {
  return response.status(200).json(request.user);
};
