# 项目架构文档

## 📁 项目结构

```
looirobot-app/
├── app/
│   ├── db.server.ts                    # Prisma 数据库连接
│   ├── entry.server.tsx                # 服务端入口
│   ├── root.tsx                        # 根组件
│   ├── routes.ts                       # 路由配置
│   ├── shopify.server.ts               # Shopify API 配置
│   │
│   ├── services/                       # 🆕 服务层（业务逻辑）
│   │   ├── index.ts                   # 统一导出
│   │   ├── session.service.ts         # 会话管理服务
│   │   └── reseller-application.service.ts  # 经销商申请服务
│   │
│   ├── types/                          # 🆕 类型定义
│   │   ├── index.ts                   # 统一导出
│   │   └── models.ts                  # Prisma 模型类型
│   │
│   └── routes/                         # 路由文件
│       ├── app.tsx                    # App 布局
│       ├── app._index.tsx             # 首页
│       ├── auth.$.tsx                 # 认证路由
│       └── api.reseller-applications.tsx  # 🆕 经销商申请 API
│
├── prisma/
│   ├── schema.prisma                   # 主 Schema 文件（generator + datasource）
│   ├── README.md                       # 🆕 Prisma 使用文档
│   │
│   ├── models/                         # 🆕 模型定义（按领域分组）
│   │   ├── auth.prisma                # 认证模块
│   │   └── application.prisma         # 申请表单模块
│   │
│   └── migrations/                     # 数据库迁移历史
│       └── ...
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🏗️ 架构设计理念

### 1. 分层架构

```
┌─────────────────────────────────────┐
│    Routes Layer (路由层)            │  ← API 端点、页面路由
│    app/routes/*.tsx                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Service Layer (服务层)           │  ← 业务逻辑、数据处理
│    app/services/*.service.ts        │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Data Access Layer (数据访问层)   │  ← Prisma ORM
│    app/db.server.ts                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Database (数据库)                 │  ← PostgreSQL
└─────────────────────────────────────┘
```

### 2. 服务层的优势

✅ **代码复用** - 多个路由可以复用同一个服务方法  
✅ **易于测试** - 服务层可以独立测试，无需模拟完整的 HTTP 请求  
✅ **业务逻辑集中** - 将复杂的业务逻辑从路由中分离  
✅ **类型安全** - 完整的 TypeScript 类型支持  

### 3. 类型系统

```typescript
// 从 Prisma 生成的类型
import type { LooiResellerApplication } from "@prisma/client";

// 业务层自定义类型
import type { CreateResellerApplicationDTO } from "../services";

// 应用层扩展类型
import type { ApiResponse, PaginatedResult } from "../types";
```

## 📝 使用示例

### 在路由中使用服务层

```typescript
// app/routes/api.reseller-applications.tsx
import { resellerApplicationService } from "../services";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 直接调用服务方法，无需关心数据库实现
  const applications = await resellerApplicationService.findAll({
    skip: 0,
    take: 20,
  });
  
  return json({ data: applications });
};
```

### 创建新的服务

```typescript
// app/services/product.service.ts
import prisma from "../db.server";

export const productService = {
  async findAll() {
    return prisma.product.findMany();
  },
  
  async create(data) {
    return prisma.product.create({ data });
  },
};

// 在 app/services/index.ts 中导出
export { productService } from "./product.service";
```

## 🔧 开发工作流

### 添加新表

1. **在 `models/` 中创建新文件**
   ```bash
   # 在 prisma/models/ 目录创建新的模型文件
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

4. **自动生效** - Prisma 会自动识别所有 `.prisma` 文件

## 📚 命名规范

| 对象 | 规范 | 示例 |
|-----|------|------|
| 模型 | PascalCase | `LooiResellerApplication` |
| 字段 | camelCase | `firstName`, `createdAt` |
| 服务文件 | kebab-case.service.ts | `reseller-application.service.ts` |
| 服务对象 | camelCase + Service | `resellerApplicationService` |
| 路由文件 | kebab-case.tsx | `api.reseller-applications.tsx` |
| DTO 类型 | PascalCase + DTO | `CreateResellerApplicationDTO` |

## 🎯 最佳实践

### ✅ 推荐做法

```typescript
// ✅ 在路由中调用服务层
export const loader = async () => {
  const data = await resellerApplicationService.findAll();
  return json(data);
};

// ✅ 使用 DTO 定义清晰的接口
interface CreateProductDTO {
  title: string;
  price: number;
}

// ✅ 统一的错误处理
try {
  const result = await service.create(data);
  return json({ success: true, data: result });
} catch (error) {
  return json({ success: false, error: error.message }, { status: 500 });
}
```

### ❌ 避免做法

```typescript
// ❌ 在路由中直接操作数据库
export const loader = async () => {
  const data = await prisma.product.findMany(); // 不推荐
  return json(data);
};

// ❌ 缺少类型定义
async function create(data: any) { // 不推荐使用 any
  return prisma.product.create({ data });
}
```

## 🔍 常用命令

```bash
# 生成 Prisma Client
npx prisma generate

# 创建迁移
npx prisma migrate dev --name description

# 可视化管理数据库
npx prisma studio

# 检查迁移状态
npx prisma migrate status

# 重置数据库（慎用）
npx prisma migrate reset
```

## 📖 参考资料

- [Prisma 文档](https://www.prisma.io/docs)
- [React Router 文档](https://reactrouter.com)
- [Shopify App React Router](https://shopify.dev/docs/api/shopify-app-react-router)
