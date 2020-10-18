import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ErrorForm from './components/ErrorForm';

function App() {
  return (
    <div className="App">
      {/* <ErrorForm></ErrorForm> */}
      <HomePage></HomePage>
    </div>
  );
}

export default App;
