import React from "react";

import { Wrapper, StyledCheckbox } from "./Checkbox.style";

const Checkbox = ({ ...props }) => {
  return (
    <Wrapper>
      <StyledCheckbox {...props} />
    </Wrapper>
  );
};

export default Checkbox;
