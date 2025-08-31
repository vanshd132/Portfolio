export const personalInfo = {
  name: "Vansh Dawra",
  title: "Full Stack Developer",
  email: "22360@iiitu.ac.in",
  phone: "+916378661815",
  location: "Una, Himachal Pradesh, India",
  github: "https://github.com/vanshdawra",
  linkedin: "https://linkedin.com/in/vansh-dawra",
  introduction: "Passionate about building scalable web applications with modern technologies. Experienced in MERN stack, AI/ML integration, and creating user-centric solutions.",
  description: "A passionate developer with a strong foundation in computer science and hands-on experience in modern web technologies."
};

export const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Indian Institute of Information Technology Una",
    grade: "CGPA: 7.2",
    duration: "2022-Present"
  },
  {
    degree: "Senior Secondary Education",
    institution: "Tiny Tots Public School",
    grade: "90%",
    duration: "2020-2022"
  }
];

export const experience = [
  {
    position: "Full Stack Developer Intern",
    company: "QuickIntell",
    duration: "Mar 2025 - Present",
    achievements: [
      "Engineered a production-scale RAG system based prescription digitiser with LLaMA4-Maverick and Pinecone to process 30,000+ handwritten prescriptions data, boosting data accuracy.",
      "Architected a scalable Medusa.js backend for a healthcare e-commerce platform, supporting 500,000+ products and 1,000+ concurrent requests.",
      "Drove a 15% increase in user acquisition by developing a Next.js virtual staging platform, achieving a 95+ Lighthouse score for SEO and boosting organic traffic by 40%.",
      "Deployed an Algolia recommendation system for a 350,000+ product catalog, increasing user engagement and conversion rates by 15%.",
      "Led end-to-end development of a cross-platform React Native AI healthcare app with 12+ features like personalised chatbot, AI prescription analysis and Recommendation system called Xsmart, achieving a 99.5% crash-free rate."
    ]
  }
];

export const projects = [
  {
    name: "Vision Forge",
    duration: "Feb. 2025 - Mar. 2025",
    description: "A web-based platform that allows users to preview object detection models and generate usable APIs.",
    techStack: ["Python", "Flask", "Next.js", "OpenCV", "Multithreading"],
    achievements: [
      "Engineered a full-stack web platform that cut YOLO model deployment time by 90%.",
      "Boosted real-time object detection performance by 50% using OpenCV and multithreading.",
      "Architected a feature to auto-generate 5+ REST APIs from YOLO models, saving developers 3+ hours of manual coding per model.",
      "Developed an intuitive UI that streamlined model testing workflows, reducing user actions by 60%."
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    name: "Med-Chain",
    duration: "Aug. 2024 - Sep. 2024",
    description: "A web platform connecting patients and hospitals for appointments, second opinions, and AI-based services.",
    techStack: ["MERN", "Tesseract.js", "Google Gemini API", "Stripe"],
    achievements: [
      "Developed a MERN-stack platform for 2 user roles with 10+ features like appointment scheduling and secure payments.",
      "Cut report analysis time by 70% by enabling secure storage and AI-driven insights.",
      "Integrated an AI agent that resolved 30+ query types with 92% accuracy, reducing manual support requests by 25%."
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    name: "Whatsapp Chat Analyser",
    duration: "Jan. 2024 - Feb. 2024",
    description: "A tool to generate analytics from WhatsApp chats",
    techStack: ["Python", "Pandas", "Matplotlib", "Plotly", "Regex"],
    achievements: [
      "Developed a Python tool to analyze WhatsApp chat logs (up to 50MB), extracting 15+ key insights in under 10 seconds.",
      "Engineered 5+ data visualizations (e.g., time-series graphs, word clouds) to present complex chat data intuitively.",
      "Validated application scalability by processing a large dataset of 22,000+ messages, demonstrating robustness."
    ],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "C/C++", level: 80 }
  ],
  "Web Development": [
    { name: "React.js/Next.js", level: 90 },
    { name: "Node.js/Express.js", level: 85 },
    { name: "MongoDB/PostgreSQL", level: 80 }
  ],
  "AI/ML & Tools": [
    { name: "LLMs/RAG Systems", level: 85 },
    { name: "OpenCV/YOLO", level: 80 },
    { name: "Git/GitHub", level: 90 }
  ]
};

export const additionalTechnologies = [
  "Tailwind CSS", "React Native", "Flask", "Medusa.js", "Pinecone", 
  "Algolia", "Tesseract.js", "Stripe", "LangChain", "Flowise"
];

export const achievements = [
  {
    title: "AI Health App Development",
    description: "Led development of an AI-powered health app with 6-member team, featuring personalised chatbot and AI product recommender (350K+ items via Algolia).",
    duration: "May 2025-July 2025",
    type: "project"
  },
  {
    title: "HackWar Hackathon Finalist",
    description: "Participated as team leader and reached the final round as one of the top 40 teams selected out of 2000+ teams.",
    duration: "15-16 Sep. 2024",
    type: "competition"
  },
  {
    title: "3 Star CodeChef Rating",
    description: "Achieved 3-star rating on CodeChef and solved 250+ DSA questions across various competitive programming platforms.",
    duration: "Ongoing Achievement",
    type: "coding"
  }
];
