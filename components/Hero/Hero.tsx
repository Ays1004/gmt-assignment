import React from "react";

const Hero = () => {
  return (
    // outer bg color
    <div className="w-full bg-[#ecebe3] overflow-hidden">
      {/* full-bleed container */}
      <div
        className="relative w-full h-full md:h-[60vw] lg:h-[55vw] lg:max-h-[720px] left-1/2 -translate-x-1/2 overflow-hidden "
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
        <div className="relative z-10 flex flex-col my-20 items-center justify-center w-full h-full">
          <h1 className="text-5xl font-semibold text-white text-center mb-4 px-6 mt-20 ">
            Psychological Care for

          </h1>
          <h1 className="text-5xl/tight font-semibold text-white text-center mt-5 mb-4 px-6 tracking-wide">
            Change, Insight, and Well-Being
          </h1>


          <h1 className="text-2xl text-white text-center mb-6 px-6 font-extralight max-w-xl">
            Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
            <span className="underline">most U.S. states</span>
            <br className="hidden sm:block" />
            {" "}through PSYPACT participation
          </h1>

          <button
            className="px-20 py-4 bg-[#84aeb1] hover:opacity-60 text-white text-md rounded-[50%_/_50%]"
          > SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
