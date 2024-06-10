import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import SubmitCadastro from '../components/SubmitCadastro';

import logo from '../assets/logoSF.png'; 

const Cadastro = () => {
    return(
        <main>
        <div>
            <p><Link to="/">voltar</Link></p>
            <img src={logo} alt="Logo" className=""/>
        </div>

        <SubmitCadastro />

        <div className="">
        <p>Já possui conta?<Link to="/Login">Entrar</Link></p> 
        </div>
</main>
    ) 
};

export default Cadastro;