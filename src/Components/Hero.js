import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="awesome">
            <h1>This is an AWESOME website</h1>
            <p>Find your favourite everything on here!</p>
            <div className="cta">
                <Link>Learn More</Link>
            </div>
        </div>
    )
}

export default Hero;