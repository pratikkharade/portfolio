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
  subTitle: "Innovative Software Engineer creating intuitive user experiences! With a " +
    "Master’s in Computer Science and front-end expertise, I blend creativity and " +
    "technology to build seamless applications that empower users to thrive in programming. " +
    "Let’s code a better future!",
  resumeLink: "https://drive.google.com/file/d/1elcQjou66nCiRu8AgqwMvmx-4QsibFln/view?usp=sharing"
  // portfolio_repository: "https://drive.google.com/file/d/1elcQjou66nCiRu8AgqwMvmx-4QsibFln/view?usp=sharing",
  // githubProfile: "https://github.com/pratikkharade/"
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

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
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
  avatar_image_path: "projects_image.svg",
  degrees: [
    {
      title: "University of Utah, Salt Lake City",
      subtitle: "M.S. in Computer Science",
      logo_path: "uou.png",
      alt_name: "UoU",
      duration: "2022 - 2024",
      descriptions: [
        "-- Rewarded Graduate Assistantship along with tuition waiver",
        "-- Coursework:",
        "⚡ Graduate Algorithms",
        "⚡ Computer Architecture",
        "⚡ Operating Systems",
        "⚡ Machine Learning",
        "⚡ Data Mining",
        "⚡ Manage Data for & with ML",
        "⚡ Business Aspects of Security & Privacy"
      ],
      website_link: "http://utah.edu"
    },
    {
      title: "Vishwakarma Institute of Technology, Pune",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vit_logo.png",
      alt_name: "VIT Pune",
      duration: "2015 - 2019",
      descriptions: [
        "-- Coursework:",
        "⚡ Operating Systems",
        "⚡ Computer Organization",
        "⚡ Data Structures",
        "⚡ Artificial Intelligence",
        "⚡ Internet of Things",
        "⚡ Computer Networks",
        '⚡ Web Technologies'
      ],
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
  header_image_path: "experience.svg",
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
          title: "Teaching Assistant",
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
          company_url: "https://www.utah.edu/",
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
          company_url: "https://www.utah.edu/",
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
  avatar_image_path: "projects_image.svg",
};

export {
  seo,
  skills,
  projects,
  greeting,
  settings,
  education,
  experience,
  socialMediaLinks,
  competitiveSites
};
