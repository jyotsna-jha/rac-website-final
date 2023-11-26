// pages/OurTeam.js

import React from 'react';

const teamMembers = [
  {
    name: 'Mohit Bhusal',
    position: 'President',
    image: '/assets/president.jpg',
  },
  {
    name: 'Pukar Giri',
    position: 'Vice President',
    image: '/assets/pukar.jpg',
  },
  {
    name: 'Kiran Chand',
    position: 'Secretary',
    image: '/assets/kiran2.jpg',
  },
  {
    name: 'Looza Subedi',
    position: 'Vice Secretary',
    image: '/assets/looza2.jpg',
  },
  {
    name: 'Arun Koirala',
    position: 'Inventory Manager',
    image: '/assets/arun1.jpg',
  },
  {
    name: 'Shakshi Kejriwal',
    position: 'Inventory Manager',
    image: '/assets/sakshi4.jpeg',
  },
  {
    name: 'Ayush Raj Shah',
    position: 'Event Head',
    image: '/assets/ayushbhai.jpg',
  },
  {
    name: 'Bishal Bhandari',
    position: 'Outreach Manager',
    image: '/assets/bishal.jpeg',
  },
  {
    name: 'Ayush Bhusal',
    position: 'Outreach Manager',
    image: '/assets/a2.jpg',
  },
  {
    name: 'Pranjal Barnwal',
    position: 'Graphics Designer',
    image: '/assets/pranjal.jpg',
  },
  {
    name: 'Jyotsna Jha',
    position: 'Web Developer',
    image: '/assets/jyotsnaj.jpg',
  },
  {
    name: 'Navraj Dahal',
    position: 'General Member',
    image: '/assets/navraj.jpg',
  },
  {
    name: 'Arbaj Ansari',
    position: 'General Member',
    image: '/assets/arbaj.jpg',
  },
  {
    name: 'Ramesh Kathayat',
    position: 'General Member',
    image: '/assets/ramesh.jpg',
  },
];

const OurTeam = () => {
  return (
    <div className="container mx-auto my-8 p-8 text-center">
      <h1 className="text-3xl font-semibold mb-4 text-[#000]">Our Team</h1>
      <p className="text-gray-500 mb-8">
        Meet our tech enthusiasts at the Robotics Club. We are passionate about pushing the boundaries of technology and innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-yellow-200 to-purple-200 p-6 rounded-lg shadow-md text-center max-w-md mx-auto mb-4 transform transition-transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2 text-[#000]">{member.name}</h2>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
