import { api } from "@shared/api/instance"
import type { DashboardOrders } from "../model/types";

export const getDashboardOrders = async () => {
  const { data } = await api.get<DashboardOrders>('/dashboard/orders');

  return data;
}