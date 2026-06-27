import { Flex, Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import "./size-selector.scss";

type Props = {
  size: string | null;
  setSize: (size: string | null) => void;
};

const SizeSelector = ({ size, setSize }: Props) => {
  return (
    <Flex
      align="center"
      gap={0}
      bg="#fff"
      style={{ border: "1px solid #CDD1D4", borderRadius: 12 }}
      pl={12}
    >
      <Text size="13px" c="#00040A" style={{ whiteSpace: "nowrap" }}>
        Показывать по:
      </Text>
      <Select
        data={["1", "5", "10"]}
        value={size}
        onChange={setSize}
        defaultValue="20"
        rightSection={<IconChevronDown size={20} color="#9DA1A8" />}
        rightSectionPointerEvents="none"
        comboboxProps={{ width: "auto" }}
        classNames={{ root: "size-select" }}
      />
    </Flex>
  );
};

export default SizeSelector;
