import { headers } from "next/headers";
import { header } from "./header";
import { ApiError, type ApiErrorResponse } from "../models/error";

export type ServerApiProps = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  headers?: HeadersInit;
  body?: unknown;
  token?: string;
};

const BASE_URL = "http://localhost:5000/api/v1";

export default async function serverApiClient<T>({
  method = "GET",
  endpoint,
  headers: customHeaders,
  body={},
  token,
}: ServerApiProps): Promise<T> {
  const requestHeaders = new Headers(header);

  // Forward the incoming user's session cookie
  const incomingHeaders = await headers();
  const cookie = incomingHeaders.get("cookie");

  if (cookie) {
    requestHeaders.set("cookie", cookie);
  }

  // Add custom headers
  if (customHeaders) {
    new Headers(customHeaders).forEach((value, key) => {
      requestHeaders.set(key, value);
    });
  }

  // Add authorization token if provided
  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  if (body !== undefined) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: requestHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: "no-store",
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
      error: { type: "UNKNOWN_ERROR" },
      message: `Request failed with status ${response.status}.`,
      success: false,
    });
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
