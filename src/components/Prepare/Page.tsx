import Breadcrumb from "@/components/Prepare/Breadcrumb";
import Header from "@/components/Prepare/Header";
import Main from "@/components/Prepare/Main";
import SideMenu from "@/components/Prepare/SideMenu";
import { Layout } from "antd";
import React from "react";
import Head from "next/head";

const Page = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Afet hazırlık</title>
      </Head>
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
