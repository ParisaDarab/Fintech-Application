import { header } from "./header";
export type ClientApiProps = {
  method?: string;
  url: string;
  headers?: HeadersInit;
  body?: unknown;
  token?: string;
};

const BASE_URL = "/api";

export default async function clientApi<T>({
  method = "GET",
  url,
  headers = {},
  body,
  token,
}: ClientApiProps): Promise<T> {
  const requestHeaders = new Headers({ ...header, ...headers });

  if (body !== undefined && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: requestHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let errorData: unknown = null;

    try {
      errorData = await response.json();
    } catch {
      // Response wasn't JSON
    }

    throw {
      status: response.status,
      data: errorData,
    };
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
