import { useGetDashboardOrders } from "@entities/order";

const OrdersPage = () => {
  const { data } = useGetDashboardOrders();

  console.log("data: ", data);

  return (
    <div>
      <div>ff</div>
    </div>
  );
};

export default OrdersPage;
