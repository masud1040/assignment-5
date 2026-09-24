"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar, CiTimer } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { IWorkout } from "@/type/type";
import { MdCancel } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

const MyPlanCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#15171D] p-4">
      <Image
        src={workout.image}
        alt={workout.name}
        width={32}
        height={20}
        className="h-20 w-32 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h2 className="font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <CiTimer />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <SlEnergy />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <CiStar />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm btn-outline border-white/20 text-white"
        >
          View Details
        </Link>

        <button className="btn btn-sm border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]">
          <FaRegBookmark /> Mark as Done
        </button>

        <button className="text-xl text-gray-500 hover:text-white">
          <MdCancel />

        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;