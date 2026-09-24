import React from "react";
import Image from "next/image";
import { CiStar, CiTimer } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { IWorkout } from "@/type/type";
import AddToPlanButton from "@/app/workoutdetails/addToPlanButton";
import SaveWorkoutButton from "@/app/workoutdetails/SaveButton";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const data = await response.json();

  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout: IWorkout = await getWorkout(id);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={700}
            height={700}
            className="h-full max-h-[540px] w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold uppercase text-white">
            {workout.name}
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-4 flex gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge border-0 bg-[#C2F800] text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15171D]">
            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">EQUIPMENT</span>
              <span className="text-white">{workout.equipment}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">DIFFICULTY</span>
              <span className="text-white">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">SETS</span>
              <span className="text-white">{workout.sets}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">REPS</span>
              <span className="text-white">{workout.reps}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">DURATION</span>
              <span className="flex items-center gap-1 text-white">
                <CiTimer />
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-gray-500">CALORIES</span>
              <span className="flex items-center gap-1 text-white">
                <SlEnergy />
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">RATING</span>
              <span className="flex items-center gap-1 text-white">
                <CiStar />
                {workout.rating}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold uppercase text-white">
              INSTRUCTIONS
            </h2>

            <ol className="mt-3 space-y-3 text-sm text-gray-400">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span>{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex gap-3">
            <AddToPlanButton workout={workout} />

         <SaveWorkoutButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
