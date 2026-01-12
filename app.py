import streamlit as st
from PIL import Image

# Page config
st.set_page_config(
    page_title="Armando Blanco | Full-Stack Developer & Data Scientist",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Load custom CSS
with open("style.css") as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

# ==================== HEADER ====================
st.markdown("""
<div class="header-section">
    <div class="header-badge">Full-Stack Developer & Data Scientist</div>
    <h1 class="header-title">Armando Blanco</h1>
</div>
""", unsafe_allow_html=True)

# Profile Image
image = Image.open('AB.png')
col1, col2, col3 = st.columns([1, 0.5, 1])
with col2:
    st.image(image, width=120)

# ==================== SUMMARY ====================
st.markdown('<h2 class="section-title">Summary</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="summary-box">
    <ul class="summary-list">
        <li>Full-Stack Software Developer and Data Scientist with <span class="highlight">10+</span> years of experience, including the development of educational tools and data-driven solutions.</li>
        <li>Proven expertise in building and deploying neural networks using <span class="highlight">PyTorch</span>, and creating interactive applications with <span class="highlight">Streamlit</span>.</li>
        <li>Extensive experience in designing and implementing data pipelines, as well as working with SQL/NoSQL databases to manage and analyze large-scale data.</li>
        <li>Proficient in API integration, Git/GitHub for version control, and Agile methodologies, with a focus on continuous improvement in iterative development practices.</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# ==================== FLAGSHIP PROJECT: JAZZ ARCADE ====================
st.markdown('<h2 class="section-title">🎮 Flagship Project</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="flagship-card">
    <div class="flagship-header">
        <div class="flagship-title-row">
            <h3>Jazz Arcade</h3>
            <a href="https://jazzarcade.com" target="_blank" class="flagship-link">
                jazzarcade.com →
            </a>
        </div>
        <p class="flagship-tagline">A comprehensive music education platform</p>
    </div>
    <div class="flagship-features">
        <div class="feature-grid">
            <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <span class="feature-text">12 Interactive Games (Phaser 3)</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">📚</span>
                <span class="feature-text">22+ Music Theory Lessons</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🎹</span>
                <span class="feature-text">590+ Practice Exercises</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🎼</span>
                <span class="feature-text">Jazz Studio - Professional Notation Suite</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🔐</span>
                <span class="feature-text">User Authentication (AWS Cognito)</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🌍</span>
                <span class="feature-text">6 Languages (EN, ES, IT, PT, FR, DE)</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">☁️</span>
                <span class="feature-text">Cloud-synced Progress Tracking</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🔗</span>
                <span class="feature-text">REST API + GraphQL Integration</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span class="feature-text">Google Gemini AI Integration</span>
            </div>
        </div>
    </div>
    <div class="flagship-tech">
        <span class="tech-tag">Next.js 15</span>
        <span class="tech-tag">React 18</span>
        <span class="tech-tag">TypeScript</span>
        <span class="tech-tag">Tailwind CSS</span>
        <span class="tech-tag">AWS Amplify</span>
        <span class="tech-tag">Phaser 3</span>
        <span class="tech-tag">GraphQL</span>
        <span class="tech-tag">DynamoDB</span>
    </div>
</div>
""", unsafe_allow_html=True)

# ==================== DATA SCIENCE PROJECTS ====================
st.markdown('<h2 class="section-title">🏥 Data Science & Healthcare Projects</h2>', unsafe_allow_html=True)

col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    <div class="project-card">
        <div class="project-icon">🩺</div>
        <h4>Diabetes Prediction App</h4>
        <p>This app predicts whether a patient is at risk of developing diabetes.</p>
        <p class="project-tech-desc">Technology used: Python and a previously trained neural network built with the <span class="highlight">PyTorch</span> framework. It provides accurate predictions based on the user's input parameters.</p>
        <a href="https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/" target="_blank" class="project-link">
            View Project →
        </a>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class="project-card">
        <div class="project-icon">❤️</div>
        <h4>Heart Disease Prediction App</h4>
        <p>This app predicts the probability of having heart disease.</p>
        <p class="project-tech-desc">Technology used: Python and a previously trained neural network built with the <span class="highlight">PyTorch</span> framework. It provides accurate predictions based on the user's input parameters.</p>
        <a href="https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/" target="_blank" class="project-link">
            View Project →
        </a>
    </div>
    """, unsafe_allow_html=True)

col3, col4 = st.columns(2)

with col3:
    st.markdown("""
    <div class="project-card">
        <div class="project-icon">🧮</div>
        <h4>Medical Calculators Toolkit</h4>
        <p>A medical calculation tool that includes multiple calculators to aid in clinical decision-making in general medicine.</p>
        <a href="https://medical-calculators-toolkit-for-general-medicine.streamlit.app/" target="_blank" class="project-link">
            View Project →
        </a>
    </div>
    """, unsafe_allow_html=True)

with col4:
    st.markdown("""
    <div class="project-card">
        <div class="project-icon">🧬</div>
        <h4>Genetic Diagnostics Pipeline</h4>
        <p>Automated variant classification analysis following ACMG standards. Generates executive reports for diagnostic laboratories with professional visualizations.</p>
        <div class="project-tech-tags">
            <span class="mini-tag">Python</span>
            <span class="mini-tag">pandas</span>
            <span class="mini-tag">matplotlib</span>
            <span class="mini-tag">python-pptx</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

# ==================== EDUCATION ====================
st.markdown('<h2 class="section-title">🎓 Education</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="education-card">
    <div class="education-content">
        <h4>Bachelor in Business Administration</h4>
        <p class="education-school">Universidad Anáhuac, Mexico City</p>
    </div>
    <span class="education-date">2005 - 2009</span>
</div>
""", unsafe_allow_html=True)

# ==================== WORK EXPERIENCE ====================
st.markdown('<h2 class="section-title">💼 Work Experience</h2>', unsafe_allow_html=True)

# Experience 1
st.markdown("""
<div class="experience-card">
    <div class="experience-header">
        <div>
            <h4>Full-Stack Software Developer and Data Scientist</h4>
            <p class="experience-company">Freelance</p>
        </div>
        <span class="experience-date">2012 - Present</span>
    </div>
    <ul class="experience-list">
        <li>Developed and deployed educational games and interactive learning tools, integrating AI-powered content for enhanced learning experiences.</li>
        <li>Built and deployed neural networks using <span class="highlight">PyTorch</span> for data science projects, providing data-driven solutions.</li>
        <li>Designed and implemented data pipelines, managing and analyzing large-scale data using SQL/NoSQL databases.</li>
        <li>Created web applications using <span class="highlight">Streamlit</span>, enabling real-time data interaction and visualization.</li>
        <li>Applied Git/GitHub for version control across several projects, ensuring effective code management and collaboration.</li>
        <li>Continuously expanding knowledge in full-stack development, currently pursuing courses in advanced cloud architecture and deployment.</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# Experience 2
st.markdown("""
<div class="experience-card">
    <div class="experience-header">
        <div>
            <h4>Technical Consultant</h4>
            <p class="experience-company">Data Science and Machine Learning Projects, Freelance</p>
        </div>
        <span class="experience-date">2015 - Present</span>
    </div>
    <ul class="experience-list">
        <li>Provided consultation services for data-driven projects, assisting in the implementation of machine learning models using <span class="highlight">PyTorch</span>.</li>
        <li>Guided clients through data analysis processes, from data cleaning and preparation to model training and evaluation.</li>
        <li>Supported clients in understanding and applying data science and machine learning tools, including Python and <span class="highlight">Streamlit</span>.</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# Experience 3
st.markdown("""
<div class="experience-card">
    <div class="experience-header">
        <div>
            <h4>Content Creator</h4>
            <p class="experience-company">Educational Content on Social Media Platforms</p>
        </div>
        <span class="experience-date">2019 - Present</span>
    </div>
    <ul class="experience-list">
        <li>Created engaging educational content across platforms like YouTube and TikTok, with notable audience engagement on various posts. <a href="https://www.tiktok.com/@jazzarcade" target="_blank" class="inline-link">View an example here</a>.</li>
        <li>Wrote engaging and informative scripts for videos, ensuring that complex topics were explained in a simple and accessible way.</li>
        <li>Focused on educational content that helps learners in areas such as music theory and other educational subjects.</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# ==================== TECHNICAL EXPERTISE ====================
st.markdown('<h2 class="section-title">🛠️ Technical Expertise</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="skills-grid">
    <div class="skill-category">
        <h5>Frontend</h5>
        <div class="skill-tags">
            <span class="skill-tag">Next.js 15</span>
            <span class="skill-tag">React 18</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Tailwind CSS</span>
            <span class="skill-tag">Phaser 3</span>
            <span class="skill-tag">HTML/CSS</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>Backend</h5>
        <div class="skill-tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">REST APIs</span>
            <span class="skill-tag">GraphQL</span>
            <span class="skill-tag">AWS Amplify Data</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>Cloud & Auth</h5>
        <div class="skill-tags">
            <span class="skill-tag">AWS Amplify</span>
            <span class="skill-tag">AWS Cognito</span>
            <span class="skill-tag">DynamoDB</span>
            <span class="skill-tag">OAuth 2.0</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>Data Science</h5>
        <div class="skill-tags">
            <span class="skill-tag">PyTorch</span>
            <span class="skill-tag">pandas</span>
            <span class="skill-tag">matplotlib</span>
            <span class="skill-tag">scikit-learn</span>
            <span class="skill-tag">NumPy</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>AI Integration</h5>
        <div class="skill-tags">
            <span class="skill-tag">Google Gemini API</span>
            <span class="skill-tag">LLM Prompt Engineering</span>
            <span class="skill-tag">Neural Networks</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>Audio & Music</h5>
        <div class="skill-tags">
            <span class="skill-tag">VexFlow</span>
            <span class="skill-tag">Tone.js</span>
            <span class="skill-tag">Web Audio API</span>
            <span class="skill-tag">SVGuitar</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>DevOps & Tools</h5>
        <div class="skill-tags">
            <span class="skill-tag">Git/GitHub</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Google Colab</span>
        </div>
    </div>
    <div class="skill-category">
        <h5>Internationalization</h5>
        <div class="skill-tags">
            <span class="skill-tag">next-intl</span>
            <span class="skill-tag">6 Languages</span>
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

# ==================== TECHNOLOGIES & TOOLS ====================
st.markdown('<h2 class="section-title">🔧 Technologies and Tools</h2>', unsafe_allow_html=True)

technologies = [
    ("Python", "A versatile programming language for data science and software development", "https://www.python.org/"),
    ("Next.js", "React framework for production-grade web applications", "https://nextjs.org/"),
    ("React", "JavaScript library for building user interfaces", "https://react.dev/"),
    ("TypeScript", "Typed superset of JavaScript for scalable applications", "https://www.typescriptlang.org/"),
    ("AWS Amplify", "Full-stack cloud platform for web and mobile apps", "https://aws.amazon.com/amplify/"),
    ("PyTorch", "An open-source machine learning library used for building neural networks", "https://pytorch.org/"),
    ("Streamlit", "A framework for building and deploying data science web apps", "https://streamlit.io/"),
    ("Google Colab", "A cloud-based platform for Python coding and machine learning experimentation", "https://colab.research.google.com/"),
    ("Git/GitHub", "Version control system used for code management and collaboration", "https://github.com/"),
    ("Phaser 3", "HTML5 game framework for desktop and mobile", "https://phaser.io/"),
]

st.markdown('<div class="tech-table">', unsafe_allow_html=True)
for tech, desc, url in technologies:
    st.markdown(f"""
    <div class="tech-row">
        <span class="tech-name">{tech}</span>
        <span class="tech-desc">{desc}</span>
        <a href="{url}" target="_blank" class="tech-link">Learn more →</a>
    </div>
    """, unsafe_allow_html=True)
st.markdown('</div>', unsafe_allow_html=True)

# ==================== SKILLS ====================
st.markdown('<h2 class="section-title">💡 Skills</h2>', unsafe_allow_html=True)

skills_data = [
    ("Programming", "Python, JavaScript, TypeScript, C, C++, Java, C#, R, Swift"),
    ("Data Processing", "SQL, pandas, NumPy"),
    ("Data Visualization", "matplotlib, seaborn, plotly"),
    ("Model Deployment", "Streamlit, Google Colab, AWS Amplify"),
    ("Web Development", "Next.js, React, Streamlit, HTML, CSS, JavaScript, Tailwind CSS"),
    ("Game Development", "Phaser 3, Web Audio API"),
    ("Version Control", "Git, GitHub"),
    ("Cloud Platforms", "AWS (Amplify, Cognito, DynamoDB), Google Cloud, Google Colab"),
    ("Presentation & Content", "Proficient in creating professional presentations, design documents, and educational content using the Microsoft Office Suite, Apple iWork Suite, and AI-powered design tools."),
]

st.markdown('<div class="skills-table">', unsafe_allow_html=True)
for skill, details in skills_data:
    st.markdown(f"""
    <div class="skill-row">
        <span class="skill-name">{skill}</span>
        <span class="skill-details">{details}</span>
    </div>
    """, unsafe_allow_html=True)
st.markdown('</div>', unsafe_allow_html=True)

# ==================== SOCIAL MEDIA ====================
st.markdown('<h2 class="section-title">🔗 Social Media</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="social-grid">
    <a href="https://www.linkedin.com/in/armandoblanco" target="_blank" class="social-card">
        <span class="social-icon">💼</span>
        <span class="social-name">LinkedIn</span>
        <span class="social-url">linkedin.com/in/armandoblanco</span>
    </a>
    <a href="https://github.com/ablancou" target="_blank" class="social-card">
        <span class="social-icon">💻</span>
        <span class="social-name">GitHub</span>
        <span class="social-url">github.com/ablancou</span>
    </a>
    <a href="https://jazzarcade.com" target="_blank" class="social-card">
        <span class="social-icon">🎮</span>
        <span class="social-name">Jazz Arcade</span>
        <span class="social-url">jazzarcade.com</span>
    </a>
    <a href="https://www.sololearn.com/es/profile/3850882" target="_blank" class="social-card">
        <span class="social-icon">📚</span>
        <span class="social-name">SoloLearn</span>
        <span class="social-url">sololearn.com/profile</span>
    </a>
    <a href="https://www.duolingo.com/profile/ablancou" target="_blank" class="social-card">
        <span class="social-icon">🦉</span>
        <span class="social-name">Duolingo</span>
        <span class="social-url">duolingo.com/profile/ablancou</span>
    </a>
    <a href="https://x.com/ablancou" target="_blank" class="social-card">
        <span class="social-icon">🐦</span>
        <span class="social-name">X</span>
        <span class="social-url">x.com/ablancou</span>
    </a>
</div>
""", unsafe_allow_html=True)

# ==================== FOOTER ====================
st.markdown("""
<div class="footer">
    <p>© 2025 Armando Blanco. Built with passion and code.</p>
</div>
""", unsafe_allow_html=True)
