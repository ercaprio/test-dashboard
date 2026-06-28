import type { OrderItem } from "@entities/order";
import { Checkbox, Flex, Table, Text, Tooltip, Box } from "@mantine/core";
import {
  APPROVED_STATUSES_LABELS,
  EXTERNAL_STATUSES_LABELS,
  INITIATOR_TYPE_LABELS,
} from "@shared/config/constants";
import formatDate from "@shared/lib/format-date";
import formatNumbers from "@shared/lib/format-numbers";
import { IconPlane } from "@tabler/icons-react";

type Props = {
  order: OrderItem;
  id: string;
};

const OrderRow = ({ order, id }: Props) => {
  const orderDate = new Date(order.createdAt);
  const depDate = new Date(order.aviaStructure.depTime);
  const arrDate = new Date(order.aviaStructure.arrTime);
  const arrow = order.aviaStructure.type === "round" ? "⇌" : "-";

  const getApprovedStatus = (statuses: string[]) => {
    if (!statuses.every((s) => s === statuses[0])) {
      return "ЧАСТИЧНО";
    } else {
      return APPROVED_STATUSES_LABELS[statuses[0]];
    }
  };

  const getExternalStatus = (statuses: string[]) => {
    if (!statuses.every((s) => s === statuses[0])) {
      const dominant = [...statuses].sort(
        (a, b) =>
          EXTERNAL_STATUSES_LABELS[b]?.priority -
          EXTERNAL_STATUSES_LABELS[a]?.priority,
      )[0];

      return EXTERNAL_STATUSES_LABELS[dominant]?.label;
    } else {
      return EXTERNAL_STATUSES_LABELS[statuses[0]]?.label;
    }
  };

  return (
    <Table.Tr key={id}>
      <Table.Td>
        <Checkbox />
      </Table.Td>

      <Table.Td>
        <Text fw={600}>#{id}</Text>
        <Text>{formatDate(orderDate, "hour")}</Text>
      </Table.Td>

      <Table.Td>
        <Text>
          {order.traveler.lastName} {order.traveler.firstName}
        </Text>

        <Text>
          {order.initiatorType === "TRAVELER"
            ? INITIATOR_TYPE_LABELS[order.initiatorType]
            : `${order.initiatorUserRole.user.lastName} ${order.initiatorUserRole.user.firstName}`}
        </Text>
      </Table.Td>

      <Table.Td>
        <Tooltip
          label={
            <Flex direction="column" gap={4}>
              {order.orderGroupFields.map((item, i) => (
                <Text key={`${item.valueEn}-${i}`}>
                  {item.field.shortName}: {item.valueRu}
                </Text>
              ))}
            </Flex>
          }
          disabled={order.orderGroupFields.length <= 2}
        >
          <Flex direction="column" gap={4}>
            {order.orderGroupFields.slice(0, 2).map((item, i) => (
              <Text key={`${item.valueEn}-${i}`}>
                {item.field.shortName}: {item.valueRu}
              </Text>
            ))}

            {order.orderGroupFields.length > 2 && (
              <Text style={{ cursor: "pointer" }}>
                еще +{order.orderGroupFields.length - 2}
              </Text>
            )}
          </Flex>
        </Tooltip>
      </Table.Td>

      <Table.Td>
        <Flex direction={"column"}>
          <Flex align={"center"} gap={4}>
            <IconPlane size={14} color="#00040A" stroke={2} />
            <Text>{`${order.aviaStructure.departure} ${arrow} ${order.aviaStructure.arrival}`}</Text>
          </Flex>

          <Text>
            {formatDate(depDate, "weekday")} - {formatDate(arrDate, "weekday")}{" "}
            ·
            <Tooltip
              label={
                <Flex direction="column" gap={4}>
                  {order.aviaStructure.airlines.map((item, i) => (
                    <Text key={`${item}-${i}`}>{item}</Text>
                  ))}
                </Flex>
              }
              disabled={order.aviaStructure.airlines.length <= 1}
            >
              <Flex gap={2} align={"center"} direction="column">
                {order.aviaStructure.airlines.slice(0, 1).map((item, i) => (
                  <Text key={`${item}-${i}`}>{item}</Text>
                ))}

                {order.aviaStructure.airlines.length > 1 && (
                  <Text style={{ cursor: "pointer" }}>
                    еще +{order.aviaStructure.airlines.length - 1}
                  </Text>
                )}
              </Flex>
            </Tooltip>
          </Text>
        </Flex>
      </Table.Td>

      <Table.Td>
        <Text>{formatNumbers(order.totalPrice)} ₸</Text>
      </Table.Td>

      <Table.Td>
        <Flex>
          <Box>
            <Text>{getApprovedStatus(order.approvedStatuses)}</Text>
          </Box>
        </Flex>
      </Table.Td>

      <Table.Td>{getExternalStatus(order.externalStatuses)}</Table.Td>
    </Table.Tr>
  );
};

export default OrderRow;
