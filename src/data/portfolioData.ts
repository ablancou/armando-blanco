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
  role: "Software Engineer II | Full-Stack & AI Intelligence",
  tagline: "Architecting high-performance systems and intelligent AI pipelines in Mexico.",
  summary: [
    "Software Engineer II with 10+ years of cross-disciplinary experience, specializing in scalable Next.js architectures and clinical AI diagnostics.",
    "Expert in LLM orchestration, neural research with PyTorch, and deploying mission-critical distributed systems.",
    "Proven track record in Mexico's tech ecosystem, bridging the gap between advanced data science and professional software engineering.",
    "Specialized in architecting complex data pipelines, cloud-native DevOps (AWS), and high-reliability healthcare platforms."
  ],
  experience: [
    {
      title: "Senior Full-Stack Developer & Data Scientist",
      company: "Freelance / Jazz Arcade",
      date: "2012 - Present",
      bullets: [
        "Architected Jazz Arcade, a high-traffic music education platform serving global users with AI-powered personalized learning.",
        "Implemented diagnostic pipelines for medical labs using Python, transforming raw genomic data into clinical insights.",
        "Engineered real-time data visualization suites with Next.js and Streamlit, improving decision speed for consultants by 40%.",
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
        "Optimized cloud deployment strategies on AWS, reducing costs for clients by 25%."
      ]
    }
  ]
};

export const commonText = {
  heroTitle: "Turning Complexity Into Simplicity",
  heroSubtitle: "Building applications that transform complex requirements into elegant solutions.",
  exploreWork: "Explore My Work",
  letBuild: "Let's Build Together",
  visitPlatform: "Visit Platform",
  caseStudy: "Case Study",
  available: "Available for high-impact projects",
  vision: "The Vision",
  visionText: "Bridging the gap between raw data and professional software architecture. My approach is rooted in academic excellence and a decade of field experience.",
  eliteShowcase: "Elite Showcase",
  engineeringArtifacts: "Curated Engineering Artifacts",
  fortitude: "Fortitude",
  fortitudeText: "The foundational stack powering mission-critical solutions.",
  trajectory: "Trajectory",
  trajectoryText: "A timeline of innovation and complex problem-solving.",
  footerTitle: "Let's Build Meaningful Software",
  footerText: "I am always open to exploring complex technical challenges and collaborating with visionary teams."
};

export const techStack = [
  { name: "Python", desc: "Scientific computing & AI backbone", url: "https://www.python.org/" },
  { name: "Next.js 15", desc: "Modern full-stack web excellence", url: "https://nextjs.org/" },
  { name: "PyTorch", desc: "Deep learning & neural research", url: "https://pytorch.org/" },
  { name: "AWS", desc: "Enterprise cloud infrastructure", url: "https://aws.amazon.com/" }
];

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/armandoblanco", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/ablancou", icon: "Github" },
  { name: "SoloLearn", url: "https://www.sololearn.com/es/profile/3850882", icon: "Code" },
  { name: "Duolingo", url: "https://www.duolingo.com/profile/ablancou", icon: "Languages" },
  { name: "X (Twitter)", url: "https://x.com/ablancou", icon: "Twitter" }
];


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
];

