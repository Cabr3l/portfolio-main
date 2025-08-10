import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  // Navigation links based on current page
  const renderNavLinks = () => {
    if (isHomePage) {
      // Anchor links for home page
      return (
        <>
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#experiences" className="hover:text-gray-400">Experiences</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </>
      );
    } else {
      // Router links for other pages
      return (
        <>
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/#about" className="hover:text-gray-400">About Me</Link>
          <Link to="/#project" className="hover:text-gray-400">Projects</Link>
          <Link to="/experiences" className="hover:text-gray-400">Experiences</Link>
          <Link to="/#contact" className="hover:text-gray-400">Contact</Link>
        </>
      );
    }
  };

  // Contact button based on current page
  const renderContactButton = () => {
    if (isHomePage) {
      return (
        <button 
          className="ml-2 bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white
            transform transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full font-medium"
          onClick={() => window.location.href = '#contact'}
        >
          Contact Me
        </button>
      );
    } else {
      return (
        <Link 
          to="/#contact"
          className="ml-2 bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white
            transform transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full font-medium"
        >
          Contact Me
        </Link>
      );
    }
  };

  // Mobile menu links based on current page
  const renderMobileLinks = () => {
    if (isHomePage) {
      return (
        <>
          <a href="#home" className="block hover:text-gray-400" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={handleLinkClick}>About Me</a>
          <a href="#skills" className="block hover:text-gray-400" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" className="block hover:text-gray-400" onClick={handleLinkClick}>Projects</a>
          <a href="#experiences" className="block hover:text-gray-400" onClick={handleLinkClick}>Experiences</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={handleLinkClick}>Contact</a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="block hover:text-gray-400" onClick={handleLinkClick}>Home</Link>
          <Link to="/#about" className="block hover:text-gray-400" onClick={handleLinkClick}>About Me</Link>
          <Link to="/#skills" className="block hover:text-gray-400" onClick={handleLinkClick}>Skills</Link>
          <Link to="/#projects" className="block hover:text-gray-400" onClick={handleLinkClick}>Projects</Link>
          <Link to="/experiences" className="block hover:text-gray-400" onClick={handleLinkClick}>Experiences</Link>
          <Link to="/#contact" className="block hover:text-gray-400" onClick={handleLinkClick}>Contact</Link>
        </>
      );
    }
  };

  // Mobile contact button based on current page
  const renderMobileContactButton = () => {
    if (isHomePage) {
      return (
        <a 
          href="#contact" 
          className="block bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white px-4 py-2 rounded-full
            transform transition-all duration-300 hover:scale-105 mt-2 text-center" 
          onClick={handleLinkClick}
        >
          Contact me
        </a>
      );
    } else {
      return (
        <Link 
          to="/#contact"
          className="block bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white px-4 py-2 rounded-full
            transform transition-all duration-300 hover:scale-105 mt-2 text-center"
          onClick={handleLinkClick}
        >
          Contact me
        </Link>
      );
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black dark:bg-black dark:text-white shadow px-8 md:px-16 lg:px-24">
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold'>Cabrel</div>

         <div className="space-x-6 hidden md:flex items-center">
          {renderNavLinks()}
        </div> 

          {/* Desktop Connect Me button and dark mode toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="focus:outline-none text-xl"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
          {renderContactButton()}
        </div>
  
    {/* Mobile burger menu button on the right */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
        
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
         
        </button>
      </div>

  {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black text-black dark:text-white px-8 py-4 space-y-4 shadow-lg absolute top-full left-0 w-full z-40">
          {renderMobileLinks()}
          {renderMobileContactButton()}
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center mt-4 text-xl focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <>
                <FaSun className="text-yellow-400 mr-2" /> 
              </>
            ) : (
              <>
                <FaMoon className="mr-2" />
                
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar