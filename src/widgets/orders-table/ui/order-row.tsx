import type { OrderItem } from "@entities/order";
import { Checkbox, Flex, Table, Text, Tooltip } from "@mantine/core";
import {
  EXTERNAL_STATUSES_LABELS,
  INITIATOR_TYPE_LABELS,
} from "@shared/config/constants";
import { formatDate, formatNumbers } from "@shared/lib";
import { IconPlane, IconReload } from "@tabler/icons-react";
import TimerCell from "./timer-cell";

type Props = {
  order: OrderItem;
  id: string;
};

const TOOLTIP_STYLES = {
  tooltip: {
    backgroundColor: "#EFF0F1",
    border: "1px solid #00040A",
    color: "#00040A",
    borderRadius: "8px",
  },
} as const;

const OrderRow = ({ order, id }: Props) => {
  const orderDate = new Date(order.createdAt);
  const depDate = new Date(order.aviaStructure.depTime);
  const arrDate = new Date(order.aviaStructure.arrTime);
  const arrow = order.aviaStructure.type === "round" ? "⇌" : "-";
  const isOpen = order.approvedStatuses.every((s) => s === "open");

  const getExternalStatus = (statuses: string[]) => {
    if (!statuses.every((s) => s === statuses[0])) {
      const dominant = [...statuses].sort(
        (a, b) =>
          EXTERNAL_STATUSES_LABELS[b]?.priority -
          EXTERNAL_STATUSES_LABELS[a]?.priority,
      )[0];

      return {
        label: EXTERNAL_STATUSES_LABELS[dominant]?.label,
        color: EXTERNAL_STATUSES_LABELS[dominant]?.color,
      };
    } else {
      return {
        label: EXTERNAL_STATUSES_LABELS[statuses[0]]?.label,
        color: EXTERNAL_STATUSES_LABELS[statuses[0]]?.color,
      };
    }
  };

  const externalStatus = getExternalStatus(order.externalStatuses);

  return (
    <Table.Tr>
      <Table.Td>
        <Checkbox size="14px" />
      </Table.Td>

      <Table.Td>
        <Flex direction="column" gap={4}>
          <Text c="#00040A" size="13px" fw={400}>
            #{id}
          </Text>
          <Text c="#9DA1A8" size="11px" fw={400}>
            {formatDate(orderDate, "hour")}
          </Text>
        </Flex>
      </Table.Td>

      <Table.Td>
        <Flex direction="column" gap={4}>
          <Text c="#00040A" size="13px" fw={400}>
            {order.traveler.lastName} {order.traveler.firstName}
          </Text>

          <Text c="#9DA1A8" size="11px" fw={400}>
            {order.initiatorType === "TRAVELER"
              ? INITIATOR_TYPE_LABELS[order.initiatorType]
              : `${order.initiatorUserRole.user.lastName} ${order.initiatorUserRole.user.firstName}`}
          </Text>
        </Flex>
      </Table.Td>

      <Table.Td>
        <Tooltip
          label={
            <Flex direction="column" gap={4}>
              {order.orderGroupFields.map((item, i) => (
                <Text
                  key={`${item.valueEn}-${i}`}
                  c="#00040A"
                  size="13px"
                  fw={400}
                >
                  {item.field.shortName}: {item.valueRu}
                </Text>
              ))}
            </Flex>
          }
          disabled={order.orderGroupFields.length <= 2}
          position="top-start"
          styles={TOOLTIP_STYLES}
        >
          <Flex
            direction="column"
            gap={4}
            style={{
              cursor: order.orderGroupFields.length > 2 ? "pointer" : "default",
            }}
          >
            {order.orderGroupFields.slice(0, 2).map((item, i) => (
              <Text
                key={`${item.valueEn}-${i}`}
                c="#00040A"
                size="11px"
                fw={400}
              >
                {item.field.shortName}: {item.valueRu}
              </Text>
            ))}

            {order.orderGroupFields.length > 2 && (
              <Text c="#1F87FF" size="11px" fw={400}>
                еще +{order.orderGroupFields.length - 2}
              </Text>
            )}
          </Flex>
        </Tooltip>
      </Table.Td>

      <Table.Td>
        <Tooltip
          label={
            <Flex direction="column" gap={4}>
              {order.aviaStructure.airlines.map((item, i) => (
                <Text key={`${item}-${i}`} c="#00040A" size="11px" fw={400}>
                  {item}
                </Text>
              ))}
            </Flex>
          }
          disabled={order.aviaStructure.airlines.length <= 1}
          position="top-start"
          styles={TOOLTIP_STYLES}
        >
          <Flex
            direction={"column"}
            align={"flex-start"}
            gap={4}
            style={{
              cursor:
                order.aviaStructure.airlines.length > 1 ? "pointer" : "default",
            }}
          >
            <Flex align={"center"} gap={4}>
              <IconPlane size={14} color="#00040A" stroke={2} />
              <Text
                c="#00040A"
                size="13px"
                fw={400}
              >{`${order.aviaStructure.departure} ${arrow} ${order.aviaStructure.arrival}`}</Text>
            </Flex>

            <Flex align={"center"} gap={4}>
              <Text c="#9DA1A8" size="11px" fw={400}>
                {formatDate(depDate, "weekday")} -{" "}
                {formatDate(arrDate, "weekday")} ·
              </Text>

              <Text c="#9DA1A8" size="11px" fw={400}>
                {order.aviaStructure.airlines[0]}
              </Text>
            </Flex>

            {order.aviaStructure.airlines.length > 1 && (
              <Text c="#1F87FF" size="11px" fw={400}>
                еще +{order.aviaStructure.airlines.length - 1}
              </Text>
            )}
          </Flex>
        </Tooltip>
      </Table.Td>

      <Table.Td>
        <Text color="#00040A" size="13px" fw={600} ta={"end"}>
          {formatNumbers(order.totalPrice)} ₸
        </Text>
      </Table.Td>

      <Table.Td>
        <Flex justify="flex-end" align={"center"}>
          <TimerCell
            createdAt={order.createdAt}
            approveTimeLimit={order.approveTimeLimit}
            isOpen={isOpen}
            approvedStatuses={order.approvedStatuses}
          />
        </Flex>
      </Table.Td>

      <Table.Td>
        <Flex justify="flex-end" align={"center"}>
          <Flex
            align={"center"}
            gap={2}
            bg={externalStatus.color.light}
            p={"2px 6px"}
            style={{
              border: `1px solid ${externalStatus.color.medium}`,
              borderRadius: "4px",
            }}
            w="fit-content"
          >
            <IconReload
              stroke={2}
              size={16}
              color={externalStatus.color.dark}
              style={{ transform: "scaleX(-1)" }}
            />
            <Text c={externalStatus.color.dark} size="11px" fw={600}>
              {externalStatus.label}
            </Text>
          </Flex>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};

export default OrderRow;
