/**
 * API Route: /api/reseller-applications/status/:id
 * 专门处理 status 更新
 */

import type { ActionFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type {
  ApiResponse,
  ResellerApplicationStatusType,
  ResellerApplicationType,
} from "../types";

/**
 * PUT - 更新申请状态
 * status: -1=删除, 0=未审核, 1=已审核, 2=审核不通过, 3=重点关注
 */
export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return Response.json(
        { success: false, error: "Invalid ID" } as ApiResponse,
        { status: 400 },
      );
    }

    switch (request.method) {
      case "PUT": {
        const body = await request.json();
        const status = body.status as ResellerApplicationStatusType;

        if (status === undefined) {
          return Response.json(
            { success: false, error: "Missing status" } as ApiResponse,
            { status: 400 },
          );
        }

        if (![-1, 0, 1, 2, 3].includes(status)) {
          return Response.json(
            {
              success: false,
              error: "Invalid status",
              message: "status 必须为 -1、0、1、2 或 3",
            } as ApiResponse,
            { status: 400 },
          );
        }

        const application = await resellerApplicationService.updateStatus(
          id,
          status,
        );
        return Response.json({
          success: true,
          data: application,
          message: "状态更新成功",
        } as ApiResponse<ResellerApplicationType>);
      }

      default:
        return Response.json(
          { success: false, error: "Method not allowed" } as ApiResponse,
          { status: 405 },
        );
    }
  } catch (error) {
    console.error("Error updating status:", error);
    return Response.json(
      { success: false, error: "Server error" } as ApiResponse,
      { status: 500 },
    );
  }
};
