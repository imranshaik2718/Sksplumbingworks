import React, { useEffect, useState } from 'react';
import img1 from "../assets/images/1741883176347-01.jpeg";
import img3 from "../assets/images/1741883229018-01.jpeg";
import img4 from "../assets/images/plm.jpg";
import img5 from "../assets/images/30481.jpg";
import img6 from "../assets/images/pplll.jpg";

// Image slides
const slides = [
  { src: img1 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 }
];

const Hero = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Add last slide at beginning and first slide at end
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
      return () => clearTimeout(timeout);
    }

    if (index === 0) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(extendedSlides.length - 2);
      }, 700);
      return () => clearTimeout(timeout);
    }

    setTransition(true);
  }, [index, extendedSlides.length]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div className="relative">
          <div
            className="flex"
            style={{
              width: `${extendedSlides.length * 100}%`,
              transform: `translateX(-${(index * 100) / extendedSlides.length}%)`,
              transition: transition ? 'transform 0.7s ease-in-out' : 'none',
            }}
          >
            {extendedSlides.map((slide, idx) => (
              <div
                key={idx}
                style={{ width: `${100 / extendedSlides.length}%` }}
                className="flex-shrink-0"
              >
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px] object-cover block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
