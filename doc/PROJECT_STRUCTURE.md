# Looirobot App 项目目录结构说明

## 项目概述

这是一个基于 React Router 的 Shopify Embedded App。当前代码组织遵循 Route -> Service -> Prisma，并通过 app/types 统一类型导出。

## 顶层目录

```text
looirobot-app/
├── app/                  # 应用代码
├── prisma/               # Prisma 多文件 schema
├── public/               # 静态资源
├── doc/                  # 项目文档
├── extensions/           # Shopify 扩展目录
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## app 目录

```text
app/
├── db.server.ts
├── entry.server.tsx
├── root.tsx
├── routes.ts
├── shopify.server.ts
├── routes/
│   ├── _index/
│   │   ├── route.tsx
│   │   └── styles.module.css
│   ├── app.tsx
│   ├── app._index.tsx
│   ├── api.reseller-applications.tsx
│   ├── api.upload.tsx
│   ├── auth.$.tsx
│   ├── auth.login/
│   │   ├── route.tsx
│   │   └── error.server.tsx
│   ├── webhooks.app.scopes_update.tsx
│   └── webhooks.app.uninstalled.tsx
├── services/
│   ├── index.ts
│   ├── reseller-application.service.ts
│   └── session.service.ts
└── types/
    ├── common.model.ts
    ├── index.ts
    ├── reseller-application.model.ts
    └── session.model.ts
```

## 分层职责

### Route 层

位置：app/routes

职责：
- 页面 loader/action 与 API loader/action
- 解析请求参数、返回响应与状态码
- 调用 Service 完成业务流程

### Service 层

位置：app/services

职责：
- 业务规则封装
- 数据库访问封装
- 作为 Route 的业务调用入口

### Types 层

位置：app/types

职责：
- Prisma 类型与业务 DTO 的中转
- 通用响应类型定义
- 统一类型导出入口

### 基础设施层

- app/db.server.ts：Prisma 单例
- app/shopify.server.ts：Shopify 集成与认证
- app/routes.ts：flatRoutes 自动生成路由

## 当前关键路由

| 路由 | 文件 | 说明 |
|------|------|------|
| / | routes/_index/route.tsx | 首页，支持默认 reseller 数据创建 action |
| /app | routes/app.tsx | 嵌入式应用布局 |
| /api/reseller-applications | routes/api.reseller-applications.tsx | reseller CRUD API |
| /api/upload | routes/api.upload.tsx | 文件上传代理 API |
| /auth/login | routes/auth.login/route.tsx | 登录入口 |
| /auth/* | routes/auth.$.tsx | OAuth 回调 |
| /webhooks/app/uninstalled | routes/webhooks.app.uninstalled.tsx | 卸载 webhook |
| /webhooks/app/scopes_update | routes/webhooks.app.scopes_update.tsx | 权限变更 webhook |

## 开发与维护约定

- Route 不直接调用 Prisma
- 业务逻辑放在 Service
- 类型统一从 app/types/index.ts 导入
- API 响应保持 success、data、error、message 结构
