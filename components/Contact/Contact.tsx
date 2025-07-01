"use client"
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast.success("Your message has been submitted!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-50 py-8 px-2">
            <Toaster position="top-center" />
            <div className="w-full max-w-5xl flex flex-col-reverse lg:flex-row gap-8">
                {/* Contact Details */}
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
                    <div className="w-full max-w-md">
                        <h1 className="text-2xl md:text-4xl text-gray-700 mb-6">
                            Dr. Serena Blake, PsyD
                            <br className="hidden md:block" />
                            Clinical Psychologist
                        </h1>
                        <div className="mb-4">
                            <a
                                href="mailto:serena@blakepsychology.com"
                                className="text-base md:text-lg text-gray-700 underline hover:text-gray-900"
                            >
                                serena@blakepsychology.com
                            </a>
                        </div>
                        <div className="mb-4 text-gray-700 text-base md:text-lg">
                            Phone:{" "}
                            <a
                                href="tel:3235550192"
                                className="underline hover:text-gray-900"
                            >
                                (323) 555-0192
                            </a>
                        </div>
                        <div className="mb-4 text-gray-700 text-base md:text-lg">
                            1287 Maplewood Drive, Los Angeles, CA 90026
                        </div>
                        <div className="mb-6 flex flex-col md:flex-row justify-center lg:justify-start items-center gap-2 md:gap-4 text-base">
                            <span className="text-gray-700">Office Hours:</span>
                            <span className="text-gray-700">In-person: Tue & Thu, 10 AM–6 PM</span>
                            <span className="text-gray-700">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</span>
                        </div>
                        <div className="text-xs md:text-sm text-gray-700 mt-8">
                            © 2025 Serena Blake PsyD. All rights reserved.
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="lg:w-1/2 flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 w-full max-w-md flex flex-col gap-4"
                        autoComplete="off"
                    >
                        <h2 className="text-xl md:text-2xl text-green-900 font-semibold text-center mb-2">
                            Get In Touch
                        </h2>
                        <p className="text-gray-700 text-sm text-center mb-4">
                            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
                        </p>
                        <div>
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="name">
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
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
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
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="phone">
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
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="How can I help you?"
                                rows={3}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="contactTime">
                                Preferred Contact Time
                            </label>
                            <input
                                id="contactTime"
                                name="contactTime"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                            />
                            <span className="text-xs text-gray-500">
                                Let us know when you're typically available for a call or consultation
                            </span>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm mb-1" htmlFor="contactMethod">
                                Preferred Contact Method
                            </label>
                            <select
                                id="contactMethod"
                                name="contactMethod"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                required
                            >
                                <option value="">Select preferred method</option>
                                <option value="phone">Phone</option>
                                <option value="email">Email</option>
                                <option value="text">Text</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <input
                                id="captcha"
                                name="captcha"
                                type="checkbox"
                                className="accent-green-700"
                                required
                            />
                            <label htmlFor="captcha" className="text-xs text-gray-700">
                                I'm not a robot
                            </label>
                            <img
                                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                alt="reCAPTCHA"
                                className="h-6 ml-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
                        >
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
