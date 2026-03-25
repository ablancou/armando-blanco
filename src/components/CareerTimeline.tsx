"use client"

import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Code, Rocket, TrendingUp } from "lucide-react"

interface MilestoneProps {
  date: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  side: "left" | "right"
  isLast?: boolean
}

function Milestone({ date, title, company, description, icon, side, isLast }: MilestoneProps) {
  return (
    <div className={`relative flex items-center justify-between mb-24 ${side === "right" ? "flex-row-reverse" : ""}`}>
      <div className="hidden md:block w-[45%]" />
      
      {/* Central Node */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {icon}
      </div>

      {/* Card */}
      <motion.div 
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`w-[calc(100%-3rem)] md:w-[45%] relative ml-10 md:ml-0 group transition-all duration-500 hover:-translate-y-1`}
      >
        <div className="absolute -top-3 -left-3 md:group-hover:-translate-y-1 transition-transform duration-500 z-20">
           <span className="px-4 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
             {date}
           </span>
        </div>

        <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-slate-900/40 w-full hover:border-blue-500/30 transition-all duration-500">
          <h4 className="text-xl font-bold text-white mb-1 mt-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{title}</h4>
          <p className="text-blue-400/80 text-sm font-medium mb-4">{company}</p>
          <p className="text-slate-400 text-sm leading-relaxed font-light">{description}</p>
        </div>
        
        {!isLast && (
           <div className="absolute top-full left-[-20px] md:left-auto md:right-1/2 h-24 w-[2px] bg-gradient-to-b from-blue-500 to-transparent md:translate-x-1/2 -z-10 opacity-20" />
        )}
      </motion.div>
    </div>
  )
}

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const milestones: MilestoneProps[] = [
    {
      date: "2014 - Present",
      title: "Software Developer",
      company: "Freelance / AI Projects",
      description: "Architecting high-traffic platforms (Next.js, AWS), orchestrating LLM integrations, and building clinical diagnostic neural networks using PyTorch.",
      icon: <Code size={16} className="text-blue-400" />,
      side: "left"
    },
    {
      date: "2015 - Present",
      title: "Technical Consultant",
      company: "Data Science & Machine Learning, Freelance",
      description: "Guiding teams in the implementation of predictive models, automated ETL data pipelines, and optimized cloud deployments.",
      icon: <Briefcase size={16} className="text-blue-400" />,
      side: "right"
    },
    {
      date: "2005 - 2009",
      title: "Bachelor in Business Administration",
      company: "Universidad Anáhuac, Mexico City",
      description: "Foundation in business strategy, quantitative analysis, and administration.",
      icon: <GraduationCap size={16} className="text-blue-400" />,
      side: "left",
      isLast: true
    }
  ]

  return (
    <div ref={containerRef} className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-32">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The Genesis <span className="text-gradient">Path</span></h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">The evolution of a multi-disciplinary engineering spirit.</p>
      </div>

      <div className="relative">
        {/* Animated Vertical Line */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-[20px] md:left-1/2 h-full w-[2px] bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 md:-translate-x-1/2 z-0 opacity-50"
        />

        <div className="relative z-10">
          {milestones.map((m, i) => (
            <Milestone key={i} {...m} />
          ))}
        </div>
      </div>
    </div>
  )
}
