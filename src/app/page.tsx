"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
  Globe,
  Trophy
} from "lucide-react"

import { 
  commonText,
  techStack,
  featuredProjects,
  omniWiserProject,
  clinicalProjects,
  allProjects,
  technicalExpertise,
  personalInfo,
  socials
} from "@/data/portfolioData"


import Navbar from "@/components/Navbar"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { cn } from "@/lib/utils"

import { LighthouseScorecard } from "@/components/LighthouseScorecard"
import { CareerTimeline } from "@/components/CareerTimeline"
import { AIChatbot } from "@/components/AIChatbot"
import { Certifications } from "@/components/Certifications"
import { ProjectShowcase } from "@/components/ProjectShowcase"
import { TechArsenal } from "@/components/TechArsenal"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const BrandLogos: Record<string, React.ReactNode> = {
    Linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    Github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
      </svg>
    ),
    Duolingo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14.484 18.213c1.142 1.033 2.657 1.662 4.316 1.662l.294-.001c1.985-.038 3.749-.976 4.905-2.422v1.98c0 2.522-2.043 4.568-4.567 4.568H4.569C2.045 23.998.002 21.954.002 19.43v-1.92c1.181 1.443 2.976 2.365 4.985 2.365l.35-.001c1.61-.027 3.076-.646 4.191-1.648.555.764 1.456 1.26 2.473 1.26 1.023 0 1.928-.502 2.483-1.273zm-5.349-.996c-.989 1.022-2.375 1.658-3.909 1.658h-.239c-2.229 0-4.146-1.343-4.987-3.262v-7.16c.281-.64.68-1.216 1.169-1.699-.035-.731.132-1.469.511-2.128.256-.44.867-.504 1.21-.124l.766.851c.007-.003.014-.003.021-.005-.098-.78.037-1.587.419-2.308.24-.45.757-.53 1.114-.164 0 0 3.939 3.979 4.035 4.084 1.542 1.348 4.066 1.287 5.686-.18.002-.003.007-.005.009-.007.042-.042 3.855-3.9 3.855-3.9.3361-.3451.8619-.3101 1.113.164.385.724.518 1.535.417 2.32.002.001.003.001.004.002l.007.002c.001 0 .002 0 .003.001l.776-.86c.342-.38.954-.316 1.207.124.387.673.553 1.427.509 2.173.496.501.897 1.099 1.169 1.762v6.941c-.816 1.978-2.761 3.373-5.032 3.373H18.8c-1.547 0-2.945-.648-3.936-1.686a.8386.8386 0 0 0-.009-.067c.313-.017.528-.162.688-.33.152-.16.299-.397.299-.776 0 0-.022-.312-.024-.324.693.767 1.696 1.249 2.811 1.249 2.092 0 3.787-1.696 3.787-3.787v-2.243c0-2.092-1.697-3.787-3.787-3.787-2.093 0-3.787 1.695-3.787 3.787v2.243c0 .266.027.526.079.776-.712-.784-1.744-1.278-2.842-1.278-1.239 0-2.339.523-3.064 1.355.063-.274.097-.56.097-.853v-2.243c0-2.092-1.697-3.787-3.788-3.787-2.09 0-3.787 1.695-3.787 3.787v2.243c0 2.093 1.697 3.787 3.787 3.787 1.151 0 2.182-.513 2.876-1.322-.008.035-.039.395-.039.395 0 .378.147.616.298.775.16.168.374.312.688.331a.7783.7783 0 0 0-.012.097zm.997.073c.729.131 1.733.305 1.792.305h.157c.059 0 1.789-.303 1.789-.303-.327.705-1.041 1.194-1.869 1.194-.829 0-1.543-.49-1.869-1.196zm-.971-1.379c.246-1.313 1.462-2.259 2.918-2.259 1.324 0 2.521.97 2.763 2.259v.105c0 .082-.029.115-.103.106l-2.658.473h-.157l-2.66-.476c-.075.01-.103-.023-.103-.105Zm8.023-6.392c.255-.14.549-.22.861-.22.992 0 1.798.804 1.798 1.798v1.919c0 .991-.804 1.797-1.798 1.797-.991 0-1.797-.803-1.797-1.797v-1.542c.034.003.068.005.103.005.64 0 1.16-.518 1.16-1.156 0-.312-.125-.596-.327-.804zM5.162 9.461c.227-.104.48-.162.746-.162.991 0 1.798.804 1.798 1.798v1.919c0 .991-.804 1.797-1.798 1.797-.991 0-1.797-.803-1.797-1.797v-1.571c.089.022.182.034.278.034.641 0 1.16-.518 1.16-1.156 0-.342-.149-.65-.387-.862ZM.002 6.554V4.568C.002 2.044 2.045 0 4.569 0h14.865c2.522 0 4.565 2.044 4.565 4.568v2.041a5.1847 5.1847 0 0 0-.164-.197 4.8592 4.8592 0 0 0-.646-2.284c-.433-.754-1.315-1.037-2.07-.786a4.785 4.785 0 0 0-.327-.774h-.001c-.287-.54-.758-.835-1.248-.908-.493-.073-1.033.072-1.464.515l-3.82 3.864c-1.226 1.11-3.127 1.199-4.313.205-.103-.109-4.025-4.071-4.025-4.071-.427-.438-.966-.584-1.46-.51-.489.073-.961.367-1.248.907v.002c-.133.25-.241.508-.327.771-.753-.252-1.635.029-2.071.782 0 0-.001.001-.001.002-.4.694-.613 1.459-.645 2.23-.057.065-.113.13-.167.197z"/>
      </svg>
    ),
    Goodreads: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.346.026c.422-.083.859.037 1.179.325.346.284.55.705.557 1.153-.023.457-.247.88-.612 1.156l-2.182 1.748a.601.601 0 0 0-.255.43.52.52 0 0 0 .11.424 5.886 5.886 0 0 1 .832 6.58c-1.394 2.79-4.503 3.99-7.501 2.927a.792.792 0 0 0-.499-.01c-.224.07-.303.18-.453.383l-.014.02-.941 1.254s-.792.985.457.935c3.027-.119 3.817-.119 5.439-.01 2.641.18 3.806 1.903 3.806 3.275 0 1.623-1.036 3.383-3.809 3.383a117.46 117.46 0 0 0-5.517-.03c-.31.005-.597.013-.835.02-.228.006-.41.011-.52.011-.712 0-1.648-.186-1.66-1.068-.008-.729.624-1.12 1.11-1.172.43-.045.815.007 1.24.064.252.034.518.07.815.088.185.011.366.025.552.038.53.038 1.102.08 1.926.087.427.005.759.01 1.025.015.695.012.941.016 1.28-.015 1.248-.112 1.832-.61 1.832-1.376 0-.805-.584-1.264-1.698-1.414-1.564-.213-2.33-.163-3.72-.074a87.66 87.66 0 0 1-1.669.095c-.608.029-2.449.026-2.682-1.492-.053-.416-.073-1.116.807-2.325l.75-1.003c.36-.49.582-.898.053-1.559 0 0-.39-.468-.52-.638-1.215-1.587-1.512-4.08-.448-6.114 1.577-3.011 5.4-4.26 8.37-2.581.253.143.438.203.655.163.201-.032.27-.167.363-.344.02-.04.042-.082.067-.126.004-.01.241-.465.535-1.028l.734-1.41a1.493 1.493 0 0 1 1.041-.785ZM9.193 13.243c1.854.903 3.912.208 5.254-2.47 1.352-2.699.827-5.11-1.041-6.023C10.918 3.537 8.81 5.831 8.017 7.41c-1.355 2.698-.717 4.886 1.147 5.818Z"/>
      </svg>
    ),
    LeetCode: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
        <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.515-4.376a5.081 5.081 0 010-7.307l4.515-4.376c.466-.451 1.211-.451 1.677 0l2.69 2.607a1.168 1.168 0 001.62-.031 1.096 1.096 0 00.03-1.569l-2.69-2.607c-1.353-1.31-3.553-1.31-4.906 0l-4.515 4.376a7.258 7.258 0 000 10.443l4.515 4.376c1.353 1.31 3.553 1.31 4.906 0l2.69-2.607a1.096 1.096 0 00-.03-1.569 1.168 1.168 0 00-1.62.031zM22.097 12a1.096 1.096 0 00-1.097-1.096H10.124a1.096 1.096 0 000 2.192h10.876A1.096 1.096 0 0022.097 12z"/>
      </svg>
    ),
    HackerRank: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 16.5H6.2V7.5h2.3v9zm5.3-2.1V16.5h-2.3V7.5h2.3v6.9zm5 2.1h-2.3V7.5h2.3v9z"/>
      </svg>
    ),
    SoloLearn: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-sky-400">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.125 17.25l-4.5-5.25 4.5-5.25.75.75-3.75 4.5 3.75 4.5-.75.75zm3.75 0l-.75-.75 3.75-4.5-3.75-4.5.75-.75 4.5 5.25-4.5 5.25z"/>
      </svg>
    )
  }
  
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
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
              <CodeIcon size={14} className="animate-[spin_4s_linear_infinite]" />
              <span>{commonText.available}</span>
              <Sparkles size={14} className="animate-pulse text-emerald-400" />
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
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light text-balance">
              Hi, I&apos;m <span className="text-white font-medium">{personalInfo.name}</span>.{' '}
              {commonText.heroSubtitle.split('. ')[0]}.
              <br className="hidden md:block" />
              {commonText.heroSubtitle.split('. ').slice(1).join('. ')}
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
            <p className="text-slate-400 text-lg leading-relaxed text-balance">
              {commonText.visionText}
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-8">
            <BentoGrid className="lg:grid-cols-2">
              <BentoGridItem
                title={"10+ Years Experience"}
                description={"10+ years building scalable software across disciplines, from fullstack development to complex systems."}
                className="md:col-span-1"
                header={
                  <div className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="text-emerald-500" />
                    <span>Reliability at scale</span>
                  </div>
                }
              />
              <BentoGridItem
                title="AI Integration"
                description="Architecting LLM and adaptive learning systems with modern frameworks."
                className="md:col-span-1"
                icon={<Zap />}
              />
              <BentoGridItem
                title="Coding Profiles"
                description="Verified algorithms & data structures expertise."
                className="md:col-span-1"
                header={
                  <div className="flex flex-col gap-2 relative z-50">
                    <a href="https://leetcode.com/u/ablancou/" target="_blank" className="px-3 py-2 bg-slate-800/80 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/30 transition-all flex items-center gap-2">{BrandLogos.LeetCode} LeetCode</a>
                    <a href="https://www.hackerrank.com/profile/ablancou" target="_blank" className="px-3 py-2 bg-slate-800/80 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/30 transition-all flex items-center gap-2">{BrandLogos.HackerRank} HackerRank</a>
                    <a href="https://www.sololearn.com/es/profile/3850882" target="_blank" className="px-3 py-2 bg-slate-800/80 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/30 transition-all flex items-center gap-2">{BrandLogos.SoloLearn} SoloLearn</a>
                  </div>
                }
              />
              <BentoGridItem
                title="The Toolkit"
                description="Next.js, PyTorch, AWS, and modern DevOps."
                className="md:col-span-1"
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

      <TechArsenal />

      {/* SECTION 1 — Elite Showcase */}
      <section id="projects" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-sm font-black tracking-widest text-blue-500 uppercase mb-4">{commonText.eliteShowcase}</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8">{commonText.engineeringArtifacts.split(' ').slice(0, -1).join(' ')} <span className="text-white">{commonText.engineeringArtifacts.split(' ').slice(-1)}</span></h3>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project: any) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isLarge 
                onSelect={() => project.caseStudy ? setSelectedProject(project) : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Omni Wiser (Standalone Featured) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ProjectCard 
            project={omniWiserProject} 
            isLarge 
            onSelect={() => omniWiserProject.caseStudy ? setSelectedProject(omniWiserProject) : null}
          />
        </div>
      </section>

      {/* SECTION 3 — Clinical AI & Data Science */}
      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-black tracking-widest text-emerald-500 uppercase mb-4">{commonText.clinicalAI}</h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl">{commonText.clinicalAIDesc}</p>
          </div>

          <div className="space-y-8">
            {/* Featured clinical project — full width */}
            <ProjectCard 
              project={clinicalProjects[0]} 
              isLarge 
              onSelect={() => clinicalProjects[0].caseStudy ? setSelectedProject(clinicalProjects[0]) : null}
            />

            {/* Other clinical projects — grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {clinicalProjects.slice(1).map((project: any) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelect={() => project.caseStudy ? setSelectedProject(project) : null}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Audit */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LighthouseScorecard />
      </section>

      {/* Experience - The Narrative */}
      <section id="experience" className="py-12 border-t border-white/5">
        <CareerTimeline />
      </section>

      <Certifications />

      {/* Footer / Connect */}
      <footer id="contact" className="py-24 border-t border-white/5 bg-slate-950/80 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">{commonText.footerTitle.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{commonText.footerTitle.split(' ').slice(-1)}</span></h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed text-balance">
            {commonText.footerText}
          </p>
          
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              {socials.map((social: any) => {
                const brandColors: Record<string, string> = {
                  Linkedin: "hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-blue-500/20 hover:text-blue-400",
                  Github: "hover:bg-slate-800 hover:border-slate-700 hover:shadow-white/5 hover:text-white",
                  Twitter: "hover:bg-slate-900/50 hover:border-white/20 hover:shadow-white/5 hover:text-white",
                  Duolingo: "hover:bg-emerald-600/20 hover:border-emerald-500/50 hover:shadow-emerald-500/20 hover:text-emerald-400",
                  Goodreads: "hover:bg-amber-700/20 hover:border-amber-600/50 hover:shadow-amber-600/20 hover:text-amber-500"
                };
                
                return (
                  <motion.a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center gap-4 px-10 py-4 rounded-2xl bg-blue-950/40 border border-blue-900/40 text-slate-300 transition-all font-bold shadow-2xl backdrop-blur-md group relative overflow-hidden",
                      brandColors[social.icon as keyof typeof brandColors]
                    )}
                  >
                    <div className="relative z-10">
                      {BrandLogos[social.icon as keyof typeof BrandLogos] || <ExternalLink size={20} />}
                    </div>
                    {social.name !== "X" && (
                      <span className="relative z-10 tracking-tight">{social.name}</span>
                    )}
                    
                    {/* Gloss Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
                  </motion.a>
                );
              })}
            </div>
          
          <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5">
            <div className="flex items-center gap-8 text-xs font-medium text-slate-500 tracking-wide">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <div className="w-1 h-1 rounded-full bg-slate-800" />
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            </div>
            
            <p className="text-slate-700 text-[10px] font-medium tracking-tight">
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
        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light text-balance">
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
