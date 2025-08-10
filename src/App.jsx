
import './App.css'
import MainPage from './components/MainPage'
import ExperiencesPage from './components/ExperiencesPage'
import ExperienceDetailPage from './components/ExperienceDetailPage'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App
