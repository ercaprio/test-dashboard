import { DonutChart } from "@mantine/charts";
import { Box, Flex, Grid, Paper, Text } from "@mantine/core";
import { formatNumbers } from "@shared/lib";

type ChartItem = {
  name: string;
  value: number;
  color: string;
  percentage: number;
};

type Props = {
  charData: ChartItem[];
  title: string;
};

const ChartStats = ({ charData, title }: Props) => {
  return (
    <Paper bg={"#FFFFFF"} radius={15} p={"16px 16px 36px 16px"}>
      <Text size="17px" ta="left" c="#00040A" fw={600} mb={20}>
        {title}
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
            <>
              <Grid.Col span={6} key={`${item.name}-${i}`}>
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
            </>
          ))}
        </Grid>
      </Flex>
    </Paper>
  );
};

export default ChartStats;
