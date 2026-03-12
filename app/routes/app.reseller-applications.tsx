/**
 * app.reseller-applications.tsx - 经销商申请管理列表页
 * 后台管理：查看和处理经销商申请
 */

import type { LoaderFunctionArgs } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { authenticate } from "../shopify.server";
import type { ResellerApplicationType, PaginatedResult } from "../types";
import {
  ApplicationDetailModal,
  ApplicationPagination,
  ApplicationTable,
  StatusFilterBar,
  fetchApplicationDetail,
  fetchApplicationList,
} from "../components/reseller-applications";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

const DEFAULT_PAGE_SIZE = 10;

const emptyResult: PaginatedResult<ResellerApplicationType> = {
  data: [],
  total: 0,
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  totalPages: 0,
};

export default function ResellerApplications() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [applications, setApplications] =
    useState<PaginatedResult<ResellerApplicationType>>(emptyResult);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailErrorMessage, setDetailErrorMessage] = useState<string | null>(
    null,
  );
  const [detailApplication, setDetailApplication] =
    useState<ResellerApplicationType | null>(null);

  const currentStatus = searchParams.get("status");
  const rawPage = parseInt(searchParams.get("page") || "1", 10);
  const rawPageSize = parseInt(
    searchParams.get("pageSize") || `${DEFAULT_PAGE_SIZE}`,
    10,
  );
  const currentPage = Number.isNaN(rawPage) || rawPage <= 0 ? 1 : rawPage;
  const currentPageSize =
    Number.isNaN(rawPageSize) || rawPageSize <= 0
      ? DEFAULT_PAGE_SIZE
      : rawPageSize;

  const fetchList = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await fetchApplicationList({
        page: currentPage,
        pageSize: currentPageSize,
        status: currentStatus,
      });

      setApplications(result);
    } catch (error) {
      setApplications(emptyResult);
      setErrorMessage(
        error instanceof Error ? error.message : "加载申请列表失败",
      );
    } finally {
      setLoading(false);
    }
  }, [currentPage, currentPageSize, currentStatus]);

  useEffect(() => {
    void fetchList();
  }, [fetchList]);

  const handleOpenDetail = async (id: number) => {
    setDetailOpen(true);
    setDetailLoading(true);
    setDetailErrorMessage(null);
    setDetailApplication(null);

    try {
      const result = await fetchApplicationDetail(id);
      setDetailApplication(result);
    } catch (error) {
      setDetailErrorMessage(
        error instanceof Error ? error.message : "加载申请详情失败",
      );
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
    setDetailLoading(false);
    setDetailErrorMessage(null);
    setDetailApplication(null);
  };

  const handleStatusUpdated = (updated: ResellerApplicationType) => {
    setDetailApplication(updated);
    void fetchList();
  };

  const handleStatusFilter = (status: string | null) => {
    const normalizedStatus =
      status === null || status === "" || status === "all" || status === "null"
        ? null
        : status;

    const params = new URLSearchParams(searchParams);
    if (normalizedStatus === null) {
      params.delete("status");
    } else {
      params.set("status", normalizedStatus);
    }
    params.set("page", "1");
    setSearchParams(params);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  return (
    <s-page heading="经销商申请管理">
      <s-stack gap="base">
        <s-section heading="筛选与概览">
          <StatusFilterBar
            currentStatus={currentStatus}
            total={applications.total}
            onStatusChange={handleStatusFilter}
          />
        </s-section>

        <s-section heading="申请列表">
          {loading ? (
            <div style={{ padding: "16px" }}>
              <s-stack justifyContent="center" alignItems="center">
                <s-text color="subdued">正在加载申请列表...</s-text>
              </s-stack>
            </div>
          ) : errorMessage ? (
            <div style={{ padding: "16px" }}>
              <s-stack justifyContent="center" alignItems="center">
                <s-text tone="critical">{errorMessage}</s-text>
              </s-stack>
            </div>
          ) : (
            <ApplicationTable
              applications={applications.data}
              onViewDetail={handleOpenDetail}
            />
          )}
        </s-section>

        {!loading && !errorMessage && (
          <ApplicationPagination
            page={applications.page}
            totalPages={applications.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </s-stack>

      <ApplicationDetailModal
        open={detailOpen}
        loading={detailLoading}
        errorMessage={detailErrorMessage}
        application={detailApplication}
        onClose={handleCloseDetail}
        onStatusUpdated={handleStatusUpdated}
      />
    </s-page>
  );
}
