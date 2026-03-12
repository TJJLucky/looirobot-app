/**
 * app._index.tsx - App 首页
 * 用户安装应用后访问的主页面
 */

/**
 * loader - 页面数据加载
 * 登录验证已在父路由 app.tsx 中完成
 */
export const loader = async () => {
  // 登录验证已在 app.tsx 父路由中完成
  return {
    shop: "Demo Shop",
  };
};

/**
 * Index - 首页组件
 * 用户访问 /app 时显示的主页面
 */
export default function Index() {
  return (
    // s-page: Shopify Polaris 页面组件
    <s-page heading="Looirobot App">
      <s-section heading="new Welcome">
        <s-paragraph>welcome to Looirobot</s-paragraph>
      </s-section>
    </s-page>
  );
}
