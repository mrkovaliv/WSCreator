import styled from "styled-components";

import { Layout, Button } from "antd";

const { Header } = Layout;

export const Wrapper = styled(Header)`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  background: rgb(0, 152, 74);
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 18px;
`;
