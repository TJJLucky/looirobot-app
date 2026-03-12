/**
 * API Route: /api/public/upload
 * 公开接口：文件上传代理到第三方存储服务
 */

import type { ActionFunctionArgs } from "react-router";
import type { ApiResponse } from "../types";

const UPLOAD_API_URL =
  "https://test.tangiblefuturelab.com/shopifySource/upload";

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
  Response.json(
    {
      success: false,
      error: "Method not allowed",
      message: "只支持 POST 请求",
    } as ApiResponse,
    { status: 405 },
  );

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return methodNotAllowed();
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const type = (formData.get("type") as string | null) || "1";

    if (!file) {
      return Response.json(
        {
          success: false,
          error: "Missing file",
          message: "请上传文件",
        } as ApiResponse,
        { status: 400 },
      );
    }

    if (type !== "1" && type !== "2") {
      return Response.json(
        {
          success: false,
          error: "Invalid type",
          message: "文件类型必须为 1（图片）或 2（视频）",
        } as ApiResponse,
        { status: 400 },
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
      return Response.json(
        {
          success: false,
          error: "Upload failed",
          message: `第三方上传接口返回状态码 ${uploadResponse.status}`,
        } as ApiResponse,
        { status: 500 },
      );
    }

    const uploadResult: UploadApiResponse = await uploadResponse.json();
    if (uploadResult.code !== 200) {
      return Response.json(
        {
          success: false,
          error: uploadResult.ecode || "Upload failed",
          message: uploadResult.message || "文件上传失败",
          data: uploadResult,
        } as ApiResponse<UploadApiResponse>,
        { status: 400 },
      );
    }

    return Response.json(
      {
        success: true,
        data: uploadResult.data,
        message: uploadResult.message,
      } as ApiResponse<UploadResponseData>,
      { status: 200 },
    );
  } catch (error) {
    console.error("File upload error:", error);

    return Response.json(
      {
        success: false,
        error: "Upload failed",
        message:
          error instanceof Error ? error.message : "文件上传失败，请稍后重试",
      } as ApiResponse,
      { status: 500 },
    );
  }
};
