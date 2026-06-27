import { Flex, Select, Input } from "@mantine/core";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import "./orders-search.scss";

type Props = {
  setSearchText: (text: string) => void;
  searchText: string;
};

const OrdersSearch = ({ setSearchText, searchText }: Props) => {
  return (
    <Flex align={"center"}>
      <Select
        data={[{ label: "ФИО сотрудника", value: "fullname" }]}
        w={167}
        rightSection={<IconChevronDown size={20} color="#9DA1A8" />}
        rightSectionPointerEvents="none"
        radius={"12px 0px 0px 12px"}
        comboboxProps={{ width: "auto" }}
        defaultValue="fullname"
        classNames={{ root: "search-select" }}
      />
      <Input
        placeholder="Поиск..."
        radius="0px 12px 12px 0px"
        classNames={{ input: "search-input" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        rightSection={<IconSearch size={20} color="#9DA1A8" />}
      />
    </Flex>
  );
};

export default OrdersSearch;
