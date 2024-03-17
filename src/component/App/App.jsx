import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Info from '../Info/Info';
import Home from '../Home/Home';
import Properties from '../Properties/Properties';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import ContactUS from '../ContactUs/ContactUs'; 
import './App.css';
import Footer from '../Footer/Footer';
import Vills from '../Vills/Vills';


const App = () => {
  return (
    <div className ="app">
      <Info /> 
      <div className="Navbar-Contanier">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path ='/Properties' element = {<Properties />} />
          <Route path ='/PropertyDetails' element = {<PropertyDetails />} />
          <Route path ='/ContactUS' element = {<ContactUS />} />

          
          
        </Routes>
      </div>
      </div>
      <Footer />
    
      </div>
      

  )
}
export default App;