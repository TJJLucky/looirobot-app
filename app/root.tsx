/**
 * root.tsx - 根组件
 * 整个应用的 HTML 模板入口，定义页面的基本结构
 */

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

/**
 * App - 根组件函数
 * 渲染 HTML 文档结构，包括头部信息和页面内容
 */
export default function App() {
  return (
    // <html> - HTML 文档根元素
    <html lang="en">
      <head>
        {/* 字符编码 */}
        <meta charSet="utf-8" />
        {/* 响应式视口设置 */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* 预连接 Shopify CDN，加速字体加载 */}
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        {/* 加载 Shopify Inter 字体 */}
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />

        {/* Meta 组件 - 页面元信息（SEO） */}
        <Meta />
        {/* Links 组件 - 页面外部资源（CSS、图标等） */}
        <Links />
      </head>
      <body>
        {/* Outlet - 渲染当前路由的子组件 */}
        <Outlet />

        {/* ScrollRestoration - 页面切换时保持滚动位置 */}
        <ScrollRestoration />
        {/* Scripts - 加载 JavaScript 脚本 */}
        <Scripts />
      </body>
    </html>
  );
}
