import express from "express";

import authRoutes from "./routes/auth.routes.js";
import meRoutes from "./routes/me.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import session from "express-session";

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // true in production over HTTPS
      sameSite: "lax",
      maxAge: 1000 * 60 * 60,
    },
  }),
);
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "fintech-api",
  });
});

app.get("/ready", async (req, res) => {
  try {
    // await database.ping();

    res.status(200).json({
      status: "ready",
    });
  } catch {
    res.status(503).json({
      status: "not ready",
    });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/me", meRoutes);
app.use("/api/admin", adminRoutes);

// 404 middleware
// app.use(notFoundMiddleware);

// Error middleware MUST be last
app.use(errorMiddleware);

export default app;
