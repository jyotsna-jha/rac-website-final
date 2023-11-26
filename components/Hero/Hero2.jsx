import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutHome = () => {
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    const textContainer = document.getElementById("text-container");
    if (textContainer) {
      setTextHeight(textContainer.clientHeight);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 my-4 mx-2"> {/* Added margins to all sides */}
        <div className="flex-1 md:w-1/2">
          <Image
            src="/assets/micromouse2.jpg"
            className="w-[90%] h-[70%] md:rounded-2xl object-cover"
            alt="Campus Chief"
            width={300}
            height={200} // Adjusted height to make the image smaller
          />
        </div>
        <div className="flex-1 flex flex-col gap-3" id="text-container">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#33] text-center relative p-2"> {/* Added padding to the heading */}
            About Us
            <div className="block w-16 h-2 bg-orange-300 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="text-sm md:text-base text-justify text-gray-500 font-sans">
            Robotics and Automation center (RAC) at Thapathali Campus, TU offers a wide range of programs for students interested in robotics and automation. The center provides courses in Robotics and Automation, Control Systems, Mechatronics, and Artificial Intelligence. These courses offer students practical knowledge in the field, preparing them for a career in the industry. The center also provides research opportunities for students, and they are guided by experienced faculty members. Students from the Automobile and Mechanical, Industrial, Electronics, and Computer engineering departments work cohesively in Robotics and Automation Center for various projects and competitions.
            <Link href="/about" className="text-m text-orange-300 font-sans font-bold">
              &nbsp;Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
