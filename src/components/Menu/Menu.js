import { useLocation } from "react-router-dom";

import { StyledMenuItem, StyledMenu, StyledLink } from "./Menu.style";

const MENU_ITEMS = [
  {
    label: "Основні",
    link: "/",
  },
  {
    label: "Header",
    link: "/header",
  },
  {
    label: "Головна",
    link: "/main",
  },
  {
    label: "Про нас",
    link: "/about",
  },
  {
    label: "Команда",
    link: "/team",
  },
  {
    label: "Послуги",
    link: "/services",
  },
  {
    label: "Роботи",
    link: "/works",
  },
  {
    label: "Бренди",
    link: "/brands",
  },
  {
    label: "Відгуки",
    link: "/reviews",
  },
  {
    label: "Footer",
    link: "/footer",
  },
];

const MenuComponent = () => {
  const { pathname } = useLocation();

  return (
    <StyledMenu theme="dark" mode="inline">
      {MENU_ITEMS.map((item, idx) => (
        <StyledMenuItem key={idx} isActive={item.link === pathname}>
          <StyledLink to={item.link}>{item.label}</StyledLink>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default MenuComponent;
