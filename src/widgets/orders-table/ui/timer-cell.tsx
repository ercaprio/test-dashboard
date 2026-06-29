import { Text, Flex, Box } from "@mantine/core";
import { APPROVED_STATUSES_LABELS } from "@shared/config/constants";
import { useCountdown } from "./use-countdown";
import { IconClock } from "@tabler/icons-react";

type Props = {
  createdAt: string;
  approveTimeLimit: string;
  isOpen: boolean;
  approvedStatuses: string[];
};

const TimerCell = ({
  createdAt,
  approveTimeLimit,
  isOpen,
  approvedStatuses,
}: Props) => {
  const { hours, minutes, seconds, isExpired } = useCountdown(
    createdAt,
    approveTimeLimit,
    isOpen,
  );

  const statusKey = isExpired
    ? "expired"
    : !approvedStatuses.every((s) => s === approvedStatuses[0])
      ? "partially"
      : approvedStatuses[0];

  const status = APPROVED_STATUSES_LABELS[statusKey];

  return (
    <Flex align="center" gap={4}>
      {isOpen && !isExpired && (
        <Flex
          align="center"
          gap={4}
          bg={status.color.light}
          p="2px 6px"
          style={{ borderRadius: "4px" }}
        >
          <IconClock stroke={2} size={16} color={status.color.dark} />
          <Text
            c={status.color.dark}
            size="11px"
            fw={600}
            style={{
              fontVariantNumeric: "tabular-nums",
              fontFeatureSettings: '"tnum"',
            }}
          >
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        </Flex>
      )}

      <Box bg={status.color.light} p="4px 6px" style={{ borderRadius: "4px" }}>
        <Text c={status.color.dark} size="11px" fw={600}>
          {status.label}
        </Text>
      </Box>
    </Flex>
  );
};

export default TimerCell;
