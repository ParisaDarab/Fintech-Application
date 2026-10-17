import type {
  ApiErrorDetail,
  ApiErrorResponse,
} from "@fintech/api-contracts";

export class CustomError extends Error implements ApiErrorResponse {
  public statusCode: number;
  public error: { [key: string]: string };
  public success: boolean;
  public message: string;
  public detail?: ApiErrorDetail[];

  constructor(
    statusCode: number,
    type: string,
    message: string,
    success: boolean,
    detail?: ApiErrorDetail[],
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
