import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Brain, TrendingUp, ArrowLeft } from "lucide-react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import equityImage from "../assets/equity.png";
import todolist from "../assets/todolist.png";
import hiParisImage from "../assets/hiParis.png";
import courseraImage from "../assets/coursera.jpeg";

const projects = [
  {
    id: 1,
    name: "Trends prediction on the forex market (with LUSIS)",
    technologies: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, seaborn, scipy",
    image: equityImage,
    learnMore: "projects/equity",
    theory: "Decision Trees, Random Forests",
    category: "Machine Learning",
    color: "blue",
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
    liveDemo: null
  },
  {
    id: 2,
    name: "Hi!Pars Data Bootcamp",
    technologies: "Pandas, numpy, scikit-learn, seaborn",
    image: hiParisImage,
    learnMore: "projects/hiparis",
    theory: "Data Analysis",
    category: "Data Science",
    color: "red",
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
  {
    id: 3,
    name: "Machine Learning algorithms",
    technologies: "Scikit-Learn, NumPy, Pandas, Matplotlib",
    image: courseraImage,
    learnMore: "projects/mlalgo",
    theory: "Optimization",
    category: "ML Algorithms",
    color: "blue",
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
  {
    id: 4,
    name: "Risk modeling on portfolios",
    technologies: "Scipy-Stats, numpy, matplotlib",
    image: courseraImage,
    learnMore: "projects/modal",
    theory: "Stochastic algorithms - Monte-Carlo simulations, Importance sampling, Last particle analysis",
    category: "Risk Modeling",
    color: "red",
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
  {
    id: 5,
    name: "Multi-Objective evolutionary algorithms",
    technologies: "Java, JUnit, Maven",
    image: courseraImage,
    learnMore: "projects/moe",
    theory: "MOE, Optimisation algorithms",
    category: "Optimization",
    color: "blue",
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
  {
    id: 6,
    name: 'Stochastic approach to solve differential equations',
    technologies: "Python, NumPy, SciPy, Matplotlib",
    image: courseraImage,
    learnMore: "projects/se",
    theory: "Markov chains, Calculus",
    category: "Mathematics",
    color: "red",
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
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <Link 
            to="/" 
            className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">All Projects</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore my complete portfolio of projects in machine learning, data science, optimization, and mathematics.
              Each project represents a unique approach to solving complex problems.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const isBlueTheme = project.color === "blue";
              const primaryGradient = isBlueTheme 
                ? "from-blue-500 to-blue-600" 
                : "from-red-500 to-red-600";
              const secondaryGradient = isBlueTheme 
                ? "from-blue-600 to-blue-700" 
                : "from-red-600 to-red-700";

              return (
                <div key={project.id} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl hover:shadow-2xl 
                  transform transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  
                  {/* Image with category badge */}
                  <div className="relative mb-6">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="rounded-xl w-full h-48 object-cover shadow-lg"
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${primaryGradient} text-white rounded-full text-xs font-semibold shadow-lg`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Project content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        Technologies
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.technologies}
                    </p>
                  </div>

                  {/* Theory used */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Brain className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        Theory
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.theory}
                    </p>
                  </div>

                  {/* View Details button */}
                  <Link 
                    to={`/project/${project.id}`}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${primaryGradient} hover:${secondaryGradient} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Statistics section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {projects.length}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Projects completed</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                6
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Areas of expertise</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
