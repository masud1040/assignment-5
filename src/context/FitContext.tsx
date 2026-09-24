"use client";

import { IWorkout } from "@/type/type";
import React, { createContext, ReactNode, useState } from "react";

interface IFiTContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const FitLogContext = createContext<IFiTContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const FitProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitProvider;