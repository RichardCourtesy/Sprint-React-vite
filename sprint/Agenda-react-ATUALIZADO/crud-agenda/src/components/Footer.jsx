import React from "react";

const Footer = () => {
    return (
        <footer>
            
            <div className="Redes">
                <h1>Redes Sociais</h1>
                <div className="Rede-icon">
                    <a href="/">Instagram <i className="bi bi-instagram"></i></a>
                    <a href="/">Facebook <i className="bi bi-facebook"></i></a>
                    <a href="/">X  <i className="bi bi-twitter-x"></i></a>
                </div>
            </div>


            <div className="Duvida">
                <h1>Alguma duvida?</h1>

                <div className="direito-fim">
                <div className="Duv-icon">
                    <a href="/Cursos"><i className="bi bi-book-half"> Mais Cursos</i></a>
                    <a href="/"> <i className="bi bi-telephone-fill"> Contatos</i></a>
                </div>

                
                <p className="Direitos">©All rights reserved</p>
            
        </div>
    </div>

        </footer>
    )
}

export default Footer;