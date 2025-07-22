import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import b1 from "../assets/Brown and White Simple Fashion Sale Banner.png";
import b2 from "../assets/Beige and Brown  Minimal Modern.png";
import b3 from "../assets/Neutral Minimalist.png";
import b4 from "../assets/Purple and Pink Simple New Arrival.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const images = [
    isMobile ? m1 : b1,
    isMobile ? m2 : b2,
    isMobile ? m3 : b3,
    isMobile ? m4 : b4,
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 740); // Tailwind 'sm' breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="lg:w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={2000}
        transitionTime={600}
        swipeable
        emulateTouch
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full md:w-full h-[400px]  md:h-[550px] rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => navigate("/product")}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-80 rounded-xl object-contain sm:object-contain  lg:h-full lg:object-cover overflow-hidden md:rounded-xl cursor-pointer"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
