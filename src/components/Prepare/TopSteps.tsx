import { Layout, Steps } from "antd";
import {
  getCurrentMenuIndex,
  getSubMenuIndex,
} from "./components/ControllersUtil";

type Props = {
  navData: any;
  pathname: string;
  current: number;
  setCurrent: (index: number) => void;
};
const TopSteps = ({ navData, pathname, current, setCurrent }: Props) => {
  const currentMenuIndex = getCurrentMenuIndex(navData, pathname);
  const subMenu = navData[currentMenuIndex!].data.find(
    (item: { href: string }) => item.href === pathname
  );
  return (
    <Layout
      style={{
        backgroundColor: "#fff",
        overflow: "auto",
        width: "100vw",
        paddingBottom: "10px",
      }}
    >
      <Steps
        items={subMenu.data.map((x: { title: any }, i: number) => ({
          title: x.title,
          key: i,
        }))}
        current={current}
        size="small"
        labelPlacement="vertical"
        responsive={false}
        onChange={(current) => setCurrent && setCurrent(current)}
      />
    </Layout>
  );
};

export default TopSteps;
