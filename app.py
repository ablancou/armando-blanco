import streamlit as st
from PIL import Image

with open("style.css") as f:
    st.markdown('<style>{}</style>'.format(f.read()), unsafe_allow_html=True)

#####################
# Header
st.write('''
# Armando Blanco
##### *Resume* - Software Engineer II Candidate
''')
image = Image.open('AB.png')
st.image(image, width=125)

st.markdown('## Summary', unsafe_allow_html=True)
st.info('''
- Full-Stack Software Developer and Data Scientist with 10+ years of experience, including development of educational tools like an app with 3 games and 6 interactive lessons for music theory.
- Proven expertise in building and deploying neural networks using PyTorch (independent AI projects with Kaggle data), and creating interactive applications with Streamlit.
- Extensive experience in designing and implementing data pipelines, as well as working with SQL/NoSQL databases to manage and analyze large-scale data.
- Proficient in API integration, Git/GitHub for version control, and Agile methodologies, with a focus on continuous improvement in iterative development practices—as former Marketing Manager/Department Head, used Python scripts to boost lead impact.
- Auto-learning: 300 problems solved on LeetCode (C++/Python), ~9000 Total EP and ~100 practices on CodeSignal, "Problem Solving: Gold Level" (~1250 points) on HackerRank.
- Passion for music/art: +30 years as guitarist, +15 as pianist, +25 as composer/arranger/producer (original song on all digital platforms). Seeking remote/hybrid roles in tech + music/art with top salary and excellent quality of life.
''')

#####################
# Navigation
st.markdown('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', unsafe_allow_html=True)
st.markdown("""
<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: #16A2CB;">
  <a class="navbar-brand" href="" target="_blank">Armando Blanco</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link disabled" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#programming-projects">Programming Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#education">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#work-experience">Work Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#technologies-and-tools">Technologies & Tools</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#tech-art-music">Tech + Art/Music</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#technical-profiles">Technical Profiles</a>
      </li>
    </ul>
  </div>
</nav>
""", unsafe_allow_html=True)

#####################
# Custom functions
def txt(a, b):
  col1, col2 = st.columns([4,1])
  with col1:
    st.markdown(a)
  with col2:
    st.markdown(b)

def txt2(a, b):
  col1, col2 = st.columns([1,4])
  with col1:
    st.markdown(f'`{a}`')
  with col2:
    st.markdown(b)

def txt3(a, b):
  col1, col2 = st.columns([1,2])
  with col1:
    st.markdown(a)
  with col2:
    st.markdown(b, unsafe_allow_html=True)

def txt4_with_icon(name, desc, url, icon_url):
  col1, col2, col3 = st.columns([0.5, 1.5, 3])
  with col1:
    if icon_url:
      st.image(icon_url, width=25)
  with col2:
    st.markdown(f"[{name}]({url})")
  with col3:
    st.markdown(desc)

#####################
st.markdown('''
## Programming Projects
Here are some of the projects I have deployed using Streamlit Cloud. Click on the links to explore them.
''', unsafe_allow_html=True)

# Project 1
st.write('''
### Music Theory Game: Key Signature Recognition
**Description**:
An interactive music theory game leveraging modern web technologies to improve knowledge of music theory concepts, such as key signature recognition, under time constraints.
**Technical Skills**:
- Built with React.js, Next.js, and Phaser.js for modern UI/UX and responsive gameplay.
- Deployed with AWS Amplify for streamlined hosting and CI/CD pipelines, with domain management handled through Route 53.
- JavaScript (ES6+), HTML, CSS, and Tailwind CSS for responsive and visually appealing design.
- Gamification principles, cloud deployment, and state management.
''')
st.write('[Play the Music Theory Game](https://www.jazzarcade.com/key-signature-recognition-game)')

# Project 2
st.write('''
### Diabetes Prediction App
**About this app**:
This app predicts whether a patient is at risk of developing diabetes.
Technology used: This app was created using Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.
''')
st.write('[View the Diabetes Prediction App](https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/)')

# Project 3
st.write('''
### Heart Disease Prediction App
**About this app**:
This app predicts the probability of having heart disease.
Technology used: This app was created using Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.
''')
st.write('[View the Heart Disease Prediction App](https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/)')

# Project 4
st.write('''
### Medical Calculators Toolkit for General Medicine
**About this app**:
A medical calculation tool that includes multiple calculators to aid in clinical decision-making in general medicine.
''')
st.write('[View the Medical Calculators Toolkit](https://medical-calculators-toolkit-for-general-medicine.streamlit.app/)')

#####################
st.markdown('''
## Education
''', unsafe_allow_html=True)
txt('**Bachelor of Business Administration**, *Universidad Anáhuac*, Mexico City',
'(2005 - 2009)')

