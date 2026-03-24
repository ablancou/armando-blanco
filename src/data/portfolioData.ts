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

export type Language = 'es' | 'en' | 'it' | 'fr' | 'pt' | 'de';

export const translations = {
  es: {
    personalInfo: {
      name: "Armando Blanco",
      role: "Software Engineer II | Full-Stack & Inteligencia AI",
      tagline: "Arquitectando sistemas de alto rendimiento y pipelines de AI inteligente en México.",
      summary: [
        "Software Engineer II con 10+ años de experiencia multidisciplinaria, especializado en arquitecturas Next.js escalables y diagnósticos clínicos de IA.",
        "Experto en orquestación de LLM, investigación neuronal con PyTorch y despliegue de sistemas distribuidos de misión crítica.",
        "Historial probado en el ecosistema tecnológico de México, cerrando la brecha entre la ciencia de datos avanzada y la ingeniería de software profesional.",
        "Especializado en arquitectar pipelines de datos complejos, DevOps nativo de la nube (AWS) y plataformas de salud de alta confiabilidad."
      ],
      experience: [
        {
          title: "Senior Full-Stack Developer & Data Scientist",
          company: "Freelance / Jazz Arcade",
          date: "2012 - Presente",
          bullets: [
            "Arquitecté Jazz Arcade, una plataforma de educación musical de alto tráfico que sirve a usuarios globales con aprendizaje personalizado impulsado por IA.",
            "Implementé pipelines de diagnóstico para laboratorios médicos usando Python, transformando datos genómicos crudos en conocimientos clínicos.",
            "Ingeniería de suites de visualización de datos en tiempo real con Next.js y Streamlit, mejorando la velocidad de decisión para consultores de datos en un 40%.",
            "Pionero en la integración de la IA Google Gemini en la pedagogía de la teoría musical, creando el primer tutor de jazz de IA adaptativo."
          ]
        },
        {
          title: "Consultor Técnico",
          company: "Data Science Solutions",
          date: "2015 - Presente",
          bullets: [
            "Lideré equipos multidisciplinarios en la implementación de redes neuronales predictivas para la evaluación de riesgos clínicos.",
            "Diseñé pipelines ETL automatizados para manejar fuentes de datos médicos heterogéneos.",
            "Optimicé estrategias de despliegue en la nube en AWS, reduciendo los costos operativos para los clientes en un 25%."
          ]
        }
      ]
    },
    common: {
      heroTitle: "Transformando la Complejidad en Simplicidad",
      heroSubtitle: "Construyendo aplicaciones que transforman requerimientos complejos en soluciones elegantes.",
      exploreWork: "Explorar mi trabajo",
      letBuild: "Construyamos Juntos",
      visitPlatform: "Visitar Plataforma",
      caseStudy: "Caso de Estudio",
      available: "Disponible para proyectos de alto impacto",
      vision: "La Visión",
      visionText: "Cerrando la brecha entre los datos crudos y la arquitectura de software profesional. Mi enfoque se basa en la excelencia académica y una década de experiencia en el campo.",
      eliteShowcase: "Escaparate de Élite",
      engineeringArtifacts: "Artefactos de Ingeniería Seleccionados",
      fortitude: "Fortaleza",
      fortitudeText: "El stack fundacional que impulsa soluciones de misión crítica.",
      trajectory: "Trayectoria",
      trajectoryText: "Una línea de tiempo de innovación y resolución de problemas complejos.",
      footerTitle: "Construyamos Software con Sentido",
      footerText: "Siempre estoy abierto a explorar desafíos técnicos complejos y colaborar con equipos visionarios."
    }
  },
  en: {
    personalInfo: {
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
    },
    common: {
      heroTitle: "Turning Complexity Into Simplicity",
      heroSubtitle: "Building applications that transform complex requirements into elegant solutions.",
      exploreWork: "Explore My Work",
      letBuild: "Let's Build Together",
      visitPlatform: "Visit Platform",
      caseStudy: "Case Study",
      available: "Available for high-impact projects",
      vision: "The Vision",
      visionText: "Bridging the gap between raw data and professional software architecture. My approach is rooted in academic excellence and decade-long field experience.",
      eliteShowcase: "Elite Showcase",
      engineeringArtifacts: "Selected Engineering Artifacts",
      fortitude: "Fortitude",
      fortitudeText: "The foundational stack powering mission-critical solutions.",
      trajectory: "Trajectory",
      trajectoryText: "A timeline of innovation and complex problem-solving.",
      footerTitle: "Let's Build Meaningful Software",
      footerText: "I am always open to exploring complex technical challenges and collaborating with visionary teams."
    }
  },
  it: {
    personalInfo: {
      name: "Armando Blanco",
      role: "Software Engineer II | Full-Stack & AI Intelligence",
      tagline: "Architettura di sistemi ad alte prestazioni e pipeline di IA intelligente in Messico.",
      summary: [
        "Software Engineer II con oltre 10 anni di esperienza multidisciplinare, specializzato in architetture Next.js scalabili e diagnostica clinica IA.",
        "Esperto in orchestrazione LLM, ricerca neurale con PyTorch e implementazione di sistemi distribuiti mission-critical.",
        "Comprovata esperienza nell'ecosistema tecnologico del Messico, colmando il divario tra data science avanzata e ingegneria del software professionale.",
        "Specializzato nell'architettura di pipeline di dati complesse, DevOps cloud-native (AWS) e piattaforme sanitarie ad alta affidabilità."
      ],
      experience: [
        {
          title: "Senior Full-Stack Developer & Data Scientist",
          company: "Freelance / Jazz Arcade",
          date: "2012 - Presente",
          bullets: [
            "Architettato Jazz Arcade, una piattaforma di educazione musicale ad alto traffico che serve utenti globali con apprendimento personalizzato basato sull'IA.",
            "Implementato pipeline diagnostiche per laboratori medici utilizzando Python, trasformando dati genomici grezzi in approfondimenti clinici.",
            "Ingegnerizzato suite di visualizzazione dati in tempo reale con Next.js e Streamlit, migliorando la velocità decisionale per i consulenti del 40%.",
            "Pioniere nell'integrazione dell'IA Google Gemini nella pedagogia della teoria musicale, creando il primo tutor jazz IA adattivo."
          ]
        }
      ]
    },
    common: {
      heroTitle: "Trasformare la Complessità in Semplicità",
      heroSubtitle: "Costruendo applicazioni che trasformano requisiti complessi in soluzioni eleganti.",
      exploreWork: "Esplora il mio lavoro",
      letBuild: "Costruiamo Insieme",
      visitPlatform: "Visita la Piattaforma",
      caseStudy: "Case Study",
      available: "Disponibile per progetti ad alto impatto",
      vision: "La Visione",
      visionText: "Colmare il divario tra dati grezzi e architettura software professionale. Il mio approccio è radicato nell'eccellenza accademica e in un'esperienza decennale sul campo.",
      eliteShowcase: "Vetrina d'Élite",
      engineeringArtifacts: "Manufatti di Ingegneria Selezionati",
      fortitude: "Fortezza",
      fortitudeText: "Lo stack fondamentale che alimenta soluzioni mission-critical.",
      trajectory: "Traiettoria",
      trajectoryText: "Una cronologia di innovazione e risoluzione di problemi complessi.",
      footerTitle: "Costruiamo Software Significativo",
      footerText: "Sono sempre aperto a esplorare sfide tecniche complesse e a collaborare con team visionari."
    }
  },
  fr: {
    personalInfo: {
      name: "Armando Blanco",
      role: "Software Engineer II | Full-Stack & Intelligence IA",
      tagline: "Architecture de systèmes haute performance et pipelines d'IA intelligente au Mexique.",
      summary: [
        "Ingénieur Logiciel II avec plus de 10 ans d'expérience multidisciplinaire, spécialisé dans les architectures Next.js évolutives et les diagnostics cliniques par IA.",
        "Expert en orchestration LLM, recherche neurale avec PyTorch et déploiement de systèmes distribués critiques.",
        "Expérience confirmée dans l'écosystème technologique du Mexique, comblant le fossé entre la science des données avancée et l'ingénierie logicielle professionnelle.",
        "Spécialisé dans l'architecture de pipelines de données complexes, le DevOps cloud-native (AWS) et les plateformes de santé haute fiabilité."
      ],
      experience: [
        {
          title: "Senior Full-Stack Developer & Data Scientist",
          company: "Freelance / Jazz Arcade",
          date: "2012 - Présent",
          bullets: [
            "Architecturé Jazz Arcade, une plateforme d'éducation musicale à fort trafic servant des utilisateurs mondiaux avec un apprentissage personnalisé propulsé par l'IA.",
            "Implémenté des pipelines de diagnostic pour les laboratoires médicaux avec Python, transformant les données génomiques brutes en informations cliniques.",
            "Conçu des suites de visualisation de données en temps réel avec Next.js et Streamlit, améliorant la vitesse de décision des consultants de 40%.",
            "Pionnier de l'intégration de l'IA Google Gemini dans la pédagogie de la théorie musicale, créant le premier tuteur de jazz IA adaptatif."
          ]
        }
      ]
    },
    common: {
      heroTitle: "Transformer la Complexité en Simplicité",
      heroSubtitle: "Créer des applications qui transforment des exigences complexes en solutions élégantes.",
      exploreWork: "Explorer mon travail",
      letBuild: "Construisons Ensemble",
      visitPlatform: "Visiter la Plateforme",
      caseStudy: "Étude de Cas",
      available: "Disponible para projets à fort impact",
      vision: "La Vision",
      visionText: "Combler le fossé entre les données brutes et l'architecture logicielle professionnelle. Mon approche est ancrée dans l'excellence académique et une expérience de terrain de dix ans.",
      eliteShowcase: "Vitrine d'Élite",
      engineeringArtifacts: "Artéfacts d'Ingénierie Sélectionnés",
      fortitude: "Fortitude",
      fortitudeText: "La pile technologique fondamentale alimentant des solutions critiques.",
      trajectory: "Trajectoire",
      trajectoryText: "Une chronologie d'innovation et de résolution de problèmes complexes.",
      footerTitle: "Construisons des Logiciels Significatifs",
      footerText: "Je suis toujours ouvert à l'exploration de défis techniques complexes et à la collaboration avec des équipes visionnaires."
    }
  },
  pt: {
    personalInfo: {
      name: "Armando Blanco",
      role: "Software Engineer II | Full-Stack & Inteligência AI",
      tagline: "Arquitetando sistemas de alto desempenho e pipelines de IA inteligente no México.",
      summary: [
        "Software Engineer II com mais de 10 anos de experiência multidisciplinar, especializado em arquiteturas Next.js escaláveis e diagnósticos clínicos de IA.",
        "Especialista em orquestração de LLM, pesquisa neural com PyTorch e implantação de sistemas distribuídos de missão crítica.",
        "Histórico comprovado no ecossistema tecnológico do México, preenchendo a lacuna entre ciência de dados avançada e engenharia de software profissional.",
        "Especializado em arquitetar pipelines de dados complexos, DevOps nativo da nuvem (AWS) e plataformas de saúde de alta confiabilidade."
      ],
      experience: [
        {
          title: "Senior Full-Stack Developer & Data Scientist",
          company: "Freelance / Jazz Arcade",
          date: "2012 - Presente",
          bullets: [
            "Arquitetou o Jazz Arcade, uma plataforma de educação musical de alto tráfego que atende usuários globais com aprendizado personalizado impulsionado por IA.",
            "Implementou pipelines de diagnóstico para laboratórios médicos usando Python, transformando dados genômicos brutos em insights clínicos.",
            "Projetou suítes de visualização de dados em tempo real com Next.js e Streamlit, melhorando a velocidade de decisão para consultores em 40%.",
            "Pioneiro na integração da IA Google Gemini na pedagogia da teoria musical, criando o primeiro tutor de jazz de IA adaptativo."
          ]
        }
      ]
    },
    common: {
      heroTitle: "Transformando Complexidade em Simplicidade",
      heroSubtitle: "Construindo aplicações que transformam requisitos complexos em soluções elegantes.",
      exploreWork: "Explorar meu trabalho",
      letBuild: "Vamos Construir Juntos",
      visitPlatform: "Visitar Plataforma",
      caseStudy: "Estudo de Caso",
      available: "Disponível para projetos de alto impacto",
      vision: "A Visão",
      visionText: "Preenchendo a lacuna entre dados brutos e arquitetura de software profissional. Minha abordagem está enraizada na excelência acadêmica e em uma década de experiência no campo.",
      eliteShowcase: "Vitrine de Elite",
      engineeringArtifacts: "Artefatos de Engenharia Selecionados",
      fortitude: "Fortaleza",
      fortitudeText: "A pilha fundamental que impulsiona soluções de missão crítica.",
      trajectory: "Trajetória",
      trajectoryText: "Uma linha do tempo de inovação e resolução de problemas complexos.",
      footerTitle: "Vamos Construir Software Significativo",
      footerText: "Estou sempre aberto a explorar desafios técnicos complexos e colaborar com equipes visionárias."
    }
  },
  de: {
    personalInfo: {
      name: "Armando Blanco",
      role: "Software Engineer II | Full-Stack & KI-Intelligenz",
      tagline: "Architektur von Hochleistungssystemen und intelligenten KI-Pipelines in Mexiko.",
      summary: [
        "Software Engineer II mit über 10 Jahren fachübergreifender Erfahrung, spezialisiert auf skalierbare Next.js-Architekturen und klinische KI-Diagnostik.",
        "Experte für LLM-Orchestrierung, neuronale Forschung mit PyTorch und Einsatz geschäftskritischer verteilter Systeme.",
        "Nachgewiesene Erfolgsbilanz im Tech-Ökosystem Mexikos, die die Lücke zwischen fortgeschrittener Datenwissenschaft und professioneller Softwaretechnik schließt.",
        "Spezialisiert auf die Architektur komplexer Daten-Pipelines, Cloud-native DevOps (AWS) und hochzuverlässige Gesundheitsplattformen."
      ],
      experience: [
        {
          title: "Senior Full-Stack Developer & Data Scientist",
          company: "Freelance / Jazz Arcade",
          date: "2012 - Heute",
          bullets: [
            "Architekt von Jazz Arcade, einer hochfrequentierten Musikbildungsplattform, die globale Nutzer mit KI-gestütztem personalisiertem Lernen bedient.",
            "Implementierung von Diagnose-Pipelines für medizinische Labors mit Python, Umwandlung von genomischen Rohdaten in klinische Erkenntnisse.",
            "Entwicklung von Echtzeit-Datenvisualisierungssuiten mit Next.js und Streamlit, wodurch die Entscheidungsgeschwindigkeit für Berater um 40 % verbessert wurde.",
            "Pionier bei der Integration von Google Gemini AI in die Musiktheorie-Pädagogik, Schaffung des ersten adaptiven KI-Jazz-Tutors."
          ]
        }
      ]
    },
    common: {
      heroTitle: "Komplexität in Einfachheit verwandeln",
      heroSubtitle: "Anwendungen entwickeln, die komplexe Anforderungen in elegante Lösungen verwandeln.",
      exploreWork: "Meine Arbeit erkunden",
      letBuild: "Lass uns zusammen bauen",
      visitPlatform: "Plattform besuchen",
      caseStudy: "Fallstudie",
      available: "Verfügbar für hochwirksame Projekte",
      vision: "Die Vision",
      visionText: "Die Lücke zwischen Rohdaten und professioneller Softwarearchitektur schließen. Mein Ansatz wurzelt in akademischer Exzellenz und jahrzehntelanger Praxiserfahrung.",
      eliteShowcase: "Elite-Showcase",
      engineeringArtifacts: "Ausgewählte Engineering-Artefakte",
      fortitude: "Stärke",
      fortitudeText: "Der grundlegende Stack, der geschäftskritische Lösungen antreibt.",
      trajectory: "Werdegang",
      trajectoryText: "Eine Timeline der Innovation und der Lösung komplexer Probleme.",
      footerTitle: "Lass uns aussagekräftige Software bauen",
      footerText: "Ich bin immer offen dafür, komplexe technische Herausforderungen zu erkunden und mit visionären Teams zusammenzuarbeiten."
    }
  }
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

export const personalInfo = translations.en.personalInfo;

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
    techTags: ["Next.js 15", "TypeScript", "AWS Amplify", "Phaser 3", "Gemini AI"]
  },
  {
    id: "orbital-dome",
    category: "Precision Engineering",
    title: "Orbital Dome",
    tagline: "Interactive Real-Time Space and 3D Orbit Visualizer.",
    description: "High-performance interactive 3D web application to visualize the night sky and track thousands of real-time satellites.",
    techDesc: "Implemented real-time orbital propagation using SGP4 mathematical models and live TLE data.",
    icon: "Eye",
    image: "/projects/cosmosview.png",
    url: "https://www.orbitaldome.com",
    techTags: ["Three.js", "React", "Vite", "satellite.js", "Astronomy Engine"]
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
    techTags: ["Python", "Reflex", "Data Science", "Clinical Tools"]
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

