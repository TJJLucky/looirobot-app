/**
 * app.reseller-applications.$id.tsx - 经销商申请详情页
 * 后台管理：查看经销商申请详情
 */

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import {
  useLoaderData,
  useActionData,
  Form,
  useNavigation,
  Link,
} from "react-router";
import { authenticate } from "../shopify.server";
import { resellerApplicationService } from "../services";
import type { ResellerApplicationType } from "../types";
import {
  STATUS_META,
  STATUS_OPTIONS,
} from "../components/reseller-applications/constants";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  const id = Number(params.id);
  if (Number.isNaN(id)) {
    throw new Response("Invalid ID", { status: 400 });
  }

  const application = await resellerApplicationService.findById(id);
  if (!application) {
    throw new Response("Not Found", { status: 404 });
  }

  return { application };
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  await authenticate.admin(request);

  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return { error: "Invalid ID" };
  }

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "updateStatus") {
    const status = Number(formData.get("status"));
    if (Number.isNaN(status)) {
      return { error: "Invalid status" };
    }

    await resellerApplicationService.updateStatus(id, status);
    return { success: true, message: "状态更新成功" };
  }

  return { error: "Unknown intent" };
};

const formatDate = (date: Date | string | null) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <s-stack direction="inline" justifyContent="space-between" gap="base">
      <s-text type="strong">{label}</s-text>
      <s-text color={value ? "base" : "subdued"}>{value || "-"}</s-text>
    </s-stack>
  );
}

export default function ResellerApplicationDetail() {
  const { application } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const app = application as unknown as ResellerApplicationType;

  return (
    <s-page heading="经销商申请详情">
      <s-stack gap="base">
        <s-section accessibilityLabel="返回列表">
          <Link
            to="/app/reseller-applications"
            style={{ color: "#0080ff", textDecoration: "none" }}
          >
            ← 返回列表
          </Link>
        </s-section>

        <s-section heading="审核状态">
          <s-stack gap="base">
            <s-stack
              direction="inline"
              justifyContent="space-between"
              alignItems="center"
              gap="base"
            >
              <s-stack direction="inline" alignItems="center" gap="base">
                <s-text type="strong">当前状态</s-text>
                <s-badge tone={STATUS_META[app.status]?.tone || "neutral"}>
                  {STATUS_META[app.status]?.label || "未知"}
                </s-badge>
              </s-stack>
            </s-stack>
            <Form method="post">
              <input type="hidden" name="intent" value="updateStatus" />
              <s-stack direction="inline" alignItems="center" gap="base">
                <s-select
                  label="更新状态"
                  name="status"
                  value={String(app.status)}
                >
                  {STATUS_OPTIONS.filter((option) => option.value !== null).map(
                    (option) => (
                      <s-option
                        key={option.value}
                        value={option.value ?? ""}
                        selected={option.value === String(app.status)}
                      >
                        {option.label}
                      </s-option>
                    ),
                  )}
                </s-select>
                <s-button
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  variant="primary"
                >
                  {isSubmitting ? "更新中..." : "更新状态"}
                </s-button>
              </s-stack>
            </Form>
            {actionData && "success" in actionData && (
              <s-text tone="success">{actionData.message}</s-text>
            )}
            {actionData && "error" in actionData && (
              <s-text tone="critical">{actionData.error}</s-text>
            )}
          </s-stack>
        </s-section>

        <s-section heading="基本信息">
          <s-stack gap="base">
            <InfoRow label="公司名称" value={app.companyName} />
            <InfoRow
              label="联系人"
              value={`${app.firstName} ${app.lastName}`}
            />
            <InfoRow label="邮箱" value={app.email} />
            <InfoRow
              label="电话"
              value={`${app.phoneNumberPrefix} ${app.phoneNumber}`}
            />
            <InfoRow label="职位" value={app.jobTitle} />
            <InfoRow label="公司规模" value={app.companySize} />
            <InfoRow label="国家/地区" value={app.country} />
          </s-stack>
        </s-section>

        <s-section heading="业务信息">
          <s-stack gap="base">
            <InfoRow label="实体零售店" value={app.physicalRetailStores} />
            <InfoRow label="在线商店" value={app.onlineStore} />
            <InfoRow
              label="批发分销网络"
              value={app.distributionWholesaleNetwork}
            />
            <InfoRow label="其他渠道" value={app.others} />
            <InfoRow label="主要产品/品牌" value={app.mainProductsAndBrands} />
            <InfoRow
              label="年度预计销售额"
              value={app.looiAnnualProjectedSales}
            />
            <InfoRow
              label="技术团队规模/售后流程"
              value={app.technicianScaleAndAfterSalesProcess}
            />
          </s-stack>
        </s-section>

        <s-section heading="文件附件">
          {app.files && app.files.length > 0 ? (
            <s-stack gap="base">
              {JSON.parse(app.files as unknown as string).map(
                (file: string, index: number) => (
                  <a
                    key={index}
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0080ff", textDecoration: "none" }}
                  >
                    文件 {index + 1}
                  </a>
                ),
              )}
            </s-stack>
          ) : (
            <s-text color="subdued">暂无附件</s-text>
          )}
        </s-section>

        <s-section heading="系统信息">
          <s-stack gap="base">
            <InfoRow label="申请时间" value={formatDate(app.createdAt)} />
            <InfoRow label="更新时间" value={formatDate(app.updatedAt)} />
            <InfoRow label="申请ID" value={app.id} />
          </s-stack>
        </s-section>
      </s-stack>
    </s-page>
  );
}
