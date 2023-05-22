import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header (2)";
import Home from "./component/Home/home";
import About from "./component/About/about";
import Services from "./component/Services/services";
import Contact from "./component/Contact/contact";
import Pricing from "./component/Pricing/pricing";
import Demo from "./component/Demo/demo";

const App= () => {
  return (
        <BrowserRouter>
                <Header/>
                        <Routes>
                                <Route path ="/"  element= {<Home/>}/>
                                <Route path ="/about"  element= {<About/>}/>
                                <Route path ="/services"  element= {<Services/>}/>
                                <Route path ="/contact"  element= {<Contact/>}/>
                                <Route path ="/pricing"  element= {<Pricing/>}/>
                                <Route path ="/demo"  element= {<Demo/>}/>
                        </Routes>
                        
        </BrowserRouter>
  )
};

export default App;