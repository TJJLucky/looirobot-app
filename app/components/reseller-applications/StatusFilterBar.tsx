import { STATUS_OPTIONS } from "./constants";

type Props = {
  currentStatus: string | null;
  total: number;
  onStatusChange: (status: string | null) => void;
};

export function StatusFilterBar({
  currentStatus,
  total,
  onStatusChange,
}: Props) {
  const selectValue = currentStatus ?? "all";

  const handleChange = (
    event: Event & { currentTarget: HTMLElement & { value?: string } },
  ) => {
    const value = event.currentTarget.value ?? "all";
    onStatusChange(value === "all" ? null : value);
  };

  return (
    <s-stack direction="inline" gap="base" alignItems="center">
      <s-select label="状态筛选" value={selectValue} onChange={handleChange}>
        {STATUS_OPTIONS.map((option) => (
          <s-option key={option.label} value={option.value ?? "all"}>
            {option.label}
          </s-option>
        ))}
      </s-select>
      <s-badge tone="info">共 {total} 条申请</s-badge>
      {currentStatus !== null && (
        <s-text color="subdued">已按状态筛选结果</s-text>
      )}
    </s-stack>
  );
}
