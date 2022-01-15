
import './public/css/index.css';
import './public/css/App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import Home from './pages/home';
import Services from './pages/services';
// import Error from './pages/error';

export default function App() {

  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/servico/software" element={<Services service="software"/>}/>
        <Route path="/servico/hospedagem" element={<Services service="hospedagem"/>}/>
        <Route path="/servico/marketing" element={<Services service="marketing"/>}/>
        <Route path="/servico/apis" element={<Services service="apis"/>}/>
        <Route path="/servico/contrato" element={<Services service="contrato"/>}/>
        <Route path="/servico/uiux" element={<Services service="uiux"/>}/>
        
        <Route path="*" element={<Home/>} />
      </Routes>

      <Contact/>
      <Footer/>
    </Router>
  );
}

