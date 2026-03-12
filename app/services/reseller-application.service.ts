/**
 * Reseller Application Service - 经销商申请服务
 */

import prisma from "../db.server";
import type {
  CreateResellerApplicationDTO,
  ResellerApplicationType,
  UpdateResellerApplicationDTO,
} from "../types";

export const resellerApplicationService = {
  async create(
    data: CreateResellerApplicationDTO,
  ): Promise<ResellerApplicationType> {
    return prisma.looiResellerApplication.create({
      data: { ...data, status: 0 },
    });
  },

  async findById(id: number): Promise<ResellerApplicationType | null> {
    return prisma.looiResellerApplication.findUnique({ where: { id } });
  },

  async findAll(params?: {
    skip?: number;
    take?: number;
    orderBy?: "asc" | "desc";
    status?: number;
    companyName?: string;
    phoneNumberPrefix?: string;
  }): Promise<ResellerApplicationType[]> {
    const {
      skip = 0,
      take = 20,
      orderBy = "desc",
      status,
      companyName,
      phoneNumberPrefix,
    } = params || {};
    return prisma.looiResellerApplication.findMany({
      skip,
      take,
      where: {
        status: status !== undefined ? status : undefined,
        companyName: companyName
          ? { contains: companyName, mode: "insensitive" }
          : undefined,
        phoneNumberPrefix: phoneNumberPrefix
          ? { contains: phoneNumberPrefix, mode: "insensitive" }
          : undefined,
      },
      orderBy: { createdAt: orderBy },
    });
  },

  async count(status?: number): Promise<number> {
    return prisma.looiResellerApplication.count({
      where: status !== undefined ? { status } : undefined,
    });
  },

  async update(
    id: number,
    data: UpdateResellerApplicationDTO,
  ): Promise<ResellerApplicationType> {
    return prisma.looiResellerApplication.update({ where: { id }, data });
  },

  async updateStatus(
    id: number,
    status: number,
  ): Promise<ResellerApplicationType> {
    return prisma.looiResellerApplication.update({
      where: { id },
      data: { status },
    });
  },

  async delete(id: number): Promise<ResellerApplicationType> {
    return prisma.looiResellerApplication.update({
      where: { id },
      data: { status: -1 },
    });
  },

  async emailExists(email: string): Promise<boolean> {
    const count = await prisma.looiResellerApplication.count({
      where: { email },
    });
    return count > 0;
  },
};
