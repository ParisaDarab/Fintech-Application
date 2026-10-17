import type { Request, Response } from "express";

import { mockUsers } from "../data/mockData.js";
import { CustomError } from "../models/error.js";

export const getCurrentUser = (
  request: Request,
  response: Response,
): Response => {
  return response.status(200).json(request.user);
};
