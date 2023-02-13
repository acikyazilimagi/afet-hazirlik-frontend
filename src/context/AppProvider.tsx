import { ConfigProvider } from "antd";
import React from "react";

const AppProvider = ({ children }: any) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6466F1",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppProvider;
