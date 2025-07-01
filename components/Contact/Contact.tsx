import React from "react";

import Appear from "../Appear";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full bg-[#F3F0E8] py-8 px-2">
            <Toaster position="top-center" />
            <div className="w-full max-w-5xl flex flex-col-reverse lg:flex-row gap-8">
                {/* Contact Details */}
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
                    <div className="w-full max-w-md">
                        <Appear>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#41413F] mb-6">
                                Dr. Serena Blake, PsyD
                                <br className="hidden md:block" />
                                Clinical Psychologist
                            </h1>
                        </Appear>
                        <Appear>
                            <p className="mb-6 flex flex-col md:flex-row justify-center lg:justify-start items-center tracking-wide gap-2 md:gap-4 font-light">
                                <span className="text-[#41413F]">
                                    Office Hours:
                                </span>
                                <span className="text-[#41413F]">
                                    In-person: Tue & Thu, 10 AM–6 PM
                                </span>
                                <span className="text-[#41413F]">
                                    Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
                                </span>
                            </p>
                        </Appear>
                        <Appear>
                            <div className="mb-4">
                                <a
                                    href="mailto:serena@blakepsychology.com"
                                    className="text-base md:text-lg text-black underline font-light "
                                >
                                    serena@blakepsychology.com
                                </a>
                            </div>
                        </Appear>
                        <Appear>
                            <p className="mb-4 font-light text-[#41413F] text-base md:text-lg">
                                Phone:{" "}
                                <a
                                    href="tel:3235550192"
                                    className="underline text-black"
                                >
                                    (323) 555-0192
                                </a>
                            </p>
                        </Appear>
                        <Appear>
                            <p className="mb-4 text-[#41413F] text-lg font-light">
                                1287 Maplewood Drive, Los Angeles, CA 90026
                            </p>
                        </Appear>
                        {/* Navigation Links Below Address */}
                        <Appear>
                            <div className="">
                                <div className="flex flex-col items-center lg:items-start mb-4 ">
                                    <div className="flex gap-6 mb-6">
                                        <a
                                            href="/"
                                            className="underline transition text-base md:text-lg font-light"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="/"
                                            className="underline transition text-base md:text-lg font-light"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            href="/"
                                            className="underline transition text-base md:text-lg font-light"
                                        >
                                            Good Faith Estimate
                                        </a>
                                    </div>
                                    <a
                                        href="/client-portal"
                                        className="underline transition text-base md:text-lg font-light"
                                    >
                                        Client Portal
                                    </a>
                                </div>
                                <p className="text-lg font-light text-[#41413F] mt-8">
                                    © 2025 Serena Blake PsyD. Clinical
                                    Psychologist. All rights reserved.
                                </p>
                            </div>
                        </Appear>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="lg:w-1/2 flex justify-center">
                    <Appear>
                        <ContactForm />
                    </Appear>
                </div>
            </div>
        </div>
    );
};

export default Contact;
