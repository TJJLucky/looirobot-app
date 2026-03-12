/**
 * _index/route.tsx - 首页
 * 应用入口页，直接进入 Shopify 登录流程
 */
import { LoaderFunctionArgs, redirect } from "react-router";
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
  return redirect("/auth/login");
};
