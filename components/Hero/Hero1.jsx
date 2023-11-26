// hero.jsx
"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Link from "next/link";

const Herosection = ({ title, subtitle }) => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/robot.json",
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#f2d3f7] via-orange-100 to-orange-200">
      <div className="container mx-auto px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start py-6 md:py-8 md:ml-4">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black uppercase mb-3 sm:mb-4 md:mb-6 leading-tight mt-6 font-sans">
              {title}
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl md:leading-relaxed sm:word-spacing-0.02 md:word-spacing-0.05 text-gray-500 font-poppins">
              From award-winning innovation to exciting robotics projects,
              we&apos;ve got your passion covered. Discover your new favorite
              robotics journey today.
            </p>
            <Link 
            href="https://youtu.be/UMCdkk1Nf44?si=b4iPMhQXgDItMZdC"
            target="blank"
            >
              <div className="mt-4 sm:mt-5 md:mt-6">
                <button className="mt-2 sm:mt-3 bg-black text-white rounded-full py-2 px-8 sm:py-2.5 sm:px-10 lg:py-3 lg:px-12 hover:bg-white hover:text-[#161617] hover:border hover:border-[#161617] transition-all duration-500">
                  Explore
                </button>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex justify-end items-center">
            <div ref={lottieContainerRef} id="lottie-animation" style={{ width: '80%', height: '80%' }}></div>
            {/* Adjust the width and height of the lottieContainerRef */}
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1681647578">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill fill-white"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
