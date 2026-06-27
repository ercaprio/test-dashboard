import { useGetDashboardOrders } from "@entities/order";
import { SimpleGrid } from "@mantine/core";
import ApprovalStatusStats from "./approval-status-stats";
import ChartStats from "./chart-stats";
import { useMemo } from "react";
import {
  CREATORS_TYPES,
  CREATORS_TYPES_COLORS,
  SERVICE_TYPE_COLORS,
  SERVICE_TYPE_LABELS,
} from "@shared/config/constants";

const OrderStats = () => {
  const { data } = useGetDashboardOrders();

  const creatorCharData = useMemo(() => {
    if (!data?.creatorsData) return [];

    return data?.creatorsData.map((item) => ({
      name: CREATORS_TYPES[item.from],
      value: item.count,
      color: CREATORS_TYPES_COLORS[item.from],
      percentage: item.percentage,
    }));
  }, [data?.creatorsData]);

  const servicesCharData = useMemo(() => {
    if (!data?.serviceTypesData) return [];
    return data?.serviceTypesData.map((item) => ({
      name: SERVICE_TYPE_LABELS[item.type],
      value: item.count,
      color: SERVICE_TYPE_COLORS[item.type],
      percentage: item.percentage,
    }));
  }, [data?.serviceTypesData]);

  if (!data) return null;
  return (
    <SimpleGrid cols={3} mb="20px">
      <ChartStats charData={creatorCharData} title={"Кем создано"} />
      <ChartStats charData={servicesCharData} title={"Вид услуги"} />
      <ApprovalStatusStats data={data?.statusesData} />
    </SimpleGrid>
  );
};

export default OrderStats;
