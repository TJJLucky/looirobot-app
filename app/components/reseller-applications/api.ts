import type {
  ApiResponse,
  PaginatedResult,
  ResellerApplicationStatusType,
  ResellerApplicationType,
} from "../../types";

export const fetchApplicationList = async (params: {
  page: number;
  pageSize: number;
  status: string | null;
}): Promise<PaginatedResult<ResellerApplicationType>> => {
  const query = new URLSearchParams();
  query.set("page", String(params.page));
  query.set("pageSize", String(params.pageSize));

  if (params.status !== null) {
    query.set("status", params.status);
  }

  const response = await fetch(
    `/api/admin/reseller-applications?${query.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );

  const json = (await response.json()) as ApiResponse<
    PaginatedResult<ResellerApplicationType>
  >;

  if (!response.ok || !json.success || !json.data) {
    throw new Error(json.message || "加载申请列表失败");
  }

  return json.data;
};

export const fetchApplicationDetail = async (
  id: number,
): Promise<ResellerApplicationType> => {
  const response = await fetch(`/api/admin/reseller-applications/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const json = (await response.json()) as ApiResponse<ResellerApplicationType>;

  if (!response.ok || !json.success || !json.data) {
    throw new Error(json.message || "加载申请详情失败");
  }

  return json.data;
};

export const updateApplicationStatus = async (
  id: number,
  status: ResellerApplicationStatusType,
): Promise<ResellerApplicationType> => {
  const response = await fetch(
    `/api/admin/reseller-applications/status/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );

  const json = (await response.json()) as ApiResponse<ResellerApplicationType>;

  if (!response.ok || !json.success || !json.data) {
    throw new Error(json.message || "更新状态失败");
  }

  return json.data;
};

export const deleteApplication = async (id: number): Promise<void> => {
  const response = await fetch(`/api/admin/reseller-applications/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const json = (await response.json()) as ApiResponse<null>;

  if (!response.ok || !json.success) {
    throw new Error(json.message || "删除失败");
  }
};
