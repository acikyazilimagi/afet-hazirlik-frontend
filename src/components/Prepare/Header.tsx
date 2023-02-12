import { MenuProps } from "antd";
import React from "react";
import { Layout } from "antd";
import TopMenu from "./TopMenu";
import styles from "../../../styles/Header.module.css";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header">
      <div className={styles.logo} />
      <TopMenu />
    </AntHeader>
  );
};

export default Header;
