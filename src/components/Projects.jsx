import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Brain, TrendingUp } from "lucide-react";
import AnimatedStats from "./AnimatedStats";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import equityImage from "../assets/equity.png";
import todolist from "../assets/todolist.png";
import hiParisImage from "../assets/hiParis.png";
import courseraImage from "../assets/coursera.jpeg";

const projects = [
  {
    id: 'equity-prediction',
    name: "Trends prediction on the forex market (with LUSIS)",
    technologies: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, seaborn, scipy",
    image: equityImage,
    learnMore: "projects/equity",
    theory: "Decision Trees, Random Forests",
    category: "Machine Learning",
    color: "blue"
  },
  {
    id: 'hiparis-bootcamp',
    name: "Hi!Pars Data Bootcamp",
    technologies: "Pandas, numpy, scikit-learn, seaborn",
    image: hiParisImage,
    learnMore: "projects/hiparis",
    theory: "Data Analysis",
    category: "Data Science",
    color: "red"
  },
  {
    id: 'ml-algorithms',
    name: "Machine Learning algorithms",
    technologies: "Scikit-Learn, ...",
    image: courseraImage,
    learnMore: "projects/mlalgo",
    theory: "Optimization",
    category: "ML Algorithms",
    color: "blue"
  },
  {
    id: 'risk-modeling-project',
    name: "Risk modeling on portfolios",
    technologies: "Scipy-Stats, numpy, matplotlib",
    image: courseraImage,
    learnMore: "projects/modal",
    theory: "Stochastic algorithms - Monte-Carlo simulations, Importance sampling, Last particle analysis",
    category: "Risk Modeling",
    color: "red"
  },
  {
    id: 'moea-optimization',
    name: "Multi-Objective evolutionary algorithms",
    image: courseraImage,
    technologies: "Java",
    learnMore: "projects/moe",
    theory: "MOE, Optimisation algorithms",
    category: "Optimization",
    color: "blue"
  },
  {
    id: 'stochastic-solver',
    name: 'Stochastic approach to solve differential equations',
    image: courseraImage,
    technologies: "Python",
    learnMore: "projects/se",
    theory: "Markov chains, Calculus",
    category: "Mathematics",
    color: "red"
  }
];

const Projects = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" id="project">
      {/* Banner */}
      <div className="bg-purple-600 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover my projects in machine learning, data science and optimization. 
            Each project represents a unique approach to solving complex problems.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {projects.length} innovative projects
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link 
              to="/projects"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-white/30"
            >
              View all detailed projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects content */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Projects grid */}
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
                    <div className={`absolute top-3 right-3 px-3 py-1 text-white rounded-full text-xs font-semibold shadow-lg ${
                      isBlueTheme ? 'bg-blue-600' : 'bg-red-600'
                    }`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Project content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {project.name}
                  </h3>
                  
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

                  {/* Learn More button */}
                  <Link 
                    to={`/school-project/${project.id}`}
                    className={`inline-flex items-center justify-center w-full text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                      isBlueTheme 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Statistics section */}
          <div className="mt-20">
            <AnimatedStats
              stats={[
                {
                  key: 'projects',
                  value: projects.length,
                  label: 'Projects completed',
                  icon: Code,
                  iconBg: 'bg-blue-600',
                  description: 'Innovative solutions delivered'
                },
                {
                  key: 'expertise',
                  value: 6,
                  label: 'Areas of expertise',
                  icon: Brain,
                  iconBg: 'bg-red-600',
                  description: 'From ML to Finance'
                },
                {
                  key: 'success',
                  value: 100,
                  suffix: '%',
                  label: 'Success rate',
                  icon: TrendingUp,
                  iconBg: 'bg-gray-600',
                  description: 'All projects completed'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
