import React, { createContext, useState } from "react";

export type Step = {
  title: string;
  description: string;
  type: string;
  content: string;
};

interface IStepsContext {
  steps: Step[];
  current: number;
  children?: any;
  setCurrent?: (index: number) => void;
  next?: () => void;
  prev?: () => void;
}

export const StepsContext = createContext<IStepsContext>({
  steps: [],
  current: 0,
  setCurrent: () => {},
  next: () => {},
  prev: () => {},
  children: null,
});

const StepsProvider = ({ steps, children }: IStepsContext) => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <StepsContext.Provider
      value={{
        current,
        steps,
        setCurrent,
        next,
        prev,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export default StepsProvider;
