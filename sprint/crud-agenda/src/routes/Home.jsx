import React, { useEffect, useState } from 'react'

import Carousel_home from '../components/Carousel_home.jsx';
import { Link } from "react-router-dom";

import ReviewsList from '../components/ReviewsList.jsx';
import SubmitReview from '../components/SubmitReview.jsx';

import Estrelas from '../components/Estrelas'

import imagem1 from "../assets/curso_1.png";
import imagem2 from "../assets/curso_2.png";
import imagem3 from "../assets/curso_3.png";

const Home = () => {
    const images = [imagem1, imagem2, imagem3];

    return (
        <main className='Home-page'>
            <section className='slide-banner'>

                <div className="slide_show">
                    <Carousel_home images={images}/>
                    
                </div>

                <div className="text_slide">
                    <h1>Explore nossos cursos!</h1>
                    <p className='textinho'>Na BrainBooster contamos com os mais diversos cursos focados a área da tecnologia. Com apenas um click, somente você pode impulsionar seus estudos </p>
                    <a type="button" className="btn" href='/Cursos'><b>Vá além! </b></a>
                </div>
            </section>

            <section className="Comment-section">
            <div className='Comment-enviar'>
                    <SubmitReview />
            </div>

            <div className='Comment-exibir'>
                <ReviewsList />

            </div>
            </section>
        </main>
    );
}

export default Home;