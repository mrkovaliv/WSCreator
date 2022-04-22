import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setDefaultContent } from "../../redux/actions";
import store from "../../store/index";
import { Wrapper, StyledButton, DefaultButton } from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSetDefaultCOntent = () => {
    dispatch(setDefaultContent());
    history.push("/");
  };

  const handleCreateSite = () => {
    const state = store.getState();

    fetch('http://localhost:6069/api/wsite/data/set', {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Wrapper>
      <DefaultButton type="primary" onClick={handleSetDefaultCOntent}>
        Заповнити дефортним контентом
      </DefaultButton>
      <StyledButton type="primary" onClick={handleCreateSite}>
        Створити
      </StyledButton>
    </Wrapper>
  );
};

export default Header;
