import React from "react";

import { Wrapper, StyledTextArea, StyledLabel } from "./TextArea.style";

const TextArea = ({ label, textAreaProps }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea {...textAreaProps} />
    </Wrapper>
  );
};

export default TextArea;
