/**
 * api/reseller-default.tsx - 创建默认 Reseller 数据 API
 * POST /api/reseller-default - 创建一个演示用的 Reseller 申请
 */

import type { ActionFunctionArgs } from "react-router";
import { resellerApplicationService } from "../services";
import type { CreateResellerApplicationDTO } from "../types";

/**
 * POST - 创建默认 Reseller 数据
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return Response.json(
      {
        success: false,
        error: "Method not allowed",
      },
      { status: 405 },
    );
  }

  try {
    const seed = Date.now();
    const payload: CreateResellerApplicationDTO = {
      firstName: "Demo",
      lastName: "Reseller",
      email: `reseller-${seed}@example.com`,
      phoneNumberPrefix: "+1",
      phoneNumber: `${seed}`.slice(-10),
      companyName: "Demo Distribution Inc.",
      companySize: "11-50",
      jobTitle: "Sales Manager",
      country: "US",
      physicalRetailStores: "Yes",
      onlineStore: "Shopify",
      distributionWholesaleNetwork: "Yes",
      others: "",
      mainProductsAndBrands: "Smart home devices",
      looiAnnualProjectedSales: "1000",
      technicianScaleAndAfterSalesProcess:
        "5 technicians with standard after-sales SOP",
      files: [],
    };

    const emailExists = await resellerApplicationService.emailExists(
      payload.email,
    );
    if (emailExists) {
      return Response.json(
        {
          success: false,
          error: "Email already exists",
        },
        { status: 400 },
      );
    }

    const application = await resellerApplicationService.create(payload);
    return Response.json(
      {
        success: true,
        data: application,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create default reseller failed:", error);
    return Response.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 },
    );
  }
};
