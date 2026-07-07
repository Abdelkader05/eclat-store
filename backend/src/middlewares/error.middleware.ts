import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/app-error.js";

export const errorMiddleware: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    response.status(400).json({
      success: false,
      message: "Données invalides.",
      code: "VALIDATION_ERROR",
      issues: error.flatten()
    });
    return;
  }

  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      success: false,
      message: error.message,
      code: error.code
    });
    return;
  }

  response.status(500).json({
    success: false,
    message: "Erreur serveur.",
    code: "INTERNAL_ERROR"
  });
};
