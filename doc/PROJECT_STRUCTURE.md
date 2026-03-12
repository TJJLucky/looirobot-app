# Looirobot App 项目目录结构说明

## 项目概述

这是一个基于 React Router 的 Shopify Embedded App。当前代码组织遵循 Route -> Service -> Prisma，并在 `app/components/reseller-applications` 中为经销商申请后台页面做了功能级拆分。

## 顶层目录

```text
looirobot-app/
├── app/                  # 应用源码
├── build/                # 构建产物
├── doc/                  # 项目文档
├── extensions/           # Shopify 扩展目录
├── prisma/               # Prisma 多文件 schema
├── public/               # 静态资源
├── docker-compose.yml    # 本地 PostgreSQL
├── package.json
├── prisma.config.ts
├── shopify.app.toml
├── shopify.web.toml
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## app 目录

```text
app/
├── db.server.ts
├── entry.server.tsx
├── globals.d.ts
├── root.tsx
├── routes.ts
├── shopify.server.ts
├── components/
│   └── reseller-applications/
│       ├── api.ts
│       ├── ApplicationPagination.tsx
│       ├── ApplicationTable.tsx
│       ├── constants.ts
│       ├── index.ts
│       ├── StatusFilterBar.tsx
│       └── utils.ts
├── routes/
│   ├── _index/
│   │   ├── route.tsx
│   │   └── styles.module.css
│   ├── app.tsx
│   ├── app._index.tsx
│   ├── app.reseller-applications.tsx
│   ├── app.reseller-applications.$id.tsx
│   ├── api.admin.reseller-applications.tsx
│   ├── api.admin.reseller-applications.$id.tsx
│   ├── api.admin.reseller-applications.status.$id.tsx
│   ├── api.public.reseller-applications.tsx
│   ├── api.public.upload.tsx
│   ├── auth.$.tsx
│   ├── auth.login/
│   │   ├── error.server.tsx
│   │   └── route.tsx
│   ├── webhooks.app.scopes_update.tsx
│   └── webhooks.app.uninstalled.tsx
├── services/
│   ├── index.ts
│   ├── reseller-application.service.ts
│   └── session.service.ts
├── styles/
│   └── base.css
└── types/
    ├── common.model.ts
    ├── index.ts
    ├── reseller-application.model.ts
    └── session.model.ts
```

## 目录说明

### app/routes

页面路由与 API 路由都在这里，遵循 React Router flat routes 约定。

- `app.tsx`: `/app` 布局，提供 Shopify AppProvider 与应用导航
- `app.reseller-applications.tsx`: 经销商申请后台列表页
- `app.reseller-applications.$id.tsx`: 经销商申请详情页
- `api.admin.*`: 仅后台可访问的管理接口
- `api.public.*`: 对外暴露的公开接口
- `auth.*` 与 `webhooks.*`: Shopify OAuth 和 webhook 边界

### app/components/reseller-applications

经销商申请后台功能组件目录。

- `api.ts`: 客户端 fetch 封装
- `StatusFilterBar.tsx`: 状态筛选
- `ApplicationTable.tsx`: 列表表格
- `ApplicationPagination.tsx`: 分页控制
- `constants.ts`: 状态映射等常量
- `utils.ts`: 日期格式化等工具

### app/services

业务逻辑与数据访问封装。

- `reseller-application.service.ts`: 经销商申请 CRUD、分页查询、状态更新
- `session.service.ts`: Shopify Session 相关访问

### app/types

统一类型出口，包括：

- 通用 API 响应结构
- 分页结果类型
- 经销商申请 DTO 与领域类型
- Session 类型

### prisma

Prisma 使用多文件 Schema：

- `schema.prisma`: generator 与 datasource
- `models/application.prisma`: 经销商申请相关模型
- `models/auth.prisma`: Shopify Session 等认证模型

## 当前关键路由

| 路由 | 文件 | 说明 |
| --- | --- | --- |
| / | routes/_index/route.tsx | 首页入口 |
| /app | routes/app.tsx | 嵌入式应用布局 |
| /app/reseller-applications | routes/app.reseller-applications.tsx | 后台申请列表页 |
| /app/reseller-applications/:id | routes/app.reseller-applications.$id.tsx | 后台申请详情页 |
| /api/admin/reseller-applications | routes/api.admin.reseller-applications.tsx | 后台分页列表接口 |
| /api/admin/reseller-applications/:id | routes/api.admin.reseller-applications.$id.tsx | 后台详情、更新、删除接口 |
| /api/admin/reseller-applications/status/:id | routes/api.admin.reseller-applications.status.$id.tsx | 后台状态更新接口 |
| /api/public/reseller-applications | routes/api.public.reseller-applications.tsx | 公开提交申请接口 |
| /api/public/upload | routes/api.public.upload.tsx | 文件上传代理接口 |
| /auth/login | routes/auth.login/route.tsx | 登录入口 |
| /auth/* | routes/auth.$.tsx | OAuth 回调 |
| /webhooks/app/uninstalled | routes/webhooks.app.uninstalled.tsx | 卸载 webhook |
| /webhooks/app/scopes_update | routes/webhooks.app.scopes_update.tsx | 权限变更 webhook |

## 开发与维护约定

- Route 不直接调用 Prisma
- 页面复杂 UI 优先拆到 `app/components`
- 业务逻辑统一放在 Service
- 类型统一从 `app/types/index.ts` 导入
- API 响应保持 `success`、`data`、`error`、`message` 结构
