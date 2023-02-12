import { Menu, MenuProps } from "antd";
import React from "react";

const TopMenu = () => {
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={items1}
    />
  );
};

export default TopMenu;
