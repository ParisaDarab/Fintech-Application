export class CustomError extends Error {
  public statusCode: number;
  public  error: { [key: string]: string };
  public success: boolean;
  public message: string;
  constructor(
    statusCode: number,
    type:string,
    message: string,
    success: boolean,
  ) {
    super(message);

    this.name = "CustomError";
    this.statusCode = statusCode;
    this.error = { type };
    this.message = message;
    this.success = success;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
