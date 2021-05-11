import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

// import * as ReactBootStrap from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/home';
// import Sobre from './pages/sobre';
// import Contato from './pages/contato';

import Header from './Components/Header';
import Main from './Components/Main';
// import Tabela from './Components/Tabela';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

export default function App() {
    return ( 
        <div className="App">
            <Header />
            <Main />
            {/* <Tabela /> */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}

//OU

// class App extends Component{
//     render(){
//         return(
//             <div className="App">
//                 <Header/>
//                 <Middle/>
//                 <Footer/>
//                 <ScrollToTop/>
//             </div>
//         );
//     }
// }

// export default App;