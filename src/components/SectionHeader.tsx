"use client"

import React from "react"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex justify-start">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-2xl bg-blue-900/40 blur-lg"
        />
        <div className="relative px-8 py-4 rounded-2xl border border-blue-500/20 bg-blue-950/40 backdrop-blur-xl shadow-[0_0_20px_rgba(30,58,138,0.3)] flex items-center gap-4 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <div className="w-1.5 h-8 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
  )
}
