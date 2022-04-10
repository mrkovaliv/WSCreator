import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Main, Header, Footer, Sider } from "../src/components";
import { Layout } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Layout hasSider style={{ background: "#f0f2f5" }}>
        <Sider />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
