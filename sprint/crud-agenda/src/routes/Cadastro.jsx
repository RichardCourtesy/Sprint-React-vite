import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import '../components/CSS/Cadastro.css';

import SubmitCadastro from '../components/SubmitCadastro'; 

const Cadastro = () => {
    return(
        <main >
            <section className='section-Cadastro'>
                
                <h2 className='Titulo-cadastro'>Cadastro</h2>

        <SubmitCadastro />
        
        <p className="cadastro-entrar">Já possui conta? <Link to="/Login" className='hovercu'>Entrar</Link></p> 
        
            </section>
        </main>
    ) 
};

export default Cadastro;