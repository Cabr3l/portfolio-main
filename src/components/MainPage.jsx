import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import ProfessionalProjects from './ProfessionalProjects';
import Contact from './Contact';
import Footer from './Footer';

export default function MainPage() {

    return (
        <div>
        <Navbar />
        <Home />
        <About />
        <Experiences/>
        <ProfessionalProjects />
        <Projects />
        <Contact />
        <Footer />
    </div>
    )

}