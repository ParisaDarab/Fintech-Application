(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mock/browser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "worker",
    ()=>worker
]);
// mocks/browser.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/browser/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2f$handlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock/handlers.ts [app-client] (ecmascript)");
;
;
const worker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupWorker"])(...__TURBOPACK__imported__module__$5b$project$5d2f$mock$2f$handlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlers"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock/data/users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = [
    {
        id: "usr_001",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        role: "admin",
        accountStatus: "active",
        kycStatus: "verified",
        riskLevel: "low",
        createdAt: "2026-06-12T09:30:00Z",
        lastActivityAt: "2026-08-23T16:42:00Z"
    },
    {
        id: "usr_002",
        name: "John Smith",
        email: "john.smith@example.com",
        role: "risk_analyst",
        accountStatus: "active",
        kycStatus: "verified",
        riskLevel: "high",
        createdAt: "2026-05-03T11:15:00Z",
        lastActivityAt: "2026-08-23T16:38:00Z"
    },
    {
        id: "usr_003",
        name: "Sarah Williams",
        email: "sarah.williams@example.com",
        role: "support",
        accountStatus: "active",
        kycStatus: "pending",
        riskLevel: "medium",
        createdAt: "2026-07-10T14:22:00Z",
        lastActivityAt: "2026-08-23T15:51:00Z"
    },
    {
        id: "usr_004",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        role: "viewer",
        accountStatus: "active",
        kycStatus: "verified",
        riskLevel: "low",
        createdAt: "2026-04-19T08:05:00Z",
        lastActivityAt: "2026-08-23T13:20:00Z"
    },
    {
        id: "usr_005",
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        role: "support",
        accountStatus: "frozen",
        kycStatus: "verified",
        riskLevel: "high",
        createdAt: "2026-03-27T10:10:00Z",
        lastActivityAt: "2026-08-23T12:11:00Z"
    },
    {
        id: "usr_006",
        name: "Daniel Taylor",
        email: "daniel.taylor@example.com",
        role: "risk_analyst",
        accountStatus: "active",
        kycStatus: "verified",
        riskLevel: "medium",
        createdAt: "2026-02-08T12:40:00Z",
        lastActivityAt: "2026-08-23T11:45:00Z"
    },
    {
        id: "usr_007",
        name: "Olivia Davis",
        email: "olivia.davis@example.com",
        role: "admin",
        accountStatus: "active",
        kycStatus: "verified",
        riskLevel: "low",
        createdAt: "2026-01-21T07:55:00Z",
        lastActivityAt: "2026-08-23T10:32:00Z"
    },
    {
        id: "usr_008",
        name: "James Anderson",
        email: "james.anderson@example.com",
        role: "viewer",
        accountStatus: "closed",
        kycStatus: "verified",
        riskLevel: "low",
        createdAt: "2025-11-18T16:12:00Z",
        lastActivityAt: "2026-08-01T09:14:00Z"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock/handlers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "handlers",
    ()=>handlers
]);
// handlers.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/core/http.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/core/HttpResponse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock/data/users.ts [app-client] (ecmascript)");
;
;
const BASE_URL = "https://api.fintech";
const handlers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post(`${BASE_URL}/accessList`, async ({ request })=>{
        const body = await request.json();
        const selectedUser = __TURBOPACK__imported__module__$5b$project$5d2f$mock$2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((user)=>user.id === body.userId);
        if (selectedUser) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json(selectedUser);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json({
            success: false,
            message: "user not found"
        }, {
            status: 201
        });
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post("https://api.vaultly.dev/transfer", async ({ request })=>{
        const body = await request.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json({
            status: "ok",
            received: body
        }, {
            status: 201
        });
    })
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mock_1eqjv4s._.js.map