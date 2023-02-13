import { StepsContext } from "@/context/StepsContext";
import { Button, message } from "antd";
import { useContext } from "react";

const Controllers = () => {
  const { steps, current, next, prev } = useContext(StepsContext);
  return (
    <div
      style={{
        marginTop: 24,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Button
        style={{
          margin: "0 8px",
          visibility: current > 0 ? "visible" : "hidden",
        }}
        onClick={() => prev()}
      >
        Önceki
      </Button>
      {current < steps.length - 1 && (
        <Button
          type="primary"
          style={{ backgroundColor: "#6466F1" }}
          onClick={() => next()}
        >
          Sonraki
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type="primary"
          style={{ backgroundColor: "#6466F1" }}
          onClick={() => message.success("Bölüm tamamlandı!")}
        >
          Tamamla
        </Button>
      )}
    </div>
  );
};

export default Controllers;
