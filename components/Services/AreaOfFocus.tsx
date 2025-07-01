import React from "react";
import Image from "next/image";

const focusAreas = [
    {
        title: "Anxiety & Stress Management",
        img: "/images/service1.jpg",
        alt: "Person meditating in a calm environment",
        description:
            "Evidence-based strategies to help you manage anxiety, reduce stress, and regain a sense of calm and control in your daily life.",
    },
    {
        title: "Relationship Counseling",
        img: "/images/service2.jpg",
        alt: "Two people having a supportive conversation",
        description:
            "Support for couples and individuals to strengthen communication, resolve conflicts, and build healthier, more fulfilling relationships.",
    },
    {
        title: "Trauma Recovery",
        img: "/images/service3.jpg",
        alt: "A comforting hand on a shoulder",
        description:
            "Compassionate care to help you process and heal from traumatic experiences, using proven therapeutic approaches tailored to your needs.",
    },
];

const AreaOfFocus = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-light mb-14 text-[#39332b]">
                Areas of Focus
            </h2>
            <div className="flex flex-row flex-wrap pt-10 justify-start sm:justify-between items-stretch gap-5 mt-10 sm:p-5">
                {focusAreas.map((area, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center w-full sm:w-[35vw] md:w-3/10 sm:h-170"
                    >
                        <div className="w-[80vw] h-[80vw] max-w-110 max-h-110 sm:w-[35vw] sm:h-[35vw] md:w-[25vw] md:h-[25vw] md:max-w-120 md:max-h-120 rounded-full overflow-clip mb-8 shadow-md bg-[#eae6dd] items-center justify-center relative">
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
                            <p className="font-extralight text-sm/7 text-[#41413F] tracking-wide">
                                {area.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AreaOfFocus;
