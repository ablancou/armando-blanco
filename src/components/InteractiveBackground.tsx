"use client"

import React from "react"
import { motion } from "framer-motion"

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      
      {/* Layer 2: Ambient Gradient Mesh - Slow Breathing */}
      <motion.div 
        animate={{ 
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/10 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/10 blur-[120px]"
      />

      {/* Layer 1: Precision Dot Matrix */}
      <motion.div 
        className="absolute inset-0 opacity-[0.2]"
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='rgba(255,255,255,0.7)'/%3E%3C/svg%3E")`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Layer 3: Subtle Noise Texture */}
      <div className="absolute inset-0 noise-bg" />
      
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/20 to-slate-950/80 mix-blend-multiply" />
    </div>
  )
}
