import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function MainPage() {

    return (
        <div>
        <Navbar />
        <Home />
        <About />
        <Experiences/>
        <Projects />
        <Contact />
        <Footer />
    </div>
    )

}