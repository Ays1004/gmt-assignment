"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast.success("Your message has been submitted!");
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-[#f9f7f4] border border-gray-200 rounded-xl shadow-md p-6 md:p-8 w-full max-w-md flex flex-col gap-4"
                autoComplete="off"
            >
                <h2 className="text-xl md:text-2xl text-green-900 font-semibold text-center mb-2">
                    Get In Touch
                </h2>
                <p className="text-gray-700 text-sm text-center mb-4">
                    Simply fill out the brief fields below and Dr. Blake will be
                    in touch with you soon, usually within one business day.
                    This form is safe, private, and completely free.
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
                    <p className="text-xs p-1 text-gray-500">
                        Let us know when you're typically available for a call
                        or consultation
                    </p>
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
                    className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-800 shadow-md"
                >
                    <p>Submit</p>
                    
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                    By clicking submit you consent to receive texts and emails
                    from Dr. Serena Blake.
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
