import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getDashboardOrders, getOrders } from "./order-api"
import type { DashboardOrders, OrdersParams, Ordes } from "../model/types"

export const useGetDashboardOrders = () => {
  return useQuery<DashboardOrders>({ queryKey: ['dashboard-orders'], queryFn: getDashboardOrders })
}

export const useGetOrders = (params?: OrdersParams) => {
  return useQuery<Ordes>({
    queryKey: ['orders', params],
    queryFn: () => getOrders(params),
    placeholderData: keepPreviousData,
  });
};