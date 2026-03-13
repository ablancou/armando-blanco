import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  BrainCircuit,
  Music,
  Globe,
  Star,
  Zap,
  Shield,
  Eye
} from "lucide-react"

export const personalInfo = {
  name: "Armando Blanco",
  role: "Full-Stack Developer & Data Scientist",
  tagline: "Building the future of education and data-driven intelligence.", // Updated for punchier feel
  summary: [
    "Full-Stack Software Developer and Data Scientist with 10+ years of experience, specializing in the intersection of AI, education, and clinical diagnostic pipelines.",
    "Expert in building and deploying neural networks using PyTorch, and creating high-performance interactive applications with Next.js and Streamlit.",
    "Specialized in architecting complex data pipelines and managing large-scale SQL/NoSQL databases for healthcare and educational platforms.",
    "Committed to Agile excellence and iterative development, ensuring robust, scalable, and user-centric software solutions."
  ],
  education: [
    {
      degree: "Bachelor in Business Administration",
      school: "Universidad Anáhuac, Mexico City",
      date: "2005 - 2009"
    }
  ],
  experience: [
    {
      title: "Senior Full-Stack Developer & Data Scientist",
      company: "Freelance / Jazz Arcade",
      date: "2012 - Present",
      bullets: [
        "Architected Jazz Arcade, a high-traffic music education platform serving global users with AI-powered personalized learning.",
        "Implemented diagnostic pipelines for medical labs using Python, transforming raw genomic data into clinical insights.",
        "Engineered real-time data visualization suites with Next.js and Streamlit, improving decision speed for data consultants by 40%.",
        "Pioneered the integration of Google Gemini AI into music theory pedagogy, creating the first adaptive AI jazz tutor."
      ]
    },
    {
      title: "Technical Consultant",
      company: "Data Science Solutions",
      date: "2015 - Present",
      bullets: [
        "Led cross-functional teams in the implementation of predictive neural networks for clinical risk assessment.",
        "Designed automated ETL pipelines for handling heterogeneous medical data sources.",
        "Optimized cloud deployment strategies on AWS, reducing operational costs for clients by 25%."
      ]
    },
    {
      title: "Content & Education Strategic Lead",
      company: "Digital Learning Ecosystems",
      date: "2019 - Present",
      bullets: [
        "Produced high-impact technical educational content reaching over 100k+ learners across platforms.",
        "Developed proprietary music notation rendering engines (VexFlow) for web-native music education.",
        "Focused on simplifying complex AI concepts for broad accessibility."
      ]
    }
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/armandoblanco", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/ablancou", icon: "Github" },
    { name: "SoloLearn", url: "https://www.sololearn.com/es/profile/3850882", icon: "Code" },
    { name: "Duolingo", url: "https://www.duolingo.com/profile/ablancou", icon: "Languages" },
    { name: "X (Twitter)", url: "https://x.com/ablancou", icon: "Twitter" }
  ]
}

export interface Project {
  id: string;
  title: string;
  url?: string;
  tagline: string;
  description?: string;
  techDesc?: string;
  icon?: any;
  image?: string;
  gif?: string;
  features?: { icon: string; text: string }[];
  techTags: string[];
  category: "Flagship" | "Data Science" | "Tools";
}

export const flagshipProject: Project = {
  id: "jazz-arcade",
  category: "Flagship",
  title: "Jazz Arcade",
  url: "https://jazzarcade.com",
  tagline: "The gold standard for music education platforms.",
  image: "/projects/jazz-arcade.png",
  gif: "/projects/jazz-arcade.gif",
  features: [
    { icon: "🎯", text: "12 Interactive Games (Phaser 3)" },
    { icon: "🤖", text: "AI-Powered Adaptive Pedagogy" },
    { icon: "🎼", text: "Professional Notation Suite" },
    { icon: "🌍", text: "Multi-language Global Support" }
  ],
  techTags: ["Next.js 15", "TypeScript", "AWS Amplify", "Phaser 3", "Gemini AI"]
}

