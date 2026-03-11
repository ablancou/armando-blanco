import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  BrainCircuit, 
  Music, 
  Globe 
} from "lucide-react"

export const personalInfo = {
  name: "Armando Blanco",
  role: "Full-Stack Developer & Data Scientist",
  tagline: "Bridging the gap between software engineering and data science.",
  summary: [
    "Full-Stack Software Developer and Data Scientist with 10+ years of experience, including the development of educational tools and data-driven solutions.",
    "Proven expertise in building and deploying neural networks using PyTorch, and creating interactive applications with Next.js, React, and Streamlit.",
    "Extensive experience in designing and implementing data pipelines, as well as working with SQL/NoSQL databases to manage and analyze large-scale data.",
    "Proficient in API integration, Git/GitHub for version control, and Agile methodologies, with a focus on continuous improvement in iterative development practices."
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
      title: "Full-Stack Software Developer and Data Scientist",
      company: "Freelance",
      date: "2012 - Present",
      bullets: [
        "Developed and deployed educational games and interactive learning tools, integrating AI-powered content for enhanced learning experiences.",
        "Built and deployed neural networks using PyTorch for data science projects, providing data-driven solutions.",
        "Designed and implemented data pipelines, managing and analyzing large-scale data using SQL/NoSQL databases.",
        "Created web applications using Next.js and Streamlit, enabling real-time data interaction and visualization.",
        "Applied Git/GitHub for version control across several projects, ensuring effective code management and collaboration.",
        "Continuously expanding knowledge in full-stack development, currently pursuing courses in advanced cloud architecture and deployment."
      ]
    },
    {
      title: "Technical Consultant",
      company: "Data Science and Machine Learning Projects, Freelance",
      date: "2015 - Present",
      bullets: [
        "Provided consultation services for data-driven projects, assisting in the implementation of machine learning models using PyTorch.",
        "Guided clients through data analysis processes, from data cleaning and preparation to model training and evaluation.",
        "Supported clients in understanding and applying data science and machine learning tools, including Python and cloud platforms."
      ]
    },
    {
      title: "Content Creator",
      company: "Educational Content on Social Media Platforms",
      date: "2019 - Present",
      bullets: [
        "Created engaging educational content across platforms like YouTube and TikTok, with notable audience engagement on various posts.",
        "Wrote engaging and informative scripts for videos, ensuring that complex topics were explained in a simple and accessible way.",
        "Focused on educational content that helps learners in areas such as music theory and other educational subjects."
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

export const flagshipProject = {
  title: "Jazz Arcade",
  url: "https://jazzarcade.com",
  tagline: "A comprehensive music education platform",
  features: [
    { icon: "🎯", text: "12 Interactive Games (Phaser 3)" },
    { icon: "📚", text: "22+ Music Theory Lessons" },
    { icon: "🎹", text: "590+ Practice Exercises" },
    { icon: "🎼", text: "Jazz Studio - Professional Notation Suite" },
    { icon: "🔐", text: "User Authentication (AWS Cognito)" },
    { icon: "🌍", text: "6 Languages (EN, ES, IT, PT, FR, DE)" },
    { icon: "☁️", text: "Cloud-synced Progress Tracking" },
    { icon: "🔗", text: "REST API + GraphQL Integration" },
    { icon: "🤖", text: "Google Gemini AI Integration" }
  ],
  techTags: [
    "Next.js 15", "React 18", "TypeScript", "Tailwind CSS", 
    "AWS Amplify", "Phaser 3", "GraphQL", "DynamoDB"
  ]
}

export const dataScienceProjects = [
  {
    title: "Diabetes Prediction App",
    description: "This app predicts whether a patient is at risk of developing diabetes.",
    techDesc: "Technology used: Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.",
    icon: "Activity",
    url: "https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/"
  },
  {
    title: "Heart Disease Prediction App",
    description: "This app predicts the probability of having heart disease.",
    techDesc: "Technology used: Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.",
    icon: "HeartPulse",
    url: "https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/"
  },
  {
    title: "Medical Calculators Toolkit",
    description: "A medical calculation tool that includes multiple calculators to aid in clinical decision-making in general medicine.",
    techDesc: "Features numerous evidence-based clinical calculators in a single, easy-to-use interface.",
    icon: "Calculator",
    url: "https://medical-calculators-toolkit-for-general-medicine.streamlit.app/"
  },
  {
    title: "Genetic Diagnostics Pipeline",
    description: "Automated variant classification analysis following ACMG standards. Generates executive reports for diagnostic laboratories with professional visualizations.",
    techDesc: "A complete end-to-end pipeline.",
    icon: "Dna",
    tags: ["Python", "pandas", "matplotlib", "python-pptx"]
  }
]

export const technicalExpertise = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Phaser 3", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "GraphQL", "AWS Amplify Data", "Python"]
  },
  {
    category: "Cloud & Auth",
    icon: Database,
    skills: ["AWS Amplify", "AWS Cognito", "DynamoDB", "OAuth 2.0"]
  },
  {
    category: "Data Science",
    icon: BrainCircuit,
    skills: ["PyTorch", "pandas", "matplotlib", "scikit-learn", "NumPy"]
  },
  {
    category: "AI Integration",
    icon: Code2,
    skills: ["Google Gemini API", "LLM Prompt Engineering", "Neural Networks"]
  },
  {
    category: "Audio & Music",
    icon: Music,
    skills: ["VexFlow", "Tone.js", "Web Audio API", "SVGuitar"]
  },
  {
    category: "DevOps & Tools",
    icon: Smartphone,
    skills: ["Git/GitHub", "CI/CD", "Docker", "Google Colab"]
  },
  {
    category: "Internationalization",
    icon: Globe,
    skills: ["next-intl", "i18n", "6 Languages Support"]
  }
]

export const techStack = [
  { name: "Python", desc: "A versatile programming language for data science and software development", url: "https://www.python.org/" },
  { name: "Next.js", desc: "React framework for production-grade web applications", url: "https://nextjs.org/" },
  { name: "React", desc: "JavaScript library for building user interfaces", url: "https://react.dev/" },
  { name: "TypeScript", desc: "Typed superset of JavaScript for scalable applications", url: "https://www.typescriptlang.org/" },
  { name: "AWS Amplify", desc: "Full-stack cloud platform for web and mobile apps", url: "https://aws.amazon.com/amplify/" },
  { name: "PyTorch", desc: "An open-source machine learning library used for building neural networks", url: "https://pytorch.org/" },
  { name: "Streamlit", desc: "A framework for building and deploying data science web apps", url: "https://streamlit.io/" },
  { name: "Phaser 3", desc: "HTML5 game framework for desktop and mobile", url: "https://phaser.io/" }
]

export const coreSkills = [
  { name: "Programming", details: "Python, JavaScript, TypeScript, C, C++, Java, C#, R, Swift" },
  { name: "Data Processing", details: "SQL, pandas, NumPy" },
  { name: "Data Visualization", details: "matplotlib, seaborn, plotly" },
  { name: "Model Deployment", details: "Vercel, Streamlit, Google Colab, AWS Amplify" },
  { name: "Web Development", details: "Next.js, React, HTML, CSS, JavaScript, Tailwind CSS" },
  { name: "Game Development", details: "Phaser 3, Web Audio API" },
  { name: "Version Control", details: "Git, GitHub" },
  { name: "Cloud Platforms", details: "AWS (Amplify, Cognito, DynamoDB), Google Cloud, Google Colab" },
  { name: "Presentation & Content", details: "Proficient in creating professional presentations, design documents, and educational content using various tools." }
]
