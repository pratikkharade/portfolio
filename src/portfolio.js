/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pratik's Portfolio",
  description: "Innovative Software Engineer creating intuitive user experiences! " +
    "With a Master’s in Computer Science and front-end expertise, I blend creativity " +
    "and technology to build seamless applications that empower users to thrive in " +
    "programming. Let’s code a better future!",
  og: {
    title: "Pratik Kharade's Portfolio",
    type: "website",
    // url: "http://deepakdhole.com/"
  }
};

//Home Page
const greeting = {
  title: "Pratik Kharade",
  logo_name: "PratikKharade",
  pronouns: "he/him",
  image_path: "pratik.jpeg",
  subTitle: "Innovative Software Engineer creating intuitive user experiences! With a " +
    "Master’s in Computer Science and front-end expertise, I blend creativity and " +
    "technology to build seamless applications that empower users to thrive in programming. " +
    "Let’s code a better future!",
  githubProfile: "https://github.com/pratikkharade/",
  resumeLink: "https://drive.google.com/file/d/1MkNqg1n4A4aOu3hyRs_-0ZDqEJpkcIAt/view?usp=sharing"
  // portfolio_repository: "https://drive.google.com/file/d/1elcQjou66nCiRu8AgqwMvmx-4QsibFln/view?usp=sharing",
  
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/pratikkharade/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717" // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kharadepratik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5" // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kharadepratik6@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836" // Reference https://simpleicons.org/?q=gmail
  }
];

