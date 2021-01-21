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
            <a className="link" href="https://classic.yarnpkg.com/en/">Clique aqui</a> para instalar o Yarn
            <br /><br />
            <h1>Comandos do Git usando o cmd</h1>
            <h5># Dentro na pasta do seu projeto digite:</h5>
                <h6 className="codigo">git init</h6>
            <h5># Saber o estatus git dentro do projeto, digite:</h5>
                <h6 className="codigo">git status</h6>
            <h5># Adicionar o arquivo ou diretório, dizer qual será encaminhado ou sincronizado com o github:</h5>
                <h6 className="codigo">git add . ou git add nome do arquivo ou do diretório</h6>
            <h5># Gravar os arquivos para serem enviados para o repositório no github:</h5>
                <h6 className="codigo">git commit -m "Alguma descrição mensagem"</h6>
            <h4># Ver o histório das alterações, quem fez e quando foram feitas:</h4>
              <h6 className="codigo">git log</h6>
            <h4># Por fim enviar o projeto commit para o repositorio no github:</h4>
              <h6 className="codigo">git remote add origin https://github.com/nome-do-usuario/nome-do-repositorio.git</h6><br />
              <h6 className="codigo">git push -u origin master</h6>
            <br />
            <h4># Quando fizer alteração no projeto, deve repetir os comandos:</h4>
              <h6 className="codigo">git status</h6><br />
              <h6 className="codigo">git add . ou git add nome do arquivo modificado</h6><br />
              <h6 className="codigo">git status</h6><br />
              <h6 className="codigo">git commit -m "Alguma descrição da mudança"</h6><br />
              <h6 className="codigo">git log</h6><br />
              <h6 className="codigo">git push</h6><br />
            <h5>Dev. Erinaldo Cardoso. Em 21-01-2021</h5>
          </section>
      </div>
    );
  }
}

// function App() {
// }

export default App;
