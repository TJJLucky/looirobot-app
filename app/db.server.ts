/**
 * db.server.ts - 数据库连接配置
 * 使用 Prisma 作为 ORM 连接到 PostgreSQL 数据库
 */

import { PrismaClient } from "@prisma/client";

// 全局声明，避免开发环境热重载时创建多个 PrismaClient 实例
declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient;
}

// 开发环境下，优先使用全局单例，避免内存泄漏
if (process.env.NODE_ENV !== "production") {
  if (!global.prismaGlobal) {
    global.prismaGlobal = new PrismaClient();
  }
}

// 生产环境或全局实例不存在时，创建新的 PrismaClient
const prisma = global.prismaGlobal ?? new PrismaClient();

export default prisma;
