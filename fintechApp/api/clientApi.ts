import { header } from "./header";
import { ApiError, type ApiErrorResponse } from "../models/error";

export type ClientApiProps = {
  method?: string;
  url: string;
  headers?: HeadersInit;
  credentials?: RequestCredentials;
  body?: unknown;
  token?: string;
};

const BASE_URL = "/api";

export default async function clientApi<T>({
  method = "GET",
  url,
  headers,
  credentials = "include",
  body,
  token,
}: ClientApiProps): Promise<T> {
  const requestHeaders = new Headers(header);

  if (headers) {
    const customHeaders = new Headers(headers);

    customHeaders.forEach((value, key) => {
      requestHeaders.set(key, value);
    });
  }

  if (body !== undefined && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: requestHeaders,
    credentials,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let errorData: ApiErrorResponse | null = null;

    try {
      errorData = (await response.json()) as ApiErrorResponse;
    } catch {
      // Response wasn't JSON
    }

    if (errorData) {
      throw new ApiError(errorData);
    }

    throw new ApiError({
      statusCode: response.status,
      error: {
        type: "UNKNOWN_ERROR",
      },
      message: `Request failed with status ${response.status}.`,
      success: false,
    });
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
