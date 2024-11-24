import streamlit as st
from PIL import Image

with open("style.css") as f:
    st.markdown('<style>{}</style>'.format(f.read()), unsafe_allow_html=True)

#####################
# Header 
st.write('''
# Armando Blanco
##### *Resume* 
''')

image = Image.open('AB.png')
st.image(image, width=125)

st.markdown('## Summary', unsafe_allow_html=True)
st.info('''

- Full-Stack Software Developer and Data Scientist with `10+` years of experience, including the development of educational tools and data-driven solutions.
- Proven expertise in building and deploying neural networks using `PyTorch`, and creating interactive applications with `Streamlit`.
- Extensive experience in designing and implementing data pipelines, as well as working with SQL/NoSQL databases to manage and analyze large-scale data.
- Proficient in API integration, Git/GitHub for version control, and Agile methodologies, with a focus on continuous improvement in iterative development practices.
- Currently advancing knowledge in `AWS`, `React`, `Next.js`, and `CDI Pipelines`, focusing on enhancing cloud-based and scalable software solutions.

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
        <a class="nav-link" href="#resume">Resume</a>
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
        <a class="nav-link" href="#technical-profiles">Technical Profiles</a>
      </li>
    </ul>
  </div>
</nav>
""", unsafe_allow_html=True)

#####################
# Custom function for printing text
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
    st.markdown(b)
  
def txt4(a, b, c):
  col1, col2, col3 = st.columns([1.5,2,2])
  with col1:
    st.markdown(f'`{a}`')
  with col2:
    st.markdown(b)
  with col3:
    st.markdown(c)

#####################





st.markdown('''
## Programming Projects
Here are some of the projects I have deployed using Streamlit Cloud. Click on the links to explore them.

''')

# Project:
st.write('''
### Diabetes Prediction App
**About this app**:  
This app predicts whether a patient is at risk of developing diabetes.

Technology used: This app was created using Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.
''')
st.write('[View the Diabetes Prediction App](https://ablancou-diabetes-prediction-app-4jhd5b.streamlit.app/)')

# Project:
st.write('''
### Heart Disease Prediction App
**About this app**:  
This app predicts the probability of having heart disease.

Technology used: This app was created using Python and a previously trained neural network built with the PyTorch framework. It provides accurate predictions based on the user's input parameters.
''')
st.write('[View the Diabetes Prediction App](https://ablancou-heart-disease-prediction-app-tmyzus.streamlit.app/)')

# Project:
st.write('''
### Medical Calculators Toolkit for General Medicine
**About this app**:  
A medical calculation tool that includes multiple calculators to aid in clinical decision-making in general medicine.
''')
st.write('[View the Medical Calculators Toolkit](https://medical-calculators-toolkit-for-general-medicine.streamlit.app/)')

# Project: 
st.write('''
### Music Theory Game: Key Signature Recognition
**Description**:  
Music Theory - Key Signature Recognition.  
Flash Music Theory Test: 10 Seconds per Key Signature. Enhance Your Skills in 2 Minutes!

Finish and unveil your stats plus the key signatures that need your focus.
''')
st.write('[Play the Music Theory Game](https://jazzarcade.com/index.php/key-signature-recognition-game/)')


#####################

st.markdown('''
## Education
''')

txt('** Bachelor of Business Administration **, *Universidad Anáhuac*, Mexico City',
'(2005 - 2009)')


#####################

st.markdown('''
## Work Experience
''')

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

# txt('**Content Creator**, [Educational Content on Social Media Platforms](https://)', '2019-Present')
txt('**Content Creator**, Educational Content on Social Media Platforms', '2019-Present')
st.markdown('''
- Created engaging educational content across platforms like YouTube and TikTok, with notable audience engagement on various posts. [View an example here](https://www.tiktok.com/@jazzarcade).
- Wrote engaging and informative scripts for videos, ensuring that complex topics were explained in a simple and accessible way.
- Focused on educational content that helps learners in areas such as music theory and other educational subjects.
''')

#####################

st.markdown('''
## Technical Profiles
''')

txt2('LinkedIn', 'https://www.linkedin.com/in/armandoblanco')

txt2('GitHub', 'https://github.com/ablancou')

txt2('SoloLearn', 'https://www.sololearn.com/es/profile/3850882')

txt2('LeetCode', 'https://leetcode.com/u/ablanco')

txt2('CodeSignal', 'https://app.codesignal.com/profile/ablancou')

txt2('HackerRank', 'https://www.hackerrank.com/profile/ablancou')

txt2('Twitter', 'https://twitter.com/ablancou')

#####################

st.markdown('''
## Technologies and Tools
''')

# General Programming and Tools
txt4('Python', 'A versatile programming language for data science and software development', 'https://www.python.org/')
txt4('C', 'A foundational programming language for system-level programming', 'https://en.wikipedia.org/wiki/C_(programming_language)')
txt4('C++', 'An extension of C, popular for game development and high-performance applications', 'https://isocpp.org/')
txt4('C#', 'A modern, object-oriented language used for Windows applications and game development', 'https://learn.microsoft.com/en-us/dotnet/csharp/')
txt4('Visual Studio Code (VSC)', 'A powerful, lightweight code editor with extensive extensions support', 'https://code.visualstudio.com/')

# Machine Learning and AI
txt4('PyTorch', 'An open-source machine learning library used for building neural networks', 'https://pytorch.org/')
txt4('TensorFlow', 'A framework for machine learning and artificial intelligence applications', 'https://www.tensorflow.org/')
txt4('Jupyter Notebooks', 'An open-source tool for interactive coding, widely used in data science', 'https://jupyter.org/')

# Cloud Computing and Frameworks
txt4('AWS', 'A cloud platform providing scalable services and solutions', 'https://aws.amazon.com/')
txt4('Google Colab', 'A cloud-based platform for Python coding and machine learning experimentation', 'https://colab.research.google.com/')
txt4('React', 'A JavaScript library for building dynamic user interfaces', 'https://reactjs.org/')
txt4('Next.js', 'A React-based framework for server-side rendering and static site generation', 'https://nextjs.org/')
txt4('Streamlit', 'A framework for building and deploying data science web apps', 'https://streamlit.io/')

# Database Management and Version Control
txt4('SQL', 'Structured Query Language for managing relational databases', 'https://www.mysql.com/')
txt4('NoSQL', 'Non-relational database systems for flexible, scalable data storage', 'https://www.mongodb.com/nosql-explained')
txt4('Git/GitHub', 'Version control system used for code management and collaboration', 'https://github.com/')

# Development Methodologies
txt4('Agile Methodologies', 'Iterative approach to software development and project management', 'https://www.atlassian.com/agile')
txt4('CDI Pipelines', 'Automated software delivery process for continuous deployment and integration', 'https://www.atlassian.com/continuous-delivery/ci-vs-cd')

# Containers and Deployment
txt4('Docker', 'A platform for developing, shipping, and running applications in containers', 'https://www.docker.com/')

#####################

st.markdown('''
## Skills
''')
txt3('Programming', '`Python`, `JavaScript`, `TypeScript`, `C`, `C++`, `Java`, `C#`, `R`, `Swift`')
txt3('Data processing/wrangling', '`SQL`, `pandas`, `numpy`')
txt3('Data visualization', '`matplotlib`, `seaborn`, `plotly`')
txt3('Model deployment', '`Streamlit`, `Google Colab`')
txt3('Web development', '`Streamlit`, `HTML`, `CSS`, `JavaScript`, `WordPress`, `React`, `Redux`')
txt3('Version Control', '`Git`, `GitHub`')
txt3('Cloud platforms', '`AWS`, `Google Colab`')
txt3('Presentation & Content Creation', 'Proficient in creating professional presentations, design documents, and educational content using the `Microsoft Office Suite`, `Apple iWork Suite`, and AI-powered design tools.')

#####################



