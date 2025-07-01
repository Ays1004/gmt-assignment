import React from 'react'

const RatesAndInsurance = () => {
  return (
    <div>
      <div className="bg-[#8ba6a9] py-12 md:py-20 px-5">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-light mb-8">
                        Rates and Insurance
                    </h2>
                    <div className="text-lg font-light mb-6">
                        <p className="mb-2">
                            Individual Session Fee - $200
                        </p>
                        <p className="mb-6">
                            Couples Session Fee - $240
                        </p>
                        <p className="mb-4">
                            I do not accept insurance, but I can provide a superbill for you to submit to your insurance for possible reimbursement.
                        </p>
                    </div>
                </div>
            </div>
            {/* Quote Section */}
            <div
                className="relative w-full h-151 flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/waves.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/20" />
                <div className="relative z-10 max-w-3xl lg:max-w-6xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:px-20 lg:text-4xl text-black font-light mb-4 drop-shadow-lg">
                        "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
                    </h2>
                    <p className="block text-lg md:text-xl font-light mt-2 drop-shadow">
                        — Audre Lorde
                    </p>
                </div>
            </div>
    </div>
  )
}

export default RatesAndInsurance
