import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
