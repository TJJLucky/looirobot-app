/**
 * Common Model Types - 通用类型定义
 */

// ============================================
// 通用业务类型
// ============================================

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
 * API 响应通用格式
 */
export interface ApiResponse<T = unknown> {
  code?: number;
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
