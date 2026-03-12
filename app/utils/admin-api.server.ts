import { authenticate } from "../shopify.server";
import type { ApiResponse } from "../types";

export const requireAdmin = async (request: Request) => {
  await authenticate.admin(request);
};

export const ok = <T>(data: T, message = "操作成功") =>
  Response.json(
    {
      success: true,
      data,
      message,
    } as ApiResponse<T>,
    { status: 200 },
  );

export const created = <T>(data: T, message = "创建成功") =>
  Response.json(
    {
      success: true,
      data,
      message,
    } as ApiResponse<T>,
    { status: 201 },
  );

export const badRequest = (message: string, error = "Bad request") =>
  Response.json(
    {
      success: false,
      error,
      message,
    } as ApiResponse,
    { status: 400 },
  );

export const notFound = (message: string, error = "Not found") =>
  Response.json(
    {
      success: false,
      error,
      message,
    } as ApiResponse,
    { status: 404 },
  );

export const methodNotAllowed = (message = "不支持的请求方法") =>
  Response.json(
    {
      success: false,
      error: "Method not allowed",
      message,
    } as ApiResponse,
    { status: 405 },
  );

export const serverError = (message = "服务器内部错误") =>
  Response.json(
    {
      success: false,
      error: "Server error",
      message,
    } as ApiResponse,
    { status: 500 },
  );
