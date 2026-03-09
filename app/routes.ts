/**
 * routes.ts - 路由配置文件
 * 使用文件系统路由自动发现 app/routes 目录下的所有路由文件
 */

import { flatRoutes } from "@react-router/fs-routes";

/**
 * flatRoutes - 自动收集所有路由
 * 扫描 app/routes 目录下的所有文件，自动生成路由配置
 * 文件命名规则对应路由路径：
 * - route.tsx → 路由页面
 * - _index/route.tsx → / 路径
 * - app._index/route.tsx → /app 路径
 * - auth.login/route.tsx → /auth/login 路径
 */
export default flatRoutes();
