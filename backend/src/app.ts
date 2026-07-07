import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.config.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));

app.get("/health", (_request, response) => {
  response.status(200).json({
    success: true,
    data: {
      service: "eclat-store-api",
      status: "ok"
    }
  });
});

app.use("/api/v1", apiRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
