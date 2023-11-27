// components/Contact/ContactCard.js
"use client"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div id="contact" className="py-8 lg:py-12 font-poppins">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#000] mt-20 mb-10 relative inline-block font-sans">
          <span className="relative">
            Contact Us
            <div className="block w-16 h-1 bg-orange-300 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-gray-200 p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-orange-300">
                <MdEmail />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Email</h2>
            <p className="text-gray-600 mb-2">rac@tcioe.edu.np</p>
            <p className="text-gray-600 mb-4">Response time: 72 hours</p>
            <Link href="rac@tcioe.edu.np" className="text-orange-400 hover:underline font-bold" target="blank">
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          <div className="bg-gray-200 p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-orange-300">
                <MdPhone />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Phone Number
            </h2>
            <p className="text-gray-600 mb-2">9864410395</p>

            <p className="text-gray-600 mb-4">Response time: 9am to 9pm</p>
            <Link href="tel:+9779852090365" className="text-orange-400 hover:underline font-bold">
              Call Now <span>-&gt;</span>
            </Link>
          </div>

          <div className="bg-gray-200 p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-orange-300">
                <MdLocationOn />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Address</h2>
            <p className="text-gray-600 mb-2">
              Thapathali Campus
            </p>
            <p className="text-gray-600 mb-4">Kathmandu, Nepal</p>
            <Link href="/" className="text-orange-400 hover:underline font-bold">
              Visit Us <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
