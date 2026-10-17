// Shared HTTP contract between apps/api (producer) and apps/web (consumer).
// Type-only: nothing here exists at runtime, so changing a field shows up as a
// compile error in BOTH apps instead of a bug in production.

/** Envelope for every successful response the API sends (see CustomApiResponse in apps/api). */
export type ApiResponse<T = unknown> = {
  success: boolean;
  statusCode: number;
  type: string;
  message: string;
  data: T;
};

export type ApiErrorDetail = {
  [key: string]: string | undefined;
};

/** Body of every error response the API sends (see CustomError in apps/api). */
export type ApiErrorResponse = {
  statusCode: number;
  error: {
    [key: string]: string;
  };
  message: string;
  success: boolean;
  detail?: ApiErrorDetail[];
};
