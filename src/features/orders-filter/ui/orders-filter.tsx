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
import { useSearch } from "@tanstack/react-router";

type Props = {
  onChangeFilters: (filter: string, value: string | null) => void;
};

const OrdersFilter = ({ onChangeFilters }: Props) => {
  const { role, service, status, period, cost } = useSearch({
    from: "/",
  });

  const filters = [
    {
      placeholder: "Роль",
      data: ROLE_OPTIONS,
      w: 84,
      key: "role",
      value: role,
    },
    {
      placeholder: "Услуга",
      data: SERVICE_OPTIONS,
      w: 96,
      key: "service",
      value: service,
    },
    {
      placeholder: "Статус",
      data: STATUS_OPTIONS,
      w: 98,
      key: "status",
      value: status,
    },
    {
      placeholder: "Период",
      data: PERIOD_OPTIONS,
      w: 105,
      key: "period",
      value: period,
    },
    {
      placeholder: "Стоимость",
      data: COST_OPTIONS,
      w: 130,
      key: "cost",
      value: cost,
    },
  ];

  return (
    <Flex gap={8}>
      {filters.map((filter) => (
        <Select
          key={filter.placeholder}
          placeholder={filter.placeholder}
          data={filter.data}
          value={filter.value ?? null}
          onChange={(v) => onChangeFilters(filter.key, v)}
          clearable={Boolean(filter.value)}
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
