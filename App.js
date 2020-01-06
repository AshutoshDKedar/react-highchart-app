import React from 'react';
import Header from './templates/header';
import './App.css';
import Body from './templates/body';
import Footer from './templates/footer';

function App() {
  return (
    <div className="main-app container-fluid">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
