import React, { useRef, useState, useEffect } from 'react';


import '../components/CSS/Carousel.css';
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
    { id: '7', image: img7 },
    { id: '8', image: img1 },
    { id: '9', image: img2 },
    { id: '10', image: img3 },
    { id: '11', image: img4 },
    { id: '12', image: img5 },
    { id: '13', image: img6 },
    { id: '14', image: img7 },
    { id: '15', image: img1 },
    { id: '16', image: img2 },
    { id: '17', image: img3 },
    { id: '18', image: img4 },
    { id: '19', image: img5 },
    { id: '20', image: img6 },
    { id: '21', image: img7 },
    { id: '22', image: img1 },
    { id: '23', image: img2 },
    { id: '24', image: img3 },
    { id: '25', image: img4 },
    { id: '26', image: img5 },
    { id: '27', image: img6 },
    { id: '28', image: img7 }
]

register();

const Carousel = () => {

    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
    
        };
    
        handleResize(); // Chame a função uma vez para definir o valor inicial
    
        window.addEventListener('resize', handleResize); // Adicione o listener de redimensionamento
    
        return () => {
            window.removeEventListener('resize', handleResize); // Remova o listener quando o componente for desmontado
        };
    }, []); // Coloque um array vazio aqui para garantir que o useEffect só seja executado uma vez, equivalente ao componentDidMount
    
    return (
        <div className='Carousel-container'>
    <Swiper
        slidesPerView={slidePerView}
        
        navigation
        
    >
        {data.map( (item) => (

            <SwiperSlide key={item.id} >
                <img
                    src={item.image}
                    alt="Slider"
                    className="Slide-item"
                />

            </SwiperSlide>
        )) }
    </Swiper>
</div>
  );

  
};

export default Carousel;
