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
        description: "Organization of a 48-hour hackathon bringing together 50 high school students around environmental issues. The event focused on developing innovative solutions for sustainable development challenges through collaborative problem-solving and scientific methodology.",
        duration: "48 hours",
        tutor: "Dr. Marie Dubois - Head of Educational Programs",
        technicalApproach: [
          "Design thinking methodology for problem identification",
          "Agile project management with student teams",
          "Scientific validation of proposed solutions",
          "Integration of environmental science principles"
        ],
        deliverables: [
          "Complete hackathon event planning and execution",
          "Student project presentations and documentation",
          "Evaluation framework for solution assessment",
          "Post-event impact analysis report"
        ]
      },
      {
        title: "Escape Game 'The Secret Laboratory'",
        description: "Creation of a scientific escape game to raise awareness of research challenges. This immersive experience combined scientific puzzles with storytelling to engage students in critical thinking and problem-solving.",
        duration: "3 months",
        tutor: "Prof. Jean-Luc Martin - Science Communication Specialist",
        technicalApproach: [
          "Gamification of scientific concepts",
          "Interactive puzzle design and testing",
          "Narrative development for engagement",
          "Accessibility considerations for diverse audiences"
        ],
        deliverables: [
          "Complete escape game kit with instructions",
          "Scientific puzzle collection and solutions",
          "Facilitator guide and training materials",
          "Student feedback and learning outcomes analysis"
        ]
      },
      {
        title: "Workshops 'Maths in Play'",
        description: "Development of fun workshops to make mathematics accessible and attractive. These interactive sessions used games, puzzles, and real-world applications to demystify mathematical concepts.",
        duration: "6 months",
        tutor: "Dr. Sophie Bernard - Mathematics Education Researcher",
        technicalApproach: [
          "Hands-on mathematical activities design",
          "Progressive difficulty progression",
          "Real-world application integration",
          "Assessment and feedback mechanisms"
        ],
        deliverables: [
          "Series of 12 mathematical workshop modules",
          "Activity materials and resources",
          "Teacher training program",
          "Student engagement metrics and outcomes"
        ]
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
        title: "Advanced ESG Model Development",
        description: "Development of a comprehensive ESG model integrating environmental, social, and governance criteria in asset valuation and portfolio optimization. The model aimed to enhance risk-adjusted returns while maintaining compliance with regulatory requirements.",
        duration: "4 months",
        tutor: "Pierre Moreau - Senior Quantitative Analyst",
        technicalApproach: [
          "Multi-factor ESG scoring methodology",
          "Risk factor integration and correlation analysis",
          "Portfolio optimization with ESG constraints",
          "Backtesting and validation frameworks"
        ],
        deliverables: [
          "ESG model specification and documentation",
          "Risk factor analysis and calibration results",
          "Portfolio optimization algorithm implementation",
          "Performance validation and backtesting report"
        ]
      },
      {
        title: "Inflation Curve Calibration System",
        description: "Implementation of an automatic inflation curve calibration system to ensure consistency with market prices and improve the accuracy of economic scenario generation for risk management purposes.",
        duration: "3 months",
        tutor: "Isabelle Leroy - Head of Risk Modeling",
        technicalApproach: [
          "Market data integration and preprocessing",
          "Curve fitting algorithms and optimization",
          "Real-time calibration and validation",
          "Scenario consistency checks and adjustments"
        ],
        deliverables: [
          "Automated calibration system implementation",
          "Calibration accuracy metrics and validation",
          "Integration with existing risk management tools",
          "User documentation and training materials"
        ]
      },
      {
        title: "Economic Scenario Validation Framework",
        description: "Creation of a comprehensive validation framework to test the robustness of economic scenarios and ensure they accurately reflect market conditions and regulatory requirements.",
        duration: "2 months",
        tutor: "Thomas Durand - Risk Management Director",
        technicalApproach: [
          "Statistical validation methodologies",
          "Stress testing and sensitivity analysis",
          "Regulatory compliance verification",
          "Documentation and audit trail creation"
        ],
        deliverables: [
          "Validation framework specification and implementation",
          "Testing results and compliance documentation",
          "Process automation and monitoring tools",
          "Audit trail and reporting templates"
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
