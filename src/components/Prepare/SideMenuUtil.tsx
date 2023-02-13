import { MenuProps, Steps } from "antd";
import {
  FlagOutlined,
  WarningOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import NavLink, { NavLinkProps } from "../Base/NavLink";
import navData from "@/data/navData";

export type MenuItem = Required<MenuProps>["items"][number];

export const getSideMenuItems = (
  sideMenuList: typeof navData,
  current: number,
  setCurrent: (index: number) => void,
  pathname: string
): MenuItem[] => {
  return sideMenuList.map((sideMenu, i) => {
    return getItem(
      sideMenu.title,
      sideMenu.href,
      getIcon(sideMenu.href),
      generateSubMenu(sideMenu, current, setCurrent, pathname)
    );
  });
};

const generateSubMenu = (
  sideMenu: { title?: string; href?: string; data: any },
  current: number,
  setCurrent: (current: number) => void,
  pathname: string
): MenuItem[] => {
  return sideMenu.data.map((subMenu: { href: "string"; title: "string" }) => {
    return getItem(
      <NavLink href={subMenu.href}>{subMenu.title}</NavLink>,
      subMenu.href,
      null,
      subMenu.href === pathname
        ? generateSteps(subMenu, current, setCurrent)
        : undefined,
      "group"
    );
  });
};

const generateSteps = (
  subMenu: { href?: "string"; title: "string"; data?: any },
  current: number,
  setCurrent: (current: number) => void
) => {
  return [
    getItem(
      <Steps
        items={subMenu.data}
        current={current}
        direction="vertical"
        size="small"
        onChange={(current) => setCurrent && setCurrent(current)}
      />,
      subMenu.href!,
      null
    ),
  ];
};

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const getIcon = (pathname: string): React.ReactNode => {
  switch (pathname) {
    case "/prepare":
      return <FlagOutlined />;
    case "/during":
      return <WarningOutlined />;
    case "/after":
      return <PhoneOutlined />;
    default:
      return <FlagOutlined />;
  }
};
