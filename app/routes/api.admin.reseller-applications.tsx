/**
 * API Route: /api/admin/reseller-applications
 * 后台接口：经销商申请列表
 */

import type { LoaderFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type { PaginatedResult, ResellerApplicationType } from "../types";
import {
  badRequest,
  methodNotAllowed,
  ok,
  requireAdmin,
  serverError,
} from "../utils/admin-api.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireAdmin(request);

  if (request.method !== "GET") {
    return methodNotAllowed("只支持 GET 请求");
  }

  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const companyName = url.searchParams.get("companyName");
    const phoneNumberPrefix = url.searchParams.get("phoneNumberPrefix");
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const pageSize = parseInt(url.searchParams.get("pageSize") || "20", 10);

    if (
      Number.isNaN(page) ||
      Number.isNaN(pageSize) ||
      page <= 0 ||
      pageSize <= 0
    ) {
      return badRequest(
        "page 和 pageSize 必须为大于 0 的数字",
        "Invalid query params",
      );
    }

    const statusNum = status !== null ? parseInt(status, 10) : undefined;
    if (status !== null && Number.isNaN(statusNum)) {
      return badRequest("status 必须为数字", "Invalid query params");
    }

    const skip = (page - 1) * pageSize;
    const whereParams = {
      status: statusNum,
      companyName: companyName || undefined,
      phoneNumberPrefix: phoneNumberPrefix || undefined,
    };

    const [applications, total] = await Promise.all([
      resellerApplicationService.findAll({
        skip,
        take: pageSize,
        ...whereParams,
      }),
      resellerApplicationService.count(whereParams),
    ]);

    const result: PaginatedResult<ResellerApplicationType> = {
      data: applications,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };

    return ok<PaginatedResult<ResellerApplicationType>>(result, "查询成功");
  } catch (error) {
    console.error("Error fetching applications:", error);
    return serverError();
  }
};
