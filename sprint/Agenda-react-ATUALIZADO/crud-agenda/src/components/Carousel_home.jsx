import React from 'react';

//Dependencias API npm install react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel_home = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index}`} className='carousel'/>
        </div>
      ))}
    </Carousel>
  );
};

export default Carousel_home;