#####################
st.markdown('''
## Work Experience
''', unsafe_allow_html=True)
txt('**Full-Stack Software Developer and Data Scientist**, Freelance',
'2014-Present')
st.markdown('''
- Developed and deployed educational games and interactive learning tools, integrating AI-powered content for enhanced learning experiences.
- Built and deployed neural networks using `PyTorch` for data science projects, providing data-driven solutions.
- Designed and implemented data pipelines, managing and analyzing large-scale data using SQL/NoSQL databases.
- Created web applications using `Streamlit`, enabling real-time data interaction and visualization.
- Applied Git/GitHub for version control across several projects, ensuring effective code management and collaboration.
- Continuously expanding knowledge in full-stack development, currently pursuing courses in advanced cloud architecture and deployment.
''')
txt('**Technical Consultant**, Data Science and Machine Learning Projects, Freelance',
'2015-Present')
st.markdown('''
- Provided consultation services for data-driven projects, assisting in the implementation of machine learning models using `PyTorch`.
- Guided clients through data analysis processes, from data cleaning and preparation to model training and evaluation.
- Supported clients in understanding and applying data science and machine learning tools, including Python and `Streamlit`.
''')
txt('**Content Creator**, Educational Content on Social Media Platforms', '2019-Present')
st.markdown('''
- Created engaging educational content across platforms like YouTube and TikTok, with notable audience engagement on various posts. [View an example here](https://www.tiktok.com/@jazzarcade).
- Wrote engaging and informative scripts for videos, ensuring that complex topics were explained in a simple and accessible way.
- Focused on educational content that helps learners in areas such as music theory and other educational subjects.
''')

#####################
st.markdown('''
## Technical Profiles
''', unsafe_allow_html=True)
txt2('LinkedIn', 'https://www.linkedin.com/in/armandoblanco')
txt2('GitHub', 'https://github.com/ablancou')
txt2('SoloLearn', 'https://www.sololearn.com/es/profile/3850882')
txt2('LeetCode', 'https://leetcode.com/u/ablanco')
txt2('CodeSignal', 'https://app.codesignal.com/profile/ablancou')
txt2('HackerRank', 'https://www.hackerrank.com/profile/ablancou')
txt2('X', 'https://x.com/ablancou')

#####################
# Technologies and Tools with Icons
st.markdown('''
## Technologies and Tools
These tools have enabled me to develop impactful projects, such as interactive apps for music theory integrating tech and art.
''', unsafe_allow_html=True)

# Dict of icon URLs (stable, official sources)
icon_urls = {
    'C++': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/182px-ISO_C%2B%2B_Logo.svg.png',
    'Python': 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png',
    'JavaScript/TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
    'C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/120px-The_C_Programming_Language_logo.svg.png',
    'C#': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/512px-C_Sharp_Logo_2023.svg.png',
    'Visual Studio Code (VSC)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    'PyTorch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/PyTorch_logo_black.svg/512px-PyTorch_logo_black.svg.png',
    'TensorFlow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/512px-Tensorflow_logo.svg.png',
    'Jupyter Notebooks': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/512px-Jupyter_logo.svg.png',
    'AWS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
    'Google Colab': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/512px-Google_Colaboratory_SVG_Logo.svg.png',
    'React': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
    'Next.js': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/512px-Nextjs-logo.svg.png',
    'Streamlit': 'https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png',
    'SQL': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/512px-Sql_data_base_with_logo.png',
    'NoSQL': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png',  # Using MongoDB as representative
    'Git/GitHub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png',
    'Agile Methodologies': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Agile_Alliance_Logo.png/512px-Agile_Alliance_Logo.png',  # Placeholder for Agile
    'CI/CD Pipelines': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gitlab_logo-1_color-black-text-rgb.svg/512px-Gitlab_logo-1_color-black-text-rgb.svg.png',  # Using GitLab as rep for CI/CD
    'Docker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/512px-Docker_%28container_engine%29_logo.svg.png'
}

# Subcategories with txt4_with_icon
st.markdown('''
### General Programming and Tools
''')
txt4_with_icon('C++', 'An efficient programming language essential for embedded systems and high-performance software in real-time applications', 'https://isocpp.org/', icon_urls.get('C++'))
txt4_with_icon('Python', 'A versatile programming language used in AI, machine learning, and automation for modern technological solutions', 'https://www.python.org/', icon_urls.get('Python'))
txt4_with_icon('JavaScript/TypeScript', 'Core technologies for interactive web applications, with TypeScript enhancing scalability and maintainability', 'https://www.typescriptlang.org/', icon_urls.get('JavaScript/TypeScript'))
txt4_with_icon('C', 'A foundational programming language ideal for system-level programming and understanding hardware-software interaction', 'https://en.wikipedia.org/wiki/C_(programming_language)', icon_urls.get('C'))
txt4_with_icon('C#', 'A modern, object-oriented language used for Windows applications and game development', 'https://learn.microsoft.com/en-us/dotnet/csharp/', icon_urls.get('C#'))
txt4_with_icon('Visual Studio Code (VSC)', 'A powerful, lightweight code editor with extensive extensions support', 'https://code.visualstudio.com/', icon_urls.get('Visual Studio Code (VSC)'))

