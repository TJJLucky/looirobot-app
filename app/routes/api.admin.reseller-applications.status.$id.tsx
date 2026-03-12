/**
 * API Route: /api/admin/reseller-applications/status/:id
 * 后台接口：专门处理 status 更新
 */

import type { ActionFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type {
  ResellerApplicationStatusType,
  ResellerApplicationType,
} from "../types";
import {
  badRequest,
  methodNotAllowed,
  notFound,
  ok,
  requireAdmin,
  serverError,
} from "../utils/admin-api.server";

const ALLOWED_STATUS: ResellerApplicationStatusType[] = [-1, 0, 1, 2, 3];

export const action = async ({ request, params }: ActionFunctionArgs) => {
  await requireAdmin(request);

  try {
    switch (request.method) {
      case "PUT": {
        const id = Number(params.id);
        if (Number.isNaN(id)) {
          return badRequest("id 必须为有效数字", "Invalid ID");
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return badRequest("请求体必须是合法 JSON", "Invalid request body");
        }

        const status = (body as { status?: unknown })?.status;
        if (typeof status !== "number") {
          return badRequest("status 必须为数字", "Invalid status");
        }

        if (!ALLOWED_STATUS.includes(status as ResellerApplicationStatusType)) {
          return badRequest("status 必须为 -1、0、1、2 或 3", "Invalid status");
        }

        const existing = await resellerApplicationService.findById(id);
        if (!existing) {
          return notFound("申请记录不存在", "Application not found");
        }

        const application = await resellerApplicationService.updateStatus(
          id,
          status,
        );

        return ok<ResellerApplicationType>(application, "状态更新成功");
      }

      default:
        return methodNotAllowed("只支持 PUT 请求");
    }
  } catch (error) {
    console.error("Error updating status:", error);
    return serverError();
  }
};
