import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setDefaultContent } from "../../redux/actions";

import { Wrapper, StyledButton, DefaultButton } from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSetDefaultCOntent = () => {
    dispatch(setDefaultContent());
    history.push('/');
  };

  return (
    <Wrapper>
      <DefaultButton
        type="primary"
        onClick={handleSetDefaultCOntent}
      >
        Заповнити дефортним контентом
      </DefaultButton>
      <StyledButton type="primary">Створити</StyledButton>
    </Wrapper>
  );
};

export default Header;
