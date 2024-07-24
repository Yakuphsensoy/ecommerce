import React, { useEffect, useState } from "react";
import "../styles/Slider.css";
import Yag from "../assets/tamYagliPeynir.png";
import Sut from "../assets/sut (1).png";
import Lor from "../assets/trabzonLorPeynir.png";
import TrabzonPeynir from "../assets/trabzonTereyagi.png";


export default function Slider() {
    const images = [Sut, Yag, Lor, TrabzonPeynir];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="sliderContent">
            <div className="slidePanel">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
        </div>
    );
}


