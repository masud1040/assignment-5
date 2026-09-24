"use client";

import { FitLogContext } from "@/context/FitContext";
import { IWorkout } from "@/type/type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(FitLogContext);

  const handleAddToPlan = () => {
  

  console.log("add to plan btn triggered", workout);

  let alreadyAdded = false;

  for (const item of plan) {
    if (item.id === workout.id) {
      alreadyAdded = true;
    }
  }

  if (alreadyAdded) {
    toast.warning(`"${workout.name}" is already in today's plan`);
    return;
  }

  if (plan.length >= 5) {
    toast.warning("You can add maximum 5 workouts to today's plan");
    return;
  }

  setPlan([...plan, workout]);

  toast.success(`"${workout.name}" added to today's plan`);
};

  return (
    <button
      className="btn flex-1 border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]"
      onClick={() => handleAddToPlan()}
    >
      ADD TO TODAYs PLAN
    </button>
  );
};

export default AddToPlanButton;