"use client";

import { FitLogContext } from "@/context/FitContext";
import { IWorkout } from "@/type/type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveWorkoutButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(FitLogContext);

  const handleSaveWorkout = () => {
    console.log("save workout btn triggered", workout);

    let alreadySaved = false;

    for (const item of saved) {
      if (item.id === workout.id) {
        alreadySaved = true;
      }
    }

    if (alreadySaved) {
      toast.warning(`"${workout.name}" is already saved`);
      return;
    }

    setSaved([...saved, workout]);

    toast.success(`"${workout.name}" saved for later`);
  };

  return (
    <button
      className="btn btn-outline flex-1 border-white/20 text-white"
      onClick={() => handleSaveWorkout()}
    >
      SAVE FOR LATER
    </button>
  );
};

export default SaveWorkoutButton;