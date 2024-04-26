import { Link } from "react-router-dom";
import logo from '../assets/logopqn.png'

const Header = () => {
    return (
        <header>
            <div className="logo-div">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
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