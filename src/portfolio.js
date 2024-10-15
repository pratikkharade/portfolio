/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false // Change this to false if you don't want Splash screen.
};

// SEO Related settings
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

// Home Page
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
  
};

// Social Media Links
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
    },
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
  description: "🎓 Education is more than just acquiring knowledge—it's about " +
    "fostering adaptability, curiosity, and a mindset for continuous growth.",
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
  description: "🖥️ With each experience, we refine our skills, learn from diverse " +
    "situations, and gain a broader perspective on how to approach problems.",
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
  description: "🚀 My projects makes use of vast variety of latest " +
    "technology tools. My best experience is to create Data Science " +
    "projects and deploy them to web applications using cloud infrastructure.",
  data: [
    {
      name: "Security Evaluation of Web Application Frameworks",
      createdAt: "2022-03-13T20:41:33Z",
      startDate: "Jan 2024",
      endDate: "May 2024",
      report_url: "https://drive.google.com/file/d/1zQPGrO1jp8Fn6wLaCkiAZYkAHXjFfd5V/view?usp=sharing",
      poster_url: "",
      github_url: "",
      brief_desc: "Evaluated the security of web frameworks like Django, Express.js, " +
        "Angular.js, and Ruby on Rails to enhance defenses against cyber threats in " +
        "sectors like finance, healthcare, and e-commerce.",
      description: "Engaged in a project assessing the security of prominent web " +
        "application frameworks like Django (Python), JavaScript frameworks (Express.js," +
        " Angular.js), and Ruby on Rails, aimed at fortifying defenses against cyber " +
        "threats across sectors including finance, healthcare, and e-commerce.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "Machine Learning",
      //     "iconifyClass": "eos-icons:machine-learning"
      //   },
      //   {
      //     "name": "Scikit Learn",
      //     "iconifyClass": "devicon:scikitlearn"
      //   },
      //   {
      //     "name": "Data Analysis",
      //     "iconifyClass": "streamline:money-graph-analytics-business-product-graph-data-chart-analysis"
      //   }
      // ]
    },
    {
      name: "An Exploration of Privacy and Visibility in 2 STEAM Friend Networks",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      report_url: "https://drive.google.com/file/d/1HbYHUGwWKbutYoNQxHH6uF7X4BlBoNBd/view?usp=sharing",
      poster_url: "",
      github_url: "",
      brief_desc: "Analyzed how privacy settings and social connections " +
        "on the STEAM platform influence users' sharing of personal information, " +
        "uncovering patterns in profile visibility and data management.",
      description: "In this project, I explored how privacy settings and " +
        "social connections influence the sharing of personal information " +
        "on the STEAM platform. By analyzing data collected through STEAM's " +
        "Web API, I uncovered patterns in how users manage their privacy, " +
        "particularly in relation to the visibility of profiles, real names, " +
        "locations, and friends lists within the gaming community.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Formula 1 Race Outcomes – Analysis and Predictions",
      startDate: "Jan 2023",
      endDate: "May 2023",
      report_url: "https://drive.google.com/file/d/1inbruco_SG7W8e73R4eQSZFcEjUu4ljC/view?usp=sharing",
      poster_url: "https://drive.google.com/file/d/1eh-UBaP6wI7LDlghGkipMjr05WmNvTIA/view?usp=sharing",
      github_url: "https://github.com/pratikkharade/Formula-1-Race-Outcomes-Analysis-and-Predictions",
      brief_desc: "Built a predictive model for Formula 1 race outcomes using " +
        "Machine Learning techniques like Regression, Clustering, and Gradient " +
        "Descent, achieving 97% accuracy.",
      description: "Collected and analyzed Formula 1 race data to build a predictive " +
        "model for forecasting race outcomes, utilizing Machine Learning and Data " +
        "Mining techniques such as Regression, Clustering, and Gradient Descent, " +
        "achieving 97% accuracy.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Sentiment Analysis of Movies",
      startDate: "Jan 2023",
      endDate: "May 2023",
      report_url: "https://drive.google.com/file/d/1hjzayW7aA9D82YMm2bqK5qiOWRzZRPyW/view?usp=sharing",
      poster_url: "",
      github_url: "https://github.com/pratikkharade/Sentiment-Analysis-of-Movies",
      brief_desc: "Predicted movie review sentiment using machine learning classifiers, optimizing performance through preprocessing, hyperparameter tuning, and cross-validation.",
      description: "Designed and developed a sentiment analysis model, optimizing " +
        "preprocessing, merging datasets, and fine-tuning hyperparameters, resulting " +
        "in a 15% increase in accuracy and a 20% reduction in training time across " +
        "multiple classifiers.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "CT and PET-CT Lung Cancer Visualization",
      startDate: "Jan 2023",
      endDate: "May 2023",
      report_url: "https://drive.google.com/file/d/1JX6b6LmR0BiK_lIssOO9HgNUAIppu8r-/view?usp=sharing",
      poster_url: "",
      github_url: "",
      brief_desc: "Led the development of a patient-centric data visualization " +
        "tool using advanced image processing with Paraview and Seg3D to help patients " +
        "understand lung scans and visualize tumors, improving accessibility and comprehension.",
      description: "Led the development of a patient-centric tool that helps " +
        "individuals understand their lung scans using DICOM datasets, improving " +
        "their grasp of their medical condition. By implementing advanced image " +
        "processing techniques with Paraview and Seg3D, the project enhanced tumor " +
        "visualization and detection of lung carcinoma, making medical information " +
        "more accessible and easier to comprehend for patients.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Power Profiling of Nvidia GPUs",
      startDate: "Jan 2019",
      endDate: "May 2019",
      report_url: "",
      poster_url: "",
      github_url: "",
      brief_desc: "Developed Python scripts to analyze power consumption " +
        "across 15 GPU configurations and 10 scenarios, reducing power " +
        "consumption disparities by 25%.",
      description: "Developed Python scripts to collect and analyze power " + 
        "consumption data across 15 GPU configurations and 10 testing scenarios, " +
        "identifying optimization strategies that reduced power consumption " +
        "disparities by 25%.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Sorting Algorithms using Parallel Processing",
      startDate: "Jan 2018",
      endDate: "May 2018",
      report_url: "",
      poster_url: "",
      github_url: "",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      brief_desc: "Executed sorting algorithms on a substantial dataset of one " +
        "million items, leveraging Parallel Processing on CUDA to enhance computational " +
        "efficiency, resulting in a 40% reduction in response time.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Prioritize: An Android App",
      startDate: "Jan 2017",
      endDate: "May 2017",
      report_url: "",
      poster_url: "",
      github_url: "",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      brief_desc: "Developed an Android app for delivery personnel, optimizing " +
        "routes and package sequences using Dijkstra's Algorithm and a proprietary " +
        "method to generate the most efficient delivery sequence.",
      description: "We developed an Android application designed to " +
        "assist delivery personnel in optimizing their delivery routes " +
        "by prioritizing package sequences. Incorporating package size " +
        "and delivery location distances, our app employed Dijkstra’s Shortest " +
        "Path Algorithm to calculate distances efficiently. We complemented this " +
        "with a proprietary algorithm to generate the most optimal delivery sequence. " +
        "This innovative solution was built using Android and Java technologies.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    },
    {
      name: "Graphical Protuberance",
      startDate: "Jan 2016",
      endDate: "May 2016",
      report_url: "",
      poster_url: "",
      github_url: "",
      url: "https://github.com/deepakdhole777/vaccination-slots",
      brief_desc: "Spearheaded the development of a C++ program that " +
        "automated 3D object projection, increasing speed 50-fold and " +
        "improving precision 1000 times over manual methods.",
      description: "I spearheaded the development of a C++ program aimed " +
        "at automating 3D object projection, streamlining the process and " +
        "minimizing errors. This initiative yielded a remarkable 50-fold " +
        "increase in projection speed and enhanced precision by a factor " +
        "of 1000 compared to manual drawings. This achievement was made " +
        "possible through the application of advanced C++ techniques.",
      // languages: [
      //   {
      //     "name": "Python",
      //     "iconifyClass": "logos-python"
      //   },
      //   {
      //     "name": "REST API",
      //     "iconifyClass": "dashicons:rest-api"
      //   }
      // ]
    }
  ]
};

// My Skills Page
const mySkills = {
  title: "My Skills",
  description: "🛠️ The right skill set not only enhances creativity and " +
    "problem-solving but also empowers individuals to leverage new " +
    "opportunities in an ever-changing tech landscape.",
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
};

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
