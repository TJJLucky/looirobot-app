# 项目架构文档

## 架构总览

当前项目采用 Route -> Service -> Prisma 的分层方式，前台和后台 API 共享服务层，后台页面通过客户端 `fetch` 调用管理端 API，再用 Polaris Web Components 组合界面。

```text
Page Route / API Route (app/routes)
  |
  v
Feature UI (app/components)
  |
  v
Service Layer (app/services)
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
- 处理 Shopify 鉴权、HTTP 参数、状态码与响应体
- 页面路由只负责页面壳、loader/action 和路由级状态
- API 路由负责输入校验、调用 Service、返回统一 envelope
- 不直接写 Prisma 查询

当前典型路由：
- app/routes/app.tsx
- app/routes/app.reseller-applications.tsx
- app/routes/app.reseller-applications.$id.tsx
- app/routes/api.admin.reseller-applications.tsx
- app/routes/api.public.reseller-applications.tsx

### 2. Feature UI 层

位置：app/components

职责：
- 封装页面级功能组件，避免把复杂 UI 直接堆在路由文件里
- 管理客户端 fetch、筛选、表格、分页等交互
- 与路由层解耦，方便后续替换 UI 或拆分页面

当前示例：
- app/components/reseller-applications/ApplicationTable.tsx
- app/components/reseller-applications/StatusFilterBar.tsx
- app/components/reseller-applications/ApplicationPagination.tsx
- app/components/reseller-applications/api.ts

### 3. Service 层

位置：app/services

职责：
- 承载业务规则与数据访问逻辑
- 统一封装经销商申请查询、创建、更新、状态变更等操作
- 为 Route 提供稳定的方法接口

当前示例：
- app/services/reseller-application.service.ts
- app/services/session.service.ts

### 4. 数据访问层

位置：app/db.server.ts

职责：
- 提供 Prisma 单例
- 避免开发环境热更新造成多实例连接

### 5. 类型中转层

位置：app/types

职责：
- 统一导出 DTO、响应类型、领域模型类型
- 作为 Prisma 类型与业务代码之间的中转层
- Route、Service、组件优先从 `app/types/index.ts` 导入类型

## 经销商申请模块数据流

### 后台管理流

```text
/app/reseller-applications
  -> loader 校验 Shopify admin 身份
  -> 客户端 useEffect 调用 /api/admin/reseller-applications
  -> API Route 参数校验
  -> resellerApplicationService 查询 Prisma
  -> 返回 PaginatedResult
  -> ApplicationTable / ApplicationPagination 渲染
```

### 公开提交流

```text
Client Form
  -> POST /api/public/reseller-applications
  -> 参数基础校验
  -> resellerApplicationService.create
  -> 返回统一 ApiResponse
```

## 响应规范

管理端与公开接口都应尽量维持统一 envelope：

```json
{
  "success": true,
  "data": {},
  "message": "操作成功",
  "error": null
}
```

约束：
- `success` 表示是否成功
- `data` 为业务数据
- `message` 为用户可读信息
- `error` 为错误标识或调试信息

## 鉴权边界

- `/app/*` 页面通过 `authenticate.admin` 保护
- `/api/admin/*` 管理接口通过 `requireAdmin` 保护
- `/api/public/*` 公开接口不依赖 Shopify 后台登录，但仍需做输入校验

## 技术约束

- React Router 使用 flat routes，文件名必须与路由规则匹配
- Route 不直接调用 Prisma
- 业务逻辑集中在 Service
- 不在功能代码中创建新的 Prisma Client
- Shopify 集成集中在 app/shopify.server.ts

## 相关文档

- doc/PROJECT_STRUCTURE.md
- doc/QUICK_START.md
- doc/VERCEL_DEPLOYMENT.md
- prisma/README.md
