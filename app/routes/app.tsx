/**
 * app.tsx - App 布局组件
 * 作为 /app 路由下的公共布局，包含导航栏和页面容器
 */

import type { HeadersFunction, LoaderFunctionArgs } from "react-router";

// 导入 React Router 相关组件
import { Outlet, useLoaderData, useRouteError } from "react-router";

// 导入 Shopify 边界处理（错误边界和响应头）
import { boundary } from "@shopify/shopify-app-react-router/server";

// 导入 Shopify App Provider，提供 App Bridge 上下文
import { AppProvider } from "@shopify/shopify-app-react-router/react";

// 导入认证函数
import { authenticate } from "../shopify.server";

/**
 * loader - 服务端加载函数
 * 在页面渲染前验证用户是否已登录
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 验证用户身份，未登录会抛出错误
  await authenticate.admin(request);

  // 从环境变量获取 Shopify API Key
  // eslint-disable-next-line no-undef
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

/**
 * App - 主布局组件
 * 提供全局导航和页面渲染容器
 */
export default function App() {
  // 获取 loader 返回的数据
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    // AppProvider: 提供 Shopify App Bridge 功能
    <AppProvider embedded apiKey={apiKey}>
      {/* 导航栏 */}
      <s-app-nav>
        <s-link href="/app">Home</s-link>
      </s-app-nav>
      {/* 子路由出口 - 渲染 /app 下的子页面 */}
      <Outlet />
    </AppProvider>
  );
}

/**
 * ErrorBoundary - 错误边界组件
 * 捕获子路由中的错误并显示
 */
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

/**
 * headers - 设置响应头
 * 用于 Shopify API 验证
 */
export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
