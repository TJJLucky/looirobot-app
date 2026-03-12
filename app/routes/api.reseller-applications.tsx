/**
 * API Route: /api/reseller-applications
 * 经销商申请列表和创建
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type {
  ApiResponse,
  CreateResellerApplicationDTO,
  PaginatedResult,
  ResellerApplicationType,
} from "../types";

/**
 * GET - 查询申请列表
 * Query: page, pageSize, status, companyName, phoneNumberPrefix
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const companyName = url.searchParams.get("companyName");
    const phoneNumberPrefix = url.searchParams.get("phoneNumberPrefix");
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "20");

    const statusNum = status !== null ? parseInt(status) : undefined;
    const skip = (page - 1) * pageSize;

    const [applications, total] = await Promise.all([
      resellerApplicationService.findAll({
        skip,
        take: pageSize,
        status: statusNum,
        companyName: companyName || undefined,
        phoneNumberPrefix: phoneNumberPrefix || undefined,
      }),
      resellerApplicationService.count(statusNum),
    ]);

    const result: PaginatedResult<ResellerApplicationType> = {
      data: applications,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };

    return Response.json({
      success: true,
      data: result,
    } as ApiResponse<PaginatedResult<ResellerApplicationType>>);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return Response.json(
      { success: false, error: "Failed to fetch applications" } as ApiResponse,
      { status: 500 },
    );
  }
};

/**
 * POST - 创建申请
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    if (request.method !== "POST") {
      return Response.json(
        { success: false, error: "Method not allowed" } as ApiResponse,
        { status: 405 },
      );
    }

    const body = await request.json();
    const data: CreateResellerApplicationDTO = {
      ...body,
      status: 0,
    };

    const emailExists = await resellerApplicationService.emailExists(
      data.email,
    );
    if (emailExists) {
      return Response.json(
        {
          success: false,
          error: "Email already exists",
          message: "该邮箱已经提交过申请",
        } as ApiResponse,
        { status: 400 },
      );
    }

    const application = await resellerApplicationService.create(data);
    return Response.json(
      {
        success: true,
        data: application,
        message: "申请提交成功",
      } as ApiResponse<ResellerApplicationType>,
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return Response.json(
      { success: false, error: "Server error" } as ApiResponse,
      { status: 500 },
    );
  }
};
