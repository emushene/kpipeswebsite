import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import slide1 from "../../public/Images/Home Page Slider 1.webp";
import slide2 from "../../public/Images/Home Page Slider 2.webp";
import slide3 from "../../public/Images/Home Slider 3.webp";

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Image src={slide1} layout="responsive" height={500} width={1400} onDragStart={handleDragStart} role="presentation" />,
    <Image src={slide2} layout="responsive" height={500} width={1400} onDragStart={handleDragStart} role="presentation"/>,
    <Image src={slide3} layout="responsive" height={500} width={1400} onDragStart={handleDragStart} role="presentation"/>,
];

const Gallery = () => {
  return (
    <div>
          <AliceCarousel
             autoPlay
             autoPlayControls
             autoPlayStrategy="none"
             autoPlayInterval={1500}
             animationDuration={5000}
             animationType="fadeout"
             infinite
             touchTracking={false}
             disableDotsControls
             disableButtonsControls
          
          mouseTracking items={items} 
          
          />

    </div>

  );
}


  

export default Gallery;
