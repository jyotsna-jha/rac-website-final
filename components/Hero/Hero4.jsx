"use client"
import React from "react";
import Image from "next/image";

const AlumniSuccessStories = () => {
  const successStories = [
    { name: 'Micromouse Competition', achievement: '2nd Runner Up, IIT Bombay, 2022', image: '/assets/micromouse5.jpg' },
    { name: 'Micromouse Competition', achievement: '2nd Runner Up, IIT Bombay, 2022', image: '/assets/micromouse2.jpg' },
    { name: 'Rowboatics', achievement: ' Winner, IIT Bombay, 2020', image: '/assets/rowboatics.png' },
    
  ];

  return (
    <div className="text-center py-8 mx-4">
      <h2 className="relative inline-block text-xl md:text-2xl lg:text-3xl font-bold text-[#000] mt-6 mb-2 p-2">
        Meet Our Alumni
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-300 h-1 w-20"></span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {successStories.map((story, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-gradient-to-br from-yellow-200 to-purple-300 rounded-lg shadow-md transition-transform transform hover:scale-105 overflow-hidden">
              <Image src={story.image} alt={story.name} width={400} height={400} className="rounded-t-md object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold my-2 text-[#000]">{story.name}</h3>
                <p className="text-gray-500">{story.achievement}</p>
                <button className="mt-2 px-4 py-2 bg-[#000] text-white rounded-full hover:bg-white hover:text-gray-800 border border-gray-800 transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSuccessStories;

