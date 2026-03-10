/**
 * API Route: /api/reseller-applications
 * 处理经销商申请表单的 CRUD 操作
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
 * GET 请求 - 查询经销商申请列表
 * Query 参数：
 * - page: 页码（默认 1）
 * - pageSize: 每页数量（默认 20）
 * - email: 根据邮箱查询单个申请
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const email = url.searchParams.get("email");
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "20");

    // 如果提供了 id，查询单个申请
    if (id) {
      const application = await resellerApplicationService.findById(Number(id));
      return Response.json({
        success: true,
        data: application,
      } as ApiResponse<ResellerApplicationType | null>);
    }

    // 如果提供了 email，查询单个申请
    if (email) {
      const application = await resellerApplicationService.findByEmail(email);
      return Response.json({
        success: true,
        data: application,
      } as ApiResponse<ResellerApplicationType | null>);
    }

    // 否则返回分页列表
    const skip = (page - 1) * pageSize;
    const [applications, total] = await Promise.all([
      resellerApplicationService.findAll({ skip, take: pageSize }),
      resellerApplicationService.count(),
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
      {
        success: false,
        error: "Failed to fetch applications",
      } as ApiResponse,
      { status: 500 },
    );
  }
};

/**
 * POST 请求 - 创建新的经销商申请
 * PUT 请求 - 更新现有申请
 * DELETE 请求 - 删除申请
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const method = request.method;

    // POST - 创建新申请
    if (method === "POST") {
      const body = await request.json();
      const data: CreateResellerApplicationDTO = {
        ...body,
        status: 0,
      };

      // 检查邮箱是否已存在
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
    }

    // PUT - 更新申请
    if (method === "PUT") {
      const body = await request.json();
      const { id, ...updateData } = body;

      if (!id) {
        return Response.json(
          {
            success: false,
            error: "Missing application ID",
          } as ApiResponse,
          { status: 400 },
        );
      }

      if (
        updateData.status !== undefined &&
        updateData.status !== 0 &&
        updateData.status !== 1
      ) {
        return Response.json(
          {
            success: false,
            error: "Invalid status",
            message: "status 必须为 0（未审核）或 1（已审核）",
          } as ApiResponse,
          { status: 400 },
        );
      }

      const application = await resellerApplicationService.update(
        id,
        updateData,
      );
      return Response.json({
        success: true,
        data: application,
        message: "更新成功",
      } as ApiResponse<ResellerApplicationType>);
    }

    // DELETE - 删除申请
    if (method === "DELETE") {
      const body = await request.json();
      const { id } = body;

      if (!id) {
        return Response.json(
          {
            success: false,
            error: "Missing application ID",
          } as ApiResponse,
          { status: 400 },
        );
      }

      await resellerApplicationService.delete(id);
      return Response.json({
        success: true,
        message: "删除成功",
      } as ApiResponse);
    }

    return Response.json(
      {
        success: false,
        error: "Method not allowed",
      } as ApiResponse,
      { status: 405 },
    );
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
