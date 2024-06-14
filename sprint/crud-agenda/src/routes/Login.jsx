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

        <div className='Div-links'>

                <p className='Login-IRcadastro'>Não possui conta? <Link to="/Cadastro" className='Cadastro'>Cadastre-se</Link> </p> 
                <p className='Login-MudaSenha'>Esqueceu sua senha? <Link to="/ResetPassword" className='MudarSenha'>Redefinir</Link> </p> 

            </div>
    </section>
</main>
    ) 
};

export default Login;