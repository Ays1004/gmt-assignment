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
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

const Services = () => {
    return (
        <div>
            <div className="bg-[#f7f4ec] min-h-screen px-4 py-12 md:py-20">
                <div className=" mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-normal mb-8 text-[#39332b]">
                        Therapy can be a space where you invest in yourself—one
                        of the highest forms of self-care.
                    </h1>
                    <p className="text-lg md:text-xl text-[#39332bcc] font-light mb-12 max-w-3xl mx-auto">
                        You may be led to therapy by anxiety, depression,
                        relationship stress, past or recent trauma, grief and
                        loss, self-esteem issues, or challenges with family,
                        parenting, or parental relationships. Whatever the
                        source of your stress, you don&apos;t have to face it
                        alone. Therapy offers you the time and space to work
                        toward wellness and peace.
                    </p>
                    <hr className="w-full border-t border-[#39332b] mb-16" />
                    <h2 className="text-3xl md:text-4xl font-light mb-14 text-[#39332b]">
                        Areas of Focus
                    </h2>
                    <div className="flex flex-col pt-10 md:flex-row justify-evenly items-stretch gap-12 md:gap-8 m-10">
                        {focusAreas.map((area, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center w-full px-2"
                            >
                                <div className="w-50 h-50 md:w-[25vw] md:h-[25vw] md:max-w-120 md:max-h-120 rounded-full overflow-hidden mb-8 shadow-md bg-[#eae6dd] flex items-center justify-center">
                                    <img
                                        src={area.img}
                                        alt={area.alt}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-2"><h2 className="text-xl md:text-2xl text-[#39332b] font-light text-center mb-4">
                                    {area.title}
                                </h2>
                                    <p className="font-extralight text-sm/7 text-[#41413F] tracking-wide">{area.description}</p></div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Rates and Insurance Section */}
            <div className="bg-[#8ba6a9] py-12 md:py-20 px-5">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-normal mb-8 text-[#39332b]">
                        Rates and Insurance
                    </h2>
                    <div className="text-lg md:text-xl text-[#39332b] font-light mb-6">
                        <div className="mb-2">
                            Session Fee -{" "}
                            <span className="font-medium">$200</span>
                        </div>
                        <div className="mb-6">
                            Psychodiagnostic Evaluation -{" "}
                            <span className="font-medium">$225</span>
                        </div>
                        <div className="mb-4">
                            I accept both private pay and insurance. I am
                            in-network with BCBS and Aetna.
                        </div>
                        <div>
                            For out-of-network plans, I've partnered with
                            Mentaya using{" "}
                            <a
                                href="https://app.mentaya.com/p/ZQJQwQb8r7kQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#39332b] hover:text-[#2d2620] transition-colors"
                            >
                                this tool
                            </a>{" "}
                            to help you check your eligibility for reimbursement
                            for my services.
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote Section */}
            <div
                className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/waves.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/20" />
                <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                    <p className="text-2xl md:text-2xl text-black font-light mb-4 drop-shadow-lg">
                        "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
                    </p>
                    <span className="block text-lg md:text-xl text-[#444] font-light mt-2 drop-shadow">
                        — Audre Lorde
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Services;
