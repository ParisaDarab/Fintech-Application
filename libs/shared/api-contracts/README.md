# @fintech/api-contracts

Types that describe the HTTP contract between `apps/api` and `apps/web`.

- `ApiResponse<T>` – success envelope (`success`, `statusCode`, `type`, `message`, `data`)
- `ApiErrorResponse` / `ApiErrorDetail` – error body

```ts
import type { ApiResponse } from "@fintech/api-contracts";
```

Build: `npx nx build api-contracts` (Nx builds it automatically before the apps).