export const featuredProjects: any[] = [
  {
    id: "orbital-dome",
    category: "Precision Engineering",
    title: "Orbital Dome",
    tagline: "Interactive Real-Time Space and 3D Orbit Visualizer.",
    description: "High-performance interactive 3D web application to visualize the night sky and track thousands of real-time satellites.",
    techDesc: "Implemented real-time orbital propagation using SGP4 mathematical models and live TLE data.",
    icon: "Eye",
    image: "/projects/cosmosview.png", // Keeping the original main image
    url: "https://www.orbitaldome.com",
    techTags: ["Three.js", "React", "Vite", "satellite.js", "Astronomy Engine"],
    caseStudy: {
      metrics: [
        { label: "Real Stars", value: "100K+" },
        { label: "Components", value: "63" },
        { label: "Languages", value: "8" },
        { label: "Live Satellites", value: "30+" }
      ],
      overview: "Orbital Dome is a browser-based planetarium and space exploration platform built as a Progressive Web App. It renders an interactive, scientifically accurate night sky with 100,000+ real stars, real-time planetary positions, 3D visualizations, satellite tracking, and 30+ features — all running client-side in the browser with zero backend.",
      sections: [
        {
          title: "Flagship 3D Experiences",
          content: "Features a photorealistic 3D Earth globe with day/night terminator, atmospheric Rayleigh scattering, cloud layers, and real-time satellite tracking using SGP4 orbital propagation from NORAD TLE data. The Lunar Observatory provides NASA SVS high-resolution textured 3D Moon processing (progressive 2K to 4K to 8K loading) with real libration, displacement mapping for terrain relief, and 6 Apollo landing sites.",
          image: "/projects/orbital-dome-poster.png"
        },
        {
          title: "Sky Rendering Engine",
          content: "100,000+ stars from HYG v3 catalog are rendered via GPU-accelerated instancing with spectral-type color mapping. Includes 48 IAU constellations, 110+ Messier objects, and a procedural Milky Way with dust lanes created via custom GLSL shaders. The atmosphere features realistic Rayleigh/Mie scattering and day/night transitions."
        },
        {
          title: "Interactive Tools & Telemetry",
          content: "Includes a Light Pollution Simulator (Bortle 1-9 scale), Deep Space Network Live tracking NASA's 3 DSN complexes, and an AR Camera Mode using WebRTC for sky alignment. Calculates real-time stargazing conditions via the Open-Meteo API."
        },
        {
          title: "Technical Execution",
          content: "Operates with zero backend requirements—all computations (astronomy-engine, satellite.js, Three.js) run purely client-side. Ensures adaptive performance across devices, automatically reducing geometry, clamping pixel ratios, and disabling antialiasing on mobile to maintain high frame rates."
        }
      ]
    }
  },
  {
    id: "jazz-arcade",
    category: "Full-Stack Architecture",
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
    techTags: ["Next.js 15", "TypeScript", "AWS Amplify", "Phaser 3", "Gemini AI"],
    caseStudy: {
      metrics: [
        { label: "Active Users", value: "Global" },
        { label: "Interactive Games", value: "12" },
        { label: "Languages", value: "6" },
        { label: "Framework", value: "Next.js 15" }
      ],
      overview: "Jazz Arcade is a high-traffic, cutting-edge music education platform that serves a global audience. It bridges the gap between complex music theory and interactive learning by integrating a custom-built AI tutor powered by Google Gemini, alongside a suite of 12 highly interactive, low-latency browser games built with Phaser 3.",
      sections: [
        {
          title: "AI-Powered Adaptive Pedagogy",
          content: "Pioneered the integration of Google Gemini AI to create the first adaptive 'Jazz Tutor'. The AI analyzes user performance in real-time, identifies theoretical weaknesses, and dynamically adjusts the curriculum complexity to ensure optimal learning curves."
        },
        {
          title: "High-Performance Game Engine",
          content: "Engineered 12 fully custom interactive mini-games using Phaser 3 and WebGL. Optimized asset delivery and rendering pipelines to ensure 60FPS performance even on low-tier mobile devices, providing a seamless, app-like experience in the browser."
        },
        {
          title: "Professional Notation Suite",
          content: "Built a proprietary music notation rendering system that dynamically translates MIDI and JSON data into beautiful, readable standard sheet music on the fly, allowing for infinite procedural generation of sight-reading exercises."
        },
        {
          title: "Global Scalability & Architecture",
          content: "Architected on AWS Amplify with a cloud-native serverless backend, ensuring the platform scales effortlessly during traffic spikes. The entire application is fully internationalized (i18n), supporting 6 different languages with dynamic routing."
        }
      ]
    }
  },
  {
    id: "smart-med-calc",
    category: "Clinical AI",
    title: "Statura Predict",
    tagline: "Mexican Pediatric Adult Height Predictor.",
    description: "Clinical decision-support tool for adult height prediction specifically calibrated for the Mexican pediatric population...",
    techDesc: "Combines 4 prediction methods into a weighted hybrid system with automatic outlier detection.",
    icon: "Calculator",
    image: "/projects/smartmedcalc.png",
    url: "https://smartmedcalc-silver-apple.reflex.run/",
    techTags: ["Python", "Reflex", "Data Science", "Clinical Tools"],
    caseStudy: {
      metrics: [
        { label: "Prediction Models", value: "4 Hybrid" },
        { label: "Accuracy", value: "Clinical Grade" },
        { label: "Target Demo", value: "Pediatric" },
        { label: "Tech Stack", value: "Python + Reflex" }
      ],
      overview: "Statura Predict is a clinical decision-support application built for endocrinologists and pediatricians. It provides highly accurate adult height predictions specifically calibrated for the Mexican pediatric population, transforming complex datasets into immediate clinical insights.",
      sections: [
        {
          title: "Hybrid Prediction Engine",
          content: "Rather than relying on a single fallible metric, Statura Predict combines 4 distinct prediction methodologies into a sophisticated, mathematically weighted hybrid system. This algorithmic approach minimizes individual model bias and significantly improves overall prediction accuracy."
        },
        {
          title: "Automated Outlier Detection",
          content: "Implemented statistical guardrails that automatically detect and flag anomalous biometric inputs (outliers) in real-time. This ensures that clinical decisions are never based on data entry errors or extreme deviations, protecting patient outcomes."
        },
        {
          title: "Pure Python Full-Stack (Reflex)",
          content: "Leveraged the Reflex framework to build the entire platform—from the predictive mathematical models to the responsive UI—strictly in Python. This architectural choice simplified the data science pipeline and eliminated the friction of context-switching between backend logic and frontend rendering."
        },
        {
          title: "Clinical UI/UX",
          content: "Designed a distraction-free, high-contrast interface tailored for medical professionals in fast-paced clinical environments. Results are presented with clear confidence intervals and visual charts, allowing for immediate interpretation during patient consultations."
        }
      ]
    }
  }
];

export const allProjects: any[] = [
  {
    id: "diabetes-prediction",
    category: "Data Science",
    title: "Diabetes Prediction AI",
    tagline: "Predictive diagnostics with neural networks.",
    techTags: ["PyTorch", "Python", "Streamlit", "Neural Networks"],
    url: "https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/"
  },
  {
    id: "heart-disease",
    category: "Data Science",
    title: "Cardiovascular AI",
    tagline: "Heart disease probability modeling.",
    techTags: ["Data Science", "PyTorch", "Python", "Predictive Modeling"],
    url: "https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/"
  }
];

