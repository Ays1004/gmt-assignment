"use client"
import React, { useState } from 'react'

const faqData = [
	{
		question: 'What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?',
		answer: 'CBT-I typically involves assessment, sleep education, behavioral interventions, cognitive therapy, and relapse prevention, tailored to individual needs.',
	},
	{
		question: 'Do you treat children or adolescents?',
		answer: 'Our services are primarily focused on adults. Please contact us for referrals for children or adolescents.',
	},
	{
		question: 'Which geographic regions do you serve?',
		answer: 'We serve clients in regions where our clinicians are licensed to practice. Please inquire for specific locations.',
	},
	{
		question: 'Do you offer in-person sessions?',
		answer: 'We offer both in-person and virtual sessions, depending on your location and clinician availability.',
	},
	{
		question: 'What technology do we use for virtual sessions?',
		answer: 'We use secure, HIPAA-compliant video conferencing platforms for all virtual sessions.',
	},
	{
		question: 'What are your hours?',
		answer: 'Our hours vary by clinician. Please contact us to find a time that works for you.',
	},
	{
		question: 'Do you take insurance?',
		answer: 'We are out-of-network providers but can provide documentation for insurance reimbursement.',
	},
	{
		question: 'What is the cost of therapy?',
		answer: 'Session fees vary by clinician and service. Please contact us for detailed information.',
	},
	{
		question: 'What are the benefits of private pay therapy?',
		answer: 'Private pay therapy offers greater privacy, flexibility, and individualized care without insurance restrictions.',
	},
	{
		question: 'Do you accept insurance?',
		answer: 'No, but a superbill is provided for self-submission.',
	},
	{
		question: 'Are online sessions available?',
		answer: 'Yes—all virtual sessions via Zoom.',
	},
	{
		question: 'What is your cancellation policy?',
		answer: '24-hour notice required.',
	},
]

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<div className="w-screen pt-10 p-10 rounded bg-white font-extralight text-[#4a6a7b] ">
			<h1 className="text-center font-light mb-5 text-[32px] text-[#4a6a7b]">
				Frequently Asked Questions
			</h1>
			<h2 className="md:ml-10 text-3xl font-light">Therapy</h2>
			<div>
				{faqData.map((item, idx) => (
					<div key={idx} className="border-b-zinc-500 hover:border-b-zinc-800 border-b border-dashed md:mx-10">
						<button
							onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
							className="flex items-center w-full bg-none border-none px-0 py-[18px] mr-10 text-md sm:text-xl text-[#4a6a7b] cursor-pointer outline-none text-left transition-colors duration-200 hover:bg-zinc-50"
							aria-expanded={openIndex === idx}
							type="button"
						>
							<span
								className={`inline-block mr-4 text-[20px] text-[#b7c3cc] transition-transform duration-200 ${
									openIndex === idx ? 'rotate-90' : ''
								}`}
							>
								▶
							</span>
							<span className={openIndex === idx ? 'underline' : ''}>
								{item.question}
							</span>
						</button>
						{openIndex === idx && (
							<div className="pb-[18px] text-[18px] ">
								{item.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQ
