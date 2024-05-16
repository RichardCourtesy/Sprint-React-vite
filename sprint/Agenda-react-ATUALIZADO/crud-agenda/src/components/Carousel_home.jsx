import React from 'react';

//CSS
import './CSS/Carousel_home.css'

//Dependencias API npm install react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel_home = ({ images, interval = 2300 }) => {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    interval={interval}
    showArrows
    showStatus
    showIndicators
    showThumbs
    stopOnHover
    swipeable
    >

      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index}`} className='carousel-image'/>
        </div>
      ))}
    </Carousel>
  );
};

export default Carousel_home;
