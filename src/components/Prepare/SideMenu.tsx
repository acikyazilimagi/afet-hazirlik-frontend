import { StepsContext } from "@/context/StepsContext";
import { Layout, Menu, Steps, theme } from "antd";

import { useRouter } from "next/router";
import { useContext } from "react";
import NavLink from "../Base/NavLink";
const { Sider } = Layout;
import navData from "@/data/navData";

const SideMenu = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { current, setCurrent } = useContext(StepsContext);
  const { pathname } = useRouter();

  return (
    <>
      <Sider width={400} style={{ background: colorBgContainer, padding: 12 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[navData[0].href]}
          defaultOpenKeys={[navData[0].href]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {navData.map((nav) => (
            <Menu.SubMenu key={nav.href} title={nav.title}>
              {nav.data.map((subNav) => (
                <Menu.Item key={subNav.href} style={{ height: "unset" }}>
                  <NavLink href={subNav.href}>
                    <span>{subNav.title}</span>
                  </NavLink>
                  {subNav.href === pathname && (
                    <Steps
                      items={subNav.data}
                      current={current}
                      direction="vertical"
                      size="small"
                      onChange={(current) => setCurrent && setCurrent(current)}
                    />
                  )}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default SideMenu;
