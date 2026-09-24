"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FitLogContext } from "@/context/FitContext";
import MyPlanCard from "./MyPlanCard";

const MyPlan = () => {
  const { plan, saved } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white">MY PLAN</h1>

      <p className="mt-1 text-sm text-gray-500">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-5 grid grid-cols-1 rounded-xl border border-white/10 bg-[#15171D] md:grid-cols-3">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Exercises</p>
          <p className="mt-1 text-3xl font-bold text-[#C2F800]">
            {plan.length}
          </p>
        </div>

        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Minutes</p>
          <p className="mt-1 text-3xl font-bold text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Calories</p>
          <p className="mt-1 text-3xl font-bold text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="tabs tabs-box">
          <button
            className={`tab ${
              activeTab === "plan" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("plan")}
          >
            Today Plan
          </button>

          <button
            className={`tab ${
              activeTab === "saved" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        <select className="select select-sm w-32">
          <option>Duration</option>
          <option>Calories</option>
          <option>Rating</option>
        </select>
      </div>

      <div className="mt-4 min-h-52 rounded-xl border border-dashed border-white/10 p-3">
        {activeTab === "plan" && (
          <>
            {plan.length > 0 ? (
              <div className="space-y-4">
                {plan.map((workout) => (
                  <MyPlanCard
                    key={workout.id}
                    workout={workout}
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
                {saved.map((workout) => (
                  <MyPlanCard
                    key={workout.id}
                    workout={workout}
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