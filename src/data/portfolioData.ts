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
  role: "Senior AI + Full-Stack Engineer",
  tagline: "Architecting high-performance systems and intelligent AI pipelines in Mexico.",
  summary: [
    "Senior AI + Full-Stack Engineer with 12+ years of cross-disciplinary experience, specializing in scalable Next.js architectures and clinical AI diagnostics.",
    "Expert in LLM orchestration, neural research with PyTorch, and deploying mission-critical distributed systems.",
    "Proven track record in Mexico's tech ecosystem, bridging the gap between advanced data science and professional software engineering.",
    "Specialized in architecting complex data pipelines, cloud-native DevOps (AWS), and high-reliability healthcare platforms."
  ],
  experience: [
    {
      title: "Senior Software Engineer & AI Integrator",
      company: "Freelance",
      date: "2020 - Present",
      bullets: [
        "Architected Jazz Arcade, a high-traffic education platform serving global users with AI-powered personalized learning.",
        "Pioneered the integration of Google Gemini AI into music pedagogy, creating the first adaptive AI jazz tutor.",
        "Engineered real-time data visualization suites with Next.js and Streamlit, improving decision speed for consultants by 40%."
      ]
    },
    {
      title: "Full-Stack Developer & Data Scientist",
      company: "Freelance",
      date: "2014 - 2020",
      bullets: [
        "Implemented diagnostic pipelines for medical labs using Python, transforming raw genomic data into clinical insights.",
        "Led cross-functional teams in the implementation of predictive neural networks using PyTorch for clinical risk assessment.",
        "Designed automated ETL pipelines for handling heterogeneous medical data sources.",
        "Optimized cloud deployment strategies on AWS, reducing operational costs by 25%."
      ]
    }
  ]
};

