import React from 'react';
import './App.css';

//import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

const App = () => (
  <div>
    <Header />
    <main>
      <About/>
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </div>
);

export default App;
