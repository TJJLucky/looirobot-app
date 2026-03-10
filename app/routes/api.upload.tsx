/**
 * API Route: /api/upload
 * 文件上传接口 - 代理到第三方存储服务
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

/**
 * POST 请求 - 处理文件上传
 *
 * FormData 参数：
 * - file: 文件（必填）
 * - type: 文件类型，1=图片，2=视频（可选，默认为 1）
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    // 只接受 POST 请求
    if (request.method !== "POST") {
      return Response.json(
        {
          success: false,
          error: "Method not allowed",
          message: "只支持 POST 请求",
        } as ApiResponse<null>,
        { status: 405 },
      );
    }

    // 解析 FormData
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const type = (formData.get("type") as string | null) || "1"; // 默认为 1（图片）

    // 验证必填参数
    if (!file) {
      return Response.json(
        {
          success: false,
          error: "Missing file",
          message: "请上传文件",
        } as ApiResponse<null>,
        { status: 400 },
      );
    }

    // 验证 type 值
    if (type !== "1" && type !== "2") {
      return Response.json(
        {
          success: false,
          error: "Invalid type",
          message: "文件类型必须为 1（图片）或 2（视频）",
        } as ApiResponse<null>,
        { status: 400 },
      );
    }

    // 创建新的 FormData 转发到第三方 API
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
    uploadFormData.append("type", type);

    // 调用第三方上传 API
    const uploadResponse = await fetch(UPLOAD_API_URL, {
      method: "POST",
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed with status: ${uploadResponse.status}`);
    }

    // 解析第三方 API 响应
    const uploadResult: UploadApiResponse = await uploadResponse.json();

    // 检查第三方 API 返回的状态码
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

    // 返回成功响应
    return Response.json({
      success: true,
      data: uploadResult.data,
      message: uploadResult.message,
    } as ApiResponse<UploadResponseData>);
  } catch (error) {
    console.error("File upload error:", error);

    return Response.json(
      {
        success: false,
        error: "Upload failed",
        message:
          error instanceof Error ? error.message : "文件上传失败，请稍后重试",
      } as ApiResponse<null>,
      { status: 500 },
    );
  }
};
