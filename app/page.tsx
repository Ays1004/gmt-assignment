import Hero from "@/components/Hero/Hero";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-50">
            <div className="flex items-center justify-center w-full h-full">
                <div className="p-8 h-200 w-full flex items-center justify-center">
                    <Hero />
                </div>
            </div>
        </div>
    );
}
