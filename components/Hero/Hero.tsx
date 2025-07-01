import React from "react";

const Hero = () => {
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
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* no horizontal padding here, just full-height overlay */}
        <div className="relative z-10 flex flex-col my-10 sm:my-20 md:my-0 items-center justify-center w-full h-full">
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

          <button
            className="px-7 py-6 m-5 lg:px-14 lg:py-10 tracking-wide bg-[#84aeb1] hover:opacity-60 text-white text-md rounded-[50%_/_50%]"
          > SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
