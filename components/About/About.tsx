"use client"
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 sm:p-10 md:p-25 lg:px-[15vw]">
      {/* LEFT: Heading + Text */}
      <div className="grid grid-cols-1 md:grid-cols-6 h-fit md:h-350 lg:h-300 md:grid-rows-12">
        <h3 className="text-3xl md:col-span-3 md:row-span-1 md:p-10 font-normal lg:text-4xl text-[#7E7E6B] fadeIn">
          <strong>About Dr. Serena Blake</strong>
        </h3>
        
        {/* Show image on all screen sizes, hide only on md+ if needed */}
        <div className="flex pb-7 pt-4 items-center md:col-span-3 md:row-span-3 lg:row-span-6 m-5 md:mt-20 xl:mt-40 justify-center  fadeIn">
          <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-[24vw] md:h-[36vw] aspect-[2/3] overflow-hidden shadow-md relative cursor-pointer" onClick={openModal}>
            <Image
              src="/images/headshot.jpg"
              alt="Dr. Serena Blake headshot"
              fill
              sizes=""
              className="object-cover"
            />
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            {/* Close button at top right of the screen */}
            <button
              className="fixed top-6 right-6  p-2 shadow-md transition-colors z-50 hover:cursor-pointer"
              onClick={closeModal}
              aria-label="Close image modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative" onClick={e => e.stopPropagation()}>
              <div className="w-[80vw] max-w-[800px] flex items-center justify-center shadow-lg">
                <div className="relative w-full h-0 pb-[150%]" >
                  <Image
                    src="/images/headshot.jpg"
                    alt="Dr. Serena Blake headshot large"
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-5  md:px-10 lg:py-10 md:col-span-3">
          <p className="text-[#7E7E6B] font-extralight text-md tracking-wide leading-8 fadeIn lg:tracking-wider">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>

      {/* HR - full width, new grid row */}
      <div className="col-span-full pt-12 md:mt-16">
        <hr className="w-full border-t border-gray-600" />
      </div>
    </div>
  );
};

export default About;
