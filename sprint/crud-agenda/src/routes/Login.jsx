import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import '../components/CSS/Login.css'

import ValidationLogin from '../components/ValidationLogin';

const Login = () => {
    return(
        <main>
            <section className='section-Login'>

        
            <h2 className='Titulo-Login'>Login</h2>
        

        <ValidationLogin />

        <div className="Login-IRcadastro">
                <p>Não possui conta? <Link to="/Cadastro" className='hovercu'>Cadastre-se</Link> </p> 
            </div>

        <div className="Login-MudaSenha">
                <p>Esqueceu sua senha? <Link to="/ResetPassword" className='hovercu'>Redefinir</Link> </p> 
            </div>
    </section>
</main>
    ) 
};

export default Login;