import { useGetOrders } from "@entities/order";
import { CustomPagination } from "@features/custom-pagination";
import { OrdersFilter } from "@features/orders-filter";
import { OrdersSearch } from "@features/orders-search";
import { SizeSelector } from "@features/size-selector";
import {
  Flex,
  Box,
  Table,
  Checkbox,
  Text,
  Skeleton,
  Button,
} from "@mantine/core";
import { useState } from "react";
import OrderRow from "./order-row";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
import "./orders-table.scss";
import { useNavigate, useSearch } from "@tanstack/react-router";

const TH_STYLES = {
  c: "#9DA1A8",
  fw: "600",
  size: "12px",
} as const;

const OrdersTable = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const { page, size } = useSearch({
    from: "/",
  });
  const navigate = useNavigate({ from: "/" });
  const activePage = Number(page ?? 1);

  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const setSize = (size: string | null) =>
    navigate({ search: (prev) => ({ ...prev, size, page: 1 }) });

  const onChangeFilters = (filter: string, value: string | null) =>
    navigate({ search: (prev) => ({ ...prev, [filter]: value, page: 1 }) });

  const {
    data: ordersData,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetOrders({
    pageable: activePage - 1,
    size: Number(size ?? 10),
    sort: sortOrder,
    ...(searchText ? { forSearch: searchText } : {}),
  });

  console.log("isError", isError);

  return (
    <>
      <Flex align="center" justify="space-between" mb={16}>
        <OrdersFilter onChangeFilters={onChangeFilters} />
        <OrdersSearch setSearchText={setSearchText} searchText={searchText} />
      </Flex>

      <Box>
        <Table
          highlightOnHover
          withRowBorders
          classNames={{
            table: "orders-table",
            thead: "orders-thead",
            tbody: "orders-tbody",
            th: "orders-th",
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={40}>
                <Checkbox size="14px" />
              </Table.Th>

              <Table.Th
                className="orders-sort-th"
                onClick={() =>
                  setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                }
              >
                <Flex align="center" gap={4}>
                  <Text color="#00040A" size="11px" fw={600}>
                    Заказ
                  </Text>
                  {sortOrder === "asc" ? (
                    <IconArrowNarrowUp stroke={2} color="#00040A" size={13} />
                  ) : (
                    <IconArrowNarrowDown stroke={2} color="#00040A" size={13} />
                  )}
                </Flex>
              </Table.Th>

              <Table.Th>
                <Text {...TH_STYLES}>Пассажир</Text>
              </Table.Th>

              <Table.Th>
                <Text {...TH_STYLES}>Доп. поля</Text>
              </Table.Th>

              <Table.Th>
                <Text {...TH_STYLES}>Поездка</Text>
              </Table.Th>

              <Table.Th>
                <Text ta="end" {...TH_STYLES}>
                  Стоимость
                </Text>
              </Table.Th>

              <Table.Th>
                <Text ta="end" {...TH_STYLES}>
                  Утверждение
                </Text>
              </Table.Th>

              <Table.Th>
                <Text ta="end" {...TH_STYLES}>
                  Исполнение
                </Text>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {isLoading || isFetching ? (
              Array.from({ length: Number(size) }).map((_, i) => (
                <Table.Tr key={i}>
                  <Table.Td colSpan={8}>
                    <Skeleton height={34} radius="10px" />
                  </Table.Td>
                </Table.Tr>
              ))
            ) : isError ? (
              <Table.Tr>
                <Table.Td colSpan={8}>
                  <Flex
                    justify="center"
                    align="center"
                    gap={12}
                    pt={40}
                    pb={40}
                    direction={"column"}
                  >
                    <Text c="#9DA1A8" size="13px" fw={600}>
                      Не удалось загрузить данные
                    </Text>

                    <Button
                      variant="filled"
                      size="xs"
                      onClick={() => refetch()}
                    >
                      Повторить
                    </Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ) : ordersData?.data?.length === 0 ? (
              <Table.Tr>
                <Table.Td colSpan={8}>
                  <Flex justify="center" py={40}>
                    <Text c="#9DA1A8" size="13px" fw={600}>
                      Заказы не найдены
                    </Text>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ) : (
              ordersData?.data?.map((order, i) => (
                <OrderRow
                  key={`${order.id}-${i}`}
                  order={order}
                  id={`${order.id}-${i}`}
                />
              ))
            )}
          </Table.Tbody>
        </Table>

        <Flex align="center" justify="space-between" mt={16}>
          <SizeSelector size={size} setSize={setSize} />

          {ordersData && ordersData.total > 1 && (
            <CustomPagination
              total={ordersData.total}
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
