/**
 * _index/route.tsx - 首页（应用引导页）
 * 用户访问应用时的首页，用于展示应用信息和引导安装
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import {
  redirect,
  Form,
  useLoaderData,
  useActionData,
  useNavigation,
} from "react-router";

// 导入登录函数
import { login } from "../../shopify.server";
import { resellerApplicationService } from "../../services";
import type { CreateResellerApplicationDTO } from "../../types";

// 导入样式文件
import styles from "./styles.module.css";

interface IndexActionData {
  success: boolean;
  message?: string;
  data?: {
    id?: number;
  };
}

/**
 * loader - 服务端加载函数
 * 检查 URL 中是否包含 shop 参数，如果有则跳转到 App 页面
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  // 解析当前 URL
  const url = new URL(request.url);

  // 如果 URL 包含 shop 参数（已安装应用），跳转到 /app
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  // 返回是否显示登录表单
  return { showForm: Boolean(login) };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent !== "create-default-reseller") {
    return Response.json(
      {
        success: false,
        error: "Invalid action",
        message: "不支持的操作",
      },
      { status: 400 },
    );
  }

  try {
    const seed = Date.now();
    const payload: CreateResellerApplicationDTO = {
      firstName: "Demo",
      lastName: "Reseller",
      email: `reseller-${seed}@example.com`,
      phoneNumberPrefix: "+1",
      phoneNumber: `${seed}`.slice(-10),
      companyName: "Demo Distribution Inc.",
      companySize: "11-50",
      jobTitle: "Sales Manager",
      country: "US",
      physicalRetailStores: "Yes",
      onlineStore: "Shopify",
      distributionWholesaleNetwork: "Yes",
      others: "",
      mainProductsAndBrands: "Smart home devices",
      looiAnnualProjectedSales: "1000",
      technicianScaleAndAfterSalesProcess:
        "5 technicians with standard after-sales SOP",
      files: [],
    };

    const emailExists = await resellerApplicationService.emailExists(
      payload.email,
    );
    if (emailExists) {
      return Response.json(
        {
          success: false,
          error: "Email already exists",
          message: "该邮箱已经提交过申请",
        },
        { status: 400 },
      );
    }

    const application = await resellerApplicationService.create(payload);
    return Response.json(
      {
        success: true,
        data: application,
        message: "申请提交成功",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create default reseller failed:", error);
    return Response.json(
      {
        success: false,
        error: "Server error",
        message: "创建失败",
      },
      { status: 500 },
    );
  }
};

/**
 * App - 首页组件
 */
export default function App() {
  const { showForm } = useLoaderData<typeof loader>();
  const actionData = useActionData() as IndexActionData | undefined;
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "submitting" &&
    navigation.formData?.get("intent") === "create-default-reseller";

  const message = actionData?.message
    ? actionData.data?.id
      ? `${actionData.message}，ID: ${actionData.data.id}`
      : actionData.message
    : "";

  return (
    // 页面容器
    <div className={styles.index}>
      <div className={styles.content}>
        {/* 应用标题 */}
        <h1 className={styles.heading}>A short heading about [your app]</h1>
        {/* 应用标语 */}
        <p className={styles.text}>
          A tagline about [your app] that describes your value proposition.
        </p>

        {/* 登录表单 - 用于手动输入店铺域名 */}
        {showForm && (
          <Form className={styles.form} method="post" action="/auth/login">
            <label className={styles.label}>
              <span>Shop domain</span>
              <input className={styles.input} type="text" name="shop" />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </Form>
        )}

        {/* 默认数据按钮 - 快速创建一条 reseller 测试数据 */}
        <Form method="post">
          <input type="hidden" name="intent" value="create-default-reseller" />
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Default Reseller Data"}
          </button>
        </Form>

        {message && <p className={styles.text}>{message}</p>}
      </div>
    </div>
  );
}
