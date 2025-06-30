import React from "react";
import HamMenu from "./HamMenu";

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between">
            <div className="flex items-center">
                {/* Logo placeholder */}
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border border-[#B6C1B0] bg-white ">
                    <span className="text-xs text-[#B6C1B0] select-none">
                        Logo
                    </span>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl text-[hsla(60,1.56%,25.1%,1)] leading-tight">
                        Dr. Serena Blake, PsyD
                    </h1>
                    <h1 className="text-xl text-[hsla(60,1.56%,25.1%,1)] leading-tight">
                        Clinical Psychologist
                    </h1>
                </div>
            </div>

            <div className="flex md:hidden items-center space-x-6">
                <HamMenu />
            </div>
        </header>
    );
};

export default Header;
