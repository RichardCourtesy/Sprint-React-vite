import React, { useRef } from 'react';

import { Link } from "react-router-dom";

// api do carousel || npm install swiper
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide} from 'swiper/react'

//Módulos da api
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import imagens
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

const data = [
    { id: '1', image: img1 },
    { id: '2', image: img2 },
    { id: '3', image: img3 },
    { id: '4', image: img4 },
    { id: '5', image: img5 },
    { id: '6', image: img6 },
    { id: '7', image: img7 }
]

const Carousel = () => {
  return (

    <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
    >
        {data.map( (item) => (

            <SwiperSlide key={item.id}>
                <img
                    src={item.image}
                    alt="Slider"
                    className="Slide-item"
                />

            </SwiperSlide>
        )) }
    </Swiper>


            // <img src={img1} alt="img1" />
            // <img src={img2} alt="img2" />
            // <img src={img3} alt="img3" />
            // <img src={img4} alt="img4" />
            // <img src={img5} alt="img5" />
            // <img src={img6} alt="img6" />
            // <img src={img7} alt="img7" />

   
  );
};

export default Carousel;
