import type { CSSProperties } from "react";
import type { ResellerApplicationType } from "../../types";
import { STATUS_META } from "./constants";
import { formatDateTime } from "./utils";

type Props = {
  applications: ResellerApplicationType[];
  onViewDetail: (id: number) => void;
};

const wrapCellStyle: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
};

const centerStyle: CSSProperties = {
  textAlign: "center",
};

export function ApplicationTable({ applications, onViewDetail }: Props) {
  if (applications.length === 0) {
    return (
      <s-stack padding="base" justifyContent="center" alignItems="center">
        <s-text color="subdued">暂无申请记录</s-text>
      </s-stack>
    );
  }

  return (
    <s-table>
      <s-table-header-row>
        <s-table-header listSlot="kicker" format="numeric">
          <div style={centerStyle}>ID</div>
        </s-table-header>
        <s-table-header listSlot="primary">
          <div style={centerStyle}>公司名称</div>
        </s-table-header>
        <s-table-header listSlot="secondary">
          <div style={centerStyle}>联系人</div>
        </s-table-header>
        <s-table-header listSlot="labeled">
          <div style={centerStyle}>邮箱</div>
        </s-table-header>
        <s-table-header listSlot="labeled">
          <div style={centerStyle}>电话</div>
        </s-table-header>
        <s-table-header listSlot="inline">
          <div style={centerStyle}>状态</div>
        </s-table-header>
        <s-table-header listSlot="labeled">
          <div style={centerStyle}>申请时间</div>
        </s-table-header>
      </s-table-header-row>
      <s-table-body>
        {applications.map((app) => {
          return (
            <s-table-row key={app.id}>
              <s-table-cell>
                <div style={centerStyle}>{app.id}</div>
              </s-table-cell>
              <s-table-cell>
                <div style={centerStyle}>
                  <s-button
                    variant="tertiary"
                    onClick={() => onViewDetail(app.id)}
                  >
                    {app.companyName}
                  </s-button>
                </div>
              </s-table-cell>
              <s-table-cell>
                <div style={wrapCellStyle}>
                  <s-text>{`${app.firstName} ${app.lastName}`}</s-text>
                </div>
              </s-table-cell>
              <s-table-cell>
                <div style={wrapCellStyle}>
                  <s-text>{app.email}</s-text>
                </div>
              </s-table-cell>
              <s-table-cell>
                <div style={wrapCellStyle}>
                  <s-text>{`${app.phoneNumberPrefix} ${app.phoneNumber}`}</s-text>
                </div>
              </s-table-cell>
              <s-table-cell>
                <div style={centerStyle}>
                  <s-badge tone={STATUS_META[app.status]?.tone || "neutral"}>
                    {STATUS_META[app.status]?.label || "未知"}
                  </s-badge>
                </div>
              </s-table-cell>
              <s-table-cell>
                <div style={wrapCellStyle}>
                  <s-text>{formatDateTime(app.createdAt)}</s-text>
                </div>
              </s-table-cell>
            </s-table-row>
          );
        })}
      </s-table-body>
    </s-table>
  );
}
