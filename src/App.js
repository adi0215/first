import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(49 56 91)";
      document.body.style.color = "white";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="App" mode={mode} toggleMode={toggleMode} about="About" login="Login" home="Home" />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textbox heading="Enter the text" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
