import React from "react";
import Backgraund from '../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            
            <div className="Redes">
                <h1>Redes Sociais</h1>
                <div className="Rede-icon">
                    <a href="/">Instagram <i class="bi bi-instagram"></i></a>
                    <a href="/">Facebook <i class="bi bi-facebook"></i></a>
                    <a href="/">X  <i class="bi bi-twitter-x"></i></a>
                </div>
            </div>


            <div className="Duvida">
                <h1>Alguma duvida?</h1>

                <div className="direito-fim">
                <div className="Duv-icon">
                    <a href="/"><i class="bi bi-book-half"> Mais Cursos</i></a>
                    <a href="/"> <i class="bi bi-telephone-fill"> Contatos</i></a>
                </div>

                <div className="Direitos">
                <p>©All rights reserved</p>
            </div>
        </div>
    </div>

        </footer>
    )
}

export default Footer;