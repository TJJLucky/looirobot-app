/**
 * API Route: /api/admin/reseller-applications/:id
 * 后台接口：详情、更新、删除
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type {
  ResellerApplicationType,
  UpdateResellerApplicationDTO,
} from "../types";
import {
  badRequest,
  methodNotAllowed,
  notFound,
  ok,
  requireAdmin,
  serverError,
} from "../utils/admin-api.server";

const parseId = (idParam: string | undefined) => {
  const id = Number(idParam);
  if (Number.isNaN(id)) {
    return null;
  }
  return id;
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  await requireAdmin(request);

  if (request.method !== "GET") {
    return methodNotAllowed("只支持 GET 请求");
  }

  try {
    const id = parseId(params.id);
    if (id === null) {
      return badRequest("id 必须为有效数字", "Invalid ID");
    }

    const application = await resellerApplicationService.findById(id);
    if (!application) {
      return notFound("申请记录不存在", "Application not found");
    }

    return ok<ResellerApplicationType>(application, "查询成功");
  } catch (error) {
    console.error("Error fetching application:", error);
    return serverError();
  }
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  await requireAdmin(request);

  try {
    const id = parseId(params.id);
    if (id === null) {
      return badRequest("id 必须为有效数字", "Invalid ID");
    }

    switch (request.method) {
      case "PUT": {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return badRequest("请求体必须是合法 JSON", "Invalid request body");
        }

        const rest = { ...body };
        delete rest.status;
        const application = await resellerApplicationService.update(
          id,
          rest as UpdateResellerApplicationDTO,
        );

        return ok<ResellerApplicationType>(application, "更新成功");
      }

      case "DELETE": {
        const existing = await resellerApplicationService.findById(id);
        if (!existing) {
          return notFound("申请记录不存在", "Application not found");
        }

        await resellerApplicationService.delete(id);
        return ok<null>(null, "删除成功");
      }

      default:
        return methodNotAllowed();
    }
  } catch (error) {
    console.error("Error handling application:", error);
    return serverError();
  }
};
