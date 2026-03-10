/**
 * Session Model Types - 会话相关类型定义
 */

import type { Session, Prisma } from "@prisma/client";

// ============================================
// 基础模型类型
// ============================================

/**
 * Session 类型 - 用户会话
 */
export type SessionType = Session;

// ============================================
// Prisma 查询类型
// ============================================

/**
 * Session 查询参数类型
 */
export type SessionWhereInput = Prisma.SessionWhereInput;
export type SessionCreateInput = Prisma.SessionCreateInput;
export type SessionUpdateInput = Prisma.SessionUpdateInput;

// ============================================
// 扩展类型
// ============================================

/**
 * Session 详情 - 包含额外的计算字段
 */
export interface SessionWithStatus extends Session {
  isExpired: boolean;
  remainingTime?: number; // 剩余时间（秒）
}
