import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="w-full  text-center">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-700 mb-6">
          Jennifer Hahm, Ph.D., Licensed<br className="hidden md:block" />
          Psychologist
        </h1>
        <div className="mb-4">
          <a
            href="mailto:jennifer@drjenniferhahm.com"
            className="text-base md:text-lg text-gray-700 underline hover:text-gray-900"
          >
            jennifer@drjenniferhahm.com
          </a>
        </div>
        <div className="mb-4 text-gray-700 text-base md:text-lg">
          Phone:{" "}
          <a
            href="tel:2489398150"
            className="underline hover:text-gray-900"
          >
            (248) 939-8150
          </a>{" "}
          Fax: (248) 939-8190
        </div>
        <div className="mb-4 text-gray-700 text-base md:text-lg">
          28175 Haggerty Rd, Novi, MI 48377
        </div>
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-base">
          <a
            href="/"
            className="underline hover:text-gray-900 text-gray-700"
          >
            Home
          </a>
          <a
            href="/privacy-policy"
            className="underline hover:text-gray-900 text-gray-700"
          >
            Privacy Policy
          </a>
          <a
            href="/good-faith-estimate"
            className="underline hover:text-gray-900 text-gray-700"
          >
            Good Faith Estimate
          </a>
        </div>
        <div className="mb-8">
          <a
            href="https://drjenniferhahm.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900 text-lg text-gray-700"
          >
            Client Portal
          </a>
        </div>
        <div className="text-xs md:text-sm text-gray-700 mt-8">
          © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Contact
