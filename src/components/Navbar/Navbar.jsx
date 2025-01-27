import './Navbar.css';
import { NavLink } from 'react-router';
import iconeJoabe from './iconeJoabeNome.png';

export default function Navbar() {

    return (
        <header>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img id="joabe-icon-name" src={iconeJoabe}
                    alt="my icon with name" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </NavLink>
                
                <NavLink
                    to="/projects"
                    className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/aboutMe"
                    className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    About me
                </NavLink>

                <a className="nav-link fa fa-instagram" href="https://www.instagram.com/joabesoareslopes/"> Instagram</a>
                <a className="nav-link fa fa-linkedin" href="https://br.linkedin.com/in/joabeslopes"> Linkedin</a>
                <a className="nav-link fa fa-github" href="https://github.com/joabeslopes"> Github</a>
                </div>
            </div>
            </div>
        </nav>
        </header>
    );

};