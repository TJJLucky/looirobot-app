# 项目架构文档

## 架构总览

当前项目采用 Route -> Service -> Prisma 的分层方式，类型通过 app/types 做统一中转导出。

```text
Routes (app/routes)
  - 页面 loader/action
  - API loader/action
        |
        v
Services (app/services)
  - 业务逻辑
  - 数据访问封装
        |
        v
Prisma Client (app/db.server.ts)
        |
        v
PostgreSQL
```

## 分层职责

### 1. Route 层

位置：app/routes

职责：
- 处理 HTTP 边界（参数解析、状态码、响应结构）
- 页面场景下在 loader/action 中编排请求流程
- 调用 Service，不直接操作 Prisma

示例文件：
- app/routes/_index/route.tsx
- app/routes/api.reseller-applications.tsx
- app/routes/api.upload.tsx

### 2. Service 层

位置：app/services

职责：
- 承载业务规则与复用逻辑
- 统一封装数据库访问
- 向 Route 提供稳定的方法接口

示例文件：
- app/services/reseller-application.service.ts
- app/services/session.service.ts

### 3. 数据访问层

位置：app/db.server.ts

职责：
- 提供 Prisma 单例
- 避免开发环境热更新导致的多实例连接问题

### 4. 类型中转层

位置：app/types

职责：
- 统一导出业务类型、DTO、通用响应类型
- 作为 Prisma 类型与业务代码之间的中转层
- 业务代码优先从 app/types/index.ts 导入类型

关键文件：
- app/types/reseller-application.model.ts
- app/types/common.model.ts
- app/types/index.ts

## 目录概览

```text
app/
├── db.server.ts
├── entry.server.tsx
├── root.tsx
├── routes.ts
├── shopify.server.ts
├── routes/
│   ├── _index/route.tsx
│   ├── api.reseller-applications.tsx
│   ├── api.upload.tsx
│   ├── app.tsx
│   ├── app._index.tsx
│   ├── auth.$.tsx
│   ├── auth.login/route.tsx
│   └── webhooks.*.tsx
├── services/
│   ├── index.ts
│   ├── reseller-application.service.ts
│   └── session.service.ts
└── types/
    ├── index.ts
    ├── common.model.ts
    ├── reseller-application.model.ts
    └── session.model.ts
```

## 类型规范

- DTO 在 app/types 中定义并统一导出
- Service 不重复声明 DTO
- Route/Service 使用 app/types/index.ts 作为类型导入入口

示例：

```typescript
import type {
  ApiResponse,
  CreateResellerApplicationDTO,
  ResellerApplicationType,
} from "../types";
```

## 实践约束

- Route 保持轻量：只做边界处理和流程编排
- 业务逻辑放到 Service
- 不在 Route 中直接调用 Prisma
- 统一响应 envelope：success、data、error、message

## 相关文档

- doc/PROJECT_STRUCTURE.md
- doc/VERCEL_DEPLOYMENT.md
- prisma/README.md
