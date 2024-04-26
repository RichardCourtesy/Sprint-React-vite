import React from "react";

import { Link } from "react-router-dom";

import error_img from '../assets/error-img.png'

const ErrorPage = () => {
    return (
        <main className="Error-page">
            <div>
                <img src={error_img} alt="Error-Image" />

                <section>
                    <h1>Erro 440: Página não encontrada.</h1>
                    <Link to='/' className='botao-voltar'>Voltar a página inicial</Link>
                </section>
            </div>
        </main>
    );
}

export default ErrorPage;