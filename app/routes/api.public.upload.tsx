/**
 * API Route: /api/public/upload
 * 公开接口：文件上传代理到第三方存储服务
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import type { ApiResponse } from "../types";
import {
  handlePublicCorsPreflight,
  jsonWithPublicCors,
} from "../utils/cors.server";

const UPLOAD_API_URL = "http://admin-test.looirobot.com/shopifySource/upload";

interface UploadResponseData {
  createTime: string;
  id: number;
  name: string;
  sourceUrl: string;
  type: number;
  updateTime: string;
}

interface UploadApiResponse {
  code: number;
  data: UploadResponseData;
  ecode: string;
  message: string;
}

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
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const type = (formData.get("type") as string | null) || "1";

    if (!file) {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: "Missing file",
          message: "请上传文件",
        } as ApiResponse,
        400,
      );
    }

    if (type !== "1" && type !== "2") {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: "Invalid type",
          message: "文件类型必须为 1（图片）或 2（视频）",
        } as ApiResponse,
        400,
      );
    }

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
    uploadFormData.append("type", type);

    const uploadResponse = await fetch(UPLOAD_API_URL, {
      method: "POST",
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      return jsonWithPublicCors(
        {
          code: 500,
          success: false,
          error: "Upload failed",
          message: `第三方上传接口返回状态码 ${uploadResponse.status}`,
        } as ApiResponse,
        500,
      );
    }

    const uploadResult: UploadApiResponse = await uploadResponse.json();
    if (uploadResult.code !== 200) {
      return jsonWithPublicCors(
        {
          code: 400,
          success: false,
          error: uploadResult.ecode || "Upload failed",
          message: uploadResult.message || "文件上传失败",
          data: uploadResult,
        } as ApiResponse<UploadApiResponse>,
        400,
      );
    }

    return jsonWithPublicCors(
      {
        code: 200,
        success: true,
        data: uploadResult.data,
        message: uploadResult.message,
      } as ApiResponse<UploadResponseData>,
      200,
    );
  } catch (error) {
    console.error("File upload error:", error);

    return jsonWithPublicCors(
      {
        code: 500,
        success: false,
        error: "Upload failed",
        message:
          error instanceof Error ? error.message : "文件上传失败，请稍后重试",
      } as ApiResponse,
      500,
    );
  }
};
