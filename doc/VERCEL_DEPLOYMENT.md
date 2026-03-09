# Shopify App Vercel 部署指南

## 部署路径

```
GitHub (main branch)
    ↓ git push
Vercel (自动构建)
    ↓ prisma generate + db push
Prisma Cloud Database (PostgreSQL)
```

## 问题解决思路

### 1. 500 错误 - Application Error

**原因**：Prisma 客户端未生成，数据库表未创建

**解决**：
- 添加 `postinstall` 和 `build` 脚本自动生成 Prisma 客户端
- 使用 `prisma db push` 同步数据库表结构

```json
// package.json
{
  "scripts": {
    "build": "prisma generate && react-router build",
    "postinstall": "prisma generate"
  }
}
```

```json
// vercel.json
{
  "buildCommand": "npm run build && npx prisma db push"
}
```

### 2. 数据库类型错误

**原因**：迁移文件使用 SQLite 语法 (DATETIME)，但 PostgreSQL 不支持

**解决**：
- 删除旧的迁移文件夹 `prisma/migrations/`
- 使用 `prisma db push` 直接根据 schema 同步，不使用迁移文件

### 3. 环境变量配置

Vercel 需要配置以下环境变量：

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `SHOPIFY_API_KEY` | Shopify Client ID | `23ff2d...` |
| `SHOPIFY_API_SECRET` | Shopify Client Secret | `shpss_...` |
| `SHOPIFY_APP_URL` | 应用部署 URL | `https://xxx.vercel.app` |
| `SCOPES` | OAuth 权限范围 | `write_products,...` |
| `DATABASE_URL` | 数据库连接字符串 | `postgres://...` |

## 配置注意点

### 1. shopify.app.looirobot-app.toml

```toml
application_url = "https://your-app.vercel.app"

[auth]
redirect_urls = [ "https://your-app.vercel.app/api/auth" ]
```

### 2. .env 文件

```env
SHOPIFY_API_KEY=your_key
SHOPIFY_API_SECRET=your_secret
SHOPIFY_APP_URL=https://your-app.vercel.app
SCOPES=write_metaobject_definitions,write_metaobjects,write_products
DATABASE_URL=postgres://...
```

### 3. Prisma Schema

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**注意**：必须使用 `postgresql`，不是 `sqlite`

## 数据库注意点

### 1. 数据库选择

- **开发环境**：可使用 SQLite 本地文件
- **生产环境（Vercel）**：必须使用云数据库（PostgreSQL）

### 2. Prisma Cloud Database

获取连接字符串：
1. 登录 Vercel → Storage
2. 选择 PostgreSQL 数据库
3. 复制连接字符串

格式：
```
postgres://username:password@host:5432/database?sslmode=require
```

### 3. 数据库同步

使用 `prisma db push` 而非 `prisma migrate deploy`：
- `migrate deploy` 需要迁移文件，可能有 SQL 兼容问题
- `db push` 直接根据 schema 同步，自动适配数据库类型

### 4. migrate deploy 失败问题（P3009 错误）

**问题描述**：
```
Error: P3009
migrate found failed migrations in the target database
```

**原因**：
- 迁移文件使用 SQLite 语法（DATETIME），PostgreSQL 不支持
- 失败后 Prisma 会记录状态，阻塞后续操作

**解决**：
- 删除 `prisma/migrations` 文件夹
- 修改 `shopify.web.toml`，将 `migrate deploy` 改为 `db push`

### 5. shopify.web.toml 配置

```toml
[commands]
predev = "npx prisma generate"
dev = "npx prisma db push && npm exec react-router dev"
```

**注意**：开发环境使用 `db push`，不要用 `migrate deploy`

### 6. 迁移文件问题

如果数据库已有失败的迁移：
1. 删除 `prisma/migrations` 文件夹
2. 重新部署，让 `db push` 创建表

## 快速部署命令

```bash
# 本地修改后
git add .
git commit -m "Update deployment config"
git push

# Vercel 自动构建：
# 1. npm install (触发 postinstall: prisma generate)
# 2. npm run build (prisma generate + react-router build)
# 3. npx prisma db push (创建数据库表)
```

## migrate deploy vs db push 对比

| 命令 | 用途 | 特点 |
|------|------|------|
| `prisma migrate deploy` | 应用迁移文件 | 需要迁移文件夹，可能有 SQL 兼容问题 |
| `prisma db push` | 直接同步 schema | 不需要迁移文件，自动适配数据库类型 |

**推荐**：开发环境使用 `db push`，更简单顺畅

## 常见错误排查

### 1. 500 Application Error
- 检查 Vercel 函数日志
- 确认 DATABASE_URL 环境变量已配置
- 确认数据库表已创建（运行 `npx prisma db push`）

### 2. process is not defined
- `process.env` 只在服务端代码（loader/action）中可用
- 客户端组件中使用会报错

### 3. P3009 迁移失败
- 删除 `prisma/migrations` 文件夹
- 使用 `db push` 而非 `migrate deploy`

## 验证部署成功

1. 访问 `https://your-app.vercel.app` 无 500 错误
2. Shopify 后台打开 App 正常显示
3. 数据库有 Session 表（可用 Prisma Studio 验证）
