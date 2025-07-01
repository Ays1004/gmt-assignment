"use client"
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="p-6 sm:p-10 md:p-25 lg:p-30">
      {/* LEFT: Heading + Text */}
      <div className="grid grid-cols-1 md:grid-cols-6 h-fit md:h-400 lg:h-300 md:grid-rows-12">
        <h3 className="text-3xl md:col-span-3 md:row-span-1 md:p-10 font-normal text-[#7E7E6B] fadeIn">
          <strong>About Dr. Serena Blake</strong>
        </h3>
        
        {/* Show image on all screen sizes, hide only on md+ if needed */}
        <div className="flex pb-7 pt-4 items-center md:col-span-3 md:row-span-4 m-5 md:mt-30 justify-center fadeIn">
          <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-[30vh] md:h-[45vh] aspect-[2/3] overflow-hidden shadow-md relative">
            <Image
              src="/images/headshot.jpg"
              alt="Dr. Serena Blake headshot"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-5  md:px-10 md:col-span-3">
          <p className="text-[#7E7E6B] font-extralight text-md tracking-wide leading-8 fadeIn">
            Finding calm and connection in today's fast-paced world can feel like a constant uphill climb. I believe therapy provides a dedicated space to pause, reflect, and tend to the parts of ourselves that often go unheard. It can be a space for healing from anxiety and trauma, deepening relationships, and reconnecting with a sense of purpose and wholeness.
          </p>
          <p className="text-[#7E7E6B] font-extralight text-md tracking-wide leading-8 fadeIn">
            As a licensed clinical psychologist with eight years of experience and over 500 client sessions, I aim to meet each person with warmth, curiosity, and respect. My approach integrates evidence-based practices—like cognitive-behavioral therapy and mindfulness—with an emphasis on building a genuine, collaborative relationship. I believe real change happens when we feel safe enough to explore both our struggles and our strengths.
          </p>
          <p className="text-[#7E7E6B] font-extralight text-md tracking-wide leading-8 fadeIn">
            I earned my PsyD in Clinical Psychology and currently practice in Los Angeles, CA, where I see clients both in person and virtually. Whether we meet in my Maplewood Drive office or through Zoom, I strive to create a space where you feel seen, supported, and empowered to move toward the life you want.
          </p>
        </div>
      </div>

      {/* HR - full width, new grid row */}
      <div className="col-span-full mt-12 md:mt-16">
        <hr className="w-full border-t border-gray-600" />
      </div>
    </div>
  );
};

export default About;
