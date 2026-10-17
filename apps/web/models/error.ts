import type {
  ApiErrorDetail,
  ApiErrorResponse,
} from "@fintech/api-contracts";

// Re-exported so existing imports from "@/models/error" keep working.
export type { ApiErrorDetail, ApiErrorResponse };

export class ApiError extends Error {
  public statusCode: number;
  public error: { [key: string]: string };
  public success: boolean;
  public message: string;
  public detail?: ApiErrorDetail[];

  constructor(data: ApiErrorResponse) {
    super(data.message);
    this.name = "ApiError";
    this.statusCode = data.statusCode;
    this.error = data.error;
    this.message = data.message;
    this.success = data.success;
    this.detail = data.detail;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
