import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type {
  ResellerApplicationStatusType,
  ResellerApplicationType,
} from "../../types";
import { STATUS_META, STATUS_OPTIONS } from "./constants";
import { updateApplicationStatus } from "./api";
import { formatDateTime } from "./utils";

type Props = {
  open: boolean;
  loading: boolean;
  errorMessage: string | null;
  application: ResellerApplicationType | null;
  onClose: () => void;
  onStatusUpdated: (updated: ResellerApplicationType) => void;
};

const ALLOWED_STATUS: ResellerApplicationStatusType[] = [0, 1, 2, 3];

export function ApplicationDetailModal({
  open,
  loading,
  errorMessage,
  application,
  onClose,
  onStatusUpdated,
}: Props) {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!application) {
      setSelectedStatus("");
      return;
    }
    setSelectedStatus(String(application.status));
  }, [application]);

  useEffect(() => {
    if (!open) {
      setSubmitError(null);
      setSubmitting(false);
    }
  }, [open]);

  const files = useMemo(() => {
    if (!application?.files) {
      return [] as string[];
    }

    if (Array.isArray(application.files)) {
      return application.files as unknown as string[];
    }

    try {
      const parsed = JSON.parse(application.files as unknown as string);
      return Array.isArray(parsed) ? (parsed as string[]) : [];
    } catch {
      return [] as string[];
    }
  }, [application]);

  const handleStatusChange = (
    event: Event & { currentTarget: HTMLElement & { value?: string } },
  ) => {
    setSelectedStatus(event.currentTarget.value ?? "");
  };

  const handleUpdateStatus = async () => {
    if (!application) {
      return;
    }

    const nextStatus = Number(selectedStatus);
    if (!ALLOWED_STATUS.includes(nextStatus as ResellerApplicationStatusType)) {
      setSubmitError("请选择有效状态");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const updated = await updateApplicationStatus(
        application.id,
        nextStatus as ResellerApplicationStatusType,
      );
      onStatusUpdated(updated);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "更新状态失败");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div style={backdropStyle}>
      <div style={panelStyle}>
        <div style={headerStyle}>
          <h3 style={titleStyle}>经销商申请详情</h3>
          <s-button variant="secondary" onClick={onClose}>
            关闭
          </s-button>
        </div>

        <div style={contentStyle}>
          {loading ? (
            <s-stack justifyContent="center" alignItems="center" padding="base">
              <s-text color="subdued">正在加载详情...</s-text>
            </s-stack>
          ) : errorMessage ? (
            <s-stack justifyContent="center" alignItems="center" padding="base">
              <s-text tone="critical">{errorMessage}</s-text>
            </s-stack>
          ) : !application ? (
            <s-stack justifyContent="center" alignItems="center" padding="base">
              <s-text color="subdued">未找到详情数据</s-text>
            </s-stack>
          ) : (
            <s-stack gap="base">
              <s-section heading="基本信息">
                <s-stack gap="base">
                  <InfoRow label="公司名称" value={application.companyName} />
                  <InfoRow
                    label="联系人"
                    value={`${application.firstName} ${application.lastName}`}
                  />
                  <InfoRow label="邮箱" value={application.email} />
                  <InfoRow
                    label="电话"
                    value={`${application.phoneNumberPrefix} ${application.phoneNumber}`}
                  />
                  <InfoRow label="职位" value={application.jobTitle} />
                  <InfoRow label="公司规模" value={application.companySize} />
                  <InfoRow label="国家/地区" value={application.country} />
                </s-stack>
              </s-section>

              <s-section heading="业务信息">
                <s-stack gap="base">
                  <InfoRow
                    label="实体零售店"
                    value={application.physicalRetailStores}
                  />
                  <InfoRow label="在线商店" value={application.onlineStore} />
                  <InfoRow
                    label="批发分销网络"
                    value={application.distributionWholesaleNetwork}
                  />
                  <InfoRow label="其他销售渠道" value={application.others} />
                  <InfoRow
                    label="主要产品/品牌"
                    value={application.mainProductsAndBrands}
                  />
                  <InfoRow
                    label="年度预计销售额"
                    value={application.looiAnnualProjectedSales}
                  />
                  <InfoRow
                    label="技术团队规模/售后流程"
                    value={application.technicianScaleAndAfterSalesProcess}
                  />
                </s-stack>
              </s-section>

              <s-section heading="文件附件">
                {files.length > 0 ? (
                  <s-stack gap="base">
                    {files.map((file, index) => (
                      <a
                        key={`${file}-${index}`}
                        href={file}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        文件 {index + 1}
                      </a>
                    ))}
                  </s-stack>
                ) : (
                  <s-text color="subdued">暂无附件</s-text>
                )}
              </s-section>

              <s-section heading="审核状态">
                <s-stack gap="base">
                  <s-stack direction="inline" gap="base" alignItems="center">
                    <s-text type="strong">当前状态</s-text>
                    <s-badge
                      tone={STATUS_META[application.status]?.tone || "neutral"}
                    >
                      {STATUS_META[application.status]?.label || "未知"}
                    </s-badge>
                  </s-stack>
                  <s-stack direction="inline" gap="base" alignItems="center">
                    <s-select
                      label="更新状态"
                      value={selectedStatus}
                      onChange={handleStatusChange}
                    >
                      {STATUS_OPTIONS.filter(
                        (option) => option.value !== null,
                      ).map((option) => (
                        <s-option
                          key={option.value}
                          value={option.value ?? ""}
                          selected={option.value === selectedStatus}
                        >
                          {option.label}
                        </s-option>
                      ))}
                    </s-select>
                    <s-button
                      variant="primary"
                      onClick={handleUpdateStatus}
                      loading={submitting}
                      disabled={submitting}
                    >
                      更新状态
                    </s-button>
                  </s-stack>
                  {submitError && (
                    <s-text tone="critical">{submitError}</s-text>
                  )}
                </s-stack>
              </s-section>

              <s-section heading="系统信息">
                <s-stack gap="base">
                  <InfoRow
                    label="申请时间"
                    value={formatDateTime(application.createdAt)}
                  />
                  <InfoRow
                    label="更新时间"
                    value={formatDateTime(application.updatedAt)}
                  />
                  <InfoRow label="申请ID" value={application.id} />
                </s-stack>
              </s-section>
            </s-stack>
          )}
        </div>
      </div>
    </div>
  );
}

const backdropStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  zIndex: 1000,
};

const panelStyle: CSSProperties = {
  width: "min(980px, 100%)",
  maxHeight: "90vh",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.18)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const headerStyle: CSSProperties = {
  padding: "16px 20px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
};

const contentStyle: CSSProperties = {
  padding: "16px",
  overflowY: "auto",
};

function InfoRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <s-stack direction="inline" justifyContent="space-between" gap="base">
      <s-text type="strong">{label}</s-text>
      <s-text color={value ? "base" : "subdued"}>{value || "-"}</s-text>
    </s-stack>
  );
}
