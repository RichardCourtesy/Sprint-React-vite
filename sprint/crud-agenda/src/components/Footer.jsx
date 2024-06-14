import React from "react";
import logo from '../assets/logoSF.png';

const Footer = () => {
    return (
        <section className="footer">
            
            <div className="Redes">
                <h1>Redes Sociais</h1>
                <div className="Rede-icon">
                    <a href="/">Instagram <i className="bi bi-instagram"></i></a>
                    <a href="/">Facebook <i className="bi bi-facebook"></i></a>
                    <a href="/">X  <i className="bi bi-twitter-x"></i></a>
                </div>
            </div>

            <div className="Impresa">
                <img src={logo } alt='' />
                <div className="Impresa-text">
                <h1>BrainBoosters</h1>
                <p>Conhecimento é poder, torne-se poderoso aqui na BrainBoosters</p>
                </div>
            </div>


            <div className="Duvida">
                <h1>Alguma duvida?</h1>

                <div className="Duv-icon">
                    <a href="/Cursos"><i className="bi bi-book-half"> Mais Cursos</i></a>
                    <a href="/"> <i className="bi bi-telephone-fill"> Contatos</i></a>
                
                    <p>©All rights reserved</p>
                    </div>   
            </div>

        </section>
    )
}

export default Footer;