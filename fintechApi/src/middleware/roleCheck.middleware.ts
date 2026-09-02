import type { NextFunction, Request, Response } from "express";

export const requireRole = (role: "user" | "admin") => {
  return (request: Request, response: Response, next: NextFunction) => {
    if (request.user?.role !== role) {
      return response.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
};
