"use client"

import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { ShieldCheck, Zap, UserCheck, Search } from "lucide-react"

interface ScoreProps {
  label: string
  score: number
  icon: React.ReactNode
  delay: number
}

function CircularProgress({ score, delay, label, icon }: ScoreProps) {
  const controls = useAnimation()
  const [displayScore, setDisplayScore] = useState(0)

  useEffect(() => {
    let timeout = setTimeout(() => {
      controls.start({
        pathLength: score / 100,
        transition: { duration: 2, ease: "easeOut" }
      })

      let start = 0
      const duration = 2000
      const increment = score / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= score) {
          setDisplayScore(score)
          clearInterval(timer)
        } else {
          setDisplayScore(Math.floor(start))
        }
      }, 16)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [controls, score, delay])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        {/* Shadow/Glow */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
        
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-slate-800"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="251.2"
            initial={{ pathLength: 0 }}
            animate={controls}
            className="text-emerald-400"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-white">{displayScore}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
        {icon}
        {label}
      </div>
    </div>
  )
}

export function LighthouseScorecard() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 rounded-[2.5rem] border-white/5 bg-slate-900/40 backdrop-blur-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/40 text-emerald-400 text-[8px] font-black uppercase tracking-widest whitespace-nowrap">
          Live Audit: PROD
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Zap size={18} className="text-yellow-400 fill-yellow-400" />
          Engineering Excellence
        </h4>
        <p className="text-slate-500 text-xs font-light">Verified system performance and architecture quality.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <CircularProgress label="Performance" score={100} icon={<Zap size={10} />} delay={0.2} />
        <CircularProgress label="Accessibility" score={100} icon={<UserCheck size={10} />} delay={0.4} />
        <CircularProgress label="Best Practices" score={100} icon={<ShieldCheck size={10} />} delay={0.6} />
        <CircularProgress label="SEO" score={100} icon={<Search size={10} />} delay={0.8} />
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
            Systems Optimal
          </span>
        </div>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
          Audit Type: Mobile & Desktop High-Fidelity
        </p>
      </div>
    </motion.div>
  )
}
