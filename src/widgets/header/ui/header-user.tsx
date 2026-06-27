import { Button, Flex, Text } from "@mantine/core";
import { ExitIcon } from "@shared/ui/icons/general-icons";
import "./header-user.scss";

const HeaderUser = () => {
  return (
    <Flex align={"center"} gap={20}>
      <Flex direction={"column"} gap={2}>
        <Text c="#00040A" fw={600} size={"13px"}>
          Баталгазиев Р.В.
        </Text>
        <Text c="#9DA1A8" fw={400} size={"11px"}>
          Менеджер
        </Text>
      </Flex>

      <Button
        bg={"#fff"}
        leftSection={<ExitIcon />}
        size="md"
        radius={"15px"}
        className="header-user__btn"
      >
        Выйти
      </Button>
    </Flex>
  );
};

export default HeaderUser;
