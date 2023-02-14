import { StepsContext } from "@/context/StepsContext";
import { Layout, Menu, Steps, theme } from "antd";

import { useRouter } from "next/router";
import { useContext } from "react";
import NavLink from "../Base/NavLink";
const { Sider } = Layout;
import navData from "@/data/navData";
import { getTopMenuItems } from "./TopMenuUtils";

type Props = {};

const TopMenu = ({}: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { current, setCurrent } = useContext(StepsContext);
  const { pathname } = useRouter();
  return (
    <>
      <Sider style={{ background: colorBgContainer, width: "100vw" }}>
        <Menu
          mode="inline"
          style={{ borderRight: 0, width: "100vw" }}
          items={getTopMenuItems(navData, current, setCurrent!, pathname)}
        />
      </Sider>
    </>
  );
};

export default TopMenu;
