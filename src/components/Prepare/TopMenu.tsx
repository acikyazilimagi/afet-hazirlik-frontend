import { Menu, MenuProps, theme } from "antd";
import React from "react";

const { useToken } = theme;
const TopMenu = () => {
  const items1: MenuProps["items"] = [
    "Anasayfa",
    "Hakkımızda",
    "İletişim",
    "Giriş Yap",
  ].map((key) => ({
    key,
    label: key,
  }));
  const { token } = useToken();
  return (
    <Menu
      style={{
        backgroundColor: token.colorPrimary,
        justifyContent: "flex-end",
      }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["Anasayfa"]}
      items={items1}
    />
  );
};

export default TopMenu;
