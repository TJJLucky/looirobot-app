# Prisma 多文件 Schema 结构

## 📁 目录说明

```
prisma/
├── migrations/            # 数据库迁移历史
├── models/                # 模型定义（按领域分组）
│   ├── auth.prisma       # 认证相关模型（Session）
│   └── application.prisma # 申请表单模型（LooiResellerApplication）
└── schema.prisma          # 主配置文件（generator + datasource）
```

## ✨ 多文件 Schema 支持

**Prisma ORM v6+** 原生支持多文件 schema：

- ✅ 所有 `.prisma` 文件中的模型可以互相引用，无需显式导入
- ✅ 必须明确指定 schema 目录：`--schema ./prisma`
- ✅ 已在 `package.json` 中配置，无需手动指定

### 重要规则

1. **`schema.prisma` 必须包含 `generator` 和 `datasource` 块**
2. **`schema.prisma` 和 `migrations/` 必须在同一层级**
3. **模型文件可以放在子目录中**（如 `models/`）
4. **必须使用 `--schema ./prisma`** 让 Prisma 扫描整个目录

### 配置说明

本项目已在 `package.json` 中配置所有 Prisma 命令使用 `--schema ./prisma`：

```json
{
  "scripts": {
    "db:generate": "prisma generate --schema ./prisma",
    "db:migrate": "prisma migrate dev --schema ./prisma",
    ...
  }
}
```

这确保了 Prisma 会扫描 `prisma/` 目录下的所有 `.prisma` 文件。

### 📌 关于 Prisma v7

本项目还包含 `prisma.config.ts` 文件，为将来升级到 Prisma ORM v7 做准备。

**当前（Prisma v6）**：
- 使用 `--schema ./prisma` 参数
- 已在 `package.json` 中配置

**升级到 Prisma v7 后**：
- `prisma.config.ts` 将自动生效
- 无需在命令中添加 `--schema` 参数
- 更灵活的配置选项

## 📖 官方文档

- [Multi-file Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema/overview/location#multi-file-prisma-schema)
- [Prisma ORM v6.7.0 发布公告](https://www.prisma.io/blog/organize-your-prisma-schema-with-multi-file-support)

## 📝 工作流程

### 添加新模型

1. **在 `models/` 中创建新文件**
   ```bash
   # 例如创建产品模型
   touch prisma/models/product.prisma
   ```

2. **编写模型定义**
   ```prisma
   // prisma/models/product.prisma
   
   model Product {
     id        Int      @id @default(autoincrement())
     title     String
     price     Float
     createdAt DateTime @default(now())
   }
   ```

3. **运行迁移**
   ```bash
   npm run db:migrate
   # 输入迁移名称：add_product_table
   ```

4. **自动生效** - 无需手动导入或配置

### 模型间关系

模型可以直接引用其他文件中的模型：

```prisma
// prisma/models/order.prisma

model Order {
  id            Int      @id @default(autoincrement())
  userId        String
  // 直接引用 auth.prisma 中的 Session
  session       Session  @relation(fields: [userId], references: [id])
}
```

## 🔧 常用命令

```bash
# 生成 Prisma Client（自动扫描所有 .prisma 文件）
npm run db:generate

# 创建迁移
npm run db:migrate

# 应用迁移（生产环境）
npx prisma migrate deploy

# 可视化管理数据库
npm run db:studio

# 检查迁移状态
npm run db:status

# 推送 schema 到数据库（开发环境，跳过迁移）
npm run db:push
```

## 💡 最佳实践

### ✅ 推荐的组织方式

```
prisma/models/
├── auth.prisma          # 认证相关（User, Session）
├── product.prisma       # 产品相关（Product, Category）
├── order.prisma         # 订单相关（Order, OrderItem）
└── application.prisma   # 申请表单（各种表单模型）
```

**按领域（domain）分组**：将相关的模型放在同一个文件中。

### ✅ 清晰的命名

- 使用单数名词：`user.prisma`，`product.prisma`
- 避免模糊命名：`myModels.prisma` ❌
- 主文件命名：`schema.prisma` ✅（包含 generator）

### ✅ 注释和文档

在每个模型文件顶部添加说明：

```prisma
// ============================================
// 产品模块 (Products)
// ============================================
// 管理商品、分类、库存等相关模型

model Product {
  // ...
}
```

## 🚨 注意事项

### ❌ 常见错误

1. **在子目录中放置 `schema.prisma`**
   ```
   ❌ prisma/models/schema.prisma  # 错误位置
   ✅ prisma/schema.prisma          # 正确位置
   ```

2. **`migrations/` 目录位置错误**
   ```
   ❌ prisma/models/migrations/  # 错误
   ✅ prisma/migrations/          # 正确（与 schema.prisma 同级）
   ```

3. **在模型文件中重复定义 generator**
   ```prisma
   ❌ // models/user.prisma
   generator client {  // 不要在这里定义
     provider = "prisma-client-js"
   }
   ```

### ✅ 正确做法

- `generator` 和 `datasource` **只在** `schema.prisma` 中定义
- 模型文件**只包含** `model` 定义
- 所有文件都在 `prisma/` 目录下

## 🎯 迁移到多文件 Schema

如果您有一个大的单文件 schema，可以这样拆分：

1. **保留 `schema.prisma`**，只保留 `generator` 和 `datasource`
2. **创建 `models/` 目录**
3. **将模型移动到独立文件**（按领域分组）
4. **运行 `npx prisma generate`** 验证配置

无需修改代码 - Prisma Client 生成的 API 保持不变！

## 🔍 故障排查

### 模型未被识别？

```bash
# 检查文件位置
ls prisma/*.prisma
ls prisma/models/*.prisma

# 重新生成 Prisma Client
npm run db:generate
```

### 迁移失败？

```bash
# 检查迁移状态
npm run db:status

# 查看详细错误
npx prisma migrate dev --schema ./prisma
```

### 类型未更新？

```bash
# 强制重新生成
rm -rf node_modules/@prisma/client
npm run db:generate
```
