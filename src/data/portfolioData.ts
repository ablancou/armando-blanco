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

// Note on iconography: project objects reference lucide icon names as strings
// (e.g. icon: "Dna"). The premium poster fallback in ProjectCard resolves these
// at render time, so no direct icon import is needed here for project cards.


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
  // ── New section copy (2026 expansion) ──────────────────────────────────────
  dataScienceTitle: "Data Science & Applied AI",
  dataScienceDisclaimer: "Data-science and engineering projects built for educational and exploratory purposes. These tools are not medical devices and are not a substitute for professional clinical judgment.",
  academiesTitle: "Interactive 3D Academies",
  academiesDesc: "Real-time WebGL learning experiences that turn complex science and strategy into something you can rotate, dissect and explore.",
  engineeringTitle: "Engineering & Architecture",
  engineeringDesc: "Generative design tooling bridging architecture, civil engineering and AI-assisted modeling.",
  gamesTitle: "3D Games & Interactive",
  gamesDesc: "Browser-native, physics-driven worlds and interactive experiences engineered with Three.js / WebGL — no install required.",
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
    description: "Full-stack EdTech platform with 12 arcade games plus a new suite of 3D didactic mini-games, 22+ lessons and 590+ practice exercises in 6 languages. Includes Jazz Studio with on-the-fly sheet-music generation, a guitar-tablature creation engine and chord diagrams, a cloud-synced XP/streak system and Gemini AI integration.",
    features: [
      { icon: "🧊", text: "New 3D Didactic Games" },
      { icon: "🎼", text: "Sheet Music Generator" },
      { icon: "🎸", text: "Tablature Creation Engine" },
      { icon: "🤖", text: "AI-Powered Adaptive Pedagogy" }
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
          title: "High-Performance Game Engine & New 3D Didactic Games",
          content: "Engineered 12 fully custom interactive mini-games using Phaser 3 and WebGL, recently expanded with a new suite of immersive 3D didactic games that teach theory and ear-training in a spatial, hands-on way. Optimized asset delivery and rendering pipelines ensure 60FPS performance even on low-tier mobile devices, providing a seamless, app-like experience in the browser."
        },
        {
          title: "Notation, Score Generation & Tablature Studio",
          content: "Built a proprietary music notation engine (VexFlow) that dynamically generates beautiful, readable standard sheet music, chord diagrams and full guitar tablature from MIDI/JSON on the fly. Dedicated Score Generation and Tablature Creation studios let learners produce and export their own notation, enabling infinite procedural sight-reading and fretboard exercises."
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
  },
  {
    id: "music-plugins",
    category: "Audio · DSP · C++",
    title: "🎛️ Music Plugins",
    tagline: "The Cosmic Blast That Transforms Your Sound.",
    description: "Professional audio plugins with analog character, developed with modern DSP techniques. Available in VST3 and AU formats.",
    image: "/projects/blitzarnova-v2.png",
    url: "https://blitzarnova-dsp.vercel.app/",
    techTags: ["C++", "JUCE Framework", "DSP", "React", "TypeScript", "Vite"],
    caseStudy: {
      metrics: [
        { label: "Formats", value: "VST3 / AU" },
        { label: "Focus", value: "Analog Character" },
        { label: "Core", value: "C++ DSP" },
        { label: "Stack", value: "React + Vite" }
      ],
      overview: "BlitzarNova DSP offers a suite of professional audio plugins designed to bring analog warmth and cosmic character to modern digital productions. Built on robust C++ DSP algorithms and wrapped in a sleek, hardware-inspired UI.",
      sections: [
        {
          title: "Advanced Digital Signal Processing",
          content: "Utilizes modern DSP techniques written in C++ to model analog circuitry, providing rich harmonics and dynamic response that rival hardware counterparts."
        },
        {
          title: "Hardware-Inspired Interface",
          content: "The user interface is designed with a dark, premium aesthetic, ensuring high legibility and intuitive control during critical mixing sessions. Every knob and meter responds smoothly."
        },
        {
          title: "Cross-Platform Compatibility",
          content: "Compiled for both macOS and Windows, supporting VST3 and AudioUnit (AU) formats to guarantee seamless integration with industry-standard Digital Audio Workstations like Ableton Live, Logic Pro, and FL Studio."
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

// ─── SECTION 3: Data Science & Applied AI ───────────────────────────────────────
// NOTE: Framed strictly as data-science / engineering work for educational and
// exploratory use — never as a clinical claim or professional medical service.
export const clinicalProjects: any[] = [
  {
    id: "smartmedcalc-suite",
    category: "Data Science · Health Informatics · Python",
    title: "SmartMedCalc Suite",
    tagline: "A 20+ calculator data-science platform for health education.",
    description: "A full data-science platform bundling 20+ evidence-based health & nutrition calculators, regional anthropometric models and a hybrid statistical prediction engine — built end-to-end in pure Python with Reflex, installable as a PWA.",
    icon: "Calculator",
    accent: "emerald",
    image: "/projects/smartmedcalc.png",
    url: "https://smartmedcalc-silver-apple.reflex.run/",
    techTags: ["Python", "Reflex", "Statistical Modeling", "Data Pipelines", "PWA"],
    features: [
      { icon: "🧮", text: "20+ Calculators & Scores" },
      { icon: "📊", text: "5-Method Hybrid Engine" },
      { icon: "🗺️", text: "7-Zone Regional Calibration" },
      { icon: "📱", text: "Installable PWA (iOS/Android)" }
    ],
    caseStudy: {
      metrics: [
        { label: "Calculators", value: "20+" },
        { label: "Prediction Methods", value: "5 Hybrid" },
        { label: "Regional Zones", value: "7" },
        { label: "Tech Stack", value: "Pure Python" }
      ],
      overview: "SmartMedCalc is a data-science platform that consolidates 20+ health, nutrition and anthropometric calculators behind a single, fast, installable interface. Built entirely in Python with the Reflex framework, it pairs transparent statistical modeling with a clean, distraction-free UX — designed as an educational and exploratory tool, not a medical device.",
      sections: [
        {
          title: "Hybrid Statistical Prediction Engine",
          content: "The flagship height-prediction model blends 5 distinct statistical methods into a mathematically weighted hybrid system with a 95% confidence band and a concordance indicator measuring agreement between methods. This ensemble approach minimizes individual model bias and surfaces uncertainty honestly."
        },
        {
          title: "Regional Calibration & Outlier Guardrails",
          content: "Models are calibrated across 7 regional zones using public datasets (ENSANUT 2018, INEGI 2024) and integrate bone-age input via the Greulich-Pyle scale. Automatic outlier detection with physiological clamping prevents data-entry errors from producing nonsensical results."
        },
        {
          title: "Pure-Python Full-Stack (Reflex)",
          content: "Every layer — from the statistical core to the responsive UI — is written in Python via Reflex, eliminating context-switching between backend logic and frontend rendering and keeping the entire data-science pipeline in one language."
        },
        {
          title: "Installable, Offline-Friendly PWA",
          content: "Ships as a Progressive Web App installable on iOS, Android and desktop, with a high-contrast, mobile-first interface optimized for quick lookups. Built for accessibility and speed across devices."
        }
      ]
    }
  },
  {
    id: "statura-predict",
    category: "Data Science · Anthropometrics · Mexico",
    title: "Statura Predict",
    tagline: "Adult-height prediction model calibrated for Mexican data.",
    description: "A statistical adult-height prediction module (part of the SmartMedCalc Suite) using anthropometric data and growth-curve models calibrated on Mexican population datasets. An educational data-science tool.",
    techDesc: "Combines multiple prediction methods into a weighted hybrid system with automatic outlier detection.",
    icon: "TrendingUp",
    accent: "blue",
    image: "/projects/statura-predict.png",
    url: "https://smartmedcalc-silver-apple.reflex.run/",
    techTags: ["Python", "Reflex", "Statistical Modeling"]
  },
  {
    id: "diabetes-prediction",
    category: "Neural Networks · Data Science · ML",
    title: "Diabetes Prediction App",
    tagline: "Neural-network risk classifier trained on open datasets.",
    description: "A neural-network risk classifier trained on open clinical datasets to explore diabetes risk signals. A machine-learning data-science demo — for education and exploration, not diagnosis.",
    image: "/projects/diabetes-ai-v2.png",
    icon: "BrainCircuit",
    accent: "rose",
    techTags: ["Python", "PyTorch", "Streamlit"],
    url: "https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/"
  }
];

// ─── SECTION 3b: Interactive 3D Academies ────────────────────────────────────────
export const academyProjects: any[] = [
  {
    id: "genetics-3d",
    category: "3D Education · Molecular Biology · WebGL",
    title: "Genetics 3D Academy",
    tagline: "The Central Dogma, rendered in real-time 3D.",
    description: "An immersive molecular-biology playground: explore DNA replication, transcription, translation and CRISPR in real-time 3D, and compare B-DNA vs Z-DNA side by side with GPU shaders, post-processing and HD lighting.",
    icon: "Dna",
    accent: "emerald",
    image: "/projects/genetics-3d.png",
    url: "https://genetics-3d-academy.vercel.app/",
    techTags: ["React", "Three.js", "WebGL", "GLSL Shaders", "Post-Processing"],
    features: [
      { icon: "🧬", text: "B-DNA vs Z-DNA Comparison" },
      { icon: "🔬", text: "Central Dogma Journey" },
      { icon: "✂️", text: "CRISPR Visualization" },
      { icon: "🎯", text: "21 Guided Challenges" }
    ],
    caseStudy: {
      metrics: [
        { label: "Modules", value: "Central Dogma" },
        { label: "Challenges", value: "21" },
        { label: "Rendering", value: "GLSL + HDR" },
        { label: "License", value: "Open Source" }
      ],
      overview: "Genetics 3D Academy turns molecular biology into something you can hold and rotate. It renders the central dogma of molecular biology — replication, transcription, translation — plus CRISPR gene editing as interactive, scientifically-grounded 3D scenes, grounded in peer-reviewed structural data.",
      sections: [
        {
          title: "Real-Time Molecular Rendering",
          content: "Sugar-phosphate backbones, nitrogenous bases, hydrogen bonds and grooves are rendered with custom GLSL shaders, post-processing and HD lighting — fast enough to orbit and dissect in real time, with an Ultra quality mode for capable hardware."
        },
        {
          title: "B-DNA vs Z-DNA Comparison",
          content: "A side-by-side comparative mode visualizes the right-handed B-DNA helix against the left-handed Z-DNA conformation, exposing structural parameters like chirality, base-pair turns, helix pitch and groove dimensions."
        },
        {
          title: "Gamified, Evidence-Based Learning",
          content: "21 challenges guide learners through progressively harder concepts. Content is grounded in peer-reviewed research (Watson & Crick, Olson et al.), and the open-source release democratizes access to professional-grade molecular visualization."
        }
      ]
    }
  },
  {
    id: "anatomy-3d",
    category: "3D Education · Human Anatomy · WebGL",
    title: "Anatomy 3D Academy",
    tagline: "An interactive human-anatomy atlas you can dissect.",
    description: "An interactive 3D human-anatomy atlas spanning ~90 structures across the skeletal, muscular, nervous, cardiovascular and visceral systems — with cutting planes, camera presets, layer isolation and timed guided study tours.",
    icon: "PersonStanding",
    accent: "rose",
    image: "/projects/anatomy-3d.png",
    url: "https://anatomy-3d-academy.vercel.app/",
    techTags: ["React", "Three.js", "WebGL", "Interactive 3D"],
    features: [
      { icon: "🦴", text: "~90 Labeled Structures" },
      { icon: "🔪", text: "Cross-Section Cutting Planes" },
      { icon: "🎥", text: "6 Camera Presets" },
      { icon: "🧭", text: "Guided Study Tours" }
    ],
    caseStudy: {
      metrics: [
        { label: "Structures", value: "~90" },
        { label: "Systems", value: "5" },
        { label: "Study Tours", value: "Timed" },
        { label: "Controls", value: "Orbit/Zoom/Pan" }
      ],
      overview: "Anatomy 3D Academy is an interactive atlas of the human body. Organized by region — head & neck, thorax, abdomen, pelvis, limbs and spine — it lets learners orbit, zoom, slice and isolate structures across five major systems, with real-time labels and screenshot capture.",
      sections: [
        {
          title: "Comprehensive, Region-Based Atlas",
          content: "Roughly 90 structures span the skeletal (28), muscular (26) and combined nervous, cardiovascular and visceral systems (37), organized into anatomical regions for focused study."
        },
        {
          title: "Dissection-Grade Interaction",
          content: "Drag to orbit, scroll to zoom, right-click to pan. Cross-sectional cutting planes (including dual-plane wedges), layer toggling, structure isolation and bookmarking turn a static model into a dissection table."
        },
        {
          title: "Structured Learning Flow",
          content: "Guided study tours (5–18 minutes) walk through focused regions with timed progression, a daily mastery goal tracks engagement, and keyboard shortcuts keep navigation fast."
        }
      ]
    }
  },
  {
    id: "chess-3d",
    category: "3D Strategy · Learning · WebGL",
    title: "Chess 3D Academy",
    tagline: "Learn chess on a board that teaches you the best move.",
    description: "An immersive 3D chess board with legal-move highlighting and a theory-based move advisor that suggests the strongest play — wrapped in six futuristic glass-and-refraction visual themes.",
    icon: "Crown",
    accent: "amber",
    image: "/projects/chess-3d.png",
    url: "https://chess-3d-academy.vercel.app/",
    techTags: ["React", "Three.js", "WebGL", "Game Logic"],
    features: [
      { icon: "♟️", text: "Legal-Move Highlighting" },
      { icon: "🧠", text: "Theory-Based Move Advisor" },
      { icon: "💎", text: "6 Glass/Refraction Themes" },
      { icon: "🎥", text: "Free-Orbit 3D Camera" }
    ],
    caseStudy: {
      metrics: [
        { label: "Themes", value: "6" },
        { label: "Advisor", value: "Theory-Based" },
        { label: "Camera", value: "Full 3D" },
        { label: "Mode", value: "Free Play" }
      ],
      overview: "Chess 3D Academy reimagines learning chess as a premium 3D experience. Click a piece to light up its legal moves, rotate the board freely, and lean on a built-in advisor that recommends the strongest move based on chess theory and principles.",
      sections: [
        {
          title: "Guided, Theory-First Play",
          content: "Rather than a black-box engine, the advisor surfaces the best move according to established chess theory and principles — turning each game into a teaching moment for improving players."
        },
        {
          title: "Premium 3D Presentation",
          content: "Six futuristic themes — including Arctic Crystal, Neon Hologram and Deep Ocean — use glass and refraction effects for a modern, high-end aesthetic, with intuitive click-to-move and orbit controls."
        }
      ]
    }
  }
];

// ─── SECTION 3c: Engineering & Architecture ──────────────────────────────────────
export const engineeringProjects: any[] = [
  {
    id: "aether",
    category: "Generative Design · Architecture · Civil Engineering",
    title: "Aether — AI-Assisted Design Studio",
    tagline: "Generative design for architecture and civil engineering.",
    description: "A unified generative-design platform: Aetheria guides luxury residential architecture from site context to facades and interiors with live photorealistic AI rendering, while Structura handles conceptual bridge engineering with live parametric metrics.",
    icon: "Building2",
    accent: "blue",
    image: "/projects/aether.png",
    url: "https://architecture-web-app.vercel.app/",
    techTags: ["Next.js", "Three.js", "Generative AI", "Parametric 3D", "WebGL"],
    features: [
      { icon: "🏛️", text: "Aetheria — Architecture Module" },
      { icon: "🌉", text: "Structura — Bridge Engineering" },
      { icon: "🖼️", text: "Live Photorealistic AI Render" },
      { icon: "📐", text: "Real-Time Engineering Metrics" }
    ],
    caseStudy: {
      metrics: [
        { label: "Modules", value: "2" },
        { label: "Disciplines", value: "Arch + Civil" },
        { label: "Rendering", value: "AI Real-Time" },
        { label: "Access", value: "Free" }
      ],
      overview: "Aether is a single design engine powering multiple disciplines. It pairs a step-by-step architecture workflow with a parametric civil-engineering module, giving both real-time 3D feedback and generative AI rendering as the design evolves.",
      sections: [
        {
          title: "Aetheria — Architecture Module",
          content: "A step-by-step luxury residential workflow covering site context, facades, stylistic influences and interior spaces, with live 3D modeling and real-time photorealistic AI rendering. References to renowned designers are educational inspirations only — no affiliation or endorsement."
        },
        {
          title: "Structura — Civil Engineering Module",
          content: "Conceptual bridge design with configurable typology, materials, lighting and foundation, surfaced alongside live engineering metrics that update dynamically as parameters change."
        },
        {
          title: "Unified Real-Time Engine",
          content: "Both modules share one underlying engine, so 3D models and engineering calculations update together in real time — a single system spanning two design disciplines."
        }
      ]
    }
  }
];

// ─── SECTION 3d: 3D Games & Interactive ──────────────────────────────────────────
export const gameProjects: any[] = [
  {
    id: "coastline-drive",
    category: "3D Racing · Procedural · WebGL",
    title: "Coastline Drive",
    tagline: "A sunset Acapulco racer — built entirely in code.",
    description: "A procedural coastal-highway racer set in Acapulco at sunset, where the entire world and vehicles are generated in code rather than modeled assets. Nitro, handbrake drifts, adjustable time-of-day and a photo mode.",
    icon: "Car",
    accent: "amber",
    image: "/projects/coastline-drive.png",
    url: "https://coastline-drive.vercel.app/",
    techTags: ["Three.js", "WebGL", "Procedural Generation", "Physics"],
    features: [
      { icon: "🌅", text: "Procedural Acapulco Sunset" },
      { icon: "⚡", text: "Nitro + Handbrake Drift" },
      { icon: "🧊", text: "No Modeled Assets (Code-Only)" },
      { icon: "📸", text: "Photo Mode" }
    ]
  },
  {
    id: "tennis-3d",
    category: "3D Sports Sim · Physics · WebGL",
    title: "The Tennis Game",
    tagline: "Real physics, tournaments and cinematic replays.",
    description: "A full browser tennis simulation with real ball physics, pro-style tactics, tournament brackets and cinematic replays — plus challenge, survival and practice modes and a guided tutorial.",
    icon: "Trophy",
    accent: "emerald",
    image: "/projects/tennis-3d.png",
    url: "https://the-tennis-game.vercel.app/",
    techTags: ["Next.js", "Three.js", "WebGL", "Physics"],
    features: [
      { icon: "🎾", text: "Real Ball Physics" },
      { icon: "🏆", text: "5-Round Tournaments" },
      { icon: "⏱️", text: "Challenge & Survival Modes" },
      { icon: "🎬", text: "Cinematic Replays" }
    ]
  },
  {
    id: "aetherlynx",
    category: "3D Space Combat · Arcade · WebGL",
    title: "Aetherlynx",
    tagline: "Wave-based space combat with an unlockable arsenal.",
    description: "A wave-based space-combat shooter: fly a craft through escalating hostile waves, manage shields and hull, read the radar, and unlock progressively powerful primary and secondary weapons via a credit system.",
    icon: "Rocket",
    accent: "blue",
    image: "/projects/aetherlynx.png",
    url: "https://aetherlynx-3d.vercel.app/play",
    techTags: ["Three.js", "WebGL", "Game Loop", "Physics"],
    features: [
      { icon: "🚀", text: "Wave-Based Combat" },
      { icon: "🛡️", text: "Shield & Hull System" },
      { icon: "🎯", text: "Mission Variety" },
      { icon: "🔫", text: "Unlockable Weapon Tiers" }
    ]
  },
  {
    id: "soccer-3d",
    category: "3D Sports · Arcade · WebGL",
    title: "3D Soccer Game",
    tagline: "Browser-native 3D football, no install required.",
    description: "A scene-based 3D soccer game running entirely in the browser via WebGL — built as a real-time interactive sports experience.",
    icon: "Goal",
    accent: "emerald",
    image: "/projects/soccer-3d.png",
    url: "https://3d-soccer-game.vercel.app/",
    techTags: ["Three.js", "WebGL", "Real-Time 3D"]
  },
  {
    id: "surf-3d",
    category: "3D Sports · Arcade · WebGL",
    title: "Surf 3D",
    tagline: "Ride the wave — a real-time 3D surfing experience.",
    description: "A real-time 3D wave-riding game built for the browser with Three.js / WebGL.",
    icon: "Waves",
    accent: "blue",
    image: "/projects/surf-3d.png",
    url: "https://surf-3d.vercel.app/",
    techTags: ["Three.js", "WebGL", "Real-Time 3D"]
  },
  {
    id: "worldcup-vault",
    category: "Sports · Interactive Archive · i18n",
    title: "WorldCupVault",
    tagline: "A cinematic, interactive World Cup archive (1930–2022).",
    description: "An independent, cinematic football-history archive covering every World Cup from 1930 to 2022 — with a 2026 bracket predictor, group-stage visualizer, knowledge quiz and full support for 7 languages.",
    icon: "Globe",
    accent: "amber",
    image: "/projects/worldcup-vault.png",
    url: "https://theworldcupvault.vercel.app/en",
    techTags: ["Next.js", "TypeScript", "i18n", "Data Viz"],
    features: [
      { icon: "🏆", text: "Every Final, 1930–2022" },
      { icon: "🔮", text: "2026 Bracket Predictor" },
      { icon: "❓", text: "World Cup Knowledge Quiz" },
      { icon: "🌐", text: "7 Languages" }
    ],
    caseStudy: {
      metrics: [
        { label: "Tournaments", value: "1930–2022" },
        { label: "Languages", value: "7" },
        { label: "Predictor", value: "2026" },
        { label: "Type", value: "Interactive Archive" }
      ],
      overview: "WorldCupVault is an independent, cinematic archive of more than a century of World Cup football. It pairs a complete historical record with interactive tools, and is explicitly not affiliated with or endorsed by FIFA or any federation.",
      sections: [
        {
          title: "A Century of History, Explorable",
          content: "Championship records, match scores and top-scorer statistics span every tournament from 1930 to 2022, browsable through a historical explorer."
        },
        {
          title: "Interactive Tools",
          content: "A 2026 bracket predictor (12 groups with format details), group-stage visualization and a knowledge quiz turn passive history into active exploration."
        },
        {
          title: "Global by Default",
          content: "The entire experience is localized across 7 languages — English, Spanish, French, Italian, German, Japanese and Mandarin Chinese."
        }
      ]
    }
  }
];

// Legacy export for backward compatibility — combines all projects
export const allProjects: any[] = [
  ...clinicalProjects.filter(p => !p.caseStudy),
];

// ─── SECTION 4: Productividad ───────────────────────────────────────────────────
export const productivityProjects: any[] = [
  {
    id: "stoic-focus",
    category: "Productivity · Minimalist · PWA",
    title: "⏱️ Focus Timer",
    tagline: "Focus with intention.",
    description: "A minimalist, privacy-first Pomodoro timer designed to help you focus with intention. Features local storage for streak tracking, distraction-free interface, and zero tracking.",
    icon: "Clock",
    image: "/projects/stoic-focus-v4.png",
    url: "https://stoic-focus.vercel.app/",
    techTags: ["React", "TypeScript", "PWA", "Vite"],
    caseStudy: {
      metrics: [
        { label: "Architecture", value: "Offline-First" },
        { label: "Storage", value: "Local Only" },
        { label: "Type", value: "PWA" },
        { label: "Design", value: "Minimalist" }
      ],
      overview: "Stoic Pomodoro is a mindful productivity tool built on the principles of Stoicism. It's designed to be a quiet companion for deep work, eliminating all unnecessary distractions, accounts, and telemetry.",
      sections: [
        {
          title: "Privacy-First Local Storage",
          content: "Your tasks, statistics, and preferences live solely on your device within your browser's local storage. The application does not transmit, collect, or monetize any user data, ensuring complete privacy."
        },
        {
          title: "Distraction-Free Interface",
          content: "The UI is intentionally stripped back to the essentials. By focusing purely on typography, spacing, and subtle color cues, the application keeps your attention on the task at hand rather than the tool itself."
        },
        {
          title: "Progressive Web App (PWA)",
          content: "Fully installable on iOS, Android, and Desktop environments. It functions seamlessly offline and feels indistinguishable from a native application without the overhead of an app store."
        }
      ]
    }
  }
];

// ─── SECTION 5: Entertainment ───────────────────────────────────────────────────
export const entertainmentProjects: any[] = [
  {
    id: "digital-magic",
    category: "Entertainment · Interactive · 3D",
    title: "🎩 🪄 Digital Magic",
    tagline: "Are you up for a magic trick? 🎩 🪄",
    description: "Are you up for a magic trick? 🎩 🪄 An interactive, dark-tech aesthetic digital illusion experience.",
    image: "/projects/digital-magic-v4.png",
    url: "https://neural-digital-wonder.vercel.app/",
    techTags: ["Next.js", "Three.js", "Framer Motion"],
    caseStudy: {
      metrics: [
        { label: "Experience", value: "Interactive" },
        { label: "Aesthetic", value: "Dark Tech" },
        { label: "Engine", value: "Three.js" },
        { label: "Platform", value: "Next.js" }
      ],
      overview: "Digital Magic is an interactive digital illusion platform wrapped in a premium 'dark tech' aesthetic. It leverages 3D web technologies to deliver an engaging, magical experience directly in the browser.",
      sections: [
        {
          title: "Immersive 3D Environment",
          content: "The platform features a sophisticated 3D hero background with elegant wireframe orbs and orbital rings, creating a futuristic, high-end visual atmosphere."
        },
        {
          title: "Interactive Illusions",
          content: "Users are guided through a series of interactive steps that culminate in a mind-reading magic trick, powered by complex state management and seamless transitions."
        },
        {
          title: "Premium UI Components",
          content: "Utilizes deep blue-black color palettes and refined glassmorphism effects to maintain high text readability and consistent premium UI across all devices."
        }
      ]
    }
  }
];
