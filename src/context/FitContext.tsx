"use client";

import { IWorkout } from "@/type/type";
import React, { createContext, ReactNode, useState } from "react";

interface IFiTContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const FitContext = createContext<IFiTContext>({
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
    <FitContext.Provider value={sharedData}>
      {children}
    </FitContext.Provider>
  );
};

export default FitProvider;