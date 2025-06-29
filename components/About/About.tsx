import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto px-4 py-8 ">
            {/* Left: Text Content */}
            <div className="w-full md:w-2/3 md:pr-8 flex flex-col">
                <h1 className="text-gray-700 font-semibold text-3xl font-serif tracking-wide mb-6">
                    About Dr. Serena Blake
                </h1>
                {/* Image for mobile (between heading and paragraphs) */}
                <div className=" md:hidden w-full flex justify-center mb-6">
                    <Image
                        src="/images/headshot.jpg"
                        alt="Dr. Serena Blake headshot"
                        width={300}
                        height={450}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                    Finding calm and connection in today's fast-paced world can feel like a constant uphill climb. I believe therapy provides a dedicated space to pause, reflect, and tend to the parts of ourselves that often go unheard. It can be a space for healing from anxiety and trauma, deepening relationships, and reconnecting with a sense of purpose and wholeness.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                    As a licensed clinical psychologist with eight years of experience and over 500 client sessions, I aim to meet each person with warmth, curiosity, and respect. My approach integrates evidence-based practices—like cognitive-behavioral therapy and mindfulness—with an emphasis on building a genuine, collaborative relationship. I believe real change happens when we feel safe enough to explore both our struggles and our strengths.
                </p>
                <p className="text-gray-700 font-light leading-relaxed">
                    I earned my PsyD in Clinical Psychology and currently practice in Los Angeles, CA, where I see clients both in person and virtually. Whether we meet in my Maplewood Drive office or through Zoom, I strive to create a space where you feel seen, supported, and empowered to move toward the life you want.
                </p>
            </div>
            {/* Right: Image for desktop */}
            <div className="hidden md:flex md:w-1/3 justify-center items-start mt-8 md:mt-0">
                <Image
                    src="/images/headshot.jpg"
                    alt="Dr. Serena Blake headshot"
                    width={300}
                    height={450}
                    className="rounded-lg shadow-lg object-cover"
                />
            </div>
        </div>
    );
};

export default About;
