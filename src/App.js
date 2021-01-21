import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }

  render(){
    return (
      <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <section>
            <button type="button" onClick={this.toggle}>
             {this.state.showImage ? 'Esconder': 'Mostrar Logotipo'} 
            </button><br />
            {this.state.showImage && (
              <img src={logo} className="App-logo" alt="logo" />
            )}
            <h1>Criar um projeto em React</h1>
            <h4>Precisa ter node, npm ou yarn instalado</h4>
            <h5># Abrir o cmd e digitar na linha o seguinte comando:</h5>
                <h6 className="codigo">npx create-react-app nome-do-projeto</h6>
            <h5># Abrir a pasta do projeto</h5>
                <h6 className="codigo">cd nome-do-projeto</h6>
            <h5># Abrir o visual code</h5>
                <h6 className="codigo">code ./</h6>
            <h5># Iniciar e rodar o projeto no navegador</h5>
            <h5># Abre o terminal do visual code e digita:</h5>
                <h6 className="codigo">yarn start</h6>
            <h4># Link para instalar o Yarn</h4>
                <a className="link" href="https://classic.yarnpkg.com/en/" target="_blank">Clique aqui</a> para instalar o Yarn
          </section>
      </div>
    );
  }
}

// function App() {
// }

export default App;
