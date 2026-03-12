export const STATUS_OPTIONS = [
  { value: null, label: "全部" },
  { value: "0", label: "待审核" },
  { value: "1", label: "已通过" },
  { value: "2", label: "未通过" },
  { value: "3", label: "重点关注" },
] as const;

export const STATUS_META: Record<
  number,
  {
    label: string;
    tone: "warning" | "success" | "critical" | "info";
  }
> = {
  0: { label: "待审核", tone: "warning" },
  1: { label: "已通过", tone: "success" },
  2: { label: "未通过", tone: "critical" },
  3: { label: "重点关注", tone: "info" },
};
