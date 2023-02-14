import { StepsContext } from "@/context/StepsContext";
import { Layout, Steps } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import {
  getCurrentMenuIndex,
  getSubMenuIndex,
} from "./components/ControllersUtil";

type Props = {
  navData: any;
  pathname: string;
};
const TopSteps = ({ navData, pathname }: Props) => {
  const { current, setCurrent } = useContext(StepsContext);
  const refLayout = useRef<HTMLBaseElement>(null);
  const currentMenuIndex = getCurrentMenuIndex(navData, pathname);
  const subMenu = navData[currentMenuIndex!].data.find(
    (item: { href: string }) => item.href === pathname
  );
  useEffect(() => {
    refLayout!.current!.scrollTo({
      left: current > 2 ? current * 75 : 0,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <Layout
      ref={refLayout}
      style={{
        backgroundColor: "#fff",
        overflow: "auto",
        width: "100vw",
        paddingBottom: "10px",
      }}
    >
      <Steps
        items={subMenu.data.map((x: { title: any }, i: number) => ({
          title: x.title,
          key: i,
        }))}
        current={current}
        size="small"
        labelPlacement="vertical"
        responsive={false}
        onChange={(current) => setCurrent && setCurrent(current)}
      />
    </Layout>
  );
};

export default TopSteps;
