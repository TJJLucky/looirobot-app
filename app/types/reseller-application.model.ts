/**
 * Reseller Application Types - 经销商申请相关类型定义
 */

import type { LooiResellerApplication } from "@prisma/client";

export type ResellerApplicationType = LooiResellerApplication;
export type ResellerApplicationStatusType = -1 | 0 | 1 | 2 | 3; //-1=删除， 0=未审核, 1=已审核, 2=审核不通过, 3=重点关注

export interface CreateResellerApplicationDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumberPrefix: string;
  phoneNumber: string;
  companyName: string;
  companySize: string;
  jobTitle: string;
  country: string;
  physicalRetailStores?: string;
  onlineStore?: string;
  distributionWholesaleNetwork?: string;
  others?: string;
  mainProductsAndBrands: string;
  looiAnnualProjectedSales: string;
  technicianScaleAndAfterSalesProcess: string;
  files: string[];
  status?: ResellerApplicationStatusType;
}

export type UpdateResellerApplicationDTO =
  Partial<CreateResellerApplicationDTO>;
