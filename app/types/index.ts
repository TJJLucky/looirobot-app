/**
 * Types Index - 类型定义统一导出
 * 便于在整个应用中统一导入类型
 */

// Session 相关类型
export type {
  SessionType,
  SessionWhereInput,
  SessionCreateInput,
  SessionUpdateInput,
  SessionWithStatus,
} from "./session.model";

// Reseller Application 相关类型
export type {
  ResellerApplicationType,
  ResellerApplicationStatus,
  CreateResellerApplicationDTO,
  UpdateResellerApplicationDTO,
} from "./reseller-application.model";

// 通用类型
export type { PaginatedResult, ApiResponse } from "./common.model";

// Prisma 命名空间
export { Prisma } from "@prisma/client";
