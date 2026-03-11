"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  ExternalLink,
  ChevronDown
} from "lucide-react"

import { 
  personalInfo, 
  flagshipProject, 
  dataScienceProjects, 
  technicalExpertise,
  techStack,
  coreSkills
} from "@/data/portfolioData"

// Animation variants
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left z-10">
              <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
                {personalInfo.role}
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Hi, I&apos;m <span className="text-gradient block mt-2">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                {personalInfo.tagline}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#projects" className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-medium transition-colors flex items-center justify-center">
                  Get in Touch
                </a>
              </motion.div>
            </div>
            
            {/* Profile Image */}
            <motion.div 
              variants={fadeInUp}
              className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl rotate-6 opacity-50 blur-lg animate-pulse" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass p-2 border border-slate-700 z-10">
                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-slate-800">
                  <Image 
                    src="/AB.png" 
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Summary Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              About Me
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              {personalInfo.summary.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ 
                  __html: paragraph.replace(/10\+/, '<span class="text-white font-bold">10+</span>')
                                   .replace(/PyTorch/, '<span class="text-blue-400 font-medium">PyTorch</span>')
                                   .replace(/Streamlit/, '<span class="text-orange-400 font-medium">Streamlit</span>')
                                   .replace(/Next\.js/, '<span class="text-white font-medium">Next.js</span>') 
                }} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Project: Jazz Arcade */}
      <section id="projects" className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Flagship Project</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">🎮 {flagshipProject.title}</h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="glass-card rounded-3xl border border-slate-700 overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-2 text-gradient-purple">{flagshipProject.title}</h4>
                  <p className="text-xl text-slate-400 mb-8">{flagshipProject.tagline}</p>
                  
                  <a href={flagshipProject.url} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-200 text-slate-900 rounded-xl font-bold transition-colors w-fit group">
                    Visit Platform 
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="mt-12 flex flex-wrap gap-2">
                    {flagshipProject.techTags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Features Grid */}
              <div className="lg:col-span-3 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 -z-10" />
                
                <h5 className="text-lg font-semibold text-slate-200 mb-6">Key Features</h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  {flagshipProject.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
                    >
                      <span className="text-2xl leading-none">{feature.icon}</span>
                      <span className="text-slate-300 text-sm leading-tight pt-1">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Science Projects Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
              Data Science & Healthcare
            </h2>
            <p className="text-slate-400 text-lg">Predictive models and diagnostic pipelines</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {dataScienceProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="glass-card group rounded-2xl p-8 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon === "Activity" && <span className="text-6xl">🩺</span>}
                  {project.icon === "HeartPulse" && <span className="text-6xl">❤️</span>}
                  {project.icon === "Calculator" && <span className="text-6xl">🧮</span>}
                  {project.icon === "Dna" && <span className="text-6xl">🧬</span>}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4">{project.description}</p>
                <p className="text-slate-400 text-sm mb-8 flex-grow">{project.techDesc}</p>
                
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors w-fit">
                    View Project <ArrowRight size={16} />
                  </a>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400">The tools and technologies I use to build solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalExpertise.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-900/80 rounded-lg text-sm text-slate-300 border border-slate-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-12 mb-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {personalInfo.experience.map((job, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-purple-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 rounded-2xl border border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-white">{job.title}</h3>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                      {job.date}
                    </span>
                  </div>
                  <div className="text-slate-400 font-medium mb-4">{job.company}</div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-slate-300 text-sm flex gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              Education
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-l-emerald-500"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{personalInfo.education[0].degree}</h3>
              <p className="text-slate-400">{personalInfo.education[0].school}</p>
            </div>
            <span className="mt-4 sm:mt-0 font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg">
              {personalInfo.education[0].date}
            </span>
          </motion.div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {personalInfo.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-full transition-all border border-transparent hover:border-slate-700"
              >
                <ExternalLink size={16} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Armando Blanco. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}
