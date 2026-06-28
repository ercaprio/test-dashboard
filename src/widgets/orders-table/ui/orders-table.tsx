import { useGetOrders } from "@entities/order";
import { CustomPagination } from "@features/custom-pagination";
import { OrdersFilter } from "@features/orders-filter";
import { OrdersSearch } from "@features/orders-search";
import { SizeSelector } from "@features/size-selector";
import { Flex, Box, Table, Checkbox } from "@mantine/core";
import { useState } from "react";
import OrderRow from "./order-row";

const OrdersTable = () => {
  const [activePage, setPage] = useState(1);
  const [size, setSize] = useState<string | null>("10");
  const [searchText, setSearchText] = useState<string>("");
  const { data: ordersData } = useGetOrders({
    pageable: activePage - 1,
    size: Number(size ?? 10),
    ...(searchText ? { forSearch: searchText } : {}),
  });

  console.log("ordersData: ", ordersData);

  if (!ordersData) return null;

  return (
    <>
      <Flex align={"center"} justify={"space-between"} mb={16}>
        <OrdersFilter />
        <OrdersSearch setSearchText={setSearchText} searchText={searchText} />
      </Flex>

      <Box>
        <Table highlightOnHover withRowBorders>
          <Table.Thead
            styles={{
              thead: {
                borderBottom: "none",
              },
            }}
          >
            <Table.Tr>
              <Table.Th w={40}>
                <Checkbox />
              </Table.Th>{" "}
              <Table.Th>Заказ</Table.Th>
              <Table.Th>Пассажир</Table.Th>
              <Table.Th>Доп. поля</Table.Th>
              <Table.Th>Поездка</Table.Th>
              <Table.Th>Стоимость</Table.Th>
              <Table.Th>Утверждение</Table.Th>
              <Table.Th>Исполнение</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {ordersData.data.map((order, i) => (
              <OrderRow order={order} id={`${order.id}-${i}`} />
            ))}
          </Table.Tbody>
        </Table>

        <Flex align={"center"} justify={"space-between"} mt={16}>
          <SizeSelector size={size} setSize={setSize} />

          {ordersData.total > 1 && (
            <CustomPagination
              total={ordersData?.total}
              activePage={activePage}
              setPage={setPage}
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default OrdersTable;
