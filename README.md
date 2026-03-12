# Looirobot App

Looirobot App 是一个基于 React Router 7 的 Shopify Embedded App，当前聚焦经销商申请场景，包含公开申请提交流程、后台审核列表与详情处理、Shopify 鉴权与会话存储。

## 核心功能

- Shopify Embedded App 容器与后台导航
- 公开经销商申请提交接口
- 管理端经销商申请列表、分页、状态筛选、详情查看、状态更新
- Prisma 多文件 Schema 管理 Session 与业务数据
- 使用 Polaris Web Components 构建后台 UI

## 技术栈

- React 18
- React Router 7
- Shopify App Bridge / shopify-app-react-router
- Prisma 6
- PostgreSQL
- Vite 6

## 架构概览

项目遵循 Route -> Service -> Prisma 的分层模式，并在经销商申请后台页面中采用“页面壳 + 客户端 fetch + 组件封装”的方式组织 UI。

```text
app/routes                HTTP 边界、页面 loader/action、API 路由
app/components            页面级功能组件
app/services              业务逻辑与数据访问封装
app/types                 DTO 与响应类型统一出口
app/db.server.ts          Prisma 单例
prisma/                   多文件 Schema
```

更多说明见：

- [doc/ARCHITECTURE.md](doc/ARCHITECTURE.md)
- [doc/PROJECT_STRUCTURE.md](doc/PROJECT_STRUCTURE.md)
- [doc/QUICK_START.md](doc/QUICK_START.md)
- [doc/VERCEL_DEPLOYMENT.md](doc/VERCEL_DEPLOYMENT.md)

## 主要路由

### 页面路由

- /app: 应用主布局
- /app/reseller-applications: 经销商申请列表页
- /app/reseller-applications/:id: 经销商申请详情页

### API 路由

- GET /api/admin/reseller-applications: 后台分页查询申请列表
- GET /api/admin/reseller-applications/:id: 后台查询申请详情
- PUT /api/admin/reseller-applications/:id: 后台更新申请信息
- DELETE /api/admin/reseller-applications/:id: 后台删除申请
- PUT /api/admin/reseller-applications/status/:id: 后台单独更新状态
- POST /api/public/reseller-applications: 公开提交申请

## 本地开发

### 环境要求

- Node.js 20.19 以上
- npm
- Shopify CLI
- PostgreSQL，或使用仓库自带 Docker Compose 启动本地数据库

### 安装依赖

```bash
npm install
```

### 环境变量

至少需要配置以下变量：

```env
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_APP_URL=
SCOPES=
DATABASE_URL=
```

说明：

- Prisma CLI 会读取 [prisma.config.ts](prisma.config.ts)，并按 `.env` 再 `.env.local` 的顺序加载环境变量
- 如果本地开发要覆盖远程数据库，请把本地连接串写入 `.env.local`

### 启动本地数据库

```bash
npm run db:local:up
```

### 同步 Prisma Schema

```bash
npm run db:push
```

### 启动开发环境

```bash
npm run dev
```

`npm run dev` 实际执行 `shopify app dev`。如果 Shopify CLI 创建了新的 tunnel 地址，会根据 [shopify.app.toml](shopify.app.toml) 中的 `automatically_update_urls_on_dev = true` 自动更新开发用地址。

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| npm run dev | 启动 Shopify 开发环境 |
| npm run dev:local | 启动本地 Postgres、执行 db push、再启动开发环境 |
| npm run build | 生成 Prisma Client 并构建应用 |
| npm run start | 启动构建产物 |
| npm run lint | 运行 ESLint |
| npm run typecheck | 生成路由类型并执行 TypeScript 检查 |
| npm run db:generate | 生成 Prisma Client |
| npm run db:migrate | 创建并应用开发迁移 |
| npm run db:push | 将 Schema 直接推送到数据库 |
| npm run db:studio | 打开 Prisma Studio |
| npm run db:status | 查看迁移状态 |
| npm run db:reset | 重置数据库 |

## 开发约定

- 页面和 API 路由保持轻量，只负责参数解析、鉴权和响应封装
- 业务逻辑统一下沉到 `app/services`
- 类型优先从 `app/types/index.ts` 导入
- API 响应统一使用 `success`、`data`、`error`、`message`
- React Router 使用 flat routes，API 文件名必须使用点式命名

## 常见问题

### 开发环境打开的是生产地址

如果嵌入式调试时出现 origin 不匹配、403、iframe 被拒绝等问题，先确认当前是通过 Shopify CLI 启动，并让 CLI 自动写入开发地址；不要手动把生产 `application_url` 当作本地调试地址使用。

### Prisma 指向了错误的数据库

如果执行 `db push` 时连到了远程库而不是本地库，优先检查 [prisma.config.ts](prisma.config.ts) 与 `.env.local` 是否正确覆盖了 `DATABASE_URL`。

### 接口返回 HTML 而不是 JSON

如果前端 fetch 报 `Unexpected token '<'`，通常是路由命名不符合 React Router flat routes 规则，导致命中了 404 HTML 页面。

## 部署

Vercel 当前构建命令为：

```bash
npm run build && npx prisma db push
```

部署细节见 [doc/VERCEL_DEPLOYMENT.md](doc/VERCEL_DEPLOYMENT.md)。

- [Internationalizing your app](https://shopify.dev/docs/apps/best-practices/internationalization/getting-started)
