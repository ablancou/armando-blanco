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
        className={`w-full md:w-[45%] glass-card p-6 rounded-[2rem] border-white/5 bg-slate-900/40 relative group hover:border-blue-500/30 transition-all duration-500 ml-12 md:ml-0`}
      >
        <div className="absolute -top-3 -left-3 md:group-hover:-translate-y-2 transition-transform duration-500">
           <span className="px-4 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
             {date}
           </span>
        </div>
        
        <h4 className="text-xl font-bold text-white mb-1 mt-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{title}</h4>
        <p className="text-blue-400/80 text-sm font-medium mb-4">{company}</p>
        <p className="text-slate-400 text-sm leading-relaxed font-light">{description}</p>
        
        {!isLast && (
           <div className="absolute top-full left-[20px] md:left-auto md:right-1/2 h-24 w-[2px] bg-gradient-to-b from-blue-500 to-transparent md:translate-x-1/2 -z-10 opacity-20" />
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
      date: "2014 - 2018",
      title: "Business Strategist",
      company: "Strategic Growth Corp",
      description: "Led market expansion initiatives and financial modeling for distributed operations in Latin America.",
      icon: <TrendingUp size={16} className="text-blue-400" />,
      side: "left"
    },
    {
      date: "2019 - 2021",
      title: "Data Consultant",
      company: "Insight Analytics",
      description: "Bridged the gap between business requirements and technical implementation using Python and early AI models.",
      icon: <GraduationCap size={16} className="text-blue-400" />,
      side: "right"
    },
    {
      date: "2021 - 2023",
      title: "Software Engineer",
      company: "TechPulse Solutions",
      description: "Directed full-stack development for high-availability enterprise applications using React and Node.js.",
      icon: <Code size={16} className="text-blue-400" />,
      side: "left"
    },
    {
      date: "2024 - Present",
      title: "Software Engineer II",
      company: "Apex Intelligence",
      description: "Architecting multi-agent AI systems and high-performance cloud infrastructure for international scaling.",
      icon: <Rocket size={16} className="text-blue-400" />,
      side: "right",
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
