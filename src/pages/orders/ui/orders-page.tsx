import { Box, Text } from "@mantine/core";
import { OrderStats } from "@widgets/orders-stats";
import { OrdersTable } from "@widgets/orders-table";

const OrdersPage = () => {
  return (
    <Box>
      <Text c="#00040A" fw={600} size={"38px"} mt={16} mb={32}>
        Заказы
      </Text>

      <OrderStats />
      <OrdersTable />
    </Box>
  );
};

export default OrdersPage;
