import { StepsContext } from "@/context/StepsContext";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import navData from "@/data/navData";
import gotoNextSection from "./ControllersUtil";

const Controllers = () => {
  const { steps, current, next, prev } = useContext(StepsContext);
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 45,
      }}
    >
      <Button
        style={{
          margin: "0 8px",
          visibility: current > 0 ? "visible" : "hidden",
        }}
        onClick={() => prev && prev()}
      >
        Önceki
      </Button>
      {current < steps.length - 1 && (
        <Button
          type="primary"
          style={{
            backgroundColor: "#6466F1",
          }}
          onClick={() => next && next()}
        >
          Sonraki
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type="primary"
          style={{ backgroundColor: "#6466F1" }}
          onClick={() => gotoNextSection(navData, pathname, router)}
        >
          Tamamla
        </Button>
      )}
    </div>
  );
};

export default Controllers;
