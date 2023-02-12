import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { getDefaultOpenKeys, getMenuItems } from "./SideMenuUtil";
const { Sider } = Layout;

const SideMenu = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = useRouter();

  return (
    <>
      <Sider width={300} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={getDefaultOpenKeys(pathname)}
          style={{ height: "100%", borderRight: 0 }}
          items={getMenuItems()}
        />
      </Sider>
    </>
  );
};

export default SideMenu;
