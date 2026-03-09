/**
 * error.server.tsx - 登录错误处理
 * 将 Shopify 登录错误转换为用户友好的提示信息
 */

import type { LoginError } from "@shopify/shopify-app-react-router/server";
import { LoginErrorType } from "@shopify/shopify-app-react-router/server";

/**
 * LoginErrorMessage - 登录错误信息接口
 */
interface LoginErrorMessage {
  shop?: string;  // 店铺域名相关的错误信息
}

/**
 * loginErrorMessage - 将登录错误转换为用户友好的消息
 * @param loginErrors - Shopify 返回的登录错误
 * @returns 格式化的错误信息对象
 */
export function loginErrorMessage(loginErrors: LoginError): LoginErrorMessage {
  // 未填写店铺域名
  if (loginErrors?.shop === LoginErrorType.MissingShop) {
    return { shop: "Please enter your shop domain to log in" };
  // 店铺域名无效
  } else if (loginErrors?.shop === LoginErrorType.InvalidShop) {
    return { shop: "Please enter a valid shop domain to log in" };
  }

  // 无错误
  return {};
}
