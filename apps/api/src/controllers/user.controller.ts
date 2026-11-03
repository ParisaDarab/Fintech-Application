import type { Request, Response } from "express";


export const getCurrentUser = (
  request: Request,
  response: Response,
): Response => {
  return response.status(200).json(request.user);
};
