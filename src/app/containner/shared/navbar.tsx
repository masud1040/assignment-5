import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const linked = (
    <>
      <li>
        <Link href="/">Workouts</Link>
      </li>
      <li>
        <Link href="/my-plan">My Plan</Link>
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
            0
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <span>Save</span>
          <span className="badge border border-white/20 bg-transparent text-gray-400">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;