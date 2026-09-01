// handlers.ts
import { http, HttpResponse } from "msw";
import { mockUsers } from "./data/users";

export const BASE_URL = "https://api.fintech";

export const handlers = [
  http.post(`${BASE_URL}/accessList`, async ({ request }) => {
    const body = (await request.json()) as {
      userId: string;
    };
    const selectedUser = mockUsers.find((user) => user.id === body.userId);
    if (selectedUser) {
      HttpResponse.json(selectedUser);
    }

    return HttpResponse.json(
      { success: false, message: "user not found" },
      { status: 201 },
    );
  }),

  http.post("https://api.vaultly.dev/transfer", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ status: "ok", received: body }, { status: 201 });
  }),
];
