import type { CreatorsData } from "@entities/order/model/types";
import { Box, Flex, Grid, Paper, Text } from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import { Fragment, useMemo } from "react";
import {
  CREATORS_TYPES,
  CREATORS_TYPES_COLORS,
} from "@shared/config/constants";
import { formatNumbers } from "@shared/lib";

type Props = {
  data: CreatorsData[];
};

const CreatorsStats = ({ data }: Props) => {
  const charData = useMemo(() => {
    return data.map((item) => {
      return {
        name: CREATORS_TYPES[item.from],
        value: item.count,
        color: CREATORS_TYPES_COLORS[item.from],
        percentage: item.percentage,
      };
    });
  }, [data]);

  return (
    <Paper bg={"#FFFFFF"} radius={15} p={16}>
      <Text size="17px" ta="left" c="#00040A" fw={600} mb={20}>
        Вид услуги
      </Text>
      <Flex gap={16} align={"flex-start"}>
        <DonutChart
          data={charData}
          withLegend={false}
          size={48}
          thickness={12}
          withTooltip={false}
        />

        <Grid w="100%" rowGap={10} columnGap={10}>
          {charData.map((item, i) => (
            <Fragment key={`${item.name}-${i}`}>
              <Grid.Col span={6}>
                <Flex align="center" gap={6}>
                  <Box
                    w={6}
                    h={6}
                    style={{
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <Text size="13px" fw={600}>
                    {item.name}
                  </Text>
                </Flex>
              </Grid.Col>

              <Grid.Col span={3} key={`value-${i}`}>
                <Text size="13px" ta="right" c="#00040A" fw={400}>
                  {formatNumbers(item.value)}
                </Text>
              </Grid.Col>

              <Grid.Col span={3} key={`pct-${i}`}>
                <Text size="13px" ta="right" c="#00040A" fw={400}>
                  {formatNumbers(item.percentage)}%
                </Text>
              </Grid.Col>
            </Fragment>
          ))}
        </Grid>
      </Flex>
    </Paper>
  );
};

export default CreatorsStats;
