import React from "react";

const Hero = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
                <video
                    src={"/videos/video.mp4"}
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center rounded-lg p-12 w-full">
                    <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-6 font-semibold drop-shadow-lg">
                        Psychological Care for<br />Change, Insight, and Well-Being
                    </h1>
                    <p className="text-lg md:text-xl text-white text-center mb-8 font-light">
                        Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states<br />through PSYPACT participation
                    </p>
                    <button className="px-8 py-4 bg-[#A6BFCB] text-white text-lg font-semibold rounded-full shadow-md hover:opacity-90 transition-all">
                        SCHEDULE A CONSULTATION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
