import { apiConfig } from "@/config/api.config";

type RequestOptions = RequestInit & {
  token?: string;
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  const response = await fetch(`${apiConfig.baseUrl}${path}`, {
    ...options,
    headers
  });

  const payload = await response.json();

  if (!response.ok || payload.success === false) {
    throw new Error(payload.message ?? "Une erreur est survenue.");
  }

  return payload.data as T;
}
