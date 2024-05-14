import { Link } from "react-router-dom";
import logo from '../assets/logoSF.png';
import logohv from '../assets/logoSFbranco.png';

const Header = () => {
    return (
        <header>
            <div className="logo-div">
                <Link to="/" className="imagens">
                    <img src={logo} alt="Logo" className="logo-logo"/>
                    <img src={logohv} alt="Logo" className="logo-imghv" />
                </Link>
                <a href="/"><h1>BrainBoosters</h1></a>
            </div>

            <nav className="navegacao">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Cursos">Cursos</Link></li>
                    <li><Link to="/Perfil">Meu Perfil</Link></li>
                </ul>
            </nav>

            <nav className="log-cad">
                <ul>
                    <li>
                        <Link className="action-button SingIn" to="Cadastro">
                        Sign In
                        </Link>
                    </li>

                    <li>
                        <Link className="action-button Login" to="Login">
                        Cadastro
                        </Link>
                    </li>                          
                </ul>
            </nav>
        </header>
    );
}

export default Header;