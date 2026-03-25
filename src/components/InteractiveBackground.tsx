"use client"

import React from "react"
import { motion } from "framer-motion"

export function InteractiveBackground() {
  // We use 4 overlapping grids, each offset and pulsing at different prime-number frequencies 
  // to create a pseudo-random "twinkling" dot matrix effect without heavy Canvas/JS usage.
  
  const createDotSvg = (cx: number, cy: number) => {
    return `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='${cx}' cy='${cy}' r='1.5' fill='rgba(255,255,255,0.7)'/%3E%3C/svg%3E")`
  }

  const dotLayers = [
    { cx: 2, cy: 2, duration: 4.3, delay: 0 },
    { cx: 34, cy: 2, duration: 5.7, delay: 1.2 },
    { cx: 2, cy: 34, duration: 7.1, delay: 2.5 },
    { cx: 34, cy: 34, duration: 8.9, delay: 0.8 },
  ]

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

      {/* Layer 1: Precision Twinkling Dot Matrix */}
      <div className="absolute inset-0">
        {dotLayers.map((layer, i) => (
          <motion.div 
            key={i}
            className="absolute inset-0"
            animate={{ opacity: [0.05, 0.25, 0.05] }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              duration: layer.duration,
              delay: layer.delay
            }}
            style={{
              backgroundImage: createDotSvg(layer.cx, layer.cy),
              backgroundSize: '64px 64px'
            }}
          />
        ))}
      </div>

      {/* Layer 3: Subtle Noise Texture */}
      <div className="absolute inset-0 noise-bg opacity-50" />
      
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/20 to-slate-950/80 mix-blend-multiply" />
    </div>
  )
}
