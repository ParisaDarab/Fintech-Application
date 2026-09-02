import argon2 from "argon2";
// import { CustomError } from "./models/error.js";
import I18n from "../src/lib/I18n/errors.json" with { type: "json" };
export class CustomError extends Error {
  public statusCode: number;
  public code: string;
  public success: boolean;

  constructor(
    statusCode: number,
    code: string,
    message: string,
    success: boolean,
  ) {
    super(message);

    this.name = "CustomError";
    this.statusCode = statusCode;
    this.code = code;
    this.success = success;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

const hash = await argon2.hash("password123");

console.log(
  hash,
  new CustomError(
    401,
    "INVALID_CREDENTIALS",
    I18n.errors.INVALID_CREDENTIALS,
    false,
  ),
);
