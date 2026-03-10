/**
 * Session Service - 会话管理服务
 * 负责所有与用户会话相关的数据库操作
 */

import prisma from "../db.server";
import type { Session } from "@prisma/client";

export const sessionService = {
  /**
   * 根据 ID 查找会话
   */
  async findById(id: string): Promise<Session | null> {
    return prisma.session.findUnique({
      where: { id },
    });
  },

  /**
   * 根据店铺查找会话
   */
  async findByShop(shop: string): Promise<Session[]> {
    return prisma.session.findMany({
      where: { shop },
      orderBy: { expires: "desc" },
    });
  },

  /**
   * 创建新会话
   */
  async create(data: {
    id: string;
    shop: string;
    state: string;
    accessToken: string;
    scope?: string;
    expires?: Date;
    isOnline?: boolean;
  }): Promise<Session> {
    return prisma.session.create({
      data,
    });
  },

  /**
   * 更新会话
   */
  async update(
    id: string,
    data: Partial<Omit<Session, "id">>,
  ): Promise<Session> {
    return prisma.session.update({
      where: { id },
      data,
    });
  },

  /**
   * 删除会话
   */
  async delete(id: string): Promise<Session> {
    return prisma.session.delete({
      where: { id },
    });
  },

  /**
   * 删除过期会话
   */
  async deleteExpired(): Promise<number> {
    const result = await prisma.session.deleteMany({
      where: {
        expires: {
          lt: new Date(),
        },
      },
    });
    return result.count;
  },

  /**
   * 查找在线会话
   */
  async findOnlineSessions(shop: string): Promise<Session[]> {
    return prisma.session.findMany({
      where: {
        shop,
        isOnline: true,
        expires: {
          gt: new Date(),
        },
      },
    });
  },
};
