import StepsProvider, { Step, StepsContext } from "@/context/StepsContext";
import React, { useContext } from "react";
import Content from "./components/Content";
import Controllers from "./components/Controllers";
import Page from "./Page";

type Props = {
  data: Step[];
};

const StepsPage = ({ data }: Props) => {
  return (
    <StepsProvider steps={data} current={0}>
      <Page>
        <Content />
        <Controllers />
      </Page>
    </StepsProvider>
  );
};

export default StepsPage;
