import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "../../styles/Webenhancers/ShopCarousel.module.css"

import Image from "next/image"

import building from "../../public/Images/Building-Materials-kpfc-builders-hardware-builders.jpg"
import gardening from "../../public/Images/Gardening-Tools-Equipment-kpfc-builders-hardware-builders.jpg"
import hardware from "../../public/Images/Hardware-Tools-kpfc-builders-hardware-builders.jpg"
import iron from "../../public/Images/Iron-Sheets-Bars-kpfc-builders-hardware-builders.jpg"
import lighting from "../../public/Images/Lighting-Electricals-accessories-kpfc-builders-hardware-builders.jpg"
import locks from "../../public/Images/Locks-Hinges-kpfc-builders-hardware-builders.jpg"
import mdf from "../../public/Images/MDF-Boards-kpfc-builders-hardware-builders.jpg"
import plumbing from "../../public/Images/Plumbing-kpfc-builders-hardware-builders.jpg"
import sanitary from "../../public/Images/Sanitary-Bathroom-kpfc-builders-hardware-builders.jpg"
import tank from "../../public/Images/Water-Tanks-kpfc-builders-hardware-builders.jpg"








const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image className={styles.circleImg} src={building} borderRadius="45px" onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={gardening} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={hardware} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={iron} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={lighting} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={locks} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={mdf} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={plumbing} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={sanitary} onDragStart={handleDragStart} role="presentation" />,
  <Image className={styles.circleImg} src={tank} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <div>
    <AliceCarousel
     mouseTracking items={items} 
     paddingLeft={50}
     paddingRight={50}
    
     
     
     />

    </div>

  )
}
export default Gallery;
