/**
 * auth.login/route.tsx - 登录页面
 * 用户输入 Shopify 店铺域名进行登录
 */

import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { Form, useActionData, useLoaderData } from "react-router";

// 导入登录函数
import { login } from "../../shopify.server";

// 导入错误处理函数
import { loginErrorMessage } from "./error.server";

/**
 * loader - 页面加载时检查登录状态
 * 检查当前请求是否已有有效的登录会话
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 检查登录状态
  const errors = loginErrorMessage(await login(request));

  // 返回错误信息
  return { errors };
};

/**
 * action - 处理登录表单提交
 * 用户提交店铺域名后触发，开始 OAuth 流程
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  // 执行登录（会跳转到 Shopify 授权页面）
  const errors = loginErrorMessage(await login(request));

  // 返回错误信息（如果有）
  return {
    errors,
  };
};

/**
 * Auth - 登录页面组件
 * 显示店铺域名输入框和登录按钮
 */
export default function Auth() {
  // 获取 loader 数据
  const loaderData = useLoaderData<typeof loader>();
  // 获取 action 数据（表单提交后）
  const actionData = useActionData<typeof action>();
  // 本地状态：店铺域名
  const [shop, setShop] = useState("");
  // 优先使用 action 返回的错误，否则用 loader 的
  const { errors } = actionData || loaderData;

  return (
    // AppProvider: 提供 Shopify App Bridge（不嵌入 Shopify 后台）
    <AppProvider embedded={false}>
      <s-page>
        <Form method="post">
          <s-section heading="Log in">
            {/* 店铺域名输入框 */}
            <s-text-field
              name="shop"
              label="Shop domain"
              details="example.myshopify.com"
              value={shop}
              onChange={(e) => setShop(e.currentTarget.value)}
              autocomplete="on"
              error={errors.shop}
            ></s-text-field>
            {/* 登录按钮 */}
            <s-button type="submit">Log in</s-button>
          </s-section>
        </Form>
      </s-page>
    </AppProvider>
  );
}
