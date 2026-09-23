import React from "react";
import Image from "next/image";
import { IWorkout } from "@/type/type";
import { CiStar, CiTimer } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="card overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] shadow-sm">
      
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
    

      <div className="card-body gap-4 p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge border-0 bg-[#C2F800] px-3 py-3 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-2 text-sm text-gray-400">{workout.equipment}</p>
        </div>

        <div className="flex items-center gap-5 border-t border-white/10 pt-4 text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <CiTimer /> {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <SlEnergy />{workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <CiStar /> {workout.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
