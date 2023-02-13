import Page from "@/components/Prepare/Page";
import React from "react";
import data from "@/data/prepare/1-field-analysis";
import Content from "@/components/Prepare/components/Content";
import Controllers from "@/components/Prepare/components/Controllers";
import StepsProvider, { Step } from "@/context/StepsContext";
import StepsPage from "@/components/Prepare/StepsPage";

const App = () => {
  return (
    <>
      <StepsPage data={data} />
    </>
  );
};

export default App;
