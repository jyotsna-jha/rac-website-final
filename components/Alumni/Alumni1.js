
import React from 'react';

const AlumniHeader = () => {
  return (
    <div className="bg-gradient-to-r from-orange-200 via-purple-200 to-orange-200 py-16 font-sans">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#000]">
          Welcome to Our Alumni Page!
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-500 font-poppins">
          Explore the achievements and stories of our talented alumni.
        </p>
      </div>
    </div>
  );
};

export default AlumniHeader;
