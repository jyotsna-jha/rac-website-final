import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power1 } from 'gsap';
import Image from 'next/image';

const RacImageGallery = () => {
  const imageRefs = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    // ... (your image data remains the same)
    { id: 1, src: '/assets/rac3.jpg', alt: 'Rac Image 1' },
    { id: 2, src: '/assets/rac4.jpg', alt: 'Rac Image 2' },
    { id: 3, src: '/assets/rac5.jpg', alt: 'Rac Image 3' },
    { id: 5, src: '/assets/rac7.jpg', alt: 'Rac Image 5' },
    { id: 7, src: '/assets/rac9.jpg', alt: 'Rac Image 7' },
    { id: 8, src: '/assets/rac10.jpg', alt: 'Rac Image 8' },
    { id: 13, src: '/assets/rac15.jpg', alt: 'Rac Image 13' },
    { id: 14, src: '/assets/rac16.jpg', alt: 'Rac Image 14' },
    { id: 15, src: '/assets/rac17.jpg', alt: 'Rac Image 15' },
    { id: 16, src: '/assets/rac18.jpg', alt: 'Rac Image 16' },
    { id: 20, src: '/assets/rac22.jpg', alt: 'Rac Image 20' },
    { id: 23, src: '/assets/rac25.jpg', alt: 'Rac Image 23' },
    { id: 24, src: '/assets/rac26.jpg', alt: 'Rac Image 24' },
    { id: 25, src: '/assets/rac27.jpg', alt: 'Rac Image 25' },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    images.forEach((image, index) => {
      timeline.to(imageRefs.current[index], {
        scale: 1.2,
        duration: 1,
        ease: Power1.easeInOut,
      });

      timeline.to(imageRefs.current[index], {
        scale: 1,
        duration: 1,
        ease: Power1.easeInOut,
      });

      if (index < images.length - 1) {
        timeline.addLabel(`image-${index + 1}`, '+=2'); // Change image every 2 seconds
      }
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
      timeline.play(`image-${currentImageIndex}`);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  const openImageInNewTab = (src) => {
    window.open(src, '_blank');
  };

  return (
    <div className="container mx-auto py-8 px-8 bg-white">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#000] text-center relative p-2 mb-4">
        Visual Voyage
        <div className="block w-16 h-2 bg-orange-300 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => (imageRefs.current[index] = el)}
            className="relative overflow-hidden cursor-pointer transition-transform duration-200 rounded-lg bg-white transform mx-4"
            onClick={() => openImageInNewTab(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RacImageGallery;
