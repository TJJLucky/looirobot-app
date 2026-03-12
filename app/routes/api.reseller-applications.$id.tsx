/**
 * API Route: /api/reseller-applications/:id
 * 处理单个经销商申请的 CRUD 操作
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type { ApiResponse, ResellerApplicationType } from "../types";

/**
 * GET - 查询单个申请
 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const id = Number(params.id);

    if (isNaN(id)) {
      return Response.json(
        {
          success: false,
          error: "Invalid ID",
        } as ApiResponse,
        { status: 400 },
      );
    }

    const application = await resellerApplicationService.findById(id);

    if (!application) {
      return Response.json(
        {
          success: false,
          error: "Application not found",
        } as ApiResponse,
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      data: application,
    } as ApiResponse<ResellerApplicationType>);
  } catch (error) {
    console.error("Error fetching application:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch application",
      } as ApiResponse,
      { status: 500 },
    );
  }
};

/**
 * PUT - 更新单个申请
 * DELETE - 删除单个申请
 */
export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const id = Number(params.id);

    if (isNaN(id)) {
      return Response.json(
        {
          success: false,
          error: "Invalid ID",
        } as ApiResponse,
        { status: 400 },
      );
    }

    switch (request.method) {
      case "PUT": {
        const body = await request.json();
        const application = await resellerApplicationService.update(id, body);
        return Response.json({
          success: true,
          data: application,
          message: "更新成功",
        } as ApiResponse<ResellerApplicationType>);
      }

      case "DELETE": {
        await resellerApplicationService.delete(id);
        return Response.json({
          success: true,
          message: "删除成功",
        } as ApiResponse);
      }

      default:
        return Response.json(
          {
            success: false,
            error: "Method not allowed",
          } as ApiResponse,
          { status: 405 },
        );
    }
  } catch (error) {
    console.error("Error handling application:", error);
    return Response.json(
      {
        success: false,
        error: "Server error",
      } as ApiResponse,
      { status: 500 },
    );
  }
};
