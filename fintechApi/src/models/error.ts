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
