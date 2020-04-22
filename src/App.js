import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import MainContent from './components/MainContent.js'
function App() {


  return (
    <div className="app-container">
      <Header/>
        <MainContent/>
    </div>
  );
}

export default App;
