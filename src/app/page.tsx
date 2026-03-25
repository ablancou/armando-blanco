"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  ArrowRight, 
  ExternalLink,
  ChevronDown,
  Terminal,
  Layers,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Monitor,
  Database as DatabaseIcon,
  Code as CodeIcon,
  Zap,
  CheckCircle2,
  Globe
} from "lucide-react"

import { 
  commonText,
  techStack,
  featuredProjects,
  allProjects,
  technicalExpertise,
  personalInfo,
  socials
} from "@/data/portfolioData"


import Navbar from "@/components/Navbar"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { cn } from "@/lib/utils"

import { LighthouseScorecard } from "@/components/LighthouseScorecard"
import { SkillCloud } from "@/components/SkillCloud"
import { CareerTimeline } from "@/components/CareerTimeline"
import { AIChatbot } from "@/components/AIChatbot"
import { ProjectShowcase } from "@/components/ProjectShowcase"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="noise-bg" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-32 pb-24 sm:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-60 h-60 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-60 h-60 sm:w-80 sm:h-80 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto w-full z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium tracking-wide">
              <Sparkles size={14} className="animate-spin" />
              <span>{commonText.available}</span>
            </div>
            
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-700" />
              <div className="relative w-full h-full rounded-full border-2 border-blue-500/50 p-1 overflow-hidden bg-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  src="/AB.png"
                  alt="Armando Blanco"
                  width={128}
                  height={128}
                  className="rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 sm:mb-8 pb-4 sm:pb-0">
              {commonText.heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{commonText.heroTitle.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Hi, I&apos;m <span className="text-white font-medium">{personalInfo.name}</span>.{' '}
              {commonText.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-2 group"
              >
                {commonText.exploreWork} 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-md flex items-center gap-2 group text-white no-underline"
              >
                {commonText.letBuild}
                <Sparkles size={18} className="text-blue-400" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About - The Bento Introduction */}
      <section id="about" className="py-20 sm:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-1.5 bg-blue-500 rounded-full"></span>
              {commonText.vision}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {commonText.visionText}
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-8">
            <BentoGrid>
              <BentoGridItem
                title={"10+ Years Experience"}
                description={personalInfo.summary[0]}
                className="md:col-span-2"
                header={
                  <div className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="text-emerald-500" />
                    <span>Reliability at scale</span>
                  </div>
                }
              />
              <BentoGridItem
                title="AI Integration"
                description="Architecting LLM orchestration and adaptive neural learning systems."
                className="md:col-span-1"
                icon={<Zap />}
              />
              <BentoGridItem
                title="Global Perspective"
                description="Supporting 6+ languages and international users."
                className="md:col-span-1"
                icon={<Globe />}
              />
              <BentoGridItem
                title="The Toolkit"
                description="Next.js, PyTorch, AWS, and modern DevOps."
                className="md:col-span-2"
                header={<div className="flex flex-wrap gap-2">
                  {techStack.map((ts: any) => (
                    <span key={ts.name} className="px-2 py-1 bg-slate-800 rounded-lg text-[10px] text-blue-400 border border-blue-500/10 uppercase tracking-tighter">{ts.name}</span>
                  ))}
                </div>}
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Projects - Elite Showcase */}
      <section id="projects" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-sm font-black tracking-widest text-blue-500 uppercase mb-4">{commonText.eliteShowcase}</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8">{commonText.engineeringArtifacts.split(' ').slice(0, -1).join(' ')} <span className="text-white">{commonText.engineeringArtifacts.split(' ').slice(-1)}</span></h3>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-12 mb-12">
            {featuredProjects.map((project: any) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isLarge 
                onSelect={() => project.caseStudy ? setSelectedProject(project) : null}
              />
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project: any) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={() => project.caseStudy ? setSelectedProject(project) : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Excellence Audit */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LighthouseScorecard />
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{commonText.fortitude.split(' ')[0]} <span className="text-gradient">{commonText.fortitude.split(' ')[1] || "Expertise"}</span></h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">{commonText.fortitudeText}</p>
          </div>

          <div className="mb-24">
            <SkillCloud />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalExpertise.map((cat: any, idx: number) => {
              const Icon = cat.icon
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card group p-8 rounded-[2rem] border-white/5 hover:border-blue-500/30"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-100">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill: string) => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-xl text-xs font-medium text-slate-300 border border-white/5 hover:bg-white/10 transition-colors">
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

      {/* Experience - The Narrative */}
      <section id="experience" className="py-12 border-t border-white/5">
        <CareerTimeline />
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="py-24 border-t border-white/5 bg-slate-950/80 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">{commonText.footerTitle.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{commonText.footerTitle.split(' ').slice(-1)}</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            {commonText.footerText}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {socials.map((social: any) => (
              <motion.a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200 transition-all font-medium"
              >
                <ExternalLink size={18} />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-12 border-t border-white/5">
            <p className="text-slate-600 text-sm font-mono uppercase tracking-[0.2em]">
              Handcrafted with Next.js, Framer Motion & Pure Precision
            </p>
            <p className="text-slate-700 text-xs">
              © {new Date().getFullYear()} {personalInfo.name}. All systems operational.
            </p>
          </div>
        </div>
      </footer>
      <AIChatbot />
      <ProjectShowcase 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  )
}

function ProjectCard({ project, isLarge = false, onSelect }: { project: any, isLarge?: boolean, onSelect?: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "glass-card p-0 rounded-[2.5rem] overflow-hidden group cursor-pointer border-white/5 hover:border-blue-500/40",
        isLarge ? "flex flex-col lg:flex-row" : "flex flex-col"
      )}
    >
      {/* Image/GIF Section */}
      <div className={cn(
        "relative overflow-hidden bg-slate-900",
        isLarge ? "lg:w-3/5 aspect-square sm:aspect-video lg:aspect-auto" : "w-full aspect-[4/3] sm:aspect-video"
      )}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
        
        {/* Project Image */}
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <div className="flex flex-col items-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
              {isHovered && project.gif ? (
                 <div className="animate-pulse flex flex-col items-center text-blue-400">
                    <Monitor size={64} />
                    <span className="text-xs font-mono uppercase mt-2 tracking-widest">Hover Playback Mode</span>
                 </div>
              ) : (
                  <div className="flex flex-col items-center text-slate-500">
                    <Monitor size={48} />
                    <span className="text-xs font-mono uppercase mt-2 tracking-widest">{project.title} Preview</span>
                  </div>
              )}
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-full bg-blue-600/90 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={cn(
        "p-6 sm:p-8 md:p-12 flex flex-col justify-center",
        isLarge ? "lg:w-2/5" : "w-full"
      )}>
        <h4 className="text-3xl md:text-4xl font-extrabold mb-4 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
          {project.tagline}
        </p>
        
        {project.features && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.features.slice(0, 4).map((f: any, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-blue-500">{f.icon}</span>
                <span className="truncate">{f.text}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techTags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-mono text-slate-400 border border-white/5 group-hover:border-blue-500/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto">
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white text-slate-950 font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-xl"
            >
              Visit Platform <ExternalLink size={16} />
            </a>
          )}
          {project.caseStudy && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                if (onSelect) onSelect();
              }}
              className="text-slate-400 hover:text-white flex items-center gap-2 font-medium transition-colors text-sm group/btn"
            >
              Case Study <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
