/**
 * Models Types - Prisma 模型类型定义
 * 从 @prisma/client 导出所有数据库模型类型，供应用层使用
 */

import type { Session, LooiResellerApplication, Prisma } from "@prisma/client";

// ============================================
// 基础模型类型
// ============================================

/**
 * Session 类型 - 用户会话
 */
export type SessionType = Session;

/**
 * LooiResellerApplication 类型 - 经销商申请表单
 */
export type ResellerApplicationType = LooiResellerApplication;

// ============================================
// Prisma 查询类型
// ============================================

/**
 * Session 查询参数类型
 */
export type SessionWhereInput = Prisma.SessionWhereInput;
export type SessionCreateInput = Prisma.SessionCreateInput;
export type SessionUpdateInput = Prisma.SessionUpdateInput;

/**
 * LooiResellerApplication 查询参数类型
 */
export type ResellerApplicationWhereInput =
  Prisma.LooiResellerApplicationWhereInput;
export type ResellerApplicationCreateInput =
  Prisma.LooiResellerApplicationCreateInput;
export type ResellerApplicationUpdateInput =
  Prisma.LooiResellerApplicationUpdateInput;

// ============================================
// 扩展类型（业务逻辑相关）
// ============================================

/**
 * Session 详情 - 包含额外的计算字段
 */
export interface SessionWithStatus extends Session {
  isExpired: boolean;
  remainingTime?: number; // 剩余时间（秒）
}

/**
 * 分页查询结果类型
 */
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * 经销商申请列表项（精简版）
 */
export interface ResellerApplicationListItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  createdAt: Date;
}

/**
 * API 响应通用格式
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ============================================
// 导出 Prisma 命名空间（用于高级查询）
// ============================================
export { Prisma } from "@prisma/client";
