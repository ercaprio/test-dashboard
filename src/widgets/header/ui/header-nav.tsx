import { Flex } from "@mantine/core";
import { LogoIcon } from "./header-logo";
import { Link } from "@tanstack/react-router";
import "./header-nav.scss";

const HeaderNav = () => {
  return (
    <Flex align={"center"}>
      <LogoIcon />
      <Flex ml={40} gap={24} align={"center"}>
        <Link
          to="/schedule"
          activeProps={{ className: "header-nav__item--active" }}
          className="header-nav__item"
        >
          Расписание
        </Link>
        <Link
          to="/requests"
          activeProps={{ className: "header-nav__item--active" }}
          className="header-nav__item"
        >
          Заявки
        </Link>
        <Link
          to="/"
          activeProps={{ className: "header-nav__item--active" }}
          className="header-nav__item"
        >
          Заказы
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
