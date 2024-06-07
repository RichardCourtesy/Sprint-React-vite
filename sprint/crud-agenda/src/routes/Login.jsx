import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import ValidationLogin from '../components/ValidationLogin';

import logo from '../assets/logoSF.png'; 

const Cadastro = () => {
    return(
        <main>
        <div>
            <p><Link to="/">voltar</Link></p>
            <img src={logo} alt="Logo" className=""/>
        </div>

        <ValidationLogin />
</main>
    ) 
};

export default Cadastro;