import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/assets/banner.png";

const Hero = () => {
  return (
    <div className="mx-auto mt-10 mb-10 w-full max-w-7xl px-6">
      <div className="min-h-[510px] rounded-3xl border border-white/10 bg-[#15171D]">
        <div className="flex min-h-[510px] flex-col items-center justify-between gap-10 p-8 md:p-12 lg:flex-row lg:px-16">
          <div className="max-w-2xl">
            <span className="font-semibold tracking-wider text-[#C2F800]">
              WORKOUT LIBRARY
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="/"
              className="btn mt-8 border-0 bg-[#C2F800] px-7 text-black hover:bg-[#b8eb00]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          <div className="flex w-full justify-center lg:w-[45%]">
            <Image
              src={hero}
              width={450}
              height={450}
              alt="Workout illustration"
              className="h-auto w-full max-w-[450px] "
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;