/**
 * webhooks.app.uninstalled.tsx - 应用卸载 Webhook
 * 当店铺管理员卸载应用时触发
 * 用于清理该店铺在数据库中的会话数据
 */

import type { ActionFunctionArgs } from "react-router";

// 导入认证和数据库
import { authenticate } from "../shopify.server";
import db from "../db.server";

/**
 * action - 处理应用卸载 Webhook
 * 当 Shopify 通知应用被卸载时，删除该店铺的所有会话数据
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  // 验证 Webhook 请求是否来自 Shopify
  const { shop, session, topic } = await authenticate.webhook(request);

  // 打印日志
  console.log(`Received ${topic} webhook for ${shop}`);

  /**
   * 注意：Webhook 可能会触发多次
   * 如果之前已经处理过卸载，会话可能已经被删除
   * 所以需要检查 session 是否存在
   */
  if (session) {
    // 删除该店铺的所有会话数据
    await db.session.deleteMany({ where: { shop } });
  }

  // 返回空响应（200 OK）
  return new Response();
};
