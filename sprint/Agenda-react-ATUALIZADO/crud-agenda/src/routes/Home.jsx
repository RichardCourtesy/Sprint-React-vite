import React, { useEffect, useState } from 'react'

import Carousel_home from '../components/Carousel_home.jsx';
import { Link } from "react-router-dom";

import imagem1 from "../assets/curso_1.png";
import imagem2 from "../assets/curso_2.png";
import imagem3 from "../assets/curso_3.png";

// app é usado para importar o DB para o projeto
// import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

const Home = () => {
    //  informações para se conectar com o banco de dados
    // const firebaseApp = initializeApp ({

    //     apiKey: "AIzaSyA7AJxQS42BeLbfD1XQp2HGvKljGM5CodE",
    //     authDomain: "sprint-4a63c.firebaseapp.com",
    //     projectId: "sprint-4a63c",
    //      storageBucket: "sprint-4a63c.appspot.com",
    //      messagingSenderId: "768478611056",
    //      appId: "1:768478611056:web:21bab2a24eb71b78be16b5",
    //      measurementId: "G-T3B95EZG9L"
    // });
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
                    <a type="button" class="btn" href='/Cursos'>Vá além!</a>
                </div>
            </section>
        </main>
    );
}

export default Home;