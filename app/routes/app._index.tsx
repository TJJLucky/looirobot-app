/**
 * app._index.tsx - App 首页
 * 用户安装应用后访问的主页面
 */

import type { HeadersFunction } from "react-router";

// 导入 Shopify 边界处理
import { boundary } from "@shopify/shopify-app-react-router/server";

// 导入认证函数

/**
 * loader - 页面数据加载
 * 登录验证已在父路由 app.tsx 中完成
 */
export const loader = async () => {
  // 登录验证已在 app.tsx 父路由中完成
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
      <s-section heading="new Welcome">
        <s-paragraph>
          Welcome to your Shopify app! Start building your app here.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
