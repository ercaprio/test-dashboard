import { useGetOrders } from "@entities/order";
import { CustomPagination } from "@features/custom-pagination";
import { OrdersFilter } from "@features/orders-filter";
import { OrdersSearch } from "@features/orders-search";
import { SizeSelector } from "@features/size-selector";
import { Flex, Box, Table, type TableData } from "@mantine/core";
import { useState } from "react";

const tableData: TableData = {
  head: ["Element position", "Atomic mass", "Symbol", "Element name"],
  body: [
    [6, 12.011, "C", "Carbon"],
    [7, 14.007, "N", "Nitrogen"],
    [39, 88.906, "Y", "Yttrium"],
    [56, 137.33, "Ba", "Barium"],
    [58, 140.12, "Ce", "Cerium"],
  ],
};

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
        <Table data={tableData} />

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
