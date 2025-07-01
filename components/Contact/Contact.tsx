"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast.success("Your message has been submitted!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full bg-[#F3F0E8] py-8 px-2">
            <Toaster position="top-center" />
            <div className="w-full max-w-5xl flex flex-col-reverse lg:flex-row gap-8">
                {/* Contact Details */}
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
                    <div className="w-full max-w-md">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#41413F] mb-6">
                            Dr. Serena Blake, PsyD
                            <br className="hidden md:block" />
                            Clinical Psychologist
                        </h1>
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
                        <div className="mb-4">
                            <a
                                href="mailto:serena@blakepsychology.com"
                                className="text-base md:text-lg text-black underline font-light "
                            >
                                serena@blakepsychology.com
                            </a>
                        </div>
                        <p className="mb-4 font-light text-[#41413F] text-base md:text-lg">
                            Phone:{" "}
                            <a
                                href="tel:3235550192"
                                className="underline text-black"
                            >
                                (323) 555-0192
                            </a>
                        </p>
                        <p className="mb-4 text-[#41413F] text-lg font-light">
                            1287 Maplewood Drive, Los Angeles, CA 90026
                        </p>
                        {/* Navigation Links Below Address */}
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
                                © 2025 Serena Blake PsyD. Clinical Psychologist.
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="lg:w-1/2 flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#f9f7f4] border border-gray-200 rounded-xl shadow-md p-6 md:p-8 w-full max-w-md flex flex-col gap-4"
                        autoComplete="off"
                    >
                        <h2 className="text-xl md:text-2xl text-green-900 font-semibold text-center mb-2">
                            Get In Touch
                        </h2>
                        <p className="text-gray-700 text-sm text-center mb-4">
                            Simply fill out the brief fields below and Dr. Blake
                            will be in touch with you soon, usually within one
                            business day. This form is safe, private, and
                            completely free.
                        </p>
                        <div>
                            <label
                                className="block text-gray-700 text-sm mb-1"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm mb-1"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="(555) 234-5678"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 text-sm mb-1"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="What brings you here?"
                                rows={3}
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm mb-1"
                                htmlFor="contactTime"
                            >
                                Preferred time to reach you
                            </label>
                            <input
                                id="contactTime"
                                name="contactTime"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                            />
                            <span className="text-xs text-gray-500">
                                Let us know when you're typically available for
                                a call or consultation
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                            <input
                                id="Agree"
                                name="Agree"
                                type="checkbox"
                                className="accent-green-700 w-6 h-6  hover:cursor-pointer"
                                required
                            />
                            <label
                                htmlFor="Agree"
                                className="text-md text-gray-700  hover:cursor-pointer"
                            >
                                I agree to be contacted
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
                        >
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            By clicking submit you consent to receive texts and
                            emails from Dr. Serena Blake.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
