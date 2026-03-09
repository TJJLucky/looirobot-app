/**
 * webhooks.app.scopes_update.tsx - 权限更新 Webhook
 * 当店铺管理员更改应用的 API 权限范围时触发
 * 用于同步更新数据库中存储的权限 scope
 */

import type { ActionFunctionArgs } from "react-router";

// 导入认证和数据库
import { authenticate } from "../shopify.server";
import db from "../db.server";

/**
 * action - 处理权限更新 Webhook
 * 当 Shopify 通知应用的权限发生变化时，更新本地数据库
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  // 验证 Webhook 请求是否来自 Shopify
  const { payload, session, topic, shop } = await authenticate.webhook(request);

  // 打印日志
  console.log(`Received ${topic} webhook for ${shop}`);

  // 获取新的权限范围
  const current = payload.current as string[];

  // 如果会话存在，更新数据库中的权限
  if (session) {
    await db.session.update({
      where: {
        id: session.id
      },
      data: {
        // 将权限数组转换为逗号分隔的字符串
        scope: current.toString(),
      },
    });
  }

  // 返回空响应（200 OK）
  return new Response();
};
