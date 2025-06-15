
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const coreCommittee = [
  {
    name: 'Ashish Chand',
    position: 'Core Committee',
    image: '/assets/ashishChand.jpg',
    batch: 'Batch: 079 BME',
    phone: 'Ph.: 9865651946',
    social: 'ig: @ashish_chand_thakuri08',
  },
  {
    name: 'Aradhya Dhungel',
    position: 'Core Committee',
    image: '/assets/aradhyaDhungel.jpg',
    batch: 'Batch: 079 BEI',
    phone: 'Ph.: 9803463686',
    social: 'ig: @aradhya.dhungel',
  }
];

const teamMembers = [
  {
    name: 'Arpita Dhakal',
    position: 'Secretary',
    image: '/assets/arpitaDhakal.jpg',
    batch: 'Batch: 080 BEI',
    phone: '',
    social: 'ig: @kireinaarpita_',
  },
  {
    name: 'Atul Tiwari',
    position: 'Treasurer',
    image: '/assets/atulTiwari.jpg',
    batch: 'Batch: 079 BEI',
    phone: 'Ph.: 9762882680',
    social: 'ig: @atul_tw',
  },
  
  {
    name: 'Chitra Raj Joshi',
    position: 'Inventory Manager',
    image: '/assets/chitraJoshi.jpg',
    batch: 'Batch: 080 BEI',
    phone: 'Ph.: 9844181467',
    social: '',
  },

  {
    name: 'Saurab Malla',
    position: 'Event Head',
    image: '/assets/saurabMalla.jpg',
    batch: 'Batch: 080 BIE',
    phone: 'Ph.: 9866116023',
    social: 'ig: @where_is_saurab',
  },
  {
    name: 'Sunil Tamang',
    position: 'Graphics Designer',
    image: '/assets/sunil.jpg',
    batch: 'Batch: 080 BIE',
    phone: 'Ph.: 9847356954',
    social: 'ig: @_sxnil.tg_',
  },

  {
    name: 'Pranjal Barnwal',
    position: 'General Member',
    image: '/assets/pranjal.jpg',
    batch: 'Batch: 079 BEI',
    phone: 'Ph.: 9811857755',
    social: 'ig: @pranjal_barnwal_0',
  },

  {
    name: 'Pujan Rimal',
    position: 'General Member',
    image: '/assets/pujanRimal.jpg',
    batch: 'Batch: 079 BIE',
    phone: 'Ph.: 9840438225',
    social: 'linkedin: pujan-rimal',
  },
  {
    name: 'Pankaj Kumar Mehta',
    position: 'General Member',
    image: '/assets/pankajMehta.jpg',
    batch: 'Batch: 079 BEI',
    phone: 'Ph.: 9807376350',
    social: 'ig: @pankajmehta07',
  },
  {
    name: 'Komal Kumari Pudasaini',
    position: 'General Member',
    image: '/assets/komalPudasaini.jpg',
    batch: 'Batch: 079 BME',
    phone: 'Ph.: 9860875255',
    social: '',
  },
  {
    name: 'Ahamad Ali Musalman',
    position: 'General Member',
    image: '/assets/ahamad.jpg',
    batch: 'Batch: 080 BME',
    phone: 'Ph.: 9805420926',
    social: '',
  },

  {
    name: 'Jenish Pant',
    position: 'Advisory Committee',
    image: '/assets/jenishPant.jpg',
    batch: 'Batch: 078 BEI',
    phone: 'Ph.: 9841551131',
    social: '',
  },
  {
    name: 'Ayush Raj Shah',
    position: 'Advisory Committee',
    image: '/assets/AyushRajShah.jpg',
    batch: 'Batch: 078 BME',
    phone: 'Ph.: 9823161343',
    social: 'ig: @ayushrajshah',
    email: 'email: ayush.078bme006@tcioe.edu.np',
  },
  {
    name: 'Ramesh Kathayat',
    position: 'Advisory Committee',
    image: '/assets/ramesh.jpg',
    batch: 'Batch: 078 BCT',
    phone: 'Ph.: 9708581527',
    social: 'fb: @rameshkathayat',
    email: 'email: kathayatramesh56@gmail.com',
  },
  {
    name: 'Navaraj Dahal',
    position: 'Advisory Committee',
    image: '/assets/navraj.jpg',
    batch: 'Batch: 078 BAM',
    phone: 'Ph.: 9862241955',
    social: 'ig: @navaraj2057',
  },
  {
    name: 'Prabesh Ghimire',
    position: 'Advisory Committee',
    image: '/assets/prabeshGhimire.jpg',
    batch: 'Batch: 078 BAM',
    phone: 'Ph.: 9810595330',
    social: 'ig: @prweshghimire',
  },
];

const TeamCard = ({ member, cols = 'md:grid-cols-2 lg:grid-cols-4' }) => {
  const raw = member.phone.replace(/\D/g, '').replace(/^0/, '');
  const waLink = `https://wa.me/977${raw}`;

  return (
    <div className="relative group bg-gradient-to-br from-yellow-200 to-purple-200 p-6 rounded-lg shadow-md text-center max-w-md mx-auto mb-4 transform transition-transform hover:scale-105">
      <img
        src={member.image || '/placeholder.svg'}
        alt={member.name}
        className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
      />

      <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h2 className="text-lg font-semibold mb-2 text-[#000]">{member.name}</h2>
        <p className="text-gray-500">{member.position}</p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full p-3 bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-text">
        <p>{member.batch}</p>

        {member.phone && (
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="select-text leading-none">
            {member.phone}
          </span>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${member.name}`}
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <FaWhatsapp className="align-middle" />
          </a>
        </div>
      )}

        {member.social && <p className="mt-1">{member.social}</p>}
      </div>
    </div>
  );
};

const OurTeam = () => (
  <div className="container mx-auto my-8 p-8 text-center">
    <h1 className="text-3xl font-semibold mb-4">Our Team</h1>
    <p className="text-gray-500 mb-8">Meet our tech enthusiasts at the Robotics Club.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-8 mb-12">
      {coreCommittee.map((m, i) => <TeamCard key={i} member={m} />)}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
      {teamMembers.map((m, i) => <TeamCard key={i} member={m} />)}
    </div>
  </div>
);

export default OurTeam;