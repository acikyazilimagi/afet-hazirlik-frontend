import { Layout, theme } from "antd";
import React from "react";
const { Content } = Layout;

const Main = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: "100vh",
        background: colorBgContainer,
      }}
    >
      {children}
    </Content>
  );
};

export default Main;
