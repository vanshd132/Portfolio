export const personalInfo = {
  name: "Vansh Dawra",
  title: "Software Engineer",
  email: "vanshji132@gmail.com",
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
    position: "Full Stack Developer",
    company: "QuickIntell",
    duration: "Mar 2025 - Present",
    achievements: [
      "Engineered a production-scale RAG system based prescription digitiser with LLaMA4-Maverick and Pinecone to process 30,000+ handwritten prescriptions data, boosting data accuracy.",
      "Architected a scalable Medusa.js backend for a healthcare e-commerce platform, supporting 500,000+ products and 1,000+ concurrent requests.",
      "Drove a 15% increase in user acquisition by developing a Next.js virtual staging platform, achieving a 95+ Lighthouse score for SEO and boosting organic traffic by 40%.",
      "Deployed an Algolia recommendation system for a 350,000+ product catalog, increasing user engagement and conversion rates by 15%.",
      "Led end-to-end development of a cross-platform React Native AI healthcare app with 12+ features like personalised chatbot, AI prescription analysis and Recommendation system called Xsmart, achieving a 99.5% crash-free rate.",
      "Developed and deployed Oflisting (https://www.oflisting.com/) - an e-commerce platform serving international customers with multi-country order fulfillment, successfully receiving orders from customers across multiple countries."
    ]
  }
];

export const projects = [
  {
    name: "BeyondChatsEducation",
    duration: "Oct. 2024 - Oct. 2024",
    description: "Interactive Quiz Generator & RAG Chatbot with PDF Analysis - A comprehensive learning platform for students to revise from coursebooks using AI/LLMs.",
    techStack: ["React", "TypeScript", "Express", "Gemini 2.0", "Pinecone", "MongoDB", "Cloudinary"],
    achievements: [
      "Built an AI-powered quiz generator with adaptive question count using Gemini 2.0 Flash, generating MCQ, SAQ, and LAQ questions based on content depth.",
      "Engineered a RAG-based chatbot with Pinecone vector search and page-based chunking, enabling intelligent PDF conversations with 3-5 context chunks for better responses.",
      "Architected a triple-storage system (Pinecone + Cloudinary + MongoDB) for PDFs, conversations, and vectors, ensuring 100% data accessibility and graceful degradation.",
      "Implemented interactive quiz-taking interface with real-time scoring, topic-wise performance analytics, and detailed explanations, achieving production-ready quality."
    ],
    links: {
      demo: "https://assignment-xhbe.vercel.app/",
      github: "https://github.com/vanshd132/BeyondChatsEducation"
    }
  },
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
      github: "https://github.com/vanshd132/VisionForge"
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
      demo: "https://medchainai.vercel.app/",
      github: "https://github.com/vanshd132/MedChain"
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
      github: "https://github.com/vanshd132"
    }
  }
];

export const skills = {
  "Programming Languages": ["C", "C++", "JavaScript", "Python"],
  "AI Concepts": [
    "Large Language Models (LLMs)",
    "Retrieval Augmented Generation (RAG)",
    "AI Chatflows",
    "AI Agents"
  ],
  "Web Development Stack": [
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "PostgreSQL",
    "socket.io (WebSocket)"
  ],
  "Databases": ["MongoDB", "PostgreSQL", "Pinecone"],
  "Python Tools": [
    "Matplotlib",
    "Regex",
    "Numpy",
    "Ultralytics(YOLO)",
    "Flask (backend)",
    "FastAPI (backend)"
  ],
  "Tools": [
    "Git & GitHub",
    "Flowise (For AI Flows like langchain)",
    "Pinecone"
  ]
};

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
