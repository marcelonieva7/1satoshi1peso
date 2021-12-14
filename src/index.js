import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Depreciation from './components/Depreciation';
import BetForm from './components/BetForm';
import Footer from './components/Footer';
import Merchandising from './components/Merchandising';
import Hero2 from './components/Hero2';
import './assets/styles/Index.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <Depreciation />
      <Hero2 />
      <BetForm />
      <Merchandising />
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
