import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import equityImage from "../assets/equity.png";
import todolist from "../assets/todolist.png";
import hiParisImage from "../assets/hiparis.png";
import courseraImage from "../assets/coursera.jpeg";

const projects = [
  {
    id: 1,
    name: "Trends prediction on the forex market (with LUSIS)",
    technologies: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, seaborn, scipy",
    image: equityImage,
    learnMore: "projects/equity",
    thery:" Decision Trees, Random Forests"
  },
  {
    id: 2,
    name: "Hi!Pars Data Bootcamp",
    technologies: "Pandas, numpy, scikit-learn, seaborn",
    image: hiParisImage,
    learnMore: "projects/hiparis",
    theory : "None"
  },
  {
    id: 3,
    name: "Machine Learning algorithms",
    technologies: "Scikit-Learn, ...",
    image: courseraImage,
    learnMore: "projects/mlalgo",
    theory: "Optimization, "
  },
  {id:3,
   name: "Risk modeling on portfolios",
   technologies: "Scipy-Stats, numpy, matplotlib",
   image: courseraImage,
   learnMore: "projects/modal",
   theory: "Stochastic algorithms - Monte-Carlo simulations, Importance sampling, Last particle analysis"
  },
  {id:4,
   name: "Multi-Objective evolutionary algorithms",
   image: courseraImage,
   thechnologies: "Java",
   learnMore:"projects/moe",
   theory: "MOE, Optimisation algorithms "
  },
  {id:5,
   name: 'Stochastic approach to solve differential equations',
   image: courseraImage,
   technologies: "Python",
   learnMore:"projects/se",
   theory:"Markov chains, Calculus"
  }

];

const Projects = () => {
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover"/>
              <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-400 mb-4">Technologies : <br/>{project.technologies}</p>
              <p className="font-bold mb-4 text-white">Theory used : {project.theory}</p>
              <a href={project.learnMore} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Learn more ...</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
