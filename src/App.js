import React from "react";
import {Footer,Blog,Possibility,Feature,WhatGPT3,Header} from './containers';
import {Cta,Brand,NavBar, FEA} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <FEA/>
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
