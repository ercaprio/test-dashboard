import type { StatusesData } from "@entities/order/model/types";
import { Flex, Paper, Text, UnstyledButton } from "@mantine/core";
import { STATUS_LABELS } from "@shared/config/constants";
import { IconChevronRight } from "@tabler/icons-react";

type Props = {
  data: StatusesData[];
};

const ApprovalStatusStats = ({ data }: Props) => {
  return (
    <Paper bg={"#FFFFFF"} radius={15} p={16}>
      <Text c={"#00040A"} mb={20} size={"17px"} fw={600}>
        Статус утверждения
      </Text>

      <Flex justify={"space-between"} gap={20} p={"9px 0"}>
        {data
          .filter((item) => item.status in STATUS_LABELS)
          .map((item, i) => (
            <UnstyledButton key={`${item.status}-${i}`}>
              <Flex direction={"column"}>
                <Flex align={"center"} gap={3} mb={8}>
                  <Text c={"#00040A"} size={"18px"} fw={600}>
                    {item.count}
                  </Text>
                  <IconChevronRight size={16} color="#9DA1A8" />
                </Flex>

                <Text c={"#9DA1A8"} size={"13px"} fw={400}>
                  {STATUS_LABELS[item.status]}
                </Text>
              </Flex>
            </UnstyledButton>
          ))}
      </Flex>
    </Paper>
  );
};

export default ApprovalStatusStats;
