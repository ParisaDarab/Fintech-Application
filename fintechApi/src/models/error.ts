export class CustomError extends Error {
  public statusCode: number;
  public error: { [key: string]: string };
  public success: boolean;
  public message: string;
  public detail?: { [key: string]: string | undefined }[];

  constructor(
    statusCode: number,
    type: string,
    message: string,
    success: boolean,
    detail?: { [key: string]: string | undefined }[],
  ) {
    super(message);

    this.name = "CustomError";
    this.statusCode = statusCode;
    this.error = { type };
    this.message = message;
    this.success = success;
    this.detail = detail;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
