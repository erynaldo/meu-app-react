import React from 'react';
import './navbar.css';
import Logo from "./imagens/logoHolerite.png";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu"> 
                <div>
                    <div>
                        <ul>                            
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Sistema</a></li>
                            <li><a href="/">Serviços</a></li>
                            <li><a href="/">Contato</a></li>
                            <li><a href="/">Cadastre</a></li>
                            <li><a href="/">Login</a></li>

                            <div className="redes-sociais-nav-bar">
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            </div>

                            <div className="logo-nav-bar"> 
                                <a href="."><img src={Logo} alt="logotipo" /></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;