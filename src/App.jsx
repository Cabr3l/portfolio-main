
import './App.css'
import MainPage from './components/MainPage'
import Experiences from './components/Experiences'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/experiences" element={<Experiences />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App
