/**
 * API Route: /api/public/reseller-applications
 * 公开接口：提交经销商申请
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type {
  ApiResponse,
  CreateResellerApplicationDTO,
  ResellerApplicationType,
} from "../types";
import {
  handlePublicCorsPreflight,
  jsonWithPublicCors,
} from "../utils/cors.server";

const methodNotAllowed = () =>
  jsonWithPublicCors(
    {
      code: 405,
      success: false,
      error: "Method not allowed",
      message: "只支持 POST 和 OPTIONS 请求",
    } as ApiResponse,
    405,
  );

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const preflight = handlePublicCorsPreflight(request);
  if (preflight) return preflight;

  return methodNotAllowed();
};

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return methodNotAllowed();
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: "Invalid request body",
          message: "请求体必须是合法 JSON",
        } as ApiResponse,
        400,
      );
    }

    const data = body as CreateResellerApplicationDTO;
    if (!data?.email) {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: "Invalid request body",
          message: "email 为必填字段",
        } as ApiResponse,
        400,
      );
    }

    const emailExists = await resellerApplicationService.emailExists(
      data.email,
    );
    if (emailExists) {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: "Email already exists",
          message: "该邮箱已经提交过申请",
        } as ApiResponse,
        400,
      );
    }

    const application = await resellerApplicationService.create({
      ...data,
      status: 0,
    });

    return jsonWithPublicCors(
      {
        code: 201,
        success: true,
        data: application,
        message: "申请提交成功",
      } as ApiResponse<ResellerApplicationType>,
      201,
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return jsonWithPublicCors(
      {
        code: 500,
        success: false,
        error: "Server error",
        message: "服务器内部错误",
      } as ApiResponse,
      500,
    );
  }
};
