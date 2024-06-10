import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import ValidationLogin from '../components/ValidationLogin';
import ResetPassword from '../components/ResetPassword';

import logo from '../assets/logoSF.png'; 

const Cadastro = () => {
    return(
        <main>
        <div>
            <p><Link to="/">voltar</Link></p>
            <img src={logo} alt="Logo" className=""/>
        </div>

        <ValidationLogin />

        <div className="">
                <p>Não possui conta?<Link to="/Cadastro">Cadastre-se</Link> </p> 
            </div>

        <div className="">
                <p>Esqueceu sua senha?<Link to="/ResetPassword">Redefir</Link> </p> 
            </div>

</main>
    ) 
};

export default Cadastro;