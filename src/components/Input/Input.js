import React from "react";

import { Wrapper, StyledInput, StyledLabel } from "./Input.style";

const InputComponent = ({ label, inputProps }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} />
    </Wrapper>
  );
};

export default InputComponent;
