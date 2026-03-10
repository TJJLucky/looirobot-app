/**
 * Prisma Configuration File
 *
 * Prisma CLI 会优先读取此配置文件。
 * 这里显式控制环境变量加载顺序：
 * 1. 先加载 .env（默认/线上）
 * 2. 再加载 .env.local（本地覆盖）
 */

import { defineConfig, env } from "prisma/config";
import { config as loadEnv } from "dotenv";

// Load default env first, then allow local overrides for development.
loadEnv();
loadEnv({ path: ".env.local", override: true }); // 本地有.env.local覆盖默认环境变量

export default defineConfig({
  // 指定 schema 目录位置（包含 schema.prisma 和 models/）
  schema: "prisma/",

  // 迁移配置
  migrations: {
    path: "prisma/migrations",
    // 如果有 seed 脚本，在这里配置
    // seed: "tsx prisma/seed.ts",
  },

  // 数据源配置
  datasource: {
    url: env("DATABASE_URL"),
  },
});
