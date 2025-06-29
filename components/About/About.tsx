"use client"
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* LEFT: Heading + Text */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h3 className="text-3xl font-serif font-semibold text-gray-700 mb-6 fadeIn">
            <strong>About Dr. Serena Blake</strong>
          </h3>
          
          {/* Image - visible on small screens, hidden on md and up */}
          <div className="flex items-center justify-center mb-8 md:hidden fadeIn" style={{transitionDelay: '90ms'}}>
            <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 aspect-[2/3] overflow-hidden shadow-md relative">
              <Image
                src="/images/headshot.jpg"
                alt="Dr. Serena Blake headshot"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-5">
            <p className="text-gray-700 font-light leading-relaxed fadeIn" style={{transitionDelay: '120ms'}}>
              Finding calm and connection in today's fast-paced world can feel like a constant uphill climb. I believe therapy provides a dedicated space to pause, reflect, and tend to the parts of ourselves that often go unheard. It can be a space for healing from anxiety and trauma, deepening relationships, and reconnecting with a sense of purpose and wholeness.
            </p>
            <p className="text-gray-700 font-light leading-relaxed fadeIn" style={{transitionDelay: '150ms'}}>
              As a licensed clinical psychologist with eight years of experience and over 500 client sessions, I aim to meet each person with warmth, curiosity, and respect. My approach integrates evidence-based practices—like cognitive-behavioral therapy and mindfulness—with an emphasis on building a genuine, collaborative relationship. I believe real change happens when we feel safe enough to explore both our struggles and our strengths.
            </p>
            <p className="text-gray-700 font-light leading-relaxed fadeIn" style={{transitionDelay: '180ms'}}>
              I earned my PsyD in Clinical Psychology and currently practice in Los Angeles, CA, where I see clients both in person and virtually. Whether we meet in my Maplewood Drive office or through Zoom, I strive to create a space where you feel seen, supported, and empowered to move toward the life you want.
            </p>
          </div>
        </div>

        {/* RIGHT: Image - hidden on small screens, visible on md and up */}
        <div className="hidden md:flex md:col-span-5 items-start justify-center fadeIn" style={{transitionDelay: '90ms'}}>
          <div className="w-64 h-96 lg:w-72 lg:h-[28rem] xl:w-80 xl:h-[30rem] aspect-[2/3] overflow-hidden shadow-md relative">
            <Image
              src="/images/headshot.jpg"
              alt="Dr.Serena Blake"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* HR */}
      <div className="mt-12 md:mt-16">
        <hr className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
};

export default About;
