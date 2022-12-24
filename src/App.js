import React, { useState, useRef, useEffect } from "react";
import Logo from './components/logo/logo';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';
import Education from './components/education/education';
import Resource from './components/resource/resource';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';


function App() {

    return(
       // <Navbar />
       <>
         <Logo/>
         <Hero/>
         <About/>
         <Services/>
         <Education/>
         <Resource/>
         <Newsletter/>
         <Footer/>
       </>
    )
}

export default App;
