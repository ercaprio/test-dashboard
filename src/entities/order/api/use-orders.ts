import { useQuery } from "@tanstack/react-query"
import { getDashboardOrders } from "./order-api"
import type { DashboardOrders } from "../model/types"

export const useGetDashboardOrders = () => {
  return useQuery<DashboardOrders>({ queryKey: ['dashboard-orders'], queryFn: getDashboardOrders })
}