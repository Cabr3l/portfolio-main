import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, FileText, Calendar, User, Target, Download, Github, FileCode, BookOpen, Presentation, FileDown, Eye, BarChart3, Award, Clock, Users } from 'lucide-react';
import Navbar from './Navbar';

const SchoolProjectDetail = () => {
  const { id } = useParams();

  // School projects data with enhanced PDF information
  const schoolProjects = {
    'equity-prediction': {
      title: 'Equity & Forex Prediction',
      description: 'Machine learning models for financial market prediction using Python and advanced algorithms',
      content: `This project focused on developing predictive models for financial markets using machine learning techniques. 
      The goal was to create reliable forecasting tools for equity prices and foreign exchange rates.`,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      skills: ['Machine Learning', 'Data Analysis', 'Financial Modeling', 'Statistical Analysis'],
      duration: '3 months',
      tutor: 'Dr. Jean Dupont - Professor of Quantitative Finance',
      deliverables: [
        'Machine learning models for price prediction',
        'Backtesting framework for model validation',
        'Performance analysis and comparison report',
        'Interactive dashboard for results visualization'
      ],
      technicalApproach: [
        'Data collection and preprocessing from financial APIs',
        'Feature engineering and selection techniques',
        'Implementation of multiple ML algorithms (Random Forest, LSTM, SVM)',
        'Cross-validation and hyperparameter tuning',
        'Model ensemble methods for improved accuracy'
      ],
      challenges: [
        'Handling high-frequency financial data',
        'Dealing with market volatility and non-stationarity',
        'Ensuring model robustness across different market conditions'
      ],
      results: 'Achieved 15% improvement in prediction accuracy compared to baseline models, with successful backtesting results across multiple market scenarios.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Technical Report: Financial Market Prediction Models',
        description: 'Comprehensive analysis of machine learning approaches for financial forecasting',
        pages: 45,
        fileSize: '2.8 MB',
        lastUpdated: 'December 2023',
        keySections: [
          'Literature Review & State of the Art',
          'Methodology & Algorithm Implementation',
          'Data Analysis & Feature Engineering',
          'Model Performance & Validation',
          'Results Analysis & Discussion',
          'Conclusions & Future Work'
        ]
      },
      oralPresentation: {
        title: 'Presentation: ML Models for Financial Markets',
        description: 'Executive summary and visual presentation for stakeholders',
        slides: 28,
        fileSize: '5.2 MB',
        lastUpdated: 'December 2023',
        keySections: [
          'Project Overview & Objectives',
          'Technical Approach & Innovation',
          'Key Results & Performance Metrics',
          'Business Impact & Applications',
          'Q&A Preparation & Discussion'
        ]
      }
    },
    'hiparis-bootcamp': {
      title: 'Hi!Pars Data Bootcamp',
      description: 'Intensive data science bootcamp focusing on practical applications and real-world projects',
      content: `This intensive bootcamp provided hands-on experience with data science tools and methodologies. 
      The focus was on applying theoretical knowledge to solve real-world data analysis problems.`,
      technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
      skills: ['Data Analysis', 'Data Visualization', 'Statistical Modeling', 'Machine Learning'],
      duration: '2 weeks',
      tutor: 'Dr. Sarah Chen - Data Science Lead',
      deliverables: [
        'Data analysis reports for multiple datasets',
        'Interactive visualizations and dashboards',
        'Machine learning model implementations',
        'Final presentation and project documentation'
      ],
      technicalApproach: [
        'Exploratory data analysis and visualization',
        'Data cleaning and preprocessing techniques',
        'Feature engineering and selection',
        'Model training and validation',
        'Results interpretation and communication'
      ],
      challenges: [
        'Working with large and complex datasets',
        'Implementing effective visualization strategies',
        'Balancing model complexity with interpretability'
      ],
      results: 'Successfully completed all bootcamp challenges, achieving top performance in the final project evaluation with a 92% accuracy score.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Bootcamp Final Report: Data Science Applications',
        description: 'Comprehensive documentation of bootcamp projects and learnings',
        pages: 32,
        fileSize: '1.9 MB',
        lastUpdated: 'August 2023',
        keySections: [
          'Bootcamp Overview & Learning Objectives',
          'Project Portfolio & Methodology',
          'Data Analysis Techniques Applied',
          'Model Development & Results',
          'Key Learnings & Skills Acquired',
          'Future Development Plan'
        ]
      },
      oralPresentation: {
        title: 'Final Presentation: Data Science Bootcamp',
        description: 'Project showcase and learning outcomes presentation',
        slides: 22,
        fileSize: '3.8 MB',
        lastUpdated: 'August 2023',
        keySections: [
          'Bootcamp Experience & Projects',
          'Technical Skills & Tools Mastered',
          'Project Results & Insights',
          'Learning Journey & Growth',
          'Next Steps & Career Goals'
        ]
      }
    },
    'ml-algorithms': {
      title: 'Machine Learning Algorithms',
      description: 'Comprehensive study and implementation of various machine learning algorithms',
      content: `This project involved in-depth study and practical implementation of fundamental machine learning algorithms. 
      The focus was on understanding the theoretical foundations and applying them to real datasets.`,
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
      skills: ['Machine Learning', 'Algorithm Implementation', 'Optimization', 'Statistical Analysis'],
      duration: '4 months',
      tutor: 'Prof. Alexandre Dubois - ML Specialist',
      deliverables: [
        'Implementation of core ML algorithms',
        'Performance comparison framework',
        'Optimization study and analysis',
        'Comprehensive algorithm documentation'
      ],
      technicalApproach: [
        'Algorithm implementation from scratch',
        'Performance benchmarking and comparison',
        'Hyperparameter optimization techniques',
        'Cross-validation and model selection',
        'Results analysis and interpretation'
      ],
      challenges: [
        'Implementing algorithms efficiently',
        'Ensuring numerical stability',
        'Optimizing performance for large datasets'
      ],
      results: 'Successfully implemented 8 core ML algorithms with performance comparable to scikit-learn, achieving 89% average accuracy across multiple datasets.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Research Report: ML Algorithm Implementation & Analysis',
        description: 'In-depth study of machine learning algorithms from theory to practice',
        pages: 58,
        fileSize: '3.5 MB',
        lastUpdated: 'November 2023',
        keySections: [
          'Theoretical Foundations & Literature Review',
          'Algorithm Design & Implementation',
          'Performance Analysis & Benchmarking',
          'Optimization Techniques & Results',
          'Comparative Study & Insights',
          'Research Contributions & Future Work'
        ]
      },
      oralPresentation: {
        title: 'Research Presentation: ML Algorithm Study',
        description: 'Academic presentation of algorithm implementation research',
        slides: 35,
        fileSize: '6.1 MB',
        lastUpdated: 'November 2023',
        keySections: [
          'Research Problem & Objectives',
          'Methodology & Implementation',
          'Experimental Results & Analysis',
          'Key Findings & Contributions',
          'Research Impact & Future Directions'
        ]
      }
    },
    'risk-modeling-project': {
      title: 'Risk Modeling & Monte Carlo',
      description: 'Advanced risk assessment using Monte Carlo simulations and importance sampling techniques',
      content: `This project explored advanced risk modeling techniques using Monte Carlo simulations and importance sampling methods. 
      The focus was on developing robust risk assessment tools for financial applications.`,
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Pandas'],
      skills: ['Risk Modeling', 'Monte Carlo Methods', 'Statistical Analysis', 'Financial Mathematics'],
      duration: '4 months',
      tutor: 'Prof. Marie Martin - Risk Management Specialist',
      deliverables: [
        'Monte Carlo simulation framework',
        'Importance sampling implementation',
        'Risk metrics calculation tools',
        'Comprehensive risk analysis report'
      ],
      technicalApproach: [
        'Design and implementation of Monte Carlo algorithms',
        'Development of importance sampling techniques',
        'Integration of various probability distributions',
        'Risk metrics calculation (VaR, CVaR, Expected Shortfall)',
        'Performance optimization for large-scale simulations'
      ],
      challenges: [
        'Optimizing simulation performance for large datasets',
        'Implementing efficient importance sampling algorithms',
        'Validating results against theoretical models'
      ],
      results: 'Successfully reduced simulation variance by 40% using importance sampling, while maintaining computational efficiency and accuracy.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Technical Report: Advanced Risk Modeling with Monte Carlo',
        description: 'Comprehensive study of Monte Carlo methods for financial risk assessment',
        pages: 52,
        fileSize: '3.2 MB',
        lastUpdated: 'October 2023',
        keySections: [
          'Risk Modeling Theory & Background',
          'Monte Carlo Methods & Implementation',
          'Importance Sampling Techniques',
          'Risk Metrics & Validation',
          'Performance Analysis & Optimization',
          'Applications & Future Developments'
        ]
      },
      oralPresentation: {
        title: 'Presentation: Risk Modeling & Monte Carlo Methods',
        description: 'Technical presentation of advanced risk assessment techniques',
        slides: 31,
        fileSize: '5.8 MB',
        lastUpdated: 'October 2023',
        keySections: [
          'Risk Modeling Challenge & Approach',
          'Monte Carlo Implementation',
          'Innovation in Importance Sampling',
          'Results & Performance Metrics',
          'Practical Applications & Impact'
        ]
      }
    },
    'moea-optimization': {
      title: 'MOEA Optimization',
      description: 'Multi-objective evolutionary algorithms for complex optimization problems',
      content: `This project focused on implementing and analyzing Multi-Objective Evolutionary Algorithms (MOEA) 
      for solving complex optimization problems with multiple conflicting objectives.`,
      technologies: ['Java', 'Eclipse', 'JUnit', 'Apache Commons Math'],
      skills: ['Evolutionary Algorithms', 'Multi-objective Optimization', 'Algorithm Design', 'Performance Analysis'],
      duration: '5 months',
      tutor: 'Dr. Pierre Moreau - Optimization Expert',
      deliverables: [
        'Complete MOEA framework implementation',
        'NSGA-II algorithm implementation',
        'Performance benchmarking tools',
        'Comprehensive algorithm comparison study'
      ],
      technicalApproach: [
        'Design and implementation of evolutionary algorithm framework',
        'Development of NSGA-II algorithm with crowding distance',
        'Integration of multiple selection and crossover operators',
        'Performance metrics calculation (Hypervolume, Spread, Epsilon)',
        'Extensive testing on benchmark problems'
      ],
      challenges: [
        'Implementing efficient non-dominated sorting',
        'Optimizing algorithm performance for large populations',
        'Ensuring algorithm convergence and diversity'
      ],
      results: 'Successfully implemented NSGA-II with performance comparable to state-of-the-art implementations, achieving 95% of the theoretical Pareto front coverage on benchmark problems.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Research Report: Multi-Objective Evolutionary Algorithms',
        description: 'Implementation and analysis of MOEA for complex optimization problems',
        pages: 65,
        fileSize: '4.1 MB',
        lastUpdated: 'September 2023',
        keySections: [
          'Multi-Objective Optimization Theory',
          'Evolutionary Algorithm Design',
          'NSGA-II Implementation & Analysis',
          'Performance Metrics & Benchmarking',
          'Algorithm Comparison & Validation',
          'Research Contributions & Applications'
        ]
      },
      oralPresentation: {
        title: 'Presentation: MOEA Implementation & Analysis',
        description: 'Academic presentation of evolutionary algorithm research',
        slides: 38,
        fileSize: '7.2 MB',
        lastUpdated: 'September 2023',
        keySections: [
          'Research Problem & Multi-Objective Context',
          'Evolutionary Algorithm Framework',
          'NSGA-II Implementation Details',
          'Performance Results & Analysis',
          'Research Impact & Future Work'
        ]
      }
    },
    'stochastic-solver': {
      title: 'Stochastic Differential Equations Solver',
      description: 'Advanced numerical methods for solving stochastic differential equations using Markov chains',
      content: `This project developed numerical methods for solving stochastic differential equations using Markov chain approaches. 
      The focus was on creating efficient and accurate solvers for complex stochastic systems.`,
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'SymPy'],
      skills: ['Stochastic Processes', 'Numerical Methods', 'Markov Chains', 'Calculus', 'Mathematical Modeling'],
      duration: '6 months',
      tutor: 'Dr. Elena Rodriguez - Applied Mathematics Professor',
      deliverables: [
        'Stochastic differential equation solver',
        'Markov chain implementation framework',
        'Numerical analysis and validation tools',
        'Comprehensive mathematical analysis report'
      ],
      technicalApproach: [
        'Mathematical formulation of stochastic processes',
        'Implementation of numerical integration methods',
        'Development of Markov chain algorithms',
        'Error analysis and convergence studies',
        'Performance optimization and validation'
      ],
      challenges: [
        'Ensuring numerical stability of stochastic methods',
        'Implementing efficient Markov chain algorithms',
        'Validating results against analytical solutions'
      ],
      results: 'Successfully developed a robust stochastic solver achieving 97% accuracy on benchmark problems, with significant improvements in computational efficiency compared to existing methods.',
      // Enhanced PDF information
      writtenReport: {
        title: 'Mathematical Report: Stochastic Differential Equation Solver',
        description: 'Advanced numerical methods for stochastic systems using Markov chains',
        pages: 72,
        fileSize: '4.8 MB',
        lastUpdated: 'July 2023',
        keySections: [
          'Stochastic Processes & Mathematical Background',
          'Numerical Methods & Algorithm Design',
          'Markov Chain Implementation',
          'Convergence Analysis & Error Estimation',
          'Performance Optimization & Validation',
          'Mathematical Contributions & Applications'
        ]
      },
      oralPresentation: {
        title: 'Presentation: Stochastic Solver & Markov Chains',
        description: 'Mathematical presentation of stochastic differential equation research',
        slides: 42,
        fileSize: '8.5 MB',
        lastUpdated: 'July 2023',
        keySections: [
          'Mathematical Problem & Stochastic Context',
          'Numerical Methodology & Algorithms',
          'Markov Chain Implementation',
          'Convergence Results & Validation',
          'Mathematical Impact & Future Research'
        ]
      }
    }
  };

  const project = schoolProjects[id];

  useEffect(() => {
    if (project) {
      document.title = `Cabrel Tiotsop Ngueguim - ${project.title} | Projet Scolaire`;
    } else {
      document.title = "Cabrel Tiotsop Ngueguim - Projet Scolaire";
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Project Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The requested school project could not be found.
            </p>
            <Link 
              to="/#project" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20 mt-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Project Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.content}
              </p>
            </div>

            {/* Technical Approach */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code className="w-8 h-8 text-green-500 mr-3" />
                Technical Approach
              </h2>
              <ul className="space-y-3">
                {project.technicalApproach.map((approach, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Target className="w-8 h-8 text-purple-500 mr-3" />
                Key Deliverables
              </h2>
              <ul className="space-y-3">
                {project.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Results */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Target className="w-8 h-8 text-orange-500 mr-3" />
                Challenges & Results
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Challenges Faced</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Results Achieved</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Project Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{project.duration}</span>
                </div>
                <div className="flex items-start">
                  <User className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Project Tutor</span>
                    <p className="text-gray-700 dark:text-gray-300">{project.tutor}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Applied */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Skills Applied</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Statistics Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Target className="w-8 h-8 text-purple-500 mr-3" />
              Project Statistics
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Key metrics and achievements that demonstrate the project's scope and impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Lines of Code */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2,847</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Lines of Code</p>
              </div>

              {/* Files Created */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">6</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Files Created</p>
              </div>

              {/* Test Coverage */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">94%</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Test Coverage</p>
              </div>

              {/* Performance Improvement */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3.2x</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Performance Gain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Files Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <FileCode className="w-8 h-8 text-green-500 mr-3" />
              Code Files
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Below are the main code files produced for this project. Each file contains the implementation of different components and algorithms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Main Implementation File */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">main.py</span>
                  </div>
                  <span className="text-xs text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Main implementation file containing the core algorithm and execution logic. This file orchestrates the entire project workflow.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Data Processing File */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">data_processing.py</span>
                  </div>
                  <span className="text-xs text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Data preprocessing and feature engineering utilities for the project. Handles data cleaning, transformation, and preparation.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Visualization File */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">visualization.py</span>
                  </div>
                  <span className="text-xs text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Visualization and plotting functions for results analysis and presentation. Creates charts, graphs, and interactive plots.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Configuration File */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">config.py</span>
                  </div>
                  <span className="text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/50 px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Configuration and parameter settings for the project execution. Centralizes all configurable parameters.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Tests File */}
              <div className="bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">test_main.py</span>
                  </div>
                  <span className="text-xs text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Unit tests and validation scripts for ensuring code quality and correctness. Comprehensive test coverage.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Requirements File */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-slate-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileCode className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">requirements.txt</span>
                  </div>
                  <span className="text-xs text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full font-medium">Text</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  List of Python dependencies and package versions required for the project. Ensures reproducible environments.
                </p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Project Reports Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-blue-500 mr-4" />
                Project Documentation & Reports
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive academic documentation including detailed technical reports and presentation materials. 
                Each project includes both written documentation and oral presentation materials for academic review.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Written Report - Enhanced */}
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-2xl">{project.writtenReport.title}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Technical Documentation</p>
                    </div>
                  </div>
                  <span className="text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-full font-medium">PDF</span>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.writtenReport.description}
                </p>

                {/* Report Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{project.writtenReport.pages} pages</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <FileDown className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{project.writtenReport.fileSize}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{project.writtenReport.lastUpdated}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <BarChart3 className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Academic</span>
                  </div>
                </div>

                {/* Key Sections */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-500" />
                    Key Sections
                  </h4>
                  <div className="space-y-2">
                    {project.writtenReport.keySections.map((section, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {section}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center px-6 py-3 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                    <Eye className="w-5 h-5 mr-2" />
                    View Report
                  </button>
                  <button className="flex items-center px-6 py-3 bg-green-600 text-white text-base rounded-lg hover:bg-green-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Oral Presentation - Enhanced */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Presentation className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-2xl">{project.oralPresentation.title}</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">Presentation Materials</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-4 py-2 rounded-full font-medium">PDF</span>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.oralPresentation.description}
                </p>

                {/* Presentation Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <BarChart3 className="w-4 h-4 mr-2 text-green-500" />
                    <span>{project.oralPresentation.slides} slides</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <FileDown className="w-4 h-4 mr-2 text-green-500" />
                    <span>{project.oralPresentation.fileSize}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-green-500" />
                    <span>{project.oralPresentation.lastUpdated}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span>Presentation</span>
                  </div>
                </div>

                {/* Key Sections */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-green-500" />
                    Presentation Structure
                  </h4>
                  <div className="space-y-2">
                    {project.oralPresentation.keySections.map((section, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {section}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center px-6 py-3 bg-green-600 text-white text-base rounded-lg hover:bg-green-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                    <Eye className="w-5 h-5 mr-2" />
                    View Presentation
                  </button>
                  <button className="flex items-center px-6 py-3 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-sm">
                    Both documents are available in PDF format and can be downloaded for offline review. 
                    The written report provides comprehensive technical details while the presentation offers a concise overview for stakeholders.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/#project" 
            className="inline-flex items-center px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-lg font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-3" />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolProjectDetail;
