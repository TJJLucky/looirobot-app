/**
 * Reseller Application Service - 经销商申请服务
 */

import prisma from "../db.server";
import type { Prisma } from "@prisma/client";
import type {
  CreateResellerApplicationDTO,
  ResellerApplicationType,
  UpdateResellerApplicationDTO,
} from "../types";

type ResellerApplicationWhereParams = {
  status?: number;
  companyName?: string;
  phoneNumberPrefix?: string;
  includeDeleted?: boolean;
};

const buildResellerApplicationWhere = (
  params?: ResellerApplicationWhereParams,
): Prisma.LooiResellerApplicationWhereInput => {
  const {
    status,
    companyName,
    phoneNumberPrefix,
    includeDeleted = false,
  } = params || {};

  return {
    status:
      status !== undefined ? status : includeDeleted ? undefined : { not: -1 },
    companyName: companyName
      ? { contains: companyName, mode: "insensitive" }
      : undefined,
    phoneNumberPrefix: phoneNumberPrefix
      ? { contains: phoneNumberPrefix, mode: "insensitive" }
      : undefined,
  };
};

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
    includeDeleted?: boolean;
  }): Promise<ResellerApplicationType[]> {
    const {
      skip = 0,
      take = 20,
      orderBy = "desc",
      ...whereParams
    } = params || {};

    return prisma.looiResellerApplication.findMany({
      skip,
      take,
      where: buildResellerApplicationWhere(whereParams),
      orderBy: { createdAt: orderBy },
    });
  },

  async count(params?: ResellerApplicationWhereParams): Promise<number> {
    return prisma.looiResellerApplication.count({
      where: buildResellerApplicationWhere(params),
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
