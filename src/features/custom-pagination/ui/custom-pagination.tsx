import { Flex, Pagination } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

type Props = {
  total: number;
  activePage: number;
  setPage: (page: number) => void;
};

const CustomPagination = ({ total, activePage, setPage }: Props) => {
  return (
    <Flex bg="#fff" h={40} align="center" style={{ borderRadius: 15 }} px={8}>
      <Pagination
        total={total}
        value={activePage}
        onChange={setPage}
        color="#3291FF"
        radius="50%"
        styles={{
          control: {
            border: "none",
          },
        }}
        nextIcon={() => <IconArrowRight size={16} />}
        previousIcon={() => <IconArrowLeft size={16} />}
      />
    </Flex>
  );
};

export default CustomPagination;
