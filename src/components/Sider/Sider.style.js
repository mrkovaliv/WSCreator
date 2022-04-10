import styled from "styled-components";

import { Layout } from "antd";

const { Sider } = Layout;

export const Wrapper = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #001529;
  color: #fff;
`;
