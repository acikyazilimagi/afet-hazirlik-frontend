import Breadcrumb from "@/components/Prepare/BreadCrumb";
import Header from "@/components/Prepare/Header";
import Main from "@/components/Prepare/Main";
import SideMenu from "@/components/Prepare/SideMenu";
import { Layout, theme } from "antd";
import React from "react";
import { JsxElement } from "typescript";

const Page = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
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
    </>
  );
};

export default Page;