// Skills for Home Page
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "data_science.svg",
      skills: [
        "⚡ Designing dashboards to provide strategic insigts from consumer lending data",
        "⚡ Crafting robust models for diverse deep learning and statistical applications",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "Power Bi",
          imageSrc: "powerbi.png"
        }
      ]
    },
    {
      title: "Data Engineering & Pipelines",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing robust pipelines that extract, load, and transform data",
        "⚡ Achieving faster data transmission through techniques like micro-batching and parallel processing",
        "⚡ Securing data transfer using microservice-based architecture",
        "⚡ Simplifying database deployment using integration of Oracle Wallet and Jenkins"
      ],
      softwareSkills: [
        {
          skillName: "SQL Server",
          imageSrc: "mssql.png",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "Apache Spark",
          imageSrc: "spark.png",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "Jenkins",
          imageSrc: "jenkins.png",
          style: {
            color: "#1572B6"
          }
        }
      ]
    },
    {
      title: "Software Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing and implementing web applications",
        "⚡ Experience working with micro-services architecture",
        "⚡ Implemented several data migration projects using Java and Spring Boot"
      ],
      softwareSkills: [
        {
          skillName: "Java",
          imageSrc: "java-logo.png",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Oracle SQL",
          imageSrc: "oracle.svg",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "R Programming Language",
          imageSrc: "R_logo.png",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Microsoft SQL Server",
          imageSrc: "mssql.png",
          style: {
            color: "#000000"
          }
        },
        {
          skillName: "InellIJ",
          imageSrc: "IntelliJ.png",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

// Education Page
const education = {
  title: "Education",
  description:
    "Equipped with a well-rounded education for success in technology and information management.",
  // avatar_image_path: "projects_image.svg",
  degrees: [
    {
      title: "University of Utah, Salt Lake City",
      subtitle: "M.S. in Computer Science",
      logo_path: "uou.png",
      alt_name: "UoU",
      duration: "2022 - 2024",
      descriptions: [
        "Rewarded Graduate Assistantship along with tuition waiver"
      ],
      courses: [
        "Graduate Algorithms",
        "Computer Architecture",
        "Operating Systems",
        "Machine Learning",
        "Data Mining",
        "Manage Data for & with ML",
        "Business Aspects of Security & Privacy"
      ],
      cert_link: "https://drive.google.com/file/d/1tpR9w8Mb9wCULuK0GF5FmlQECGaOS_yP/view?usp=sharing",
      website_link: "http://utah.edu"
    },
    {
      title: "Vishwakarma Institute of Technology, Pune",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vit_logo.png",
      alt_name: "VIT Pune",
      duration: "2015 - 2019",
      descriptions: [
        "Rewarded Graduate Assistantship along with tuition waiver"
      ],
      courses: [
        "Operating Systems",
        "Computer Organization",
        "Data Structures",
        "Artificial Intelligence",
        "Internet of Things",
        "Computer Networks",
        'Web Technologies'
      ],
      cert_link: "https://drive.google.com/file/d/1Qi4RgY_r6V6D8UoJwYkjoVmtXijHbTL-/view?usp=sharing",
      website_link: "http://vit.edu"
    }
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "🚀 Seasoned professional with expertise in developing scalable AI models, " +
    "executing complex data engineering projects, and optimizing critical KPIs " +
    "for impactful business outcomes.",
  // header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Researcher",
          company: "University of Utah",
          company_url: "https://www.utah.edu/",
          logo_path: "uou.png",
          duration: "July 2024 - Present",
          location: "Salt Lake City, UT",
          description: [
            "Leading a research project to create an interactive learning platform " +
            "using Generative AI (ChatGPT) to enhance coding education, targeting " +
            "a 30% improvement in coding proficiency.",
            "Developing the front end with React, JavaScript, HTML/CSS, and integrating " +
            "Flask for running Python scripts.",
            "Managing MySQL databases to streamline data handling, contributing to a 25% " +
            "reduction in development time and a 20% increase in project efficiency, while " +
            "guiding undergraduate students through development, experimentation, and analysis."
          ],
          color: "#9b1578"
        },
        {
          title: "Graduate Teaching Assistant",
          company: "University of Utah",
          company_url: "https://www.utah.edu/",
          logo_path: "uou.png",
          duration: "Aug 2022 - May 2024",
          location: "Salt Lake City, UT",
          description: [
            "Served as a Teaching Assistant for 4 semesters in undergraduate courses " +
            "focused on Python, grading assignments and providing constructive feedback " +
            "to help students enhance their coding and problem-solving skills.",
            "Held weekly office hours to assist students with course material, clarify " +
            "doubts, and guide them through challenging concepts, fostering a deeper " +
            "understanding of Python programming.",
            "Led lab sessions, facilitating hands-on learning and practical application " +
            "of theoretical concepts, while creating a collaborative environment that " +
            "encouraged student engagement and teamwork."
          ],
          color: "#9b1578"
        },
        {
          title: "Software Engineer",
          company: "eQ Technologic",
          company_url: "https://www.1eq.com/",
          logo_path: "eq.png",
          duration: "July 2019 - June 2024",
          location: "Pune, India",
          description: [
            "Directed the design, deployment, and maintenance of eQ Technologic's Data " +
            "Visualization suite, improving real-time enterprise data analysis through " +
            "JavaScript/jQuery, React JS, HTML, and CSS, leading to a 35% boost in user " +
            "engagement and a 25% reduction in data processing time.",
            "Spearheaded the creation and refinement of key UI features, elevating user " +
            "satisfaction by 25 % and driving a 20 % increase in daily active users.",
            "Assessed and compared various JavaScript frameworks, recommending a migration " +
            "strategy that enhanced technological agility, reduced development time by 25 %, " +
            "and significantly improved product scalability."
          ],
          color: "#9b1578"
        },
        {
          title: "System Software Intern",
          company: "Nvidia Corporation",
          company_url: "https://www.nvidia.com/",
          logo_path: "nvidia.svg",
          duration: "July 2018 - April 2019",
          location: "Pune, India",
          description: [
            "Designed, developed, and implemented web - based automation tools for " +
            "developers at Nvidia, utilizing JavaScript(Frontend), Python(Backend), " +
            "and HTML5 / CSS3.",
            "Performed comprehensive analysis and standardized power consumption across " +
            "15 GPU configurations and 10 testing scenarios, improving performance " +
            "consistency by 20 % through Python scripting.",
            "Debugged and resolved around 15 resource management issues using C, enhancing " +
            "overall system reliability."
          ],
          color: "#9b1578"
        },
        {
          title: "System Software Intern",
          company: "Reliance Industries Limited",
          company_url: "https://www.ril.com/",
          logo_path: "ril.png",
          duration: "June 2018 - July 2018",
          location: "Nagothane, India",
          description: [
            "Architected and developed a comprehensive Inventory Management System using C# " +
            "and ASP.NET, demonstrating strong system design and software engineering skills.",
            "Led project execution, achieving a 30% boost in inventory tracking efficiency."
          ],
          color: "#9b1578"
        }
      ]
    }
  ]
};

