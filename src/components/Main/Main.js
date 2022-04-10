import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderBlock from "../HeaderBlock";
import BasicSettings from '../BasicSettings';

import { Wrapper } from "./Main.style";

const Main = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/header">
        <HeaderBlock />
      </Route>
      <Route path="/about">
        <div>about</div>
      </Route>
      <Route exact path="/">
        <BasicSettings />
      </Route>
    </Switch>
  </Wrapper>
);

export default Main;
