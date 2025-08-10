import imgSO from "../assets/imgso.png";
import imgAbeille from "../assets/imgabeille_1.png";
import { Link } from "react-router-dom";
import React from "react";

const experiences = [
      {
        id: 1,
        poste: "Scientific Mediator",
        entreprise: "Association Science Ouverte",
        description: "Organized tailored workshops for middle and high school students, to promote scientific culture and critical thinking. Through hands-on activities like hackatons and escape games, I helped students develop a deeper understanding of scientific concepts and their applications.",
        image: imgSO
      },
      {
        id: 2,
        poste : "Intern in the models team",
        entreprise: "Abeille Assurances, ex Aviva France",
        description : "I develop models  to enhance the performances of the company's ESG. My main focus was on the calibration of the inflation curves, and to make sure the scenarios realistic and reflected market prices.",
        image: imgAbeille
      }
]


const Experiences = () => {
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img width={40} src={experience.image} alt={experience.poste} className="rounded-lg mb-4 
              w-full h-48 object-cover"/>
              <h3 className="text-2xl font-bold mb-2 text-white">{experience.poste}</h3>
              <p className="text-gray-400 mb-4">{experience.description}</p>
              <Link to = "/experiences" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel = "noopener norferrer"> Learn more ...</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
