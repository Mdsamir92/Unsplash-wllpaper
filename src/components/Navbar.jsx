import React from "react";
import Tabs from "./Tabs";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#CFD4E7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 pb-2">

        {/* TOP ROW */}
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded">
              U
            </div> */}
            <img src="./logo.jpg" alt="" className="h-12"/>
            <span className="font-bold text-lg whitespace-nowrap">
              SamGallery
            </span>
          </div>

          {/* Tabs - Desktop only */}
          <div className="hidden md:flex">
            <Tabs />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg font-sans text-gray-600 hover:text-black"
            >
              Explore
            </a>
          </div>
        </div>

        {/* BOTTOM ROW (Mobile Tabs) */}
        <div className="md:hidden pb-3">
          <Tabs />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
