import type { ApiResponse } from "@fintech/api-contracts";

export class CustomApiResponse<T> implements ApiResponse<T> {
  public success;
  public statusCode;
  public type;
  public message;
  public data;
  constructor(
    statusCode: number,
    type: string,
    message: string,
    success: boolean,
    data: T,
  ) {
    this.success = success;
    this.statusCode = statusCode;
    this.type = type;
    this.message = message;
    this.data = data;
  }
}
