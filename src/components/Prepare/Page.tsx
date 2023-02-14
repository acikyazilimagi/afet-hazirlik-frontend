import Breadcrumb from "@/components/Prepare/Breadcrumb";
import Header from "@/components/Prepare/Header";
import Main from "@/components/Prepare/Main";
import SideMenu from "@/components/Prepare/SideMenu";
import { Layout } from "antd";
import React, { useContext } from "react";
import Head from "next/head";
import TopSteps from "./TopSteps";
import TopMenu from "./TopMenu";
import { StepsContext } from "@/context/StepsContext";
import navData from "@/data/navData";
import { useRouter } from "next/router";
import Device from "../Device";

const Page = ({ children }: any) => {
  const { current, setCurrent } = useContext(StepsContext);
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Afet hazırlık</title>
      </Head>
      <Device>
        {({ isMobile }) => {
          return (
            <Layout>
              <Header />
              <Layout>
                {isMobile ? (
                  <div>
                    <TopMenu />
                    <TopSteps
                      navData={navData}
                      current={current}
                      setCurrent={setCurrent!}
                      pathname={pathname}
                    />
                    <Layout style={{ padding: 0 }}>
                      <Main>{children}</Main>
                    </Layout>
                  </div>
                ) : (
                  <>
                    <SideMenu />
                    <Layout style={{ padding: "0 24px 24px" }}>
                      <Breadcrumb />
                      <Main>{children}</Main>
                    </Layout>
                  </>
                )}
              </Layout>
            </Layout>
          );
        }}
      </Device>
    </>
  );
};

export default Page;
