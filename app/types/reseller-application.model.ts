/**
 * Reseller Application Types - 经销商申请相关类型定义
 */

import type { LooiResellerApplication } from "@prisma/client";

export type ResellerApplicationType = LooiResellerApplication;
export type ResellerApplicationStatus = 0 | 1;

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
  status?: ResellerApplicationStatus;
}

export type UpdateResellerApplicationDTO =
  Partial<CreateResellerApplicationDTO>;
