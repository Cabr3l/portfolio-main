import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Code, FileText, BarChart3, ExternalLink, Github } from 'lucide-react';
import Navbar from './Navbar';

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Project data - in a real app, this would come from an API or database
  const projectData = {
    1: {
      id: 1,
      name: "Trends prediction on the forex market (with LUSIS)",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Scipy"],
      image: "/src/assets/equity.png",
      category: "Machine Learning",
      theory: "Decision Trees, Random Forests",
      description: "This project focuses on predicting trends in the forex market using machine learning algorithms. The goal is to develop a robust model that can identify patterns and predict market movements with high accuracy.",
      objectives: [
        "Analyze historical forex data to identify patterns",
        "Implement decision tree and random forest algorithms",
        "Evaluate model performance using various metrics",
        "Create visualizations for trend analysis"
      ],
      methodology: "The project uses a combination of statistical analysis and machine learning techniques. We start with data preprocessing, followed by feature engineering, model training, and validation.",
      results: "The model achieved an accuracy of 78% on the test set, with a precision of 0.82 for upward trend predictions.",
      codeFiles: [
        { name: "data_preprocessing.py", description: "Data cleaning and preprocessing functions", language: "Python" },
        { name: "model_training.py", description: "Machine learning model training and validation", language: "Python" },
        { name: "visualization.py", description: "Data visualization and plotting functions", language: "Python" },
        { name: "main.py", description: "Main execution script", language: "Python" }
      ],
      reports: [
        { name: "Project_Report.pdf", description: "Comprehensive project documentation and results", size: "2.3 MB" },
        { name: "Technical_Analysis.pdf", description: "Detailed technical analysis and methodology", size: "1.8 MB" },
        { name: "Results_Presentation.pdf", description: "Presentation of findings and conclusions", size: "3.1 MB" }
      ],
      githubLink: "https://github.com/username/forex-prediction",
      liveDemo: "https://demo.forex-prediction.com"
    },
    2: {
      id: 2,
      name: "Hi!Pars Data Bootcamp",
      technologies: ["Pandas", "NumPy", "Scikit-learn", "Seaborn"],
      image: "/src/assets/hiParis.png",
      category: "Data Science",
      theory: "Data Analysis",
      description: "A comprehensive data science bootcamp project that covers the entire data analysis pipeline from data collection to insights generation.",
      objectives: [
        "Master data manipulation with Pandas and NumPy",
        "Implement machine learning algorithms with Scikit-learn",
        "Create compelling visualizations with Seaborn",
        "Complete end-to-end data analysis projects"
      ],
      methodology: "The bootcamp follows a hands-on approach with real-world datasets and practical exercises. Each module builds upon the previous one.",
      results: "Successfully completed 12 data analysis projects with an average accuracy of 85% across all machine learning models.",
      codeFiles: [
        { name: "data_analysis.ipynb", description: "Jupyter notebook with data analysis examples", language: "Python" },
        { name: "ml_models.py", description: "Machine learning model implementations", language: "Python" },
        { name: "visualization_examples.py", description: "Various plotting and visualization examples", language: "Python" }
      ],
      reports: [
        { name: "Bootcamp_Certificate.pdf", description: "Official completion certificate", size: "0.5 MB" },
        { name: "Project_Portfolio.pdf", description: "Collection of all completed projects", size: "4.2 MB" }
      ],
      githubLink: "https://github.com/username/data-bootcamp",
      liveDemo: null
    },
    3: {
      id: 3,
      name: "Machine Learning algorithms",
      technologies: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
      image: "/src/assets/coursera.jpeg",
      category: "ML Algorithms",
      theory: "Optimization",
      description: "Implementation and comparison of various machine learning algorithms with focus on optimization techniques and hyperparameter tuning.",
      objectives: [
        "Implement core ML algorithms from scratch",
        "Compare algorithm performance across different datasets",
        "Optimize hyperparameters using various techniques",
        "Analyze algorithm complexity and efficiency"
      ],
      methodology: "Each algorithm is implemented step by step, followed by performance testing and optimization. We use cross-validation and grid search for hyperparameter tuning.",
      results: "Successfully implemented 8 core algorithms with average improvement of 23% after optimization.",
      codeFiles: [
        { name: "linear_regression.py", description: "Linear regression implementation", language: "Python" },
        { name: "logistic_regression.py", description: "Logistic regression implementation", language: "Python" },
        { name: "decision_trees.py", description: "Decision tree algorithm", language: "Python" },
        { name: "optimization.py", description: "Optimization algorithms and techniques", language: "Python" }
      ],
      reports: [
        { name: "Algorithm_Comparison.pdf", description: "Detailed comparison of all implemented algorithms", size: "3.5 MB" },
        { name: "Optimization_Study.pdf", description: "Study on hyperparameter optimization techniques", size: "2.8 MB" }
      ],
      githubLink: "https://github.com/username/ml-algorithms",
      liveDemo: null
    },
    4: {
      id: 4,
      name: "Risk modeling on portfolios",
      technologies: ["Scipy-Stats", "NumPy", "Matplotlib", "Pandas"],
      image: "/src/assets/coursera.jpeg",
      category: "Risk Modeling",
      theory: "Stochastic algorithms - Monte-Carlo simulations, Importance sampling, Last particle analysis",
      description: "Advanced risk modeling project that implements various stochastic algorithms for portfolio risk assessment and optimization.",
      objectives: [
        "Implement Monte-Carlo simulation for portfolio risk",
        "Develop importance sampling techniques",
        "Apply last particle analysis for extreme risk scenarios",
        "Create comprehensive risk assessment framework"
      ],
      methodology: "The project uses stochastic processes and statistical methods to model portfolio risks. We implement multiple sampling techniques for robust risk estimation.",
      results: "Developed a risk model that captures 95% of extreme events with 30% faster computation than traditional methods.",
      codeFiles: [
        { name: "monte_carlo.py", description: "Monte-Carlo simulation implementation", language: "Python" },
        { name: "importance_sampling.py", description: "Importance sampling algorithms", language: "Python" },
        { name: "risk_metrics.py", description: "Risk calculation and metrics", language: "Python" }
      ],
      reports: [
        { name: "Risk_Model_Report.pdf", description: "Comprehensive risk modeling documentation", size: "5.1 MB" },
        { name: "Stochastic_Analysis.pdf", description: "Analysis of stochastic algorithms", size: "3.7 MB" }
      ],
      githubLink: "https://github.com/username/risk-modeling",
      liveDemo: null
    },
    5: {
      id: 5,
      name: "Multi-Objective evolutionary algorithms",
      technologies: ["Java", "JUnit", "Maven"],
      image: "/src/assets/coursera.jpeg",
      category: "Optimization",
      theory: "MOE, Optimisation algorithms",
      description: "Implementation of multi-objective evolutionary algorithms for solving complex optimization problems with multiple conflicting objectives.",
      objectives: [
        "Implement NSGA-II algorithm",
        "Develop Pareto front visualization",
        "Compare different MOEA approaches",
        "Apply to real-world optimization problems"
      ],
      methodology: "We implement evolutionary algorithms that can handle multiple objectives simultaneously, using techniques like non-dominated sorting and crowding distance.",
      results: "Successfully solved 5 multi-objective problems with average Pareto front coverage of 87%.",
      codeFiles: [
        { name: "NSGAII.java", description: "NSGA-II algorithm implementation", language: "Java" },
        { name: "Population.java", description: "Population management class", language: "Java" },
        { name: "Fitness.java", description: "Fitness evaluation functions", language: "Java" }
      ],
      reports: [
        { name: "MOEA_Study.pdf", description: "Study on multi-objective evolutionary algorithms", size: "4.6 MB" },
        { name: "Optimization_Results.pdf", description: "Results from various optimization problems", size: "3.2 MB" }
      ],
      githubLink: "https://github.com/username/moea",
      liveDemo: null
    },
    6: {
      id: 6,
      name: "Stochastic approach to solve differential equations",
      technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
      image: "/src/assets/coursera.jpeg",
      category: "Mathematics",
      theory: "Markov chains, Calculus",
      description: "Innovative approach to solving differential equations using stochastic methods and Markov chain Monte Carlo techniques.",
      objectives: [
        "Implement stochastic differential equation solvers",
        "Develop Markov chain Monte Carlo methods",
        "Compare with traditional numerical methods",
        "Analyze convergence properties"
      ],
      methodology: "We use stochastic processes and Markov chains to approximate solutions to differential equations, providing probabilistic interpretations of solutions.",
      results: "Developed a stochastic solver that achieves 92% accuracy with 40% faster computation than traditional finite difference methods.",
      codeFiles: [
        { name: "stochastic_solver.py", description: "Main stochastic solver implementation", language: "Python" },
        { name: "markov_chains.py", description: "Markov chain implementations", language: "Python" },
        { name: "differential_equations.py", description: "Differential equation definitions", language: "Python" }
      ],
      reports: [
        { name: "Stochastic_Methods.pdf", description: "Comprehensive study of stochastic methods", size: "3.9 MB" },
        { name: "Numerical_Comparison.pdf", description: "Comparison with traditional methods", size: "2.5 MB" }
      ],
      githubLink: "https://github.com/username/stochastic-solver",
      liveDemo: null
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'code', label: 'Code Files', icon: Code },
    { id: 'reports', label: 'Reports', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      {/* Header */}
      <div className="bg-blue-600 py-20 mt-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white font-medium text-sm">{project.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-xl text-blue-100 mb-6 max-w-3xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="lg:w-80">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Project Objectives</h3>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Methodology</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.methodology}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Results & Achievements</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.results}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Theory & Concepts</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.theory}</p>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Project Code Files</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.codeFiles.map((file, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Code className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-mono text-sm font-medium">{file.name}</span>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {file.language}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{file.description}</p>
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Project Reports & Documentation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.reports.map((report, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-red-600 mr-2" />
                        <span className="font-medium">{report.name}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{report.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{report.size}</span>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                          <Download className="w-4 h-4 inline mr-2" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
