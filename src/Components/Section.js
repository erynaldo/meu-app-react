import React from 'react';
import './section.css';

const Section = () => {
    return (
        <section className="Section"> 
            <h4>Criar um projeto em React</h4>
            <h5>Precisa ter node, npm ou yarn instalado</h5>
            <h5># Abrir o cmd e digitar na linha o seguinte comando:</h5>
                <h6 className="codigo">npx create-react-app nome-do-projeto</h6>
            <h5># Abrir a pasta do projeto</h5>
                <h6 className="codigo">cd nome-do-projeto</h6>
            <h5># Abrir o visual code</h5>
                <h6 className="codigo">code ./</h6>
            <h5># Iniciar e rodar o projeto no navegador</h5>
            <h5># Abre o terminal do visual code e digita:</h5>
                <h6 className="codigo">yarn start</h6>
            <h5># Link para instalar o Yarn</h5>
            <a className="link" href="https://classic.yarnpkg.com/en/">Clique aqui</a> para instalar o Yarn
            <br /><br />
            <h4>Comandos do Git usando o cmd</h4>
            <h5># Dentro na pasta do seu projeto digite:</h5>
                <h6 className="codigo">git init</h6>
            <h5># Saber o estatus git dentro do projeto, digite:</h5>
                <h6 className="codigo">git status</h6>
            <h5># Adicionar o arquivo ou diretório, dizer qual será encaminhado ou sincronizado com o github:</h5>
                <h6 className="codigo">git add . ou git add nome do arquivo ou do diretório</h6>
            <h5># Gravar os arquivos para serem enviados para o repositório no github:</h5>
                <h6 className="codigo">git commit -m "Alguma descrição mensagem"</h6>
            <h5># Ver o histório das alterações, quem fez e quando foram feitas:</h5>
              <h6 className="codigo">git log</h6>
            <h5># Por fim enviar o projeto commit para o repositorio no github:</h5>
              <h6 className="codigo">git remote add origin https://github.com/nome-do-usuario/nome-do-repositorio.git</h6>
              <h6 className="codigo">git push -u origin master</h6>
            <br />
            <h4># Quando fizer alteração no projeto, deve repetir os comandos:</h4>
              <h6 className="codigo">git status</h6>
              <h6 className="codigo">git add . ou git add nome do arquivo modificado</h6>
              <h6 className="codigo">git status</h6>
              <h6 className="codigo">git commit -m "Alguma descrição da mudança"</h6>
              <h6 className="codigo">git log</h6>
              <h6 className="codigo">git push</h6><br />
            <h5>Dev. Erinaldo Cardoso. Em 21-01-2021</h5>
            <h5>Atualizado em 22-07-2025</h5>
        </section>
    );
}

export default Section;
