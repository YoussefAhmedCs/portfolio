import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Freelancer",
                    "Laravel Backend Developer",
                    "Open Source Contributor", "DevOps & Cloud"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
