/**
 * Prisma Configuration File
 *
 * 注意：此文件用于 Prisma ORM v7+
 * 当前项目使用 Prisma v6，此文件暂未生效
 *
 * 升级到 Prisma v7 后，此配置将自动生效，
 * 无需再在命令中添加 --schema 参数
 */

import { defineConfig, env } from "prisma/config";
import "dotenv/config";

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
