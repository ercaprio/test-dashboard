import { Text, Flex, Box } from "@mantine/core";
import { APPROVED_STATUSES_LABELS } from "@shared/config/constants";
import { useCountdown } from "./use-countdown";

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

  const getApprovedStatus = () => {
    if (isExpired) return APPROVED_STATUSES_LABELS["expired"];
    if (!approvedStatuses.every((s) => s === approvedStatuses[0]))
      return "ЧАСТИЧНО";
    return APPROVED_STATUSES_LABELS[approvedStatuses[0]];
  };

  return (
    <Flex>
      {isOpen && !isExpired && (
        <Box>
          <Text>
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        </Box>
      )}
      <Box>
        <Text>{getApprovedStatus()}</Text>
      </Box>
    </Flex>
  );
};

export default TimerCell;
