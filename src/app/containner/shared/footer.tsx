import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#0B0C0F]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="FitLog logo"
            className="h-12 w-auto"
          />

          <p className="text-center text-sm text-gray-500 md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;