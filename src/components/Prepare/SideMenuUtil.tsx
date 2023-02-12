import { MenuProps } from "antd";
import {
  FlagOutlined,
  WarningOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import NavLink, { NavLinkProps } from "../Base/NavLink";

export type MenuItem = Required<MenuProps>["items"][number];

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
const generateMenuItems = (items: NavLinkProps[]): MenuItem[] => {
  return items.map((item) =>
    getItem(<NavLink href={item.href}>{item.children}</NavLink>, item.href)
  );
};

const prepareUrls = [
  { href: "/prepare/1-field-analysis", children: "1. Alan analizi" },
  {
    href: "/prepare/2-building-retrofitting",
    children: "2. Bina güçlendirme",
  },
  { href: "/prepare/3-insurance", children: "3. Sigorta" },
  { href: "/prepare/4-room-safety", children: "4. Oda güvenliği" },
  { href: "/prepare/5-furnitures", children: "5. Mobilyalar" },
  { href: "/prepare/6-bag", children: "6. Çanta" },
  { href: "/prepare/7-car", children: "7. Araba" },
  { href: "/prepare/8-awareness", children: "8. Farkındalık" },
];

const duringUrls = [
  { href: "/during/1-drop-cover-hold-on", children: "1. Çök, kapan, tutun" },
  { href: "/during/2-todos", children: "2. Yapılacaklar" },
];
const afterUrls = [{ href: "/after/1-after", children: "1. Sonrasında" }];

export const getMenuItems = (): MenuItem[] => {
  return [
    getItem(
      "Öncesi",
      "prepare",
      <FlagOutlined />,
      generateMenuItems(prepareUrls)
    ),
    getItem(
      "Anında",
      "during",
      <WarningOutlined />,
      generateMenuItems(duringUrls)
    ),
    getItem(
      "Sonrası",
      "after",
      <PhoneOutlined />,
      generateMenuItems(afterUrls)
    ),
  ];
};

export const getDefaultOpenKeys = (pathname: string): string[] => {
  const defaultOpenKeys = pathname.split("/")[1];
  return [defaultOpenKeys];
};
