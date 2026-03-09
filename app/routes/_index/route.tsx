/**
 * _index/route.tsx - 首页（应用引导页）
 * 用户访问应用时的首页，用于展示应用信息和引导安装
 */

import type { LoaderFunctionArgs } from "react-router";
import { redirect, Form, useLoaderData } from "react-router";

// 导入登录函数
import { login } from "../../shopify.server";

// 导入样式文件
import styles from "./styles.module.css";

/**
 * loader - 服务端加载函数
 * 检查 URL 中是否包含 shop 参数，如果有则跳转到 App 页面
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 解析当前 URL
  const url = new URL(request.url);

  // 如果 URL 包含 shop 参数（已安装应用），跳转到 /app
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  // 返回是否显示登录表单
  return { showForm: Boolean(login) };
};

/**
 * App - 首页组件
 * 展示应用介绍和登录表单
 */
export default function App() {
  const { showForm } = useLoaderData<typeof loader>();

  return (
    // 页面容器
    <div className={styles.index}>
      <div className={styles.content}>
        {/* 应用标题 */}
        <h1 className={styles.heading}>A short heading about [your app]</h1>
        {/* 应用标语 */}
        <p className={styles.text}>
          A tagline about [your app] that describes your value proposition.
        </p>

        {/* 登录表单 - 用于手动输入店铺域名 */}
        {showForm && (
          <Form className={styles.form} method="post" action="/auth/login">
            <label className={styles.label}>
              <span>Shop domain</span>
              <input className={styles.input} type="text" name="shop" />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </Form>
        )}

        {/* 功能列表 */}
        <ul className={styles.list}>
          <li>
            <strong>Product feature</strong>. Some detail about your feature and
            its benefit to your customer.
          </li>
          <li>
            <strong>Product feature</strong>. Some detail about your feature and
            its benefit to your customer.
          </li>
          <li>
            <strong>Product feature</strong>. Some detail about your feature and
            its benefit to your customer.
          </li>
        </ul>
      </div>
    </div>
  );
}
