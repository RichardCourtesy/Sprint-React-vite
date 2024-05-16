// import React from "react";

// //Dependencias API npm install react-responsive-carousel
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// //Importação das imagens


//  // Substitua com suas imagens

// const images = [
//     { id: '1', image: imagem1 },
//     { id: '2', image: imagem2 },
//     { id: '3', image: imagem3 }
// ];

// const Carousel_home = () => {
//     return (
    
//       <Carousel>
//             {images.map( (item) => ( 

//             <div  key={item.id} >
//             <img src={item.image} alt={`Imagem ${item.id}`}/>
//             </div>
//         ))}
//       </Carousel>
//     );
//   };
  
//   export default Carousel_home;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel_home = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousel_home;
