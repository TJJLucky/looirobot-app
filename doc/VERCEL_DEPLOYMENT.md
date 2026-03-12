# Shopify App Vercel 部署指南

## 部署概览

当前仓库面向 Vercel 部署，构建流程如下：

```text
Git Push
  -> Vercel Install
  -> npm run build
  -> prisma db push
  -> 输出 build/client 与服务端构建结果
```

仓库中的实际 Vercel 配置：

```json
{
  "buildCommand": "npm run build && npx prisma db push",
  "installCommand": "npm install",
  "outputDirectory": "build/client"
}
```

## 部署前提

### 1. 必需环境变量

Vercel 至少需要配置以下变量：

| 变量名 | 说明 |
| --- | --- |
| SHOPIFY_API_KEY | Shopify App Client ID |
| SHOPIFY_API_SECRET | Shopify App Client Secret |
| SHOPIFY_APP_URL | 线上应用域名，例如 `https://your-app.vercel.app` |
| SCOPES | Shopify 权限范围 |
| DATABASE_URL | PostgreSQL 连接串 |
| NODE_ENV | 生产环境请设为 `production` |

### 2. Shopify 应用地址

生产环境需要确保 [shopify.app.toml](../shopify.app.toml) 中的地址与实际部署域名一致：

```toml
application_url = "https://your-app.vercel.app"

[auth]
redirect_urls = ["https://your-app.vercel.app/api/auth"]
```

说明：

- 开发环境可以依赖 Shopify CLI 自动更新地址
- 生产环境必须显式配置为正式域名

### 3. 数据库要求

- 生产环境应使用 PostgreSQL
- Prisma datasource 必须指向 `postgresql`
- 线上部署推荐使用 `prisma db push` 保持 schema 与数据库同步

## 部署步骤

### 1. 准备 Vercel 项目

- 将仓库连接到 Vercel
- 在 Project Settings 中配置环境变量
- 确认构建命令保持为仓库内 `vercel.json` 所声明的值

### 2. 准备数据库

- 创建可公网访问的 PostgreSQL 实例
- 将连接串配置为 `DATABASE_URL`
- 首次部署前确认数据库账号有建表权限

### 3. 推送代码

```bash
git push
```

Vercel 会自动执行：

1. `npm install`
2. `npm run build`
3. `npx prisma db push`

## Prisma 相关注意事项

### 为什么这里使用 db push

当前仓库开发与部署流程都倾向直接同步 schema：

- 避免历史迁移与数据库状态漂移造成部署失败
- 与 `shopify.web.toml` 的本地开发流程保持一致
- 对当前体量的项目更直接

### Prisma 环境变量加载

仓库使用 [prisma.config.ts](../prisma.config.ts) 显式控制 Prisma CLI 的环境变量加载顺序：

1. 先加载 `.env`
2. 再加载 `.env.local`

线上环境通常不需要 `.env.local`，以 Vercel 环境变量为准。

## 常见问题排查

### 1. 部署后应用 500

优先检查：

- `DATABASE_URL` 是否有效
- `prisma db push` 是否执行成功
- Vercel Function 日志中是否存在 Prisma 初始化错误

### 2. Shopify 后台无法正常打开应用

通常需要排查：

- `SHOPIFY_APP_URL` 与 `shopify.app.toml` 的 `application_url` 是否一致
- `[auth].redirect_urls` 是否指向正确的 `/api/auth`
- 线上域名是否已经同步到 Shopify 应用配置

### 3. 部署时 Prisma 连到了错误的数据库

如果 Prisma 指向了不期望的实例，先检查：

- Vercel 中的 `DATABASE_URL`
- 是否残留了其他环境变量覆盖
- `prisma.config.ts` 是否与预期的加载顺序一致

### 4. 嵌入式页面报 origin 或 iframe 错误

这类问题往往不是 Vercel 构建错误，而是 Shopify 应用配置与线上域名不一致导致。优先校验 app URL、auth redirect URL 和当前访问域名是否完全一致。

## 验证清单

部署完成后至少检查：

1. 访问首页无 500 错误
2. Shopify 后台能正常打开 `/app`
3. `/app/reseller-applications` 能正常加载列表
4. 数据库中已存在 Session 表及业务表
5. 公开接口 `/api/public/reseller-applications` 可正常写入数据
