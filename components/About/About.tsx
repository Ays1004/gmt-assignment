import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-gray-500 font-medium text-2xl font-serif tracking-wide">
                    About Dr.Serena Blake
                </h1>
                <Image
                    src="/images/headshot.jpg"
                    alt="Dr. Serena Blake headshot"
                    width={300}
                    height={300}
                    className="align-middle my-4 mx-auto"
                />
                <p className="text-gray-700 font-light leading-relaxed mt-5">
                    Finding calm and connection in today’s fast-paced world can
                    feel like a constant uphill climb. I believe therapy
                    provides a dedicated space to pause, reflect, and tend to
                    the parts of ourselves that often go unheard. It can be a
                    space for healing from anxiety and trauma, deepening
                    relationships, and reconnecting with a sense of purpose and
                    wholeness.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mt-4">
                    As a licensed clinical psychologist with eight years of
                    experience and over 500 client sessions, I aim to meet each
                    person with warmth, curiosity, and respect. My approach
                    integrates evidence-based practices—like
                    cognitive-behavioral therapy and mindfulness—with an
                    emphasis on building a genuine, collaborative relationship.
                    I believe real change happens when we feel safe enough to
                    explore both our struggles and our strengths.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mt-4">
                    I earned my PsyD in Clinical Psychology and currently
                    practice in Los Angeles, CA, where I see clients both in
                    person and virtually. Whether we meet in my Maplewood Drive
                    office or through Zoom, I strive to create a space where you
                    feel seen, supported, and empowered to move toward the life
                    you want.
                </p>
            </div>
        </div>
    );
};

export default About;
