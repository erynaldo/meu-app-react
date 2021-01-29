import React from 'react';
import './main.css';

const Main = () => (
    // function Footer() {
        // return(
        <div className="Main">
            <span id="topo"></span>
            <section className="cx-coluna-um">
                <div className="section-row principal">
                    <p className="title">@_erinaldo - Commando Line</p>
                    <p className="master">@_erinaldoDev <font>in website on</font> master <span>[+]</span></p>
                    <p className="insert">&gt; Insert command ...</p>
                    <label className="labelInput">@_erinaldoDev&gt;&gt;:</label><input className="inputCodigo" type="text" />
                    <p className="bem-vindo">.. Bem vindo ao meu website !</p>
                    <p className="copyright">&copy;&nbsp;Todos os direitos reservados a @_ErinaldoDev</p>
                </div>
                <div className="section-row">
                    <h1>Article Dois</h1>
                    <button className="btn btn-success mr-3">
                        Ler mais &gt;
                    </button>
                </div>
                <div className="section-row">
                    <h2>Article Três</h2>
                    <button className="btn btn-outline-primary mr-3">
                        Ler mais &gt;
                    </button>
                </div>
            </section>
            <section className="cx-coluna-dois">
                <div className="aside-row">
                    <h2>Aside Um</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button>
                </div>
                <div className="aside-row">
                    <h2>Aside Dois</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button>
                </div>
                <div className="aside-row">
                    <h2>Aside Três</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button>
                </div>
                <div className="aside-row">
                    <h2>Aside Quatro</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button>
                </div>
                <div className="aside-row">
                    <h2>Aside Cinco</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button> 
                </div>
                <div className="aside-row">
                    <h2>Aside Seis</h2>
                    <button className="btn btn-outline-danger mr-3">
                        Abrir &gt;
                    </button>
                </div>
            </section>
        </div>
    );

export default Main;