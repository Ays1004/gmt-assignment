import React from "react";
import AreaOfFocus from "./AreaOfFocus";
import RatesAndInsurance from "./RatesAndInsurance";
import Appear from "../Appear";



const Services = () => {
    return (
        <div>
            <div className="bg-[#f7f4ec] min-h-screen px-4 py-12 md:py-20">
                <div className=" mx-auto text-center px-4">
                    <div className="sm:px-8 md:px-[14vw]">
                        <Appear>
                        <h1 className="text-4xl text-center max-w-5xl mx-auto md:text-4xl lg:text-[44px] tracking-wider font-light mb-8 text-[#39332b]">
                            Therapy can be a space where you invest in yourself—one
                            of the highest forms of self-care.
                        </h1></Appear>
                        <Appear>
                        <p className="text-md/8 tracking-wider max-w-5xl md:text-lg/8 text-[#39332bcc] font-extralight mb-12 mx-auto">
                            You may be led to therapy by anxiety, depression,
                            relationship stress, past or recent trauma, grief and
                            loss, self-esteem issues, or challenges with family,
                            parenting, or parental relationships. Whatever the
                            source of your stress, you don&apos;t have to face it
                            alone. Therapy offers you the time and space to work
                            toward wellness and peace.
                        </p>
                        </Appear>
                    </div>

                    <hr className="max-w-7xl mx-auto border-t border-[#39332b] mb-16" />
                    <AreaOfFocus />
                </div>
            </div>
            {/* Rates and Insurance Section */}
            <RatesAndInsurance />
        </div>
    );
};

export default Services;
