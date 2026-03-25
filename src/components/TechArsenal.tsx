"use client"

import React from "react"
import { motion } from "framer-motion"

const topSkills = [
  "Python", "Next.js 15", "React 18", "TypeScript", "PyTorch", "AWS Amplify",
  "SQL", "pandas", "Machine Learning", "Streamlit", "Phaser 3", "Node.js"
]

export function TechArsenal() {
  return (
    <div className="w-full py-16 overflow-hidden bg-slate-900/40 border-y border-white/5 relative">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-8">
        <h3 className="text-sm font-black tracking-widest text-slate-500 uppercase">Top Skills & Core Arsenal</h3>
      </div>

      <div className="flex whitespace-nowrap px-4 w-max">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ ease: "linear", duration: 25, repeat: Infinity }}
           className="flex gap-4 sm:gap-8 items-center"
        >
          {/* Double array to ensure seamless looping */}
          {[...topSkills, ...topSkills].map((skill, idx) => (
            <span 
              key={idx} 
              className="px-6 py-3 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 font-mono text-sm shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
