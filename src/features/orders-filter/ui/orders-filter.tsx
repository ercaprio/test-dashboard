import { Flex, Select } from "@mantine/core";
import {
  COST_OPTIONS,
  PERIOD_OPTIONS,
  ROLE_OPTIONS,
  SERVICE_OPTIONS,
  STATUS_OPTIONS,
} from "@shared/config/constants";
import "./ordes-filter.scss";
import { IconChevronDown } from "@tabler/icons-react";

const OrdersFilter = () => {
  const filters = [
    { placeholder: "Роль", data: ROLE_OPTIONS, w: 84 },
    { placeholder: "Услуга", data: SERVICE_OPTIONS, w: 96 },
    { placeholder: "Статус", data: STATUS_OPTIONS, w: 98 },
    { placeholder: "Период", data: PERIOD_OPTIONS, w: 105 },
    { placeholder: "Стоимость", data: COST_OPTIONS, w: 130 },
  ];

  return (
    <Flex gap={8}>
      {filters.map((filter) => (
        <Select
          key={filter.placeholder}
          placeholder={filter.placeholder}
          data={filter.data}
          w={filter.w}
          rightSection={<IconChevronDown size={20} color="#9DA1A8" />}
          rightSectionPointerEvents="none"
          radius={12}
          classNames={{ root: "filter-select" }}
          comboboxProps={{ width: "auto" }}
        />
      ))}
    </Flex>
  );
};

export default OrdersFilter;
