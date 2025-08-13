import imgSO from "../assets/imgso.png";
import imgAbeille from "../assets/imgabeille_1.png";

export const experiencesData = [
  {
    id: 1,
    poste: "Scientific Mediator",
    entreprise: "Association Science Ouverte",
    periode: "2023 - 2024",
    lieu: "Dancy, France",
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
        title: "Hackathon 'Info Python'",
        description: "Organization of a 25-hour hackathon bringing together 50 high school students around environmental issues. The event focused on developing innovative solutions for sustainable development challenges through collaborative problem-solving and scientific methodology.",
        duration: "25 hours",
        tutor: "Suzanne Nguyenn, scientific mediator",
        technicalApproach: [
          "Design thinking methodology for problem identification",
          "Agile project management with student teams",
          "Scientific validation of proposed solutions"
        ],
        deliverables: [
          "Student project presentations and documentation",
          "Evaluation framework for solution assessment",
          "Post-event impact analysis report"
        ]
      },
      {
        title: "Escape Game 'A la recherche du javelot'",
        description: "Implementation of a scientific escape game with mathematical puzzles, helping students to understand the importance of mathematical thinking in daily life.",
        duration: "1 week",
        tutor: "Suzanne Nguyenn, scientific mediator",
        technicalApproach: [
          "Interactive puzzle design and testing",
          "Narrative development for engagement",
          "Scientific puzzle collection and solutions"
        ],
        deliverables: [
          "Complete escape game kit with instructions",
          "Scientific puzzle collection and solutions"
        ]
      },
      {
        title: "Workshops 'Maths en Jeans'",
        description: "Development of research workshops to make mathematical research accessible and attractive. These interactive sessions used games, puzzles, and real-world applications to demystify mathematical concepts.",
        duration: "4 months",
        tutor: "François Gaudin, X1976",
        technicalApproach: [
          "Hands-on mathematical activities design",
          "Progressive difficulty progression",
          "Real-world application integration",
          "Assessment and feedback mechanisms"
        ],
        deliverables: [
          "Series of 12 mathematical workshop modules",
          "Activity materials and resources",
          "Presentations on polyominoes by the students"
        ]
      }
    ],
    skills: [
      "Pedagogy",
      "Group facilitation",
      "Scientific communication",
      "Creativity",
      "Adaptability"
    ],
    technologies: [
      "Digital tools",
      "Multimedia supports",
      "Collaborative platforms"
    ],
    achievements: [
      "Training of 10 students in mathematical research methods"
    ]
  },
  {
    id: 2,
    poste: "Statistics and results assistant in the models team",
    entreprise: "Abeille Assurances, ex Aviva France",
    periode: "09/06/2025 - 05/09/2025",
    lieu: "Bois-Colombes, France",
    description: "I develop models to enhance the performances of the company's ESG. My main focus was on the calibration of the inflation curves, and to make sure the scenarios realistic and coherent with the actual models predictions.",
    image: imgAbeille,
    companyDescription: "Abeille Assurances, formerly Aviva France, is one of the leading insurance companies in France. Specializing in life insurance, savings and retirement, it manages more than 100 billion euros in assets and serves more than 2 million customers.",
    responsibilities: [
      "Development of ESG (Economic Scenario Generator) models to improve performance",
      "Calibration of inflation curves to ensure consistency with market prices",
      "Modeling default risk",
      "Validation and testing of the robustness of economic scenarios",
      "Collaboration with the modeling team for process optimization"
    ],
    projects: [
      {
        title: "Default risk modeling",
        description: "Development of a default risk model to enhance the performances of the company's ESG. The model aimed to enhance risk-adjusted returns while maintaining compliance with regulatory requirements.",
        duration: "4 months",
        tutor: "Arthur Huynh - Actuary",
        technicalApproach: [
          "Scientific review of the models for the default risk",
          "Modeling of the default risk",
          "Validation and testing of the robustness of the model"
        ],
        deliverables: [
          "Implemented code for the default risk model (LMN)",
          "Risk factor analysis and calibration results"
        ]
      },
      {
        title: "Inflation Curve Calibration model",
        description: "Implementation of an automatic inflation curve calibration system to ensure consistency with market prices and improve the accuracy of economic scenario generation for risk management purposes.",
        duration: "3 months",
        tutor: "Arthur Huynh - Actuary",
        technicalApproach: [
          "Scientific review of the models for the inflation curve calibration",
          "Modeling of the inflation curve",
          "Validation and testing of the robustness of the model"
        ],
        deliverables: [
          "Implemented code for the inflation curve calibration model (LMN)",
          "Calibration accuracy metrics and validation"
        ]
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
      "Python (NumPy, Pandas, SciPy, lmfit)",
      "Excel",
    ],
    achievements: [
      "30% reduction in inflation curve calibration time",
      "40% reduction in default risk model calibration time",
      "2% increase on the Solvability II ratio"
    ]
  }
];

export const getExperienceById = (id) => {
  return experiencesData.find(exp => exp.id === parseInt(id));
};
