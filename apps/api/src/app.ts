import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import meRoutes from "./routes/me.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import CardsRoutes from "./routes/cards.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import session from "express-session";

const app = express();
const apiRouter = express.Router();
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

// Register all routes inside the API router
apiRouter.use("/auth", authRoutes);
apiRouter.use("/me", meRoutes);
apiRouter.use("/admin", adminRoutes);
apiRouter.use("/cards", CardsRoutes);

// Mount all API routes under the version prefix
app.use(`/api/${process.env.API_VERSION}`, apiRouter);


// 404 middleware
// app.use(notFoundMiddleware);
// Error middleware MUST be last
app.use(errorMiddleware);

export default app;
