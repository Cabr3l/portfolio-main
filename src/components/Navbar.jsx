import React, { useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSearch } from '../context/SearchContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isSearchOpen, openSearch, closeSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  // Navigation links based on current page
  const renderNavLinks = () => {
    if (isHomePage) {
      // Anchor links for home page
      return (
        <>
          <a href="#home" className="hover:text-gray-400 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors duration-200">About Me</a>
          <a href="#project" className="hover:text-gray-400 transition-colors duration-200">Projects</a>
          <a href="#experiences" className="hover:text-gray-400 transition-colors duration-200">Experiences</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors duration-200">Contact</a>
          <a href="/evaluation-framework.html" className="hover:text-gray-400 transition-colors duration-200">Framework</a>
          <Link to="/thoughts" className="hover:text-gray-400 transition-colors duration-200">Thoughts</Link>
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
          <a href="/evaluation-framework.html" className="hover:text-gray-400">Framework</a>
          <Link to="/thoughts" className="hover:text-gray-400">Thoughts</Link>
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
          <a href="#home" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>About Me</a>
          <a href="#project" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Projects</a>
          <a href="#experiences" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Experiences</a>
          <a href="#contact" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Contact</a>
          <a href="/evaluation-framework.html" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Framework</a>
          <Link to="/thoughts" className="block hover:text-gray-400 transition-colors duration-200" onClick={handleLinkClick}>Thoughts</Link>
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
          <a href="/evaluation-framework.html" className="block hover:text-gray-400" onClick={handleLinkClick}>Framework</a>
          <Link to="/thoughts" className="block hover:text-gray-400" onClick={handleLinkClick}>Thoughts</Link>
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm text-black dark:bg-black/95 dark:text-white shadow-lg px-8 md:px-16 lg:px-24">
        <div className='container py-4 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold'>Cabrel</div>

         <div className="space-x-6 hidden md:flex items-center">
          {renderNavLinks()}
        </div> 

          {/* Desktop Connect Me button and dark mode toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={openSearch}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group relative"
            aria-label="Open search"
            title="Search (Ctrl+K)"
          >
            <FaSearch className="text-gray-600 dark:text-gray-400" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Ctrl+K
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="focus:outline-none text-xl"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
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
            onClick={openSearch}
            className="w-full flex items-center justify-center mt-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Open search"
          >
            <FaSearch className="w-5 h-5 text-gray-400 mr-2" />
            <span>Search</span>
          </button>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center mt-2 text-xl focus:outline-none p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
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
      
      {/* Search Bar Modal */}
      <SearchBar isOpen={isSearchOpen} onClose={closeSearch} />
    </nav>
  )
}

export default Navbar