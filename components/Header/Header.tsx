import React from "react";

const Header = () => {
    return (
        <header className="w-full  flex items-center h-[72px] md:h-[88px] justify-between">
            <div className="flex items-center pl-5 pt-16">
                {/* Logo placeholder */}
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border border-[#B6C1B0] bg-white ml-2 md:ml-4 mr-4">
                    <span className="text-xs text-[#B6C1B0] select-none">Logo</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className=" font-serif text-3xl text-zinc-700 leading-tight">
                        Dr. Serena Blake, PsyD
                    </span>
                    <span className="text-3xl font-serif text-zinc-700 leading-tight">
                        Clinical Psychologist
                    </span>
                </div>
            </div>
            {/* Hamburger menu for medium and smaller screens */}
            <button
                className="flex flex-col justify-center items-end w-10 h-10 mr-2 md:mr-4 md:hidden"
                aria-label="Open menu"
            >
                <span className="block w-8 h-[2px] bg-gray-700 mb-1"></span>
                <span className="block w-8 h-[2px] bg-gray-700 mb-1"></span>
                <span className="block w-8 h-[2px] bg-gray-700"></span>
            </button>
        </header>
    );
};

export default Header;
