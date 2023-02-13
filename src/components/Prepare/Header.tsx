import { MenuProps, theme, Typography } from "antd";
import React from "react";
import { Layout } from "antd";
import TopMenu from "./TopMenu";
import styles from "../../../styles/Header.module.css";
import Image from "next/image";

const { Header: AntHeader } = Layout;
const { useToken } = theme;
const { Text } = Typography;

const Header = () => {
  const { token } = useToken();
  return (
    <AntHeader style={{ backgroundColor: token.colorPrimary }}>
      <div className={styles.logo}>
        <Image
          width={30}
          height={30}
          quality={100}
          src="/logo-invert.png"
          alt="Logo"
        />
        <Text>afethazırlık</Text>
      </div>
      <TopMenu />
    </AntHeader>
  );
};

export default Header;
