import { useGetDashboardOrders, useGetOrders } from "@entities/order";

const OrdersPage = () => {
  const { data } = useGetDashboardOrders();
  const { data: ordersData } = useGetOrders({ size: 2 });

  console.log("data: ", data);
  console.log("ordersData: ", ordersData);

  return (
    <div>
      <div>ff</div>
    </div>
  );
};

export default OrdersPage;
