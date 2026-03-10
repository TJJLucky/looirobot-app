/**
 * Reseller Application Service - 经销商申请服务
 * 负责所有与经销商申请表单相关的数据库操作
 */

import prisma from "../db.server";
import type { LooiResellerApplication } from "@prisma/client";

/**
 * 创建经销商申请的数据类型
 */
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
}

/**
 * 更新经销商申请的数据类型
 */
export type UpdateResellerApplicationDTO =
  Partial<CreateResellerApplicationDTO>;

export const resellerApplicationService = {
  /**
   * 创建新的经销商申请
   */
  async create(
    data: CreateResellerApplicationDTO,
  ): Promise<LooiResellerApplication> {
    return prisma.looiResellerApplication.create({
      data,
    });
  },

  /**
   * 根据 ID 查找申请
   */
  async findById(id: number): Promise<LooiResellerApplication | null> {
    return prisma.looiResellerApplication.findUnique({
      where: { id },
    });
  },

  /**
   * 根据邮箱查找申请
   */
  async findByEmail(email: string): Promise<LooiResellerApplication | null> {
    return prisma.looiResellerApplication.findUnique({
      where: { email },
    });
  },

  /**
   * 查询所有申请（分页）
   */
  async findAll(params?: {
    skip?: number;
    take?: number;
    orderBy?: "asc" | "desc";
  }): Promise<LooiResellerApplication[]> {
    const { skip = 0, take = 20, orderBy = "desc" } = params || {};

    return prisma.looiResellerApplication.findMany({
      skip,
      take,
      orderBy: {
        createdAt: orderBy,
      },
    });
  },

  /**
   * 统计申请总数
   */
  async count(): Promise<number> {
    return prisma.looiResellerApplication.count();
  },

  /**
   * 更新申请
   */
  async update(
    id: number,
    data: UpdateResellerApplicationDTO,
  ): Promise<LooiResellerApplication> {
    return prisma.looiResellerApplication.update({
      where: { id },
      data,
    });
  },

  /**
   * 删除申请
   */
  async delete(id: number): Promise<LooiResellerApplication> {
    return prisma.looiResellerApplication.delete({
      where: { id },
    });
  },

  /**
   * 根据国家/地区搜索
   */
  async findByCountry(country: string): Promise<LooiResellerApplication[]> {
    return prisma.looiResellerApplication.findMany({
      where: {
        country: {
          contains: country,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  /**
   * 根据公司名搜索
   */
  async searchByCompany(
    searchTerm: string,
  ): Promise<LooiResellerApplication[]> {
    return prisma.looiResellerApplication.findMany({
      where: {
        companyName: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  /**
   * 检查邮箱是否已存在
   */
  async emailExists(email: string): Promise<boolean> {
    const count = await prisma.looiResellerApplication.count({
      where: { email },
    });
    return count > 0;
  },
};