// Projects Page
const projects = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to " +
    "create Data Science projects and deploy them to web applications using cloud infrastructure.",
  data: [
    {
      // "id": "265fd6f5fe5244c3952448b24987ed0f651442ca",
      name: "Security Evaluation of Web Application Frameworks",
      createdAt: "2022-03-13T20:41:33Z",
      // duration: "Jan 2024 – May 2024",
      startDate: "Jan 2024",
      endDate: "May 2024",
      url: "https://github.com/deepakdhole777/business-analytics-of-convenient-food-mart",
      description: "Assessed the security of prominent web application frameworks.",
      description1: "Engaged in a project assessing the security of prominent web " +
        "application frameworks like Django (Python), JavaScript frameworks (Express.js," +
        " Angular.js), and Ruby on Rails, aimed at fortifying defenses against cyber " +
        "threats across sectors including finance, healthcare, and e-commerce.",
      // "isFork": false,
      languages: [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Machine Learning",
          "iconifyClass": "eos-icons:machine-learning"
        },
        {
          "name": "Scikit Learn",
          "iconifyClass": "devicon:scikitlearn"
        },
        {
          "name": "Data Analysis",
          "iconifyClass": "streamline:money-graph-analytics-business-product-graph-data-chart-analysis"
        }
      ]
    },
    {
      // "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Sentiment Analysis of Movies",
      // "createdAt": "2020-03-06T16:26:54Z",
      startDate: "Jan 2023",
      endDate: "May 2023",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      description: "Designed and developed a sentiment analysis model, optimizing " +
        "preprocessing, merging datasets, and fine-tuning hyperparameters, resulting " +
        "in a 15% increase in accuracy and a 20% reduction in training time across " +
        "multiple classifiers.",
      // "isFork": false,
      languages: [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "REST API",
          "iconifyClass": "dashicons:rest-api"
        }
      ]
    },
    {
      // "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Formula 1 Race Outcomes – Analysis and Predictions",
      // "createdAt": "2020-03-06T16:26:54Z",
      startDate: "Jan 2023",
      endDate: "May 2023",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      description: "Collected and analyzed Formula 1 race data to build a predictive " +
        "model for forecasting race outcomes, utilizing Machine Learning and Data " +
        "Mining techniques such as Regression, Clustering, and Gradient Descent, " +
        "achieving 97% accuracy.",
      // "isFork": false,
      languages: [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "REST API",
          "iconifyClass": "dashicons:rest-api"
        }
      ]
    },
    {
      // "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Power Profiling of Nvidia GPUs",
      // "createdAt": "2020-03-06T16:26:54Z",
      startDate: "Jan 2019",
      endDate: "May 2019",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      description: "Developed Python scripts to collect and analyze power " + 
        "consumption data across 15 GPU configurations and 10 testing scenarios, " +
        "identifying optimization strategies that reduced power consumption " +
        "disparities by 25%.",
      // "isFork": false,
      languages: [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "REST API",
          "iconifyClass": "dashicons:rest-api"
        }
      ]
    },
    {
      // "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Sorting Algorithms using Parallel Processing",
      // "createdAt": "2020-03-06T16:26:54Z",
      startDate: "Jan 2018",
      endDate: "May 2018",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      description: "Executed sorting algorithms on a substantial dataset of one " +
        "million items, leveraging Parallel Processing on CUDA to enhance computational " +
        "efficiency, resulting in a 40% reduction in response time.",
      // "isFork": false,
      languages: [
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "REST API",
          "iconifyClass": "dashicons:rest-api"
        }
      ]
    },
    // {
    //   "id": "R_kgDOG0_8uQ",
    //   "name": "airbnb-perfect-rating-score-prediction",
    //   "createdAt": "2022-02-11T14:50:20Z",
    //   "url": "https://github.com/deepakdhole777/airbnb-perfect-rating-score-prediction",
    //   "description": "A machine learning utility to predict whether the Airbnb listing will get a 5 star rating from the user.",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "R Programming",
    //       "iconifyClass": "logos:r-lang"
    //     },
    //     {
    //       "name": "Machine Learning",
    //       "iconifyClass": "eos-icons:machine-learning"
    //     },
    //     {
    //       "name": "Data Analysis",
    //       "iconifyClass": "streamline:money-graph-analytics-business-product-graph-data-chart-analysis"
    //     }
    //   ]
    // },
    // {
    //   "id": "R_kgDOGcPKSQ",
    //   "name": "movie-recommendation-powerbi-dashboard",
    //   "createdAt": "2021-11-26T17:56:07Z",
    //   "url": "https://github.com/deepakdhole777/movie-recommendation-powerbi-dashboard",
    //   "description": "Created a movie recommendation dashboard using Power BI",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "Data Analysis",
    //       "iconifyClass": "streamline:money-graph-analytics-business-product-graph-data-chart-analysis"
    //     },
    //     {
    //       "name": "Power BI",
    //       "iconifyClass": "logos:microsoft-power-bi"
    //     }
    //   ]
    // },
    // {
    //   "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   "name": "masterPortfolio",
    //   "createdAt": "2020-03-06T16:26:54Z",
    //   "url": "https://github.com/deepakdhole777/masterPortfolio",
    //   "description": "🔥 The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "HTML",
    //       "iconifyClass": "logos-html-5"
    //     },
    //     {
    //       "name": "CSS",
    //       "iconifyClass": "logos-css-3"
    //     },
    //     {
    //       "name": "JavaScript",
    //       "iconifyClass": "logos-javascript"
    //     },
    //     {
    //       "name": "Dockerfile",
    //       "iconifyClass": "simple-icons:docker"
    //     }
    //   ]
    // },
    // {
    //   "id": "MDEwOlJlcG9zaXRvcnkzMjU5NDM1MTE=",
    //   "name": "missing-knob-detection",
    //   "createdAt": "2021-01-01T08:31:51Z",
    //   "url": "https://github.com/deepakdhole777/missing-knob-detection",
    //   "description": "A computer vision based utility to detect knobs from convery belt.",
    //   "isFork": false,
    //   "languages": [
    //     {
    //       "name": "Python",
    //       "iconifyClass": "logos-python"
    //     },
    //     {
    //       "name": "Machine Learning",
    //       "iconifyClass": "eos-icons:machine-learning"
    //     },
    //     {
    //       "name": "Open CV",
    //       "iconifyClass": "logos:opencv"
    //     }
    //   ]
    // }
  ]
  // avatar_image_path: "projects_image.svg",
};

