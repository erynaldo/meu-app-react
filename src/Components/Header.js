import React, { useState } from 'react';
// import * as ReactBootStrap from "react-bootstrap";
import './header.css';
import Logo from "./imagens/logoHolerite.png";
// import styled from "styled-components";
import MaskedInput from './MaskedInput';
import Navbar from './Navbar';

const Header = () => {
    const [cpf, setCpf] = useState('');
    console.log(cpf);
    return( 
        <header className="Header">
            <Navbar />
            {/* <nav className="nav">
                <div className="cx-logo-header">
                    <a href="."><img src={Logo} alt="logotipo" /></a>
                </div>
                <div className="cx-menu-h"> 
                    <ul>
                        <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i>&ensp;Home</a></li>
                        <li>
                            <a data-toggle="dropdown" style={{color: '#fff'}}><i className="fas fa-code"></i>&ensp;Sistema&ensp;<i className="fas fa-angle-down"></i></a>
                            <div className="dropdown-menu">
                                <a href="#">Manuais</a>
                                <a href="#">Tutoriais</a>
                                <a href="#">Vídeos-Tutoriais</a>
                                
                            </div>
                        </li>
                        <li>
                            
                            <a data-toggle="dropdown" style={{color: '#fff'}}><i className="fas fa-th-list"></i>&ensp;Serviços&ensp;<i className="fas fa-angle-down"></i></a>
                            <div className="dropdown-menu">
                                <a href="#">Contra-Cheque</a>
                                <a href="#">Nota de Serviço</a>
                                <a href="#">IPTU</a>
                            </div>
                        </li>
                        
                        <li><a href="#"><i className="fa fa-envelope"></i>&ensp;Contato</a></li>
                    </ul>
                </div>
                <div className="cx-pesquisar">
                    
                    <div className="btn-login-mobile"><a href="#"><i className="fas fa-user" aria-hidden="true"></i>&ensp;</a></div>

                    <div className="btn-login-desktop">
                        <a data-toggle="dropdown" style={{color: '#fff'}}>
                            <i className="fas fa-user" aria-hidden="true"></i>&ensp;Login
                        </a>
                        <div id="dropdown-alterar" className="dropdown-menu">
                            <form action="" className="form-login-dropdown">
                                <label for="cpf">CPF</label>
                                <input type="text" id="cpf" name="cpf" className="input-login-navbar" maxlength="14" onkeyup="mascara_cpf()" onkeypress="return apenasNumero();" placeholder="Digite seu CPF" required="required" />
                                <label for="senha">Senha</label>
                                <input type="password" id="senha" name="senha" className="input-login-navbar" placeholder="Digite sua senha" required="required" />
                                <button type="submit" className="button-login-navbar">Entrar</button>
                                <div className="esqueci-cadastre"><a href="esqueci-senha" id="esqueci-senha">Esqueci a senha</a>&ensp;|&ensp;<a href="cadastre-se" id="cadastre">Cadastre-se</a></div>
                            </form>
                        </div>
                    </div>

                    <form action="" className="formulario-search-responsivo">
                        <input type="text" id="pesquisar" name="pesquisar" placeholder="Pesquisar" />
                            <i className="fa fa-search fa-search-nav-mobile"></i>
                    </form>
                </div>
            </nav>
            <div className="menu-navbar">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu"> 
                    <div>
                        <div>
                            <ul>
                                
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sistema</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><a href="#">Cadastre</a></li>
                                <li><a href="#">Login</a></li>

                                <div className="redes-sociais-nav-bar">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                </div>

                                <div className="logo-nav-bar"> 
                                    <a href="google.com"><img src="imagens/logoHolerite.png" alt="logotipo" /></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="logo">
                <h1>Header</h1>
            </div>
            
            <div className="menus">
                <a className="links" href=".">Home</a>
                <a className="links" href="sobre">Sobre</a>
                <a className="links" href="contato">Contato</a>
            </div> */}

            <div className="cx-logo-header">
                <a href="."><img src={Logo} alt="logotipo" /></a>
            </div>

            <div className="cx-menu-h">
                <ul>
                    <li><a href="."><i className="fa fa-home" aria-hidden="true"></i>&ensp;Home</a></li>
                    {/* <li>
                        <a data-toggle="dropdown" className="link-menu-h"><i className="fas fa-code"></i>&ensp;Sistema&ensp;<i className="fas fa-angle-down"></i></a>
                        <div className="dropdown-menu">
                            <a href="manuais">Manuais</a>
                            <a href="#">Tutoriais</a>
                            <a href="#">Vídeos-Tutoriais</a>
                        
                        </div>
                    </li>
                    <li>
                        <a data-toggle="dropdown" className="link-menu-h"><i className="fas fa-th-list"></i>&ensp;Serviços&ensp;<i className="fas fa-angle-down"></i></a>
                        <div className="dropdown-menu">
                            <a href="#">Contra-Cheque</a>
                            <a href="#">Nota de Serviço</a>
                            <a href="#">IPTU</a>
                        </div>
                    </li> */}

                    <li><span><i className="fas fa-code" aria-hidden="true"></i>&ensp;Sistema</span>
                        <ul>
                            <li><a href="manuais">Manuais</a></li>
                            <li><a href="tutoriais">Tutoriais</a></li>
                            <li><a href="videos-tutoriais">Vídeos-Tutoriais</a></li>
                        </ul>
                    </li>

                    <li><span><i className="fas fa-th-list" aria-hidden="true"></i>&ensp;Serviços</span>
                        <ul>
                            <li><a href="contra-cheque">Contra-Cheque</a></li>
                            <li><a href="nota-de-servico">Nota de Serviço</a></li>
                            <li><a href="iptu">IPTU</a></li>
                        </ul>
                    </li>

                    <li><a href="contato"><i className="fa fa-envelope"></i>&ensp;Contato</a></li>
                </ul>
            </div>

                <div className="cx-pesquisar">
                    {/* <div className="btn-login-mobile"><a href="login"><i className="fas fa-user" aria-hidden="true"></i>&ensp;</a></div> */}
    
                    <div className="cx-btn-login">
                        <span className="btn-login" data-toggle="dropdown"><i className="fas fa-user" aria-hidden="true"></i>&ensp;Login</span>
                        {/* <a href="/" data-toggle="dropdown"><i class="fas fa-user" aria-hidden="true"></i>&ensp;Login</a> */}
                        <div id="dropdown-alterar" className="dropdown-menu">
                            <div className="container-formulario-login">
                                <form action="" className="form-login-dropdown">
                                    {/* <span className="btn-fechar" onClick={() => setCpf('')}><i className="fas fa-close"></i></span> */}
                                    <h4>Login</h4>
                                    {/* <label for="cpf">CPF</label> */}
                                    <div className="form-group">
                                        <MaskedInput
                                            name="cpf" 
                                            className="input-login-navbar" 
                                            placeholder="CPF" 
                                            // required="required"
                                            value={cpf} 
                                            onChange={(event) => setCpf(event.target.value)}
                                        />
                                    </div>
                                    
                                    {/* <input type="text" id="cpf" name="cpf" class="input-login-navbar" maxlength="14" onkeyup="mascara_cpf()" onkeypress="return apenasNumero();" placeholder="Digite seu CPF" required="required" /> */}
                                    {/* <label for="senha">Senha</label> */}
                                    <div className="form-group">
                                        <input type="password" id="senha" name="senha" className="input-login-navbar" placeholder="Senha" required="required" />
                                    </div>
                                    
                                    <button type="submit" className="button-login-navbar">Entrar</button>
                                    <div className="esqueci-cadastre"><a href="esqueci-senha" id="esqueci-senha">Esqueci a senha</a>&ensp;|&ensp;<a href="cadastre-se" id="cadastre">Cadastre-se</a></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="cx-btn-search">
                        <span className="btn-search"  data-toggle="dropdown"><i className="fa fa-search" aria-hidden="true"></i>&ensp;</span>
                        <div id="dropdown-alterar" className="dropdown-menu">
                            <div className="container-formulario-search">
                                <form action="" className="form-search-dropdown">
                                    {/* <span className="btn-fechar2"><i className="fas fa-close"></i></span> */}
                                    <input type="text" id="pesquisar" name="pesquisar" className="input-search" placeholder="Pesquisar" />
                                    <button type="submit" className="button-submit-search">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <form action="" class="formulario-search-responsivo">
                        <input type="text" id="pesquisar" name="pesquisar" placeholder="Pesquisar" />
                            <i class="fa fa-search fa-search-nav-mobile"></i>
                    </form> */}
                
                </div>
        </header>
    );
}

export default Header;