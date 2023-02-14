import React from "react";
import data from "@/data/prepare/1-field-analysis";
import StepsPage from "@/components/Prepare/StepsPage";

const App = () => {
  return (
    <>
      <StepsPage data={data} />
    </>
  );
};

export default App;
