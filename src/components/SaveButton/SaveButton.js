import React from "react";

import { Wrapper, StyledButton } from "./SaveButton.style";

const SaveButton = ({ onClick }) => (
  <Wrapper>
    <StyledButton type="primary" onClick={onClick}>
      Зберегти
    </StyledButton>
  </Wrapper>
);

export default SaveButton;