// My Skills Page
const mySkills = {
  title: "My Skills",
  description: " My Skills placeholder",
  data: [
    {
      category: "Programming",
      description: "My programming skills",
      skills: [
        {
          "name": "C",
          "iconifyClass": "logos-python"
        },
        {
          "name": "C++",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Java",
          "iconifyClass": "logos-python"
        }
      ]
    },
    {
      category: "Front End Development",
      description: "My Frond End skills",
      skills: [
        {
          "name": "JavaScript",
          "iconifyClass": "logos-python"
        },
        {
          "name": "jQuery",
          "iconifyClass": "logos-python"
        },
        {
          "name": "React",
          "iconifyClass": "logos-python"
        },
        {
          "name": "HTML",
          "iconifyClass": "logos-python"
        },
        {
          "name": "CSS",
          "iconifyClass": "logos-python"
        },
        {
          "name": "TypeScript",
          "iconifyClass": "logos-python"
        },
        {
          "name": "SASS/SCSS",
          "iconifyClass": "logos-python"
        }
      ]
    },
    {
      category: "Back End Development",
      description: "My Back End skills",
      skills: [
        {
          "name": "PHP",
          "iconifyClass": "logos-python"
        },
        {
          "name": "MySQL",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Python",
          "iconifyClass": "logos-python"
        },
        {
          "name": "MongoDB",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Oracle",
          "iconifyClass": "logos-python"
        },
        {
          "name": "PostgreSQL",
          "iconifyClass": "logos-python"
        },
        {
          "name": "ASP.NET",
          "iconifyClass": "logos-python"
        }
      ]
    },
    {
      category: "Machine Learning",
      description: "My ML skills",
      skills: [
        {
          "name": "Pandas",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Apache Spark",
          "iconifyClass": "logos-python"
        },
        {
          "name": "NumPy",
          "iconifyClass": "logos-python"
        },
        {
          "name": "PyTorch",
          "iconifyClass": "logos-python"
        },
        {
          "name": "TensorFlow",
          "iconifyClass": "logos-python"
        },
        {
          "name": "Scikit-learn",
          "iconifyClass": "logos-python"
        }
      ]
    }
  ]
}
export {
  seo,
  skills,
  mySkills,
  projects,
  greeting,
  settings,
  education,
  experience,
  socialMediaLinks,
  competitiveSites
};
