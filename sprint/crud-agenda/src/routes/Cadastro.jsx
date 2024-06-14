import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import '../components/CSS/Cadastro.css';

import SubmitCadastro from '../components/SubmitCadastro';

import logo from '../assets/logoSF.png'; 

const Cadastro = () => {
    return(
        <main >
            <section className='section-Cadastro'>
            <div className="logo-titulo-cadastro">

                <h2 className='oo'>Cadastro</h2>
                <img src={logo} alt="Logo" className="logo-cadastro"/>
            </div>

        <div>
        <SubmitCadastro />
        </div>

        
        <p className="cadastro-entrar">Já possui conta? <Link to="/Login" className='hovercu'>Entrar</Link></p> 
        
            </section>
        </main>
    ) 
};

export default Cadastro;