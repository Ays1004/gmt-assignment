import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50">
            <div className="bg-[#F5F3EC] items-center justify-center w-full h-full">
                <div className="p-5 h-full w-full flex items-center justify-center">
                    <Header />
                </div>
                <div className="p-5 h-full w-full flex items-center justify-center">
                    <Hero />
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-full">
                <div className="p-8 h-full w-full flex items-center justify-center">
                    <About />
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className=" h-full w-full flex items-center justify-center">
                    <Services />
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className=" h-full w-full flex items-center justify-center">
                    <FAQ />
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="p-8 h-full w-full flex items-center justify-center">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
