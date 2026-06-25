export type DashboardOrders = {
  creatorsData: CreatorsData,
  serviceTypesData: ServiceTypesData,
  statusesData: StatusesData,
  total: number,
}

export type Ordes = {
  data: [],
}

export type CreatorsData = DashboardItem<'from'>;
export type ServiceTypesData = DashboardItem<'type'>;
export type StatusesData = DashboardItem<'status'>;

type DashboardItem<TKey extends string> = {
  [K in TKey]: string;
} & {
  count: number;
  percentage: number;
};


