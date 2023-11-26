"use client"
import React from "react";
import Image from "next/image";

const AlumniSuccessStories = () => {
  const successStories = [
    { name: 'Saroj Shakya', achievement: 'Lead Software Engineer at Javra Software,Ex President at RAC', image: '/assets/saroj.jpg' },
    { name: 'Bijay Raj Paudel', achievement: 'Software Engineer at Intel Corporation,Ex President at RAC', image: '/assets/2.jpg' },
    { name: 'Prasanna Man Rajbanshi', achievement: 'Senior Telecom Engineer at Nepal Telecom,Ex President at RAC', image: '/assets/prasan.jpg' },
    { name: 'Abhishek Pandey', achievement: 'Assistant Lecturer at Thapathali Campus, Ex President at RAC', image: '/assets/abhishek.jpg' },
    { name: 'Pukar Giri', achievement: 'Software Engineer at leapfrog, Ex President at RAC', image: '/assets/pukar1.jpg' },
    { name: 'Raghav Adhikari', achievement: 'Graduate Assistant at Clemson University, Ex President at RAC', image: '/assets/raghav.jpg' },
    { name: 'Sujata Basyal', achievement: 'Engineer at Datalytics Global, Ex President at RAC', image: '/assets/1.jpg' },
    { name: 'Nitesh Silwal', achievement: 'Business Analyst at Hitachi Energy, Ex President at RAC', image: '/assets/Nitesh.jpg' },
    { name: 'Abiskar Timisina', achievement: 'Software Engineer at Ma Grepsr, Ex President at RAC', image: '/assets/abiskar.jpg' },
    { name: 'Rohit Pati', achievement: 'Mechanical Engineer, Project Manager at Team Shireto', image: '/assets/rho.jpg' },
    { name: 'Dhan Prashad Pradhan', achievement: 'Mechanical Engineer, Mechanical Design Engineer at Yatri Motors', image: '/assets/dhan.jpg' },
    { name: 'Aayushma Pant', achievement: 'Computer Vision Research Engineer at Angelswing', image: '/assets/ayushma.jpg' },
    { name: 'Rodashi Pant', achievement: 'Mechanical Engineer, Assistant Lecturer at Thapathali Campus', image: '/assets/rodasi.jpg' },
    { name: 'Namrata Das', achievement: 'Electronics & information Engineer, ML Engineer at GritFeat Solutions', image: '/assets/n.jpg' },
    { name: 'Rakshya Pant', achievement: 'Electronics & information Engineer, R&D Engineer at Javra Software', image: '/assets/rakshya.jpg' },
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
                  Contact
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

