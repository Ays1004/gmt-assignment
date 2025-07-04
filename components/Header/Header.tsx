"use client";
import React from "react";
import HamMenu from "./HamMenu";
import Image from "next/image";
import Appear from "../Appear";

const Header = () => {
    const handleClick = () => {
        window.location.href = "/";
    };
    return (
        <header className="w-full flex items-center justify-between">
            <div className="flex items-center" onClick={handleClick}>
                {/* Logo placeholder */}
                <Appear delay={0} duration={0.4}>
                    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border border-[#B6C1B0] opacity-60 m-2 relative overflow-hidden">
                        <Image
                            src="/images/icon.png"
                            alt="Icon"
                            fill
                            sizes="w-full h-full"
                            className="object-contain !static"
                        />
                    </div>
                </Appear>
                <Appear delay={0} duration={0.4}>
                    <div className="flex flex-col pr-2 justify-center">
                        <h1 className="text-xl text-[hsla(60,1.56%,25.1%,1)] leading-tight">
                            Dr. Serena Blake, PsyD
                        </h1>
                        <h1 className="text-xl text-[hsla(60,1.56%,25.1%,1)] leading-tight">
                            Clinical Psychologist
                        </h1>
                    </div>
                </Appear>
            </div>

            <div className="flex md:hidden items-center space-x-6">
                <Appear delay={0} duration={0.4}>
                    <HamMenu />
                </Appear>
            </div>
        </header>
    );
};

export default Header;
