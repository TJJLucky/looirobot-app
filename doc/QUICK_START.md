# 快速开始指南

## 1. 环境要求

开始前请先准备：

- Node.js 20.19 或更高版本
- npm
- Shopify CLI
- PostgreSQL
- Docker Desktop，若你希望直接使用仓库自带的本地数据库

## 2. 安装依赖

```bash
npm install
```

## 3. 配置环境变量

在项目根目录准备 `.env`，本地开发可额外使用 `.env.local` 覆盖。

最少需要：

```env
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_APP_URL=
SCOPES=write_metaobject_definitions,write_metaobjects,write_products
DATABASE_URL=
```

说明：

- Prisma CLI 会读取 `prisma.config.ts`
- 环境变量加载顺序是 `.env` 然后 `.env.local`
- 本地开发如果不想误连线上数据库，应把本地 `DATABASE_URL` 放到 `.env.local`

## 4. 启动数据库

### 方案 A：使用本地 Docker PostgreSQL

```bash
npm run db:local:up
```

### 方案 B：使用外部数据库

直接确保 `DATABASE_URL` 指向可访问的 PostgreSQL 实例即可。

## 5. 同步 Prisma Schema

```bash
npm run db:push
```

如果你需要开发迁移而不是直接推送，可使用：

```bash
npm run db:migrate
```

## 6. 启动开发环境

```bash
npm run dev
```

说明：

- `npm run dev` 实际执行 `shopify app dev`
- `shopify.web.toml` 中会先执行 `prisma generate`，再执行 `prisma db push` 和 `react-router dev`
- `shopify.app.toml` 已开启 `automatically_update_urls_on_dev = true`，Shopify CLI 会在开发时自动写入新的 tunnel 地址

如果希望一条命令带起本地数据库与应用，可以使用：

```bash
npm run dev:local
```

## 7. 核心页面与接口

### 后台页面

- `/app`
- `/app/reseller-applications`
- `/app/reseller-applications/:id`

### 管理端 API

- `GET /api/admin/reseller-applications`
- `GET /api/admin/reseller-applications/:id`
- `PUT /api/admin/reseller-applications/:id`
- `DELETE /api/admin/reseller-applications/:id`
- `PUT /api/admin/reseller-applications/status/:id`

### 公开 API

- `POST /api/public/reseller-applications`
- `POST /api/public/upload`

## 8. 常用命令

```bash
npm run lint
npm run typecheck
npm run build
npm run db:generate
npm run db:studio
npm run db:status
npm run db:reset
```

## 9. 常见问题

### Shopify 嵌入页出现 origin 不匹配、403 或 iframe 错误

优先检查是否通过 `shopify app dev` 启动，并使用 CLI 自动生成的开发地址。开发环境不要手动复用生产域名。

### `prisma db push` 指向了错误的数据库

先检查 `prisma.config.ts` 是否读取到了 `.env.local`，再确认 `DATABASE_URL` 是否被本地值覆盖。

### fetch 返回 HTML，前端 JSON 解析失败

项目使用 React Router flat routes。若 API 文件命名不符合点式规则，实际会命中 404 HTML 页面，前端会看到 `Unexpected token '<'`。

### Windows 下 Prisma 引擎异常

如果出现 Prisma Query Engine 兼容问题，可尝试设置：

```bash
PRISMA_CLIENT_ENGINE_TYPE=binary
```

## 10. 下一步

完成基础启动后，建议继续查看：

- `doc/ARCHITECTURE.md`
- `doc/PROJECT_STRUCTURE.md`
- `prisma/README.md`

### 2. 使用 Prisma Client 扩展
```typescript
// app/db.server.ts
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // 打印 SQL 查询
});
```

### 3. 类型检查
```bash
# 检查类型错误
npm run typecheck
```

## 📖 更多资源

- **架构文档**: [doc/ARCHITECTURE.md](./doc/ARCHITECTURE.md)
- **Prisma 文档**: [prisma/README.md](./prisma/README.md)
- **项目结构**: [doc/PROJECT_STRUCTURE.md](./doc/PROJECT_STRUCTURE.md)

---

## 🎉 恭喜！

您的项目现在拥有：
- ✅ 清晰的分层架构
- ✅ 可复用的服务层
- ✅ 完整的类型系统
- ✅ 示例 API 实现
- ✅ 完善的文档

**开始开发吧！** 🚀
