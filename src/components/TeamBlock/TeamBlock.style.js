import styled from "styled-components";

import { Button } from "antd";

export const Wrapper = styled.section``;

export const StyledTeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 950px;
`;

export const StyledAddNewButton = styled(Button)`
  background: #001529;
  color: rgba(255, 255, 255, 0.85);
  border: none;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 20px;
`;
