import React from 'react';
import './footer.css';
import Logo from "./imagens/logoHolerite.png";

const Footer = () => {
// function Footer() {
    return( 
        <footer className="Footer">
            <section className="section-1">
                <div className="coluna-um">
                    <nav>
                            <a className="link" href="/">Contato</a>
                            <a className="link" href="/">Home</a> 
                            <a className="link" href="/">Sistema</a>
                            <a className="link" href="/">Manuais</a>
                            <a className="link" href="/">Tutoriais</a>
                            <a className="link" href="/">Vídeos-Tutoriais</a>
                            <a className="link" href="/">Serviços</a>
                            <a className="link" href="/">Contra-Cheque</a>
                            <a className="link" href="/">IPTU</a>
                            <a className="link" href="/">Nota de Serviço</a>
                    </nav>
                    
                    <p className="siga-nos">Siga-nos nas redes sociais</p>

                    <nav>
                        <a className="rede-social" href="https://gmail.com"><i className="fa fa-envelope"></i></a>&nbsp;
                        <a className="rede-social" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                        <a className="rede-social" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a className="rede-social" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a className="rede-social" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        <a className="rede-social" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </nav>
                </div>

                <div className="coluna-dois">
                    <p className="primeiro-paragrafo">Nome da Empresa ou Instituição</p>
                        <p className="paragrafo-resposta">Rua São Paulo, 1234, Centro. São João da Fronteira-PI</p>
                    <p className="paragrafo-titulo">Telefone:
                        <span className="paragrafo-resposta"> (86)9 8100-9999</span>
                    </p>

                    <p className="paragrafo-titulo">Whatsapp:
                        <span className="paragrafo-resposta"> (86)9 8100-9999</span>
                    </p>

                    <p className="paragrafo-titulo">E-mail:
                        <span className="paragrafo-resposta"> empresa@email.com</span>
                    </p>
                </div>
            </section>
            
            <section className="section-2">
                <div className="linha"></div>
                <p><a href="."><img className="logo-footer" src={Logo} alt="logotipo" /></a></p>
                <p><span className="corporation">Desenvolvido por ERSI Sistemas</span></p>
                <p><span className="corporation">&copy;&nbsp;{new Date().getFullYear()}.&nbsp;Todos os direitos reservados</span></p>
            </section>
            {/* &nbsp; dar dois espaços
                &ensp; dar quatro espaço */}
            
        </footer>
    );
}
export default Footer;