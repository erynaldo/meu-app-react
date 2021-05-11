import React from 'react';
import './tabela.css';

const Tabela = () => (
    // function Footer() {
        // return(
        <div className="container-tabela">
            <span id="topo"></span>
            <div className="tabela">
                {/* <h3>Relação das Pessoas para fazer exames</h3> */}
                {/* <table className="table-1 table-hover table-bordered">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">CNS</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data Nasc</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                            <td className="dado">Maria Fernandes da Silva</td>
                            <td className="dado">08/11/1962</td>
                            <td className="dado">52</td>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                            <td className="dado">Francisco Meneses da Silva</td>
                            <td className="dado">08/01/1962</td>
                            <td className="dado">32</td>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                            <td className="dado">Joana Fernandes Ximenes</td>
                            <td className="dado">18/11/1962</td>
                            <td className="dado">62</td>
                            <td className="dado">Rua Santa Isabel</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                            <td className="dado">Alberto Cardoso Oliveira</td>
                            <td className="dado">08/11/1982</td>
                            <td className="dado">42</td>
                            <td className="dado">Rua Ceará</td>
                        </tr>
                    </tbody>
                </table>

    

                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Cód.</th>
                            <td className="dado cns titulo">02</td>
                        </tr>
                        <tr>
                            <th scope="row">CNS</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                        </tr>
                        <tr>    
                            <th scope="row">Nome</th>
                            <td className="dado">Maria Fernandes da Silva</td>
                        </tr>
                        <tr>
                            <th scope="col">Data Nasc</th>
                            <td className="dado">08/11/1962</td>
                        </tr>
                        <tr>
                            <th scope="col">Idade</th>
                            <td className="dado">52</td>
                        </tr>
                        <tr>
                            <th scope="col">Endereço</th>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                    </tbody>
                </table>




                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Cód.</th>
                            <td className="dado cns titulo">01</td>
                        </tr>
                        <tr>
                            <th scope="row">CNS</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                        </tr>
                        <tr>    
                            <th scope="row">Nome</th>
                            <td className="dado">Maria Fernandes da Silva</td>
                        </tr>
                        <tr>
                            <th scope="col">Data Nasc</th>
                            <td className="dado">08/11/1962</td>
                        </tr>
                        <tr>
                            <th scope="col">Idade</th>
                            <td className="dado">52</td>
                        </tr>
                        <tr>
                            <th scope="col">Endereço</th>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                    </tbody>
                </table>




                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Cód.</th>
                            <td className="dado cns titulo">01</td>
                        </tr>
                        <tr>
                            <th scope="row">CNS</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                        </tr>
                        <tr>    
                            <th scope="row">Nome</th>
                            <td className="dado">Maria Fernandes da Silva</td>
                        </tr>
                        <tr>
                            <th scope="col">Data Nasc</th>
                            <td className="dado">08/11/1962</td>
                        </tr>
                        <tr>
                            <th scope="col">Idade</th>
                            <td className="dado">52</td>
                        </tr>
                        <tr>
                            <th scope="col">Endereço</th>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                    </tbody>
                </table>




                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Cód.</th>
                            <td className="dado cns titulo">02</td>
                        </tr>
                        <tr>
                            <th scope="row">CNS</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                        </tr>
                        <tr>    
                            <th scope="row">Nome</th>
                            <td className="dado">Maria Fernandes da Silva</td>
                        </tr>
                        <tr>
                            <th scope="col">Data Nasc</th>
                            <td className="dado">08/11/1962</td>
                        </tr>
                        <tr>
                            <th scope="col">Idade</th>
                            <td className="dado">52</td>
                        </tr>
                        <tr>
                            <th scope="col">Endereço</th>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                    </tbody>
                </table>




                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Cód.</th>
                            <td className="dado cns titulo">01</td>
                        </tr>
                        <tr>
                            <th scope="row">CNS</th>
                            <td className="dado cns">700 1234 4567 7890</td>
                        </tr>
                        <tr>    
                            <th scope="row">Nome</th>
                            <td className="dado">Maria Fernandes da Silva</td>
                        </tr>
                        <tr>
                            <th scope="col">Data Nasc</th>
                            <td className="dado">08/11/1962</td>
                        </tr>
                        <tr>
                            <th scope="col">Idade</th>
                            <td className="dado">52</td>
                        </tr>
                        <tr>
                            <th scope="col">Endereço</th>
                            <td className="dado">Rua 07 de Outubro</td>
                        </tr>
                    </tbody>
                </table>*/}
            </div>
                
            <table className="table">
                <thead>
                    <th>Nº</th>
                    <th>CNS</th>
                    <th>Nome</th>
                    <th>Data Nasc</th>
                    <th>Endereço</th>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Nº">1</td>
                        {/* <td data-label="CNS" className="cns">700 1234 4567 7890</td> */}
                        
                        <td data-label="CNS" className="">
                            
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav1" aria-expanded="true">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav1">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>

                        </td>

                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>

                    <tr>
                        <td data-label="Nº">2</td>
                        <td data-label="CNS" className="">
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav2">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav2">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>
                        </td>
                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>

                    <tr>
                        <td data-label="Nº">3</td>
                        <td data-label="CNS" className="">
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav3">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav3">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>
                        </td>
                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>

                    <tr>
                        <td data-label="Nº">4</td>
                        <td data-label="CNS" className="">
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav4">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav4">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>
                        </td>
                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>

                    <tr>
                        <td data-label="Nº">5</td>
                        <td data-label="CNS" className="">
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav5">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav5">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>
                        </td>
                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>

                    <tr>
                        <td data-label="Nº">6</td>
                        <td data-label="CNS" className="">
                            <button className="btn-cns" data-toggle="collapse" data-target="#navbarNav6">
                                700 1234 4567 7890
                            </button>
                            <div className="lista-exames" id="navbarNav6">
                                <ul>
                                    <li className="exame">1. Hemograma Completo</li>
                                    <li className="exame">2. Sumário de Urina</li>
                                    <li className="exame">3. Glicemia em Jejum</li>
                                    <li className="exame">4. Colesterol Total</li>
                                </ul>
                            </div>
                        </td>
                        <td data-label="Nome">Erinaldo Cardoso</td>
                        <td data-label="Data Nasc">18/05/1992</td>
                        <td data-label="Endereço">Rua Projetada</td>
                    </tr>
                </tbody>
            </table>   
        </div>
    );

export default Tabela;