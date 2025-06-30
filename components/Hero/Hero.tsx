import React from "react";

const Hero = () => {
  return (
    // outer bg color
    <div className="w-full bg-[#ecebe3] overflow-hidden">
      {/* full-bleed container */}
      <div
        className={`
          relative
          w-screen            /* span full viewport width */
          left-1/2
          right-1/2
          -translate-x-1/2    /* center that full-bleed box */
          overflow-hidden

          /* exact heights to match your dev-tools captures */
          h-[400px]           /* tiny phones */
          sm:h-[550px]        /* ≥640px */
          md:max-h-[900px]
          md:h-auto        
          md:min-h-[700px]
          lg:max-h-[900px]
          lg:h-auto        
          lg:min-h-[700px]
        `}
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
          <h1
            className="
              text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
              font-serif text-white text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12
              font-semibold drop-shadow-lg leading-tight
            "
          >
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>

          <p
            className="
              text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
              text-white text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16
              font-light drop-shadow
              max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl
            "
          >
            Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
            <span className="underline">most U.S. states</span>
            <br className="hidden sm:block" />
            through PSYPACT participation
          </p>

          <button
            className="
              w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl
              px-8 py-4 sm:px-12 sm:py-5 lg:px-16 lg:py-6 xl:px-20 xl:py-8
              bg-[#A6BFCB] text-white text-lg sm:text-xl lg:text-2xl
              font-semibold rounded-full shadow-md hover:opacity-90 transition-all
              tracking-widest
            "
          >
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
