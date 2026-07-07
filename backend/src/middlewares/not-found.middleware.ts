import type { RequestHandler } from "express";

export const notFoundMiddleware: RequestHandler = (request, response) => {
  response.status(404).json({
    success: false,
    message: `Route introuvable: ${request.method} ${request.originalUrl}`,
    code: "NOT_FOUND"
  });
};
