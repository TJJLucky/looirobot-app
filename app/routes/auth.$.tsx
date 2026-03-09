/**
 * auth.$.tsx - 认证通配路由
 * 处理 Shopify OAuth 认证流程的所有回调
 * $ 是通配符，匹配 /auth/* 下的所有路径
 */

import type { HeadersFunction, LoaderFunctionArgs } from "react-router";

// 导入认证函数
import { authenticate } from "../shopify.server";

// 导入 Shopify 边界处理
import { boundary } from "@shopify/shopify-app-react-router/server";

/**
 * loader - 认证处理函数
 * 当用户从 Shopify 授权页面返回时，会触发此函数
 * authenticate.admin() 会：
 * 1. 验证请求是否来自 Shopify
 * 2. 创建/更新用户会话
 * 3. 重定向到 /app 页面
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 执行 OAuth 认证，认证成功后会自动重定向
  await authenticate.admin(request);

  // 正常不会执行到这里，认证成功会重定向
  return null;
};

/**
 * headers - 设置响应头
 * 用于 Shopify API 验证
 */
export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
