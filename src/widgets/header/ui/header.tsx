import { Flex } from "@mantine/core";
import HeaderNav from "./header-nav";
import HeaderUser from "./header-user";

const Header = () => {
  return (
    <Flex h={"100%"} p={"12px 0"} justify={"space-between"}>
      <HeaderNav />

      <HeaderUser />
    </Flex>
  );
};

export default Header;