st.markdown('''
### Machine Learning and AI
''')
txt4_with_icon('PyTorch', 'An open-source machine learning library used for building neural networks', 'https://pytorch.org/', icon_urls.get('PyTorch'))
txt4_with_icon('TensorFlow', 'A framework for machine learning and artificial intelligence applications', 'https://www.tensorflow.org/', icon_urls.get('TensorFlow'))
txt4_with_icon('Jupyter Notebooks', 'An open-source tool for interactive coding, widely used in data science', 'https://jupyter.org/', icon_urls.get('Jupyter Notebooks'))

st.markdown('''
### Cloud Computing and Frameworks
''')
txt4_with_icon('AWS', 'A cloud platform providing scalable services and solutions', 'https://aws.amazon.com/', icon_urls.get('AWS'))
txt4_with_icon('Google Colab', 'A cloud-based platform for Python coding and machine learning experimentation', 'https://colab.research.google.com/', icon_urls.get('Google Colab'))
txt4_with_icon('React', 'A JavaScript library for building dynamic user interfaces', 'https://reactjs.org/', icon_urls.get('React'))
txt4_with_icon('Next.js', 'A React-based framework for server-side rendering and static site generation', 'https://nextjs.org/', icon_urls.get('Next.js'))
txt4_with_icon('Streamlit', 'A framework for building and deploying data science web apps', 'https://streamlit.io/', icon_urls.get('Streamlit'))

st.markdown('''
### Database Management and Version Control
''')
txt4_with_icon('SQL', 'Structured Query Language for managing relational databases', 'https://www.mysql.com/', icon_urls.get('SQL'))
txt4_with_icon('NoSQL', 'Non-relational database systems for flexible, scalable data storage', 'https://www.mongodb.com/nosql-explained', icon_urls.get('NoSQL'))
txt4_with_icon('Git/GitHub', 'Version control system used for code management and collaboration', 'https://github.com/', icon_urls.get('Git/GitHub'))

st.markdown('''
### Development Methodologies
''')
txt4_with_icon('Agile Methodologies', 'Iterative approach to software development and project management', 'https://www.atlassian.com/agile', icon_urls.get('Agile Methodologies'))
txt4_with_icon('CI/CD Pipelines', 'Automated software delivery process for continuous deployment and integration', 'https://www.atlassian.com/continuous-delivery/ci-vs-cd', icon_urls.get('CI/CD Pipelines'))

st.markdown('''
### Containers and Deployment
''')
txt4_with_icon('Docker', 'A platform for developing, shipping, and running applications in containers', 'https://www.docker.com/', icon_urls.get('Docker'))

#####################
# New Section: Tech + Art/Music
st.markdown('''
## Tech + Art/Music
I integrate programming with my experience as a guitarist (+30 years), pianist (+15 years), composer, arranger, and producer (+25 years, with an original song on digital platforms). Ideal for roles in music edtech or tech-enhanced A&R.
''', unsafe_allow_html=True)
txt3('Audio Processing/ML', '`PyTorch` for music pattern analysis (AI projects on Kaggle)')
txt3('Interactive Apps', '`JavaScript/C#` for 3 games and 6 music theory lessons')
txt3('Creative Production', 'DAWs + Python scripts for arrangements and composition')

#####################
st.markdown('''
## Skills
''', unsafe_allow_html=True)
txt3('Programming', '`Python` <small>(10 years)</small>, `JavaScript` <small>(6 years)</small>, `TypeScript`, `C`, `C++`, `Java`, `C#` <small>(4 years)</small>, `R`, `Swift`')
txt3('Data processing/wrangling', '`SQL`, `pandas`, `numpy` (used in Kaggle AI projects)')
txt3('Data visualization', '`matplotlib`, `seaborn`, `plotly`')
txt3('Model deployment', '`Streamlit`, `Google Colab`')
txt3('Web development', '`Streamlit`, `HTML`, `CSS`, `JavaScript`, `WordPress`, `React`, `Redux` (multiple GitHub repos)')
txt3('Version Control', '`Git`, `GitHub` (multiple contributions)')
txt3('Cloud platforms', '`AWS`, `Google Colab`')
txt3('Presentation & Content Creation', 'Proficient in creating professional presentations, design documents, and educational content using the `Microsoft Office Suite`, `Apple iWork Suite`, and AI-powered design tools. (As Marketing Manager/Department Head, boosted impact with Python scripts)')
txt3('Tech Self-Learning', 'LeetCode: 300 problems (C++/Python); CodeSignal: ~9000 EP, 100 practices; HackerRank: Gold Level (~1250 points); Courses on Coursera/edX/SoloLearn')

#####################
# Call to Action (solo LinkedIn)
st.markdown('''
## Contact
Connect via [LinkedIn](https://www.linkedin.com/in/armandoblanco) for inquiries or opportunities.
''', unsafe_allow_html=True)
