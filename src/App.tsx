import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './pages/home'
import About from './pages/about'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
