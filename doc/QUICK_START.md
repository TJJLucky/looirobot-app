# 快速开始指南

## 🚀 已完成的结构改造

您的项目已经升级为模块化、可维护的架构！以下是新增的文件和功能：

### 📂 新增文件结构

```
✅ prisma/
   ├── models/              # Schema 模块（真正的多文件支持）
   │   ├── auth.prisma
   │   └── application.prisma
   ├── schema.prisma        # generator + datasource
   └── README.md            # Prisma 使用文档

✅ app/
   ├── services/            # 服务层（业务逻辑）
   │   ├── index.ts
   │   ├── session.service.ts
   │   └── reseller-application.service.ts
   │
   ├── types/               # 类型定义
   │   ├── index.ts
   │   └── models.ts
   │
   └── routes/
       └── api.reseller-applications.tsx  # 示例 API

✅ doc/
   └── ARCHITECTURE.md      # 架构文档
```

## 📖 使用示例

### 1. 在路由中使用服务层

```typescript
// 在任何路由文件中
import { resellerApplicationService } from "../services";

// GET 请求
export const loader = async () => {
  const applications = await resellerApplicationService.findAll();
  return json({ data: applications });
};

// POST 请求
export const action = async ({ request }) => {
  const data = await request.json();
  const result = await resellerApplicationService.create(data);
  return json({ success: true, data: result });
};
```

### 2. 使用类型定义

```typescript
import type { 
  ResellerApplicationType,
  ApiResponse,
  PaginatedResult 
} from "../types";

// 类型安全的响应
const response: ApiResponse<ResellerApplicationType> = {
  success: true,
  data: application,
};
```

### 3. 数据库操作快捷命令

```bash
# 生成 Prisma Client（类型定义）
npm run db:generate

# 创建数据库迁移
npm run db:migrate

# 直接推送 Schema 到数据库（开发环境）
npm run db:push

# 打开 Prisma Studio（可视化数据库管理）
npm run db:studio

# 检查迁移状态
npm run db:status

# 重置数据库（慎用！会删除所有数据）
npm run db:reset
```

## ✨ API 端点示例

### 经销商申请 API

**端点**: `/api/reseller-applications`

#### GET - 查询列表
```bash
# 获取所有申请（分页）
GET /api/reseller-applications?page=1&pageSize=20

# 根据邮箱查询
GET /api/reseller-applications?email=test@example.com
```

**响应示例**：
```json
{
  "success": true,
  "data": {
    "data": [...],
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "totalPages": 5
  }
}
```

#### POST - 创建申请
```bash
POST /api/reseller-applications
Content-Type: application/json

{
  "firstName": "张",
  "lastName": "三",
  "email": "zhangsan@example.com",
  "phoneNumberPrefix": "+86",
  "phoneNumber": "13800138000",
  "companyName": "示例公司",
  "companySize": "50-100",
  "jobTitle": "采购经理",
  "country": "中国",
  "mainProductsAndBrands": "智能硬件、消费电子",
  "looiAnnualProjectedSales": "1000-5000",
  "technicianScaleAndAfterSalesProcess": "10人技术团队",
  "files": [
    "https://example.com/file1.pdf",
    "https://example.com/file2.pdf"
  ]
}
```

**响应示例**：
```json
{
  "success": true,
  "data": { ...创建的申请数据... },
  "message": "申请提交成功"
}
```

#### PUT - 更新申请
```bash
PUT /api/reseller-applications
Content-Type: application/json

{
  "id": 1,
  "companySize": "100-200"
}
```

#### DELETE - 删除申请
```bash
DELETE /api/reseller-applications
Content-Type: application/json

{
  "id": 1
}
```

## 🎯 开发工作流

### 场景 1：添加新的数据表

1. **在 `models/` 中创建新文件**
   ```bash
   # 创建新的模型文件
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

4. **自动生效** - Prisma 6+ 原生支持多文件，无需额外配置

### 场景 2：测试 API

使用 Prisma Studio 查看和管理数据：

```bash
npm run db:studio
```

浏览器会自动打开 `http://localhost:5555`，您可以：
- 📋 查看所有表和数据
- ➕ 手动添加测试数据
- ✏️ 编辑现有数据
- 🗑️ 删除数据

## 📚 核心概念

### 服务层的职责

✅ **负责**：
- 数据库 CRUD 操作
- 业务逻辑处理
- 数据验证
- 复杂查询封装

❌ **不负责**：
- HTTP 请求/响应处理（由路由层处理）
- 身份验证（由中间件处理）
- 视图渲染

### 路由层的职责

✅ **负责**：
- 处理 HTTP 请求
- 调用服务层方法
- 返回 JSON 响应
- 错误处理

❌ **不负责**：
- 直接操作数据库
- 复杂的业务逻辑

## 🔍 调试技巧

### 1. 查看生成的 SQL
```typescript
// 在任何服务方法中
const result = await prisma.product.findMany();
console.log(result); // 查看查询结果
```

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
