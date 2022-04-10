import styled from "styled-components";
import { Link } from "react-router-dom";

import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  margin-top: 30px;
`;

export const StyledMenuItem = styled(Menu.Item)`
  padding: 10px 0;
  list-style: none;
  transition: 0.3s;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.35)};

  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
