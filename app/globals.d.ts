/**
 * globals.d.ts - 全局类型声明
 * 声明项目中需要 TypeScript 识别的全局类型
 */

/**
 * CSS 模块声明
 * 告诉 TypeScript，import xxx from './xxx.css' 是合法的
 * 这样可以在组件中导入 CSS 文件并获得类型提示
 */
declare module "*.css";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "s-app-nav": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
