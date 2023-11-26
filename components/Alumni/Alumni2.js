// pages/AlumniJourney.js
"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlumniJourney = ({ name, image, description }) => {
  return (
    <div className="bg-gray-100 rounded-md p-4 sm:p-8 shadow-md flex flex-col items-center">
      <Image
        src={image}
        alt={`${name}'s Image`}
        className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full mb-2 sm:mb-4"
        width={80}
        height={80}
      />
      <p className="text-xs sm:text-sm md:text-base text-justify text-gray-700 leading-relaxed max-w-2xl font-poppins">
        {description}
      </p>
    </div>
  );
};

const AlumniJourneyPage = () => {
  const alumniStories = [
    // Your alumni stories here
    {
        name: "John Doe",
        image: "/assets/Nitesh.jpg",
        description:
          `
          My journey with the Robotics and Automation Center (RAC) commenced in
            my freshman year, initially as a member, progressing through my
            academic journey to ultimately assume the role of President in my
            third year. As an industrial engineering graduate, RAC proved
            instrumental in honing both my technical and managerial competencies.
            In my professional life, the experience gained through active
            participation in national and international competitions representing
            RAC has been invaluable. This exposure significantly enhanced my
            intelligence and confidence, contributing to my current role as a
            Business Analyst at Hitachi Energy. Here, I am actively engaged in the
            development of cutting-edge trade risk management software within the
            Energy Commodity sector. Furthermore, the influence of RAC extended to
            my academic pursuits, shaping the development of top-tier final
            projects. Recognized as the best in our college by the Thapathali
            Graduate Conference committee, these projects have also been published
            in prestigious journals by University Scholar Conference, 2023. My
            engagement with RAC has been transformative, fostering the development
            of not only technical and managerial skills but also contributing to
            noteworthy research accomplishments
          
          `
      },
      {
        name: "John Doe",
        image: "/assets/Nitesh.jpg",
        description:
          `
          My journey with the Robotics and Automation Center (RAC) commenced in
            my freshman year, initially as a member, progressing through my
            academic journey to ultimately assume the role of President in my
            third year. As an industrial engineering graduate, RAC proved
            instrumental in honing both my technical and managerial competencies.
            In my professional life, the experience gained through active
            participation in national and international competitions representing
            RAC has been invaluable. This exposure significantly enhanced my
            intelligence and confidence, contributing to my current role as a
            Business Analyst at Hitachi Energy. Here, I am actively engaged in the
            development of cutting-edge trade risk management software within the
            Energy Commodity sector. Furthermore, the influence of RAC extended to
            my academic pursuits, shaping the development of top-tier final
            projects. Recognized as the best in our college by the Thapathali
            Graduate Conference committee, these projects have also been published
            in prestigious journals by University Scholar Conference, 2023. My
            engagement with RAC has been transformative, fostering the development
            of not only technical and managerial skills but also contributing to
            noteworthy research accomplishments
          
          `
      },
      {
        name: "John Doe",
        image: "/assets/Nitesh.jpg",
        description:
          `
          My journey with the Robotics and Automation Center (RAC) commenced in
            my freshman year, initially as a member, progressing through my
            academic journey to ultimately assume the role of President in my
            third year. As an industrial engineering graduate, RAC proved
            instrumental in honing both my technical and managerial competencies.
            In my professional life, the experience gained through active
            participation in national and international competitions representing
            RAC has been invaluable. This exposure significantly enhanced my
            intelligence and confidence, contributing to my current role as a
            Business Analyst at Hitachi Energy. Here, I am actively engaged in the
            development of cutting-edge trade risk management software within the
            Energy Commodity sector. Furthermore, the influence of RAC extended to
            my academic pursuits, shaping the development of top-tier final
            projects. Recognized as the best in our college by the Thapathali
            Graduate Conference committee, these projects have also been published
            in prestigious journals by University Scholar Conference, 2023. My
            engagement with RAC has been transformative, fostering the development
            of not only technical and managerial skills but also contributing to
            noteworthy research accomplishments
          
          `
      },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed to 2 seconds
    pauseOnHover: true,
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-auto p-2 sm:p-4 md:p-8 max-w-screen-lg">
      <h2 className="text-center text-lg sm:text-2xl font-bold text-[#000] mb-2 sm:mb-4 relative">
        Alumni Success Stories
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-300 h-1 w-12 sm:w-16"></span>
      </h2>
      <Slider ref={sliderRef} {...settings} dotsClass="slick-dots inline-flex justify-center">
        {alumniStories.map((story, index) => (
          <div key={index}>
            <AlumniJourney {...story} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniJourneyPage;