export const commonText = {
  heroTitle: "Turning Complexity Into Simplicity",
  heroSubtitle: "Senior AI + Full-Stack Engineer — Independent Consultant. With 12+ years of experience architecting and delivering high-complexity full-stack solutions. Specialized in Next.js 15, React 18, Three.js/WebGL, Python (PyTorch/Reflex), TypeScript and AWS serverless architectures. I build real-time 3D interactive engines, gamified EdTech platforms and data-driven systems with end-to-end ownership.",
  exploreWork: "Explore My Work",
  letBuild: "Let's Build Together",
  visitPlatform: "Visit Platform",
  caseStudy: "Case Study",
  available: "Available for high-impact projects",
  vision: "The Vision",
  visionText: "Curiosity in motion. Driven by continuous self-learning, I transform ideas into scalable systems where data, design, and technology converge to create real impact.",
  eliteShowcase: "Elite Showcase",
  engineeringArtifacts: "Curated Engineering Artifacts",
  clinicalAI: "Clinical AI & Data Science",
  clinicalAIDesc: "Diagnostic tools and neural network systems built for real-world clinical impact.",
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
  { name: "LinkedIn", url: "https://www.linkedin.com/in/armandoblanco/", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/ablancou", icon: "Github" },
  { name: "X", url: "https://x.com/ablancou", icon: "Twitter" },
  { name: "Duolingo", url: "https://www.duolingo.com/profile/ablancou", icon: "Duolingo" },
  { name: "Goodreads", url: "https://www.goodreads.com/ablancou", icon: "Goodreads" }
];

export const certifications = [
  {
    id: "ai-engineering",
    title: "Generative AI for Engineers",
    issuer: "CodeSignal",
    date: "2025",
    link: "/certificates/CodeSignal-AI-Engineering.pdf",
    icon: "Code2",
    description: "Advanced application of GenAI models for code generation, architecture design, and automated testing.",
    color: "blue"
  },
  {
    id: "ai-data",
    title: "Generative AI for Data & Analytics",
    issuer: "CodeSignal",
    date: "2026",
    link: "/certificates/CodeSignal-AI-Data.pdf",
    icon: "Database",
    description: "Orchestration of LLMs for complex data pipelines, automated insights, and predictive analytics.",
    color: "emerald"
  },
  {
    id: "ai-healthcare",
    title: "Generative AI for Healthcare",
    issuer: "CodeSignal",
    date: "2026",
    link: "/certificates/CodeSignal-AI-Healthcare.pdf",
    icon: "Activity", 
    description: "Implementation of secure AI systems optimized for clinical data, diagnostics, and strict compliance workflows.",
    color: "rose"
  },
  {
    id: "ai-cybersecurity",
    title: "Generative AI in Cybersecurity",
    issuer: "CodeSignal",
    date: "2025",
    link: "/certificates/CodeSignal-AI-Cybersecurity.pdf",
    icon: "Shield",
    description: "Leveraging AI for advanced threat intelligence, automated response systems, and robust architecture modeling.",
    color: "amber"
  }
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

// ─── SECTION 1: Elite Showcase ─────────────────────────────────────────────────
export const featuredProjects: any[] = [
  {
    id: "jazz-arcade",
    category: "Music · EdTech · Cloud · AI",
    title: "Jazz Arcade",
    url: "https://jazzarcade.com",
    tagline: "The gold standard for music education platforms.",
    image: "/projects/jazz-arcade.png",
    gif: "/projects/jazz-arcade.gif",
    description: "Full-stack EdTech platform with 12 arcade games, 22+ lessons and 590+ practice exercises in 6 languages. Includes Jazz Studio (sheet music editor, chord diagrams, guitar tabs), cloud-synced XP/streak system and Gemini AI integration.",
    features: [
      { icon: "🎯", text: "12 Interactive Games (Phaser 3)" },
      { icon: "🤖", text: "AI-Powered Adaptive Pedagogy" },
      { icon: "🎼", text: "Professional Notation Suite" },
      { icon: "🌍", text: "Multi-language Global Support" }
    ],
    techTags: ["Next.js 15", "TypeScript", "AWS Amplify", "GraphQL", "Phaser 3", "Gemini AI", "VexFlow"],
    caseStudy: {
      metrics: [
        { label: "Arcade Games", value: "12" },
        { label: "Practice Items", value: "590+" },
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
          content: "Built a proprietary music notation rendering system using VexFlow that dynamically translates MIDI and JSON data into beautiful, readable standard sheet music, chord diagrams and guitar tablature on the fly, allowing for infinite procedural generation of sight-reading exercises."
        },
        {
          title: "Global Scalability & Architecture",
          content: "Architected on AWS Amplify with a cloud-native serverless backend using GraphQL, ensuring the platform scales effortlessly during traffic spikes. The entire application is fully internationalized (i18n), supporting 6 different languages with dynamic routing. Cloud-synced XP and streak tracking keeps learners engaged across sessions."
        }
      ]
    }
  },
  {
    id: "orbital-dome",
    category: "Space · 3D · Simulation · Science",
    title: "Orbital Dome",
    tagline: "Real-time 3D orbital visualizer.",
    description: "Real-time 3D orbital visualizer rendering satellite trajectories and celestial bodies in the browser. Powered by a custom astronomy engine and live orbital mechanics calculations.",
    icon: "Eye",
    image: "/projects/cosmosview.png",
    url: "https://www.orbitaldome.com",
    techTags: ["React", "Three.js", "WebGL", "Vite", "satellite.js", "Custom Astronomy Engine"],
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
    id: "musa",
    category: "Art · Culture · UX · Accessibility",
    title: "MUSA — El museo de museos",
    tagline: "Digital art exploration, reimagined.",
    description: "Digital art exploration platform designed for immersive, curatorial-style browsing of art collections across museums and disciplines. Focused on UX, accessibility and visual storytelling.",
    image: "/projects/musa.png",
    url: "https://musa-art.vercel.app",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    caseStudy: {
      metrics: [
        { label: "Museums", value: "Multi" },
        { label: "Focus", value: "UX & A11y" },
        { label: "Deploy", value: "Vercel" },
        { label: "Stack", value: "Next.js + TS" }
      ],
      overview: "MUSA is a curatorial-style digital art platform that bridges cultural institutions into a single, immersive browsing experience. Built with accessibility-first principles and designed for visual storytelling across disciplines.",
      sections: [
        {
          title: "Curatorial UX Design",
          content: "Every interaction is designed to evoke the feeling of walking through a museum. The browsing experience prioritizes visual hierarchy, whitespace, and smooth transitions to let the art speak for itself."
        },
        {
          title: "Accessibility-First Architecture",
          content: "Built with semantic HTML, ARIA landmarks, keyboard navigation, and high-contrast modes. Accessibility is not an afterthought — it's a core architectural constraint that shapes every component."
        },
        {
          title: "Performance & Deployment",
          content: "Deployed on Vercel's edge network with ISR (Incremental Static Regeneration) for near-instant page loads. Image optimization via Next.js Image component ensures art is displayed at the highest fidelity without sacrificing load times."
        }
      ]
    }
  }
];

// ─── SECTION 2: Omni Wiser (Standalone Featured) ───────────────────────────────
export const omniWiserProject: any = {
  id: "omni-wiser",
  category: "EdTech · Knowledge · AI-Curated · Offline-Ready",
  title: "Omni Wiser",
  tagline: "Daily knowledge platform — 1,507 AI-curated questions across 26 disciplines.",
  description: "Daily knowledge platform with 1,507 AI-curated questions across 26 disciplines (Engineering, Medicine, Architecture, Biology and more). Features a Radar Chart expertise dashboard, Framer Motion micro-animations, streak tracking and a custom lightweight i18n system (ES/EN). AI-assisted content pipeline using Gemini Pro and Grok for expert-level question generation at scale. Zero server cost — fully static, offline-capable.",
  image: "/projects/omni-wiser.png",
  url: "https://omniwiser.vercel.app",
  techTags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "Context API", "LocalStorage"],
  features: [
    { icon: "🧠", text: "26 Knowledge Disciplines" },
    { icon: "📊", text: "Radar Chart Mastery Dashboard" },
    { icon: "🔥", text: "Streak & XP Tracking" },
    { icon: "🌐", text: "Custom i18n (ES/EN)" }
  ],
  caseStudy: {
    metrics: [
      { label: "Questions", value: "1,507" },
      { label: "Disciplines", value: "26" },
      { label: "Server Cost", value: "$0" },
      { label: "Languages", value: "ES/EN" }
    ],
    overview: "Omni Wiser is a daily knowledge platform that delivers expert-level questions across 26 disciplines — from Engineering and Medicine to Philosophy and Art History. Content is generated at scale using an AI-assisted pipeline (Gemini Pro + Grok) and served as a fully static, offline-capable Next.js application with zero server cost.",
    sections: [
      {
        title: "AI-Assisted Content Pipeline",
        content: "Leveraged Gemini Pro and Grok to generate 1,507 expert-level questions with curated explanations, bibliographic references, and difficulty calibration. Each question passes through a multi-stage validation pipeline before being committed to the static data layer."
      },
      {
        title: "Expertise Dashboard & Analytics",
        content: "Built a Radar Chart–based mastery dashboard using Recharts that visualizes user expertise across all 26 disciplines. Framer Motion micro-animations make the analytics feel alive and responsive, encouraging daily engagement."
      },
      {
        title: "Zero-Cost Offline Architecture",
        content: "The entire platform runs as a fully static Next.js (App Router) application. All state — streaks, XP, progress — is persisted in LocalStorage via Context API. No database, no API calls, no server cost. Works offline after first load."
      },
      {
        title: "Custom i18n System",
        content: "Implemented a lightweight, custom internationalization system supporting Spanish and English without heavy i18n libraries. Language detection, routing, and content switching are handled natively with zero additional bundle cost."
      }
    ]
  }
};

