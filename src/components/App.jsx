import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import { ThemeProvider } from '../context/ThemeContext'
import './App.css'

// Lazy loading des composants lourds
const ProjectsPage = lazy(() => import('./components/ProjectsPage'))
const ExperiencesPage = lazy(() => import('./components/ExperiencesPage'))
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const ExperienceDetail = lazy(() => import('./components/ExperienceDetail'))

// Composant de chargement
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <MainPage />
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
