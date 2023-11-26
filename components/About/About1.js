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
      path: "/assets/robotAbout.json",
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <main className="bg-gradient-to-b from-white to-orange-200 via-white font-poppins">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start py-6 md:py-8 md:ml-4">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000] uppercase mb-2 sm:mb-3 md:mb-4 leading-tight mt-4 font-sans">
              {title}
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg md:leading-relaxed sm:word-spacing-0.02 md:word-spacing-0.05 text-gray-500">
              Welcome to the official website of our Robotics And Automation
              Center. We are a passionate group of individuals who share a
              common interest in robotics, technology, and innovation. Our club
              provides a platform for students and enthusiasts to explore the
              exciting world of robotics.
            </p>
            <Link href="/contact">
              <div className="mt-4 sm:mt-5 md:mt-6">
                <button className="mt-2 sm:mt-3 bg-black text-white rounded-full py-1.5 px-6 sm:py-2 px-8 lg:py-2.5 lg:px-10 hover:bg-white hover:text-[#161617] hover:border hover:border-[#161617] transition-all duration-500">
                  Contact
                </button>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex justify-end items-center">
            <div ref={lottieContainerRef} id="lottie-animation" style={{ height: "350px" }}> {/* Slightly reduced height */}
            </div>
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
