import React from "react";
import Image from "next/image";
import Appear from "../Appear";

const focusAreas = [
    {
        title: "Anxiety & Stress Management",
        img: "/images/service1.jpg",
        alt: "Person meditating in a calm environment",
        description:
            "Chronic stress and anxiety can impact every aspect of your life, from your work to your relationships and sense of self. Together, we'll explore evidence-based techniques to help you regain calm, build resilience, and develop healthier ways to cope with daily pressures. Whether you're facing burnout, constant worry, or feeling overwhelmed, we'll create a plan tailored to your unique needs.",
    },
    {
        title: "Relationship Counseling",
        img: "/images/service2.jpg",
        alt: "Two people having a supportive conversation",
        description:
            "Navigating relationships can be challenging, whether you're experiencing conflict, communication breakdowns, or seeking deeper connection. I provide a supportive space for couples and individuals to address patterns, heal past wounds, and foster healthier, more fulfilling relationships. We'll work together to strengthen your ability to connect, understand, and grow with those who matter most.",
    },
    {
        title: "Trauma Recovery",
        img: "/images/service3.jpg",
        alt: "A comforting hand on a shoulder",
        description:
            "Healing from trauma is a deeply personal journey that requires compassion, patience, and the right support. I offer a safe environment to process difficult experiences, manage symptoms, and rebuild a sense of safety and trust. Using proven therapeutic approaches, we'll work at your pace to help you move forward and reclaim your life.",
    },
];

const AreaOfFocus = () => {
    return (
        <div>
            <Appear>
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-light mb-14 text-[#39332b]">
                    Areas of Focus
                </h2>
            </Appear>
            <div className="flex flex-row flex-wrap pt-10 justify-start sm:justify-between items-stretch gap-5 mt-10 sm:p-5 lg:p-10">
                {focusAreas.map((area, idx) => (
                    <div
                        key={idx}
                        className="flex py-6 sm:py-2 flex-col items-center w-full sm:w-[35vw] md:w-3/10 sm:h-180"
                    >
                        <Appear>
                            <div className="w-[80vw] h-[80vw] max-w-110 max-h-110 sm:w-[35vw] sm:h-[35vw] md:w-[25vw] md:h-[25vw] md:max-w-120 md:max-h-120 mx-auto rounded-full overflow-clip mb-8 shadow-md bg-[#eae6dd] items-center justify-center relative">
                                <Image
                                    src={area.img}
                                    alt={area.alt}
                                    fill
                                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 35vw, 25vw"
                                    className="object-cover w-full h-full"
                                    priority={idx === 0}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl tracking-wide text-[#39332b] font-light text-center mb-4">
                                    {area.title}
                                </h2>
                                <p className="font-extralight text-sm/7 text-[#41413F] tracking-wide lg:text-[16px]/8 lg:px-4">
                                    {area.description}
                                </p>
                            </div>
                        </Appear>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AreaOfFocus;
