import React, { useEffect, useState } from 'react'

import Carousel_home from '../components/Carousel_home.jsx';
import { Link } from "react-router-dom";

import ReviewsList from '../components/ReviewsList.jsx';
import SubmitReview from '../components/SubmitReview.jsx';

import imagem1 from "../assets/curso_1.png";
import imagem2 from "../assets/curso_2.png";
import imagem3 from "../assets/curso_3.png";

import user from "../assets/Criador.png"

import '../App.css'
import '../components/CSS/Home.css'

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
                    <p className='textinho'>Na BrainBooster contamos com os mais diversos cursos focados na área da tecnologia. Com apenas um click, somente você pode impulsionar seus estudos </p>
                    <a type="button" className="btn" href='/Cursos'><b>Vá além! </b></a>
                </div>
            </section>

            <section className="Comment-section">
                    <SubmitReview />

                <ReviewsList />

            </section>



            <section className='Criadores'>
                <h1 className='criador-title'>Criadores</h1>
            <div className='pessoas'>

                <label className="user">
                    <h2>Richard</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Developer</p>
                </label>

                <label className="user">
                    <h2>Juan</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Developer</p>
                </label>

                <label className="user">
                    <h2>Vinicius Tadeu</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
            </div>

            <div className='pessoas'>
                <label className="user">
                    <h2>Isa</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
                
                <label className="user">
                    <h2>Isa</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>

                <label className="user">
                    <h2>Isa</h2>
                    <img src={user} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
            </div>   

            </section>
        </main>
    );
}

export default Home;