import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import ProfessionalProjects from './ProfessionalProjects';
import Thoughts from './Thoughts';
import Contact from './Contact';
import Footer from './Footer';

export default function MainPage() {
    useEffect(() => {
        document.title = "Cabrel Tiotsop Ngueguim - Portfolio | Accueil";
    }, []);

    return (
        <div>
        <Navbar />
        <Home />
        <About />
        <Experiences/>
        <ProfessionalProjects />
        <Projects />
        <Thoughts />
        <Contact />
        <Footer />
    </div>
    )

}