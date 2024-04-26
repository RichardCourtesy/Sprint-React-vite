import React, { useRef } from 'react';

import { Link } from "react-router-dom";

// api do carousel || npm install react-slick slick-carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import imagens
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';


const Carousel = () => {
    const sliderRef = useRef(null);
  
    const goToNextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    const goToPrevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div>
    <Slider {...settings}>
        
      <div>
        <Link>
            <img src={img1} alt="img1" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img2} alt="img2" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img3} alt="img3" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img4} alt="img4" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img5} alt="img5" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img6} alt="img6" />
        </Link>
      </div>

      <div>
        <Link>
            <img src={img7} alt="img7" />
        </Link>
      </div>
    </Slider>

    <button onClick={goToPrevSlide}>Anterior</button>
    
    <button onClick={goToNextSlide}>Próximo</button>
    
    </div>
  );
};

export default Carousel;
