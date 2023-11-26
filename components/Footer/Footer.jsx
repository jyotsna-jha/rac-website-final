// components/Footer.js
"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#222] text-white py-5 text-center mt-8">
      <div className="flex justify-center gap-8">
        <a href="https://www.facebook.com/racthapathali" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 hover:border-white hover:border-2 hover:rounded-full p-2">
          <FaFacebook size={24} color="#1877f2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 hover:border-white hover:border-2 hover:rounded-full p-2">
          <FaInstagram size={24} color="#c32aa3" />
        </a>
        <a href="https://www.linkedin.com/company/robotics-and-automation-center-thapathali-campus/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 hover:border-white hover:border-2 hover:rounded-full p-2">
          <FaLinkedin size={24} color="#0077b5" />
        </a>
        <a href="https://www.youtube.com/@roboticsandautomationcenter" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 hover:border-white hover:border-2 hover:rounded-full p-2">
          <FaYoutube size={24} color="#ff0000" />
        </a>
      </div>
      <div className="mt-4">
        <button onClick={scrollToTop} className="bg-orange-300 text-black p-2 rounded-full hover:bg-white">
          <RiArrowUpSLine size={24} />
        </button>
      </div>
      <div className="mt-4 text-sm text-[#dcdde1]">
        &copy; {new Date().getFullYear()} Robotics & Automation Center
      </div>
    </footer>
  );
};

export default Footer;
