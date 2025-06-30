import React from "react";

const Hero = () => {
  return (
    // outer bg color
    <div className="w-full bg-[#ecebe3] overflow-hidden">
      {/* full-bleed container */}
      <div
        className="relative w-screen h-200 left-1/2 -translate-x-1/2 overflow-hidden "
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
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
          <h1 className="text-xl font-semibold text-white text-center mb-4">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>

          <p className="text-base text-white text-center mb-6 font-light max-w-xl">
            Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
            <span className="underline">most U.S. states</span>
            <br className="hidden sm:block" />
            through PSYPACT participation
          </p>

          <button
            className="px-8 py-4 bg-[#A6BFCB] text-white text-lg font-semibold rounded-full"
          >
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
