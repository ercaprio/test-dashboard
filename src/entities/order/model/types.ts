export type DashboardOrders = {
  creatorsData: CreatorsData[],
  serviceTypesData: ServiceTypesData[],
  statusesData: StatusesData[],
  total: number,
}

export type CreatorsData = DashboardItem<'from'>;
export type ServiceTypesData = DashboardItem<'type'>;
export type StatusesData = DashboardItem<'status'>;

type DashboardItem<TKey extends string> = {
  [K in TKey]: string;
} & {
  count: number,
  percentage: number,
};

export type Ordes = {
  data: OrderItem[],
  total: number,
  page: number,
  limit: number,
}

export type OrderItem = {
  id: number,
  createdAt: string,
  serviceType: string,
  initiatorType: string,
  initiatorUserRole: InitiatorUserRole,
  traveler: User,
  orderGroupFields: OrderGroupFields[],
  totalPrice: number, 
  currency: string,
  approvedStatuses: string[],
  externalStatuses: string[],
  aviaStructure: AviaStructure,
  approveTimeLimit: string,
  externalRequestIds: string[],
}

export type OrdersParams = {
  forSearch?: string,
  size?: number,
  sort?: "asc" | "desc",
  pageable?: number,
}

type InitiatorUserRole = {
  id: number,
  roleKey: string,
  user: User,
}

export type User = {
  id: number,
  firstName: string,
  lastName: string,
}

type OrderGroupFields = {
  valueRu: string,
  valueEn: string,
  field: OrderField,
}

type OrderField = {
  name: string,
  shortName: string,
  code: string,
}

type AviaStructure = {
  departure: string,
  arrival: string, 
  type: string,
  depTime: string,
  arrTime: string,
  airlines: string[],
  providers: string[],
}

