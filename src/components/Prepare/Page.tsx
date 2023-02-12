import Breadcrumb from "@/components/Prepare/Breadcrumb";
import Header from "@/components/Prepare/Header";
import Main from "@/components/Prepare/Main";
import SideMenu from "@/components/Prepare/SideMenu";
import { ConfigProvider, Layout } from "antd";
import React from "react";

const Page = ({ children }: any) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6466F1",
        },
      }}
    >
      <Layout>
        <Header />
        <Layout>
          <SideMenu />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb />
            <Main>{children}</Main>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Page;