// ─── SECTION 3: Clinical AI & Data Science ──────────────────────────────────────
export const clinicalProjects: any[] = [
  {
    id: "statura-predict",
    category: "Clinical AI · Pediatrics · Mexico",
    title: "Statura Predict",
    tagline: "Mexican Pediatric Adult Height Predictor.",
    description: "Mexican pediatric adult height predictor using anthropometric data and growth curve models. The only clinical tool of its kind calibrated for Mexican population. Built for use in clinical consultation settings.",
    techDesc: "Combines 4 prediction methods into a weighted hybrid system with automatic outlier detection.",
    icon: "Calculator",
    image: "/projects/smartmedcalc.png",
    url: "https://smartmedcalc-silver-apple.reflex.run/",
    techTags: ["Python", "Reflex", "Data Science Pipelines"],
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
  },
  {
    id: "diabetes-prediction",
    category: "Neural Networks · Healthcare · ML",
    title: "Diabetes Prediction App",
    tagline: "Neural network–based health risk classifier.",
    description: "Neural network–based health risk classifier trained on clinical datasets for diabetes risk assessment.",
    image: "/projects/diabetes-ai-v2.png",
    techTags: ["Python", "PyTorch", "Streamlit"],
    url: "https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/"
  },
  {
    id: "medical-calculators",
    category: "Clinical Tools · General Medicine",
    title: "Medical Calculators Toolkit",
    tagline: "Clinical decision support for practitioners.",
    description: "Suite of clinical decision support calculators for general medicine practitioners — including Wells Score, CURB-65, GFR estimation and more.",
    image: "/projects/toolkit.png",
    techTags: ["Python", "Streamlit"],
    url: "#"
  }
];

// Legacy export for backward compatibility — combines all projects
export const allProjects: any[] = [
  ...clinicalProjects.filter(p => !p.caseStudy),
];