export const allProjects: Project[] = [
  {
    id: "cosmos-view",
    category: "Data Science",
    title: "CosmosView",
    tagline: "Interactive Real-Time Space and 3D Orbit Visualizer.",
    description: "High-performance interactive 3D web application to visualize the night sky and track thousands of real-time satellites.",
    techDesc: "Implemented real-time orbital propagation using SGP4 mathematical models and live TLE data.",
    icon: "Eye",
    image: "/projects/cosmosview.png", // Assuming path follows pattern
    url: "https://cosmosview.vercel.app/",
    techTags: ["Three.js", "React", "Vite", "satellite.js", "Astronomy Engine"]
  },
  {
    id: "smart-med-calc",
    category: "Data Science",
    title: "Statura Predict",
    tagline: "Adult Stature Predictor for the Mexican Population.",
    description: "First clinical tool for predicting adult height specifically designed for the Mexican pediatric population.",
    techDesc: "Combines 4 prediction methods into a weighted hybrid system with automatic outlier detection. Built with official ENSANUT data.",
    icon: "Calculator",
    image: "/projects/smartmedcalc.png", // Assuming path follows pattern
    url: "https://smartmedcalc-silver-apple.reflex.run/",
    techTags: ["Python", "Reflex", "Data Science", "Clinical Tools"]
  },
  {
    id: "diabetes-prediction",
    category: "Data Science",
    title: "Diabetes Prediction AI",
    tagline: "Predictive diagnostics with neural networks.",
    description: "Neural network-driven risk assessment tool for early diabetes detection.",
    techDesc: "Built with PyTorch and Python, deployed via Streamlit for real-time inference.",
    icon: "Activity",
    image: "/projects/diabetes.png",
    gif: "/projects/diabetes.gif",
    url: "https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/",
    techTags: ["PyTorch", "Python", "Streamlit", "Neural Networks"]
  },
  {
    id: "heart-disease",
    category: "Data Science",
    title: "Cardiovascular AI",
    tagline: "Heart disease probability modeling.",
    description: "Advanced diagnostic model for assessing cardiovascular health indicators.",
    techDesc: "PyTorch internal architecture with optimized data normalization layers.",
    icon: "HeartPulse",
    image: "/projects/heart.png",
    gif: "/projects/heart.gif",
    url: "https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/",
    techTags: ["Data Science", "PyTorch", "Python", "Predictive Modeling"]
  },
  {
    id: "medical-toolkit",
    category: "Tools",
    title: "Clinician Toolkit",
    tagline: "Evidence-based medical calculators.",
    description: "Multi-utility calculator suite for general practice clinical decision making.",
    techDesc: "Interactive Streamlit interface with evidence-based medical logic.",
    icon: "Calculator",
    image: "/projects/toolkit.png",
    url: "https://medical-calculators-toolkit-for-general-medicine.streamlit.app/",
    techTags: ["Python", "Streamlit", "Clinical Decision Support"]
  },
  {
    id: "genetic-pipeline",
    category: "Data Science",
    title: "Genomic Diagnostics",
    tagline: "ACMG-compliant variant classification.",
    description: "Automated end-to-end pipeline for genomic variant analysis and reporting.",
    techDesc: "Data pipeline using pandas, matplotlib, and professional reporting automation.",
    icon: "Dna",
    image: "/projects/genetics.png",
    techTags: ["Genomics", "Python", "pandas", "ACMG Standards"]
  }
]

export const technicalExpertise = [
  {
    category: "Architecture & Systems",
    icon: Server,
    skills: ["Next.js 15", "Microservices", "System Design", "Scalable Data Pipelines"]
  },
  {
    category: "Intelligence & Data",
    icon: BrainCircuit,
    skills: ["Neural Networks", "PyTorch", "LLM Orchestration", "Predictive Analysis"]
  },
  {
    category: "Web & UX",
    icon: Layout,
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "UI Engineering"]
  },
  {
    category: "Cloud Ops",
    icon: Database,
    skills: ["AWS Amplify", "Cognito", "CI/CD", "Infrastructure as Code"]
  }
]

export const techStack = [
  { name: "Python", desc: "Scientific computing & AI backbone", url: "https://www.python.org/" },
  { name: "Next.js 15", desc: "Modern full-stack web excellence", url: "https://nextjs.org/" },
  { name: "PyTorch", desc: "Deep learning & neural research", url: "https://pytorch.org/" },
  { name: "AWS", desc: "Enterprise cloud infrastructure", url: "https://aws.amazon.com/" }
]

export const coreSkills = [
  { name: "Core Engineering", details: "Python, TypeScript, Java, C++, Swift, R" },
  { name: "Data Intel", details: "Neural Networks, SQL, pandas, Clinical Diagnostics" },
  { name: "Experience Design", details: "Creative UI, Framer Motion, GSAP, Web Audio" }
]
