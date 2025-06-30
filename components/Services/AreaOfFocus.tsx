import React from "react";

const focusAreas = [
    {
        title: "Therapy for Healthcare Providers and Students",
        img: "/images/service1.jpg", // Replace with your actual image path
        alt: "Healthcare provider with patient",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        title: "Therapy for Trauma and Grief",
        img: "/images/service2.jpg", // Replace with your actual image path
        alt: "Hands holding a flower",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
        title: "Therapy for Second Generation Individuals In Immigrant Families",
        img: "/images/service3.jpg", // Replace with your actual image path
        alt: "Hands holding a small US flag",
        description:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Quis .Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
                        <div className="w-[80vw] h-[80vw] max-w-110 max-h-110 sm:w-fit sm:h-[35vw] md:w-[25vw] md:h-[25vw] md:max-w-120 md:max-h-120 rounded-full overflow-clip mb-8 shadow-md bg-[#eae6dd] items-center justify-center">
                            <img
                                src={area.img}
                                alt={area.alt}
                                className="object-cover w-full h-full"
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
