import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/logopqn.png';

const SingIn = () => {
    
    return (
            <main className="Login-page">

            <form className="Login">
                <div className="logo-login">
                <p>voltar</p>
                <Link>
                    <img src={logo} alt="" />
                </Link>
                </div>

                <ul>
                    <li>
                    <p>E-mail</p>
                    <input type="email" required/>
                    </li>
                </ul>

                <div>
                <ul>
                    <li>
                    <p>Senha</p>
                    <input type="password" />
                    </li>
                </ul>
                </div>
            </form>

            </main>
    )
}

export default SingIn;