
import './index.css'
import MainPage from './components/MainPage'
import ExperiencesPage from './components/ExperiencesPage'
import ExperienceDetailPage from './components/ExperienceDetailPage'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import SchoolProjectDetail from './components/SchoolProjectDetail'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'
import { SearchProvider } from './context/SearchContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {

  return (
    <ThemeProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/experience/:id" element={<ExperienceDetailPage />} />
            <Route path="/experience/:experienceId/project/:projectId" element={<ProjectDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/school-project/:id" element={<SchoolProjectDetail />} />
            {/* Ajoute d'autres routes ici */}
          </Routes>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App
