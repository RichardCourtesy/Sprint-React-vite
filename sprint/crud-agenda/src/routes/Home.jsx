// O hook useState permite adicionar estado a um componente funcional.

//O hook useEffect permite executar efeitos colaterais em componentes
//funcionais, como buscar dados, assinar serviços ou manipular o DOM.

//O hook useContext permite acessar o valor de um contexto em um 
//componente funcional.

//O hook useRef permite criar uma referência mutável que persiste
//durante todo o ciclo de vida do componente. Pode ser usada para 
//acessar um elemento DOM diretamente.

import React, { useEffect, useState } from 'react'

import Carousel_home from '../components/Carousel_home.jsx';
import { Link } from "react-router-dom";

import ReviewsList from '../components/ReviewsList.jsx';
import SubmitReview from '../components/SubmitReview.jsx';

import imagem1 from "../assets/curso_1.png";
import imagem2 from "../assets/curso_2.png";
import imagem3 from "../assets/curso_3.png";

import user from "../assets/Criador.png"
import Juan from "../assets/Juan.png";
import Tadeu from "../assets/Tadeu.png";
import Guedes from "../assets/IsaGuedes.png"
import Rodrigues from "../assets/IsaRodrigues.png"
import Ravagnani from "../assets/IsaRavagnani.png"
import Richard from "../assets/Richard.png"

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

                <div className="Text-slide">
                    <h1>Explore nossos cursos!</h1>
                    <p className='Textinho'>Na BrainBooster contamos com os mais diversos cursos focados na área da tecnologia. Com apenas um click, somente você pode impulsionar seus estudos </p>
                    <a type="button" className="btn" href='/Cursos'><b>Vá além! </b></a>
                </div>
            </section>

            <section className="Comment-section">
                    <SubmitReview />

                <ReviewsList />

            </section>



            <section className='Criadores'>
                <h1 className='Criadores-title'>Desenvolvedores</h1>
            <div className='Pessoas'>

                <label className="user">
                    <h2>Richard Alves</h2>
                    <img src={Richard} alt="" className='foto-user'/>
                    <p className='funcao'>Developer</p>
                </label>

                <label className="user">
                    <h2>Juan Anacleto</h2>
                    <img src={Juan} alt="" className='foto-user'/>
                    <p className='funcao'>Developer</p>
                </label>

                <label className="user">
                    <h2>Isabelly Rodrigues</h2>
                    <img src={Rodrigues} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
            </div>

            <div className='Pessoas'>
                <label className="user">
                    <h2>Isabella Guedes</h2>
                    <img src={Guedes} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
                
                <label className="user">
                    <h2>Isabella Ravagnani</h2>
                    <img src={Ravagnani} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>

                <label className="user">
                    <h2>Vinicius Tadeu</h2>
                    <img src={Tadeu} alt="" className='foto-user'/>
                    <p className='funcao'>Designer</p>
                </label>
            </div>   

            </section>
        </main>
    );
}

export default Home;