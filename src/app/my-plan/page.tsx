"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "@/context/FitContext";
import MyPlanCard from "./MyPlanCard";
import { IWorkout } from "@/type/type";

const MyPlan = () => {
  const { plan, saved } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const planMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const planCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const savedMinutes = saved.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const savedCalories = saved.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const sortedPlan = sortWorkouts(plan);
  const sortedSaved = sortWorkouts(saved);

  const exercises = activeTab === "plan" ? plan.length : saved.length;

  const totalMinutes = activeTab === "plan" ? planMinutes : savedMinutes;

  const totalCalories = activeTab === "plan" ? planCalories : savedCalories;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white">MY PLAN</h1>

      <p className="mt-1 text-sm text-gray-500">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-5 grid grid-cols-1 rounded-xl border border-white/10 bg-[#15171D] md:grid-cols-3">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Exercises</p>

          <p className="mt-1 text-3xl font-bold text-[#C2F800]">{exercises}</p>
        </div>

        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Minutes</p>

          <p className="mt-1 text-3xl font-bold text-white">{totalMinutes}</p>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Calories</p>

          <p className="mt-1 text-3xl font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="tabs tabs-box">
          <button
            className={`tab ${activeTab === "plan" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("plan")}
          >
            Today Plan
          </button>

          <button
            className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          className="select select-sm w-32"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="mt-4 min-h-52 rounded-xl border border-dashed border-white/10 p-3">
        {activeTab === "plan" && (
          <>
            {plan.length > 0 ? (
              <div className="space-y-4">
                {sortedPlan.map((workout) => (
                  <MyPlanCard
                    key={workout.id}
                    workout={workout}
                    isPlan={true}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-52 items-center justify-center">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link
                    href="/"
                    className="btn btn-sm mt-4 border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]"
                  >
                    Go to workouts
                  </Link>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === "saved" && (
          <>
            {saved.length > 0 ? (
              <div className="space-y-4">
                {sortedSaved.map((workout) => (
                  <MyPlanCard
                    key={workout.id}
                    workout={workout}
                    isPlan={false}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-52 items-center justify-center">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link
                    href="/"
                    className="btn btn-sm mt-4 border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]"
                  >
                    Go to workouts
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
