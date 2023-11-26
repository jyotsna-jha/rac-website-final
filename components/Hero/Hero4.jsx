import React from "react";
import Image from "next/image";

const Achievement = () => {
  return (
    <div className="text-center pt-10 px-2 lg:px-10 pb-10">
       <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 px-4 relative underline-none font-sans">
        <span className="relative z-10">
          <Image
            src="/assets/achievementicon.png"
            alt="Achievement Icon"
            className="inline-block mr-2"
            width={80}
            height={80}
          />
          Our Achievements
        </span>
      </h1>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        {/* First Card */}
        <div className="bg-gradient-to-b from-yellow-200 to-purple-200 rounded-lg overflow-hidden shadow-lg w-full md:w-64 h-96 mb-4 mx-2 md:mx-4 transform transition-transform duration-300 hover:scale-105 md:w-1/2">
          <Image
            src="/assets/micromouse5.jpg"
            className="card-img-top"
            alt="achievementimg1"
            layout="responsive"
            width={300}
            height={250}
          />
          <div className="p-2">
            <h3 className="font-bold text-base md:text-lg mb-1 text-black font-sans">
              Micromouse Competition
            </h3>
            <p className="text-gray-600 text-xs md:text-sm font-poppins">
              2nd Runner Up, IIT Bombay, 2022
            </p>
            <a
              href="https://drive.google.com/drive/folders/1ZvO1aXkVKVZ2cgqXInEUFy3mumFhQnzX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mt-2">
                <button className="mt-4 sm:mt-6 bg-black text-white rounded-full py-1 px-4 sm:py-1.5 sm:px-6 md:py-2 md:px-8 hover:bg-white hover:text-[#161617] hover:border hover:border-[#161617] transition-all duration-500 transform hover:scale-105">
                  View
                </button>
              </div>
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-gradient-to-b  from-yellow-200 to-purple-200 rounded-lg overflow-hidden shadow-lg w-full md:w-64 h-96 mb-4 mx-2 md:mx-4 transform transition-transform duration-300 hover:scale-105 md:w-1/2">
          <Image
            src="/assets/micromouse2.jpg"
            className="card-img-top"
            alt="..."
            layout="responsive"
            width={300}
            height={250}
          />
          <div className="p-2">
            <h3 className="font-bold text-base md:text-lg mb-1 text-black font-sans">
              Micromouse Competition
            </h3>
            <p className="text-gray-600 text-xs md:text-sm font-poppins">
              2nd Runner Up, IIT Bombay, 2022
            </p>
            <a
              href="https://drive.google.com/drive/folders/1ZvO1aXkVKVZ2cgqXInEUFy3mumFhQnzX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mt-2">
                <button className="mt-4 sm:mt-6 bg-black text-white rounded-full py-1 px-4 sm:py-1.5 sm:px-6 md:py-2 md:px-8 hover:bg-white hover:text-[#161617] hover:border hover:border-[#161617] transition-all duration-500 transform hover:scale-105">
                  View
                </button>
              </div>
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-gradient-to-b  from-yellow-200 to-purple-200 rounded-lg overflow-hidden shadow-lg w-full md:w-64 h-96 mb-4 mx-2 md:mx-4 transform transition-transform duration-300 hover:scale-105 md:w-1/2">
          <Image
            src="/assets/rowboatics.png"
            className="card-img-top"
            alt="..."
            layout="responsive"
            width={300}
            height={250}
          />
          <div className="p-2">
            <h3 className="font-bold text-base md:text-lg mb-1 text-black font-sans">
              Rowboatics Competition
            </h3>
            <p className="text-gray-600 text-xs md:text-sm font-poppins">
              Winner, IIT Bombay, 2020
            </p>
            <div className="mt-2">
              <button className="mt-4 sm:mt-6 bg-black text-white rounded-full py-1 px-4 sm:py-1.5 sm:px-6 md:py-2 md:px-8 hover:bg-white hover:text-[#161617] hover:border hover:border-[#161617] transition-all duration-500 transform hover:scale-105">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
