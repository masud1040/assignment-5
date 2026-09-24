"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitContext";

const NavBar = () => {
  const { plan, saved } = useContext(FitLogContext);

  const pathname = usePathname();

  const linked = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "bg-[#C2F800] text-black" : ""}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={
            pathname === "/my-plan"
              ? "bg-[#C2F800] text-black"
              : ""
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar min-h-20 border-b border-white/10 bg-[#0b0c0f] px-6 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-[#15161a] p-2 text-white shadow"
          >
            {linked}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            alt="logo"
            src={logo}
          />

          <Link href="/" className="text-xl font-bold tracking-wide">
            FITLOG
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {linked}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <span>Plan</span>

          <span className="badge border-0 bg-[#ccff00] font-bold text-black">
            {plan.length}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <span>Save</span>

          <span className="badge border border-white/20 bg-transparent text-gray-400">
            {saved.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;