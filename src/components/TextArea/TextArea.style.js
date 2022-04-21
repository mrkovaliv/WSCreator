import styled from "styled-components";

import { Input } from "antd";

const { TextArea } = Input;

export const Wrapper = styled.div`
  margin-bottom: 25px;
`;

export const StyledLabel = styled.div`
  color: #000000d9;
  font-size: 14px;
  margin-bottom: 7px;
`;

export const StyledTextArea = styled(TextArea)`
  padding: 10px 5px;
  width: 400px;
`;
