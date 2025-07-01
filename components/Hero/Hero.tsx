"use client"
import React from "react";
import Appear from "../Appear";

const Hero = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    // outer bg color
    <div className="w-full bg-[#ecebe3] overflow-hidden">
      {/* full-bleed container */}
      <div
        className="relative w-full h-full md:h-[60vw] lg:h-[55vw] lg:max-h-[720px] xl:max-h-[780px] left-1/2 -translate-x-1/2 overflow-hidden "
      >
        <video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-[#ecebe3]"
        />

        {/* no horizontal padding here, just full-height overlay */}
        <div className="relative z-10 flex flex-col py-10 sm:py-20 md:pt-30 items-center justify-center w-full h-full bg-black/30">
          <Appear>
          <h1 className="text-5xl lg:text-6xl font-semibold text-white text-center mb-4 px-6 mt-20 xl:mb-5 md:mt-0 xl:tracking-wide">
            Psychological Care for

          </h1>
          <h1 className="text-5xl/tight lg:text-6xl font-semibold text-white text-center mt-5 mb-4 px-6 tracking-wide md:tracking-normal xl:tracking-wide">
            Change, Insight, and Well-Being
          </h1>


          <h1 className="text-2xl text-white text-center mb-6 px-6 md:px-8 lg:px-14 lg:py-10 font-extralight xl:tracking-wide">
            Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
            <span className="underline">most U.S. states</span>
            {" "}through PSYPACT participation
          </h1>
          </Appear>
          <Appear>
          <button
            className="px-5 py-3 w-60 sm:w-70 lg:w-80 sm:px-7 lg:px-8 lg:py-10 tracking-wider bg-[#84aeb1] hover:opacity-70 hover:cursor-pointer text-white text-md rounded-[50%_/_50%]"
            onClick={handleClick}
          > <p>SCHEDULE A CONSULTATION</p>
          </button>
          </Appear>
        </div>
      </div>
    </div>
  );
};

export default Hero;
