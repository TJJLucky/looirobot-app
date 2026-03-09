/**
 * shopify.server.ts - Shopify API 配置
 * 初始化 Shopify 应用的核心配置，包括认证、API 版本、会话存储等
 */

// 导入 Shopify 适配器
import "@shopify/shopify-app-react-router/adapters/node";

// 从 Shopify App React Router 导入核心函数
import {
  ApiVersion, // API 版本枚举
  AppDistribution, // 应用分发类型
  shopifyApp, // Shopify 应用工厂函数
} from "@shopify/shopify-app-react-router/server";

// 导入 Prisma 会话存储，用于保存用户登录状态
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";

// 导入数据库客户端
import prisma from "./db.server";

/**
 * 创建 Shopify 应用实例
 * 配置应用的 API 凭证、权限范围、分发方式等
 */
const shopify = shopifyApp({
  // Shopify Client ID (公开的)
  apiKey: process.env.SHOPIFY_API_KEY,

  // Shopify Client Secret (私密的，用于签名)
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",

  // 使用的 API 版本
  apiVersion: ApiVersion.October25,

  // 应用权限范围，从环境变量读取（多个用逗号分隔）
  scopes: process.env.SCOPES?.split(","),

  // 应用的 URL 地址，用于 OAuth 回调
  appUrl: process.env.SHOPIFY_APP_URL || "",

  // 认证路径前缀，OAuth 相关路由将以 /auth 开头
  authPathPrefix: "/auth",

  // 使用 Prisma 存储会话（用户登录状态）
  sessionStorage: new PrismaSessionStorage(prisma),

  // 应用分发类型：AppStore 表示发布到 Shopify 应用商店
  distribution: AppDistribution.AppStore,

  // 未来特性配置
  future: {
    // 离线访问令牌过期特性
    expiringOfflineAccessTokens: true,
  },

  // 自定义店铺域名（可选，用于多店铺场景）
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

// 导出 Shopify 应用实例作为默认导出
export default shopify;

// ===== 导出常用函数 =====

/** Shopify API 版本号 */
export const apiVersion = ApiVersion.October25;

/** 设置响应头，用于 Shopify API 验证 */
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;

/** 认证函数 - 验证用户是否已登录 */
export const authenticate = shopify.authenticate;

/** 未认证处理函数 - 处理未登录用户的请求 */
export const unauthenticated = shopify.unauthenticated;

/** 登录函数 - 处理用户登录 */
export const login = shopify.login;

/** 注册 Webhook - 注册应用需要的 Webhook */
export const registerWebhooks = shopify.registerWebhooks;

/** 会话存储 - 访问会话存储实例 */
export const sessionStorage = shopify.sessionStorage;
