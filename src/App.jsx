import React from 'react'
import Header from './components/Header'
import "./App.css";
import MainSection from './components/MainSection';
import Sales from './components/Sales';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <Sales/>
      <Footer/>
    </div>
  )
}

export default App
