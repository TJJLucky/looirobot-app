/**
 * app._index.tsx - App 首页
 * 用户安装应用后访问的主页面
 */

import type { HeadersFunction, LoaderFunctionArgs } from "react-router";

// 导入 Shopify 边界处理
import { boundary } from "@shopify/shopify-app-react-router/server";

// 导入认证函数
import { authenticate } from "../shopify.server";

/**
 * loader - 服务端加载函数
 * 验证用户登录状态，可在此时获取店铺信息
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 验证用户是否已登录，未登录会跳转到登录页面
  await authenticate.admin(request);

  // 返回页面数据
  return {
    shop: "Demo Shop",
  };
};

/**
 * Index - 首页组件
 * 用户访问 /app 时显示的主页面
 */
export default function Index() {
  return (
    // s-page: Shopify Polaris 页面组件
    <s-page heading="Looirobot App">
      {/* s-section: 内容区块 */}
      <s-section heading="Welcome">
        <s-paragraph>
          Welcome to your Shopify app! Start building your app here.
        </s-paragraph>
      </s-section>
      <s-section heading="Welcome1">
        <s-paragraph>
          Welcome to your Shopify app! Start building your app here.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

/**
 * headers - 设置响应头
 * 用于 Shopify API 验证
 */
export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
