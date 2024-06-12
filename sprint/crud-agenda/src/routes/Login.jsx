import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import ValidationLogin from '../components/ValidationLogin';
import ResetPassword from '../components/ResetPassword';

import logo from '../assets/logoSF.png'; 

const Cadastro = () => {
    return(
        <main>
            <section className='section-Login'>

        <div className="logo-titulo-Login">
            <h2 className='oo'>Login</h2>
            
            <img src={logo} alt="Logo" className="logo-Login"/>
        </div>

        <ValidationLogin />

        <div className="Login-IRcadastro">
                <p>Não possui conta?<Link to="/Cadastro">Cadastre-se</Link> </p> 
            </div>

        <div className="Login-MudaSenha">
                <p>Esqueceu sua senha?<Link to="/ResetPassword">Redefinir</Link> </p> 
            </div>
    </section>
</main>
    ) 
};

export default Cadastro;