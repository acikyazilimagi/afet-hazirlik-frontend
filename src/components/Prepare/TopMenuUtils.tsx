import { MenuProps, Steps } from "antd";
import {
  FlagOutlined,
  WarningOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import NavLink, { NavLinkProps } from "../Base/NavLink";
import navData from "@/data/navData";
import {
  getCurrentMenuIndex,
  getSubMenuIndex,
} from "./components/ControllersUtil";

export type MenuItem = Required<MenuProps>["items"][number];

export const getTopMenuItems = (
  sideMenuList: typeof navData,
  current: number,
  setCurrent: (index: number) => void,
  pathname: string
): MenuItem[] => {
  const indexMenu = getCurrentMenuIndex(sideMenuList, pathname);
  const indexSubMenu = getSubMenuIndex(sideMenuList, pathname);
  const selectedMenu = sideMenuList[indexMenu].data[indexSubMenu];
  console.log("index", indexSubMenu, selectedMenu);
  return [
    getItem(
      selectedMenu.title,
      selectedMenu.href,
      getIcon(selectedMenu.href),
      generateSubMenu(selectedMenu, current, setCurrent, pathname)
    ),
  ];
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
      null
    );
  });
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
