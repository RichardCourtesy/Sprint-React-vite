import { Link } from "react-router-dom";
import logo from '../assets/react.svg'

const Header = () => {
    return (
        <header>
            <div className="logo-div">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                    <h1>Agenda</h1>
                </Link>
            </div>

            <div className="search">
                {/* aqui colocamos a barra de pesquisa */}
            </div>

            <nav>
                <ul>
                    <li><Link to="/add_contact">Adicionar Contato</Link></li>
                    <li><Link to="/DEV">DEV</Link></li>
                    <li><Link to="/Objetivo">Objetivo</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
