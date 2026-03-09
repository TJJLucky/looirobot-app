# Looirobot App 项目目录结构说明

## 项目概述

这是一个基于 **Remix** 框架开发的 **Shopify Embedded App**，用于与 Shopify 店铺集成。

---

## 目录结构

```
looirobot-app/
├── app/                          # 主应用代码目录
│   ├── routes/                   # 路由文件（Remix 文件系统路由）
│   │   ├── _index/              # 首页路由（引导安装页）
│   │   │   ├── route.tsx       # 首页组件
│   │   │   └── styles.module.css # 首页样式
│   │   ├── app._index.tsx       # App 首页（安装后的主页面）
│   │   ├── app.tsx              # App 布局（公共头部/侧边栏）
│   │   ├── auth.login/          # 登录相关路由
│   │   │   ├── route.tsx        # 登录处理页面
│   │   │   └── error.server.tsx # 登录错误处理函数
│   │   ├── auth.$.tsx           # 认证通配路由（处理 OAuth 回调）
│   │   └── webhooks.app.*       # Webhook 处理
│   │       ├── scopes_update.tsx # API 权限更新 webhook
│   │       └── uninstalled.tsx  # 应用卸载 webhook
│   │
│   ├── db.server.ts             # 数据库连接配置（Prisma）
│   ├── shopify.server.ts        # Shopify API 配置和工具函数
│   ├── root.tsx                 # 根组件（HTML 模板）
│   ├── entry.server.tsx         # 服务端渲染入口
│   ├── routes.ts               # 路由配置文件
│   └── globals.d.ts             # 全局 TypeScript 类型声明
│
├── prisma/                      # Prisma ORM 目录
│   ├── schema.prisma            # 数据库模型定义
│   └── migrations/              # 数据库迁移文件
│
├── public/                      # 静态资源目录
│   └── favicon.ico              # 网站图标
│
├── extensions/                  # Shopify 扩展目录（预留）
│
├── doc/                         # 项目文档
│
└── 配置文件
    ├── package.json             # 项目依赖和脚本
    ├── vite.config.ts           # Vite 构建配置
    ├── tsconfig.json            # TypeScript 配置
    ├── shopify.web.toml         # Shopify Web 应用配置
    ├── Dockerfile               # Docker 容器化配置
    └── .mcp.json                # MCP 服务器配置
```

---

## 核心文件详细说明

### 1. app/shopify.server.ts
- **作用**: Shopify API 初始化配置
- **导出函数**:
  - `authenticate` - 验证用户登录状态
  - `login` - 处理用户登录
  - `registerWebhooks` - 注册 Webhook
  - `sessionStorage` - 会话存储

### 2. app/db.server.ts
- **作用**: 配置 Prisma 数据库连接
- **用途**: 管理 Shopify session 存储（用户登录状态）
- **原理**: 使用单例模式避免开发环境重复创建连接

### 3. app/root.tsx
- **作用**: 应用根组件
- **用途**: 定义 HTML 结构、加载全局资源（字体、CSS）
- **组件**: `<Meta />`、`<Links />`、`<Scripts />`

### 4. app/entry.server.tsx
- **作用**: 服务端渲染（SSR）入口
- **用途**: 将 React 组件渲染为 HTML 返回给浏览器
- **特性**: 流式渲染、支持爬虫优化

### 5. app/routes.ts
- **作用**: 路由配置文件
- **原理**: 使用 `flatRoutes` 自动扫描 routes 目录生成路由

---

## 路由详细说明

### 用户访问流程

| 路由 | 文件 | 说明 |
|------|------|------|
| `/` | `routes/_index/route.tsx` | 首页（引导安装页），展示应用信息和登录表单 |
| `/auth/login` | `routes/auth.login/route.tsx` | 登录页面，用户输入店铺域名 |
| `/auth/*` | `routes/auth.$.tsx` | OAuth 回调处理，Shopify 授权后跳转回来 |
| `/app` | `routes/app.tsx` | App 布局，包含导航栏 |
| `/app/` | `routes/app._index.tsx` | App 首页，应用主要功能页面 |

### Webhook 路由

| 路由 | 文件 | 说明 |
|------|------|------|
| `/webhooks/app/uninstalled` | `webhooks.app.uninstalled.tsx` | 应用被卸载时清理数据库 |
| `/webhooks/app/scopes_update` | `webhooks.app.scopes_update.tsx` | 权限变更时同步更新 |

---

## 用户使用流程

```
1. 用户访问应用
   │
   ▼
2. 首页 (_index/route.tsx)
   - 展示应用介绍
   - 显示功能列表
   │
   ▼
3. 用户点击安装/登录
   │
   ▼
4. 登录页面 (auth.login/route.tsx)
   - 输入店铺域名
   │
   ▼
5. OAuth 认证 (auth.$.tsx)
   - 跳转到 Shopify 授权页
   - 用户授权
   - 回调带 code
   - 换取 access_token
   - 存入数据库 session
   │
   ▼
6. App 首页 (app._index.tsx)
   - 已登录，可调用 Shopify API
```

---

## 技术栈

| 技术 | 说明 |
|------|------|
| **Remix** | React 全栈框架 |
| **React Router** | 路由管理 |
| **Prisma** | ORM 数据库操作 |
| **SQLite** | 轻量级数据库 |
| **Shopify App Bridge** | Shopify 应用 UI 组件 |
| **Shopify GraphQL API** | 操作店铺数据 |
| **Vite** | 构建工具 |

---

## 开发命令

```bash
# 开发模式（自动启动 ngrok 隧道）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# Docker 构建
docker build -t looirobot-app .
```
