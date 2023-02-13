import { StepsContext } from "@/context/StepsContext";
import { Layout, Menu, Steps, theme } from "antd";

import { useRouter } from "next/router";
import { useContext } from "react";
import NavLink from "../Base/NavLink";
const { Sider } = Layout;
import navData from "@/data/navData";
import { getSideMenuItems } from "./SideMenuUtil";

const SideMenu = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { current, setCurrent } = useContext(StepsContext);
  const { pathname } = useRouter();
  const defaultOpenKeys = navData
    .filter((item) => pathname.startsWith(item.href))
    .map((item) => item.href);

  return (
    <>
      <Sider width={400} style={{ background: colorBgContainer, padding: 12 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={defaultOpenKeys}
          style={{ height: "100%", borderRight: 0 }}
          items={getSideMenuItems(navData, current, setCurrent!, pathname)}
        />
      </Sider>
    </>
  );
};

export default SideMenu;
