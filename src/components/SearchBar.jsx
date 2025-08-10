import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, Briefcase, User, Code, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { experiencesData } from '../data/experiencesData';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Search data structure
  const searchableContent = [
    // About section
    {
      id: 'about',
      type: 'section',
      title: 'About Me',
      content: 'Passionate third year student at École Polytechnique with focus in quantitative finance and applied mathematics. Expertise in stochastics, machine learning, and risk modeling.',
      keywords: ['about', 'student', 'polytechnique', 'finance', 'mathematics', 'stochastics', 'machine learning', 'risk modeling'],
      icon: User,
      link: '/#about'
    },
    // Skills
    {
      id: 'stochastics',
      type: 'skill',
      title: 'Stochastics',
      content: 'Expertise in stochastic processes and mathematical modeling',
      keywords: ['stochastics', 'stochastic', 'processes', 'mathematical', 'modeling'],
      icon: Code,
      link: '/#about'
    },
    {
      id: 'machine-learning',
      type: 'skill',
      title: 'Machine Learning',
      content: 'Advanced knowledge in machine learning algorithms and data science',
      keywords: ['machine learning', 'ml', 'algorithms', 'data science', 'ai'],
      icon: Code,
      link: '/#about'
    },
    {
      id: 'risk-modeling',
      type: 'skill',
      title: 'Risk Modeling',
      content: 'Specialized in financial risk assessment and ESG modeling',
      keywords: ['risk modeling', 'risk assessment', 'esg', 'financial', 'modeling'],
      icon: Code,
      link: '/#about'
    },
    // Experiences
    ...experiencesData.map(exp => ({
      id: `exp-${exp.id}`,
      type: 'experience',
      title: exp.poste,
      content: exp.description,
      keywords: [exp.poste.toLowerCase(), exp.entreprise.toLowerCase(), ...exp.skills?.map(s => s.toLowerCase()) || []],
      icon: Briefcase,
      link: `/experience/${exp.id}`
    })),
    // Projects from experiences
    ...experiencesData.flatMap(exp => 
      exp.projects?.map((project, index) => ({
        id: `proj-${exp.id}-${index}`,
        type: 'project',
        title: project.title,
        content: project.description,
        keywords: [project.title.toLowerCase(), ...(project.technicalApproach?.map(t => t.toLowerCase()) || [])],
        icon: FileText,
        link: `/experience/${exp.id}/project/${index}`
      })) || []
    ),
    // School projects
    {
      id: 'equity-prediction',
      type: 'school-project',
      title: 'Equity & Forex Prediction',
      content: 'Machine learning models for financial market prediction using Python and advanced algorithms',
      keywords: ['equity', 'forex', 'prediction', 'machine learning', 'python', 'financial', 'markets'],
      icon: Code,
      link: '/school-project/equity-prediction'
    },
    {
      id: 'risk-modeling-project',
      type: 'school-project',
      title: 'Risk Modeling & Monte Carlo',
      content: 'Advanced risk assessment using Monte Carlo simulations and importance sampling techniques',
      keywords: ['risk modeling', 'monte carlo', 'simulations', 'importance sampling', 'risk assessment'],
      icon: Code,
      link: '/school-project/risk-modeling-project'
    },
    {
      id: 'moea-optimization',
      type: 'school-project',
      title: 'MOEA Optimization',
      content: 'Multi-objective evolutionary algorithms for complex optimization problems',
      keywords: ['moea', 'optimization', 'evolutionary algorithms', 'multi-objective'],
      icon: Code,
      link: '/school-project/moea-optimization'
    }
  ];

  // Search function
  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const query = searchQuery.toLowerCase();
    
    const filteredResults = searchableContent
      .filter(item => {
        const searchableText = `${item.title} ${item.content} ${item.keywords.join(' ')}`.toLowerCase();
        return searchableText.includes(query);
      })
      .map(item => ({
        ...item,
        relevance: calculateRelevance(item, query)
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8);

    setResults(filteredResults);
    setIsSearching(false);
  };

  // Calculate search relevance
  const calculateRelevance = (item, query) => {
    let score = 0;
    const queryWords = query.split(' ');
    
    queryWords.forEach(word => {
      if (item.title.toLowerCase().includes(word)) score += 3;
      if (item.content.toLowerCase().includes(word)) score += 2;
      if (item.keywords.some(keyword => keyword.includes(word))) score += 1;
    });
    
    return score;
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  // Handle result click
  const handleResultClick = (result) => {
    if (result.link.startsWith('/#')) {
      // Anchor link - navigate to home and scroll
      const currentPath = window.location.pathname;
      const targetSection = result.link.substring(2);
      
      if (currentPath === '/') {
        // Already on home page, just scroll
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home first, then scroll
        navigate('/');
        // Use a more reliable approach with multiple attempts
        const scrollToSection = () => {
          const element = document.querySelector(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            return true;
          }
          return false;
        };
        
        // Try immediately
        if (!scrollToSection()) {
          // Try after a short delay
          setTimeout(() => {
            if (!scrollToSection()) {
              // Try after a longer delay
              setTimeout(scrollToSection, 500);
            }
          }, 100);
        }
      }
    } else {
      // Regular route
      navigate(result.link);
    }
    onClose();
  };

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen flex items-start justify-center pt-20 px-4">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Search Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Search</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for skills, experiences, projects..."
                value={query}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                         bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Search Results */}
          <div className="px-6 pb-6">
            {isSearching ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-gray-500 mt-2">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-3">
                {results.map((result) => {
                  const IconComponent = result.icon;
                  return (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl 
                               transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                              {result.type.replace('-', ' ')}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {result.content}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : query ? (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No results found for "{query}"</p>
                <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Start typing to search</p>
                <p className="text-sm text-gray-400 mt-1">Search for skills, experiences, projects, and more</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
