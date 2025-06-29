import React from "react";

//add responsiveness to the component
const Hero = () => {
    return (
        <div className="relative w-full flex items-center justify-center sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] max-h-[650px] lg:max-h-[750px] xl:max-h-[850px] 2xl:max-h-[950px] aspect-[4/5] sm:aspect-[16/7] md:aspect-[16/7] lg:aspect-[16/7] xl:aspect-[16/7] 2xl:aspect-[16/7] overflow-hidden bg-[#ecebe3]">
            <div className="relative w-full h-full flex items-center justify-center min-h-full  mx-auto overflow-hidden">
                <video
                    src={"/videos/video.mp4"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center px-2 xs:px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto bg-black/30 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-white text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 font-semibold drop-shadow-lg leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight">
                        Psychological Care for
                        <br />
                        Change, Insight, and Well-Being
                    </h1>
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 font-light drop-shadow max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                        Offering individual psychotherapy for adults via telehealth in Michigan and <span className="underline">most U.S. states</span>
                        <br className="hidden sm:block" />
                        through PSYPACT participation
                    </p>
                    <button className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl px-4 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 xl:px-16 xl:py-6 2xl:px-20 2xl:py-8 bg-[#A6BFCB] text-white text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold rounded-full shadow-md hover:opacity-90 transition-all tracking-widest">
                        SCHEDULE A CONSULTATION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
