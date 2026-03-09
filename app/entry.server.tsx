/**
 * entry.server.tsx - 服务端渲染入口
 * 处理 SSR（服务端渲染），将 React 组件渲染为 HTML 返回给浏览器
 */

import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { type EntryContext } from "react-router";
import { isbot } from "isbot";
import { addDocumentResponseHeaders } from "./shopify.server";

/**
 * streamTimeout - 流超时时间（毫秒）
 * 如果 6 秒内未完成渲染，自动终止
 */
export const streamTimeout = 5000;

/**
 * handleRequest - 处理所有传入的 HTTP 请求
 * @param request - 请求对象
 * @param responseStatusCode - 响应状态码
 * @param responseHeaders - 响应头
 * @param reactRouterContext - React Router 上下文
 */
export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext
) {
  // 添加 Shopify 所需的响应头（用于 API 验证）
  addDocumentResponseHeaders(request, responseHeaders);

  // 获取用户代理，判断是否为爬虫
  const userAgent = request.headers.get("user-agent");

  // 爬虫使用 onAllReady，浏览器使用 onShellReady（流式渲染）
  const callbackName = isbot(userAgent ?? '')
    ? "onAllReady"
    : "onShellReady";

  // 返回 Promise，处理流式渲染
  return new Promise((resolve, reject) => {
    // 使用 renderToPipeableStream 将 React 组件渲染为流
    const { pipe, abort } = renderToPipeableStream(
      // ServerRouter: React Router 服务端路由
      <ServerRouter
        context={reactRouterContext}
        url={request.url}
      />,
      {
        // 渲染完成时的回调
        [callbackName]: () => {
          // 创建 PassThrough 流
          const body = new PassThrough();
          // 将流转换为可读流
          const stream = createReadableStreamFromReadable(body);

          // 设置响应头
          responseHeaders.set("Content-Type", "text/html");

          // 返回响应
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          // 将渲染结果写入响应流
          pipe(body);
        },
        // 渲染外壳（shell）出错时调用
        onShellError(error) {
          reject(error);
        },
        // 渲染过程中出错时调用
        onError(error) {
          responseStatusCode = 500;
          console.error(error);
        },
      }
    );

    // 设置超时自动终止，确保 React 有足够时间处理错误边界
    setTimeout(abort, streamTimeout + 1000);
  });
}
