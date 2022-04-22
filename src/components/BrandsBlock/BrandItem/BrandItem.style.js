import styled from "styled-components";

import { Button } from "antd";


export const Wrapper = styled.div`
border: 1px solid #c2c1be;
padding: 20px;
margin: 5px 0 20px;
max-width: 415px;
border-radius: 7px;
`;

export const StyledButton = styled(Button)`
  background: #228f22;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 18px;
`;

export const RemoveButton = styled(StyledButton)`
  background: #a82b13;
`;


export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
