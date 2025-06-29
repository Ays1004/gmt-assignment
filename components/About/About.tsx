import Image from "next/image";
import React from "react";


// Make this page responsive


const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto px-4 py-8">
            
            <div className="md:w-2/3 w-full md:pr-8">
                <h1 className="text-gray-500 font-medium text-2xl font-serif tracking-wide mb-4">
                    About Dr. Serena Blake
                </h1>
                <div className="">
                    
                <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <Image
                        src="/images/headshot.jpg"
                        alt="Dr. Serena Blake headshot"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
                    <p className="text-gray-700 font-light leading-relaxed mt-5">
                        Finding calm and connection in today’s fast-paced world
                        can feel like a constant uphill climb. I believe therapy
                        provides a dedicated space to pause, reflect, and tend
                        to the parts of ourselves that often go unheard. It can
                        be a space for healing from anxiety and trauma,
                        deepening relationships, and reconnecting with a sense
                        of purpose and wholeness.
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed mt-4">
                        As a licensed clinical psychologist with eight years of
                        experience and over 500 client sessions, I aim to meet
                        each person with warmth, curiosity, and respect. My
                        approach integrates evidence-based practices—like
                        cognitive-behavioral therapy and mindfulness—with an
                        emphasis on building a genuine, collaborative
                        relationship. I believe real change happens when we feel
                        safe enough to explore both our struggles and our
                        strengths.
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed mt-4">
                        I earned my PsyD in Clinical Psychology and currently
                        practice in Los Angeles, CA, where I see clients both in
                        person and virtually. Whether we meet in my Maplewood
                        Drive office or through Zoom, I strive to create a space
                        where you feel seen, supported, and empowered to move
                        toward the life you want.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;
