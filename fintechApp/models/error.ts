export type ApiErrorDetail = {
  [key: string]: string | undefined;
};

export type ApiErrorResponse = {
  statusCode: number;
  error: {
    [key: string]: string;
  };
  message: string;
  success: boolean;
  detail?: ApiErrorDetail[];
};

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
