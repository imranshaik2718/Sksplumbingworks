import React from "react";
import D from "./D"; 

function Hero() {
  return (
    <div className="relative w-full">
      <D />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white px-4 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-white drop-shadow-md font-sans">
          SKS Plumbing Works
        </h1>
        <p className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-2xl font-light drop-shadow-sm">
          Trusted residential and commercial plumbing services across Hyderabad – quality, reliability, and professionalism you can count on.
        </p>
         <button className="bg-gray-700  rounded-lg border-gray-800 py-2 px-4 absolute mt-[650px] hover:bg-gray-600 hover:scale-110 duration-300 ease-in-out self-center mb-12 group
">
         <a href="#services">Services</a>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    height="70px"
                    width="30px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 190 330 330"
                    xml:space="preserve"
                    className="absolute translate-x-1/2 group-hover:-bottom-17 duration-500"
                  >
                    <path
                      id="XMLID_24_"
                      d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15
          c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5
          C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
                    />
                  </svg>
                </button>
      </div>
    </div>
  );
}

export default Hero;
