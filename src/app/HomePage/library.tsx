import React from "react";
import WorkOutCard from "./workoutcard";
import { IWorkout } from "@/type/type";

const getWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const Library = async () => {
  const workout: IWorkout[] = await getWorkouts();

  return (
    <div id="library" className="mx-auto w-full max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-bold text-white">
        THE LIBRARY
      </h1>

      <p className="mt-2 text-xl text-gray-500">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workout.map((workout) => (
          <WorkOutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;