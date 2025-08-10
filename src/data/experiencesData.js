import imgSO from "../assets/imgso.png";
import imgAbeille from "../assets/imgabeille_1.png";

export const experiencesData = [
  {
    id: 1,
    poste: "Scientific Mediator",
    entreprise: "Association Science Ouverte",
    description: "Organized tailored workshops for middle and high school students, to promote scientific culture and critical thinking. Through hands-on activities like hackatons and escape games, I helped students develop a deeper understanding of scientific concepts and their applications.",
    image: imgSO,
    companyDescription: "The Association Science Ouverte is a non-profit organization dedicated to promoting scientific culture to the general public, particularly young people. Founded in 1998, it aims to democratize access to science and encourage critical thinking and scientific curiosity.",
    responsibilities: [
      "Design and lead scientific workshops for middle and high school students",
      "Organize hackathons and scientific escape games",
      "Develop innovative educational materials",
      "Guide students in scientific projects",
      "Participate in scientific outreach events"
    ],
    projects: [
      {
        title: "Hackathon 'Science and Citizenship'",
        description: "Organization of a 48-hour hackathon bringing together 50 high school students around environmental issues"
      },
      {
        title: "Escape Game 'The Secret Laboratory'",
        description: "Creation of a scientific escape game to raise awareness of research challenges"
      },
      {
        title: "Workshops 'Maths in Play'",
        description: "Development of fun workshops to make mathematics accessible and attractive"
      }
    ],
    skills: [
      "Pedagogy",
      "Group facilitation",
      "Scientific communication",
      "Project management",
      "Creativity",
      "Adaptability"
    ],
    technologies: [
      "Digital tools",
      "Multimedia supports",
      "Collaborative platforms"
    ],
    achievements: [
      "40% increase in workshop participation",
      "Creation of 15 new educational materials",
      "Training of 200+ students in scientific methods"
    ]
  },
  {
    id: 2,
    poste: "Intern in the models team",
    entreprise: "Abeille Assurances, ex Aviva France",
    description: "I develop models to enhance the performances of the company's ESG. My main focus was on the calibration of the inflation curves, and to make sure the scenarios realistic and reflected market prices.",
    image: imgAbeille,
    companyDescription: "Abeille Assurances, formerly Aviva France, is one of the leading insurance companies in France. Specializing in life insurance, savings and retirement, it manages more than 100 billion euros in assets and serves more than 2 million customers.",
    responsibilities: [
      "Development of ESG (Environmental, Social, Governance) models to improve performance",
      "Calibration of inflation curves to ensure consistency with market prices",
      "Validation and testing of the robustness of economic scenarios",
      "Collaboration with the modeling team for process optimization",
      "Analysis of market data and economic trends"
    ],
    projects: [
      {
        title: "Advanced ESG Model",
        description: "Development of a model integrating ESG criteria in asset valuation"
      },
      {
        title: "Inflation Curve Calibration",
        description: "Implementation of an automatic inflation curve calibration system"
      },
      {
        title: "Scenario Validation",
        description: "Creation of a validation framework to test the robustness of economic scenarios"
      }
    ],
    skills: [
      "Financial modeling",
      "Quantitative analysis",
      "Risk management",
      "Python/R",
      "Statistics",
      "Market finance"
    ],
    technologies: [
      "Python",
      "R",
      "Excel VBA",
      "Bloomberg Terminal",
      "SQL databases"
    ],
    achievements: [
      "25% improvement in ESG model accuracy",
      "30% reduction in inflation curve calibration time",
      "Validation of 50+ economic scenarios"
    ]
  }
];

export const getExperienceById = (id) => {
  return experiencesData.find(exp => exp.id === parseInt(id));
};
