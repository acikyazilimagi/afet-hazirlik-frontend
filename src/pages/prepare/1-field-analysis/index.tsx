import Page from "@/components/Prepare/Page";
import React from "react";
import data from "@/data/prepare/1-field-analysis";
import Content from "@/components/Prepare/components/Content";
import Controllers from "@/components/Prepare/components/Controllers";
import StepsProvider, { Step } from "@/context/StepsContext";

const App = () => {
  return (
    <>
      <StepsProvider steps={data} current={0}>
        <Page>
          <Content />
          <Controllers />
        </Page>
      </StepsProvider>
    </>
  );
};

export default App;
