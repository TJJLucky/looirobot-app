import type { ApiResponse } from "../types";

export const PUBLIC_CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

export const withPublicCors = (response: Response) => {
  const headers = new Headers(response.headers);
  Object.entries(PUBLIC_CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const jsonWithPublicCors = (data: ApiResponse, status: number) => {
  return withPublicCors(Response.json(data, { status }));
};

export const handlePublicCorsPreflight = (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: PUBLIC_CORS_HEADERS });
  }

  return null;
};
