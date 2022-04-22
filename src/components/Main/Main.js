import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderBlock from "../HeaderBlock";
import BasicSettings from "../BasicSettings";
import MainBlock from "../MainBlock";
import About from "../About";
import TeamBlock from "../TeamBlock";
import ServicesBlock from "../ServicesBlock";
import ReviewsBlock from "../ReviewsBlock";
import BrandsBlock from "../BrandsBlock";
import WorksBlock from "../WorksBlock";
import Footer from "../FooterBlock";

import { Wrapper } from "./Main.style";

const Main = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/header">
        <HeaderBlock />
      </Route>
      <Route path="/main">
        <MainBlock />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/team">
        <TeamBlock />
      </Route>
      <Route path="/services">
        <ServicesBlock />
      </Route>
      <Route path="/brands">
        <BrandsBlock />
      </Route>
      <Route path="/reviews">
        <ReviewsBlock />
      </Route>
      <Route path="/works">
        <WorksBlock />
      </Route>
      <Route path="/footer">
        <Footer />
      </Route>
      <Route exact path="/">
        <BasicSettings />
      </Route>
    </Switch>
  </Wrapper>
);

export default Main;
