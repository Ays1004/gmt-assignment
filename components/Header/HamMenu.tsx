"use client";
import React, { useState } from "react";

export default function HamMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="transition-all duration-400 delay-0 ease-in-out"
      data-animation-role="header-element"
    >
      <button
        className="relative focus:outline-none rounded p-2 flex items-center justify-center"
        data-test="header-burger"
        aria-label={open ? "Close Menu" : "Open Menu"}
        onClick={() => setOpen(o => !o)}
      >
        {/* Visually hidden accessibility labels */}
        <span className="sr-only">{open ? "Close Menu" : "Open Menu"}</span>
        <div className="burger-box">
          <div className="burger-inner flex flex-col justify-center items-center w-8 h-8 relative">
            {/* Top bun */}
            <div
              className={`top-bun h-0.5 w-7 rounded bg-gray-900 absolute transition-all duration-200 ease-in-out 
                ${open ? "rotate-135 top-4" : "top-2"}
              `}
            />
            {/* Patty */}
            <div
              className={`patty h-0.5 w-7 rounded bg-gray-900 absolute transition-all duration-200 ease-in-out 
                ${open ? "opacity-0" : "top-4"}
              `}
            />
            {/* Bottom bun */}
            <div
              className={`bottom-bun h-0.5 w-7 rounded bg-gray-900 absolute transition-all duration-200 ease-in-out 
                ${open ? "-rotate-135 top-4" : "top-6"}
              `}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
