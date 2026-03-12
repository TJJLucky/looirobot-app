type Props = {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export function ApplicationPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <s-section accessibilityLabel="分页导航">
      <s-stack
        direction="inline"
        justifyContent="center"
        alignItems="center"
        gap="base"
      >
        <s-button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          variant="secondary"
          icon="arrow-left"
        >
          上一页
        </s-button>
        <s-text fontVariantNumeric="tabular-nums">
          第 {page} / {totalPages} 页
        </s-text>
        <s-button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          variant="secondary"
          icon="arrow-right"
        >
          下一页
        </s-button>
      </s-stack>
    </s-section>
  );
}
