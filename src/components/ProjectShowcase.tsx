"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, ArrowRight, Activity, Layers, Code, Globe2 } from "lucide-react"
import Image from "next/image"

interface ProjectShowcaseProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export function ProjectShowcase({ project, isOpen, onClose }: ProjectShowcaseProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!project || !project.caseStudy) return null

  const { caseStudy } = project

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] overflow-y-auto pointer-events-none">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-6xl bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden pointer-events-auto border border-white/10 shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Hero Header */}
                <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-4xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl">
                        {project.tagline}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                  
                  {/* Left Column: Context & Details */}
                  <div className="lg:col-span-2 space-y-16">
                    {/* Overview */}
                    <section>
                      <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-6">Project Overview</h3>
                      <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        {caseStudy.overview}
                      </p>
                    </section>

                    {/* Detailed Sections */}
                    <div className="grid gap-12">
                      {caseStudy.sections.map((section: any, idx: number) => (
                        <section key={idx} className="glass-card p-8 rounded-[2rem] border-white/5 bg-slate-950/30">
                          <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-500 rounded-full" />
                            {section.title}
                          </h4>
                          <p className="text-slate-400 leading-relaxed">
                            {section.content}
                          </p>
                          {section.image && (
                            <div className="mt-8 relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10">
                              <Image 
                                src={section.image} 
                                alt={section.title} 
                                fill 
                                className="object-cover"
                              />
                            </div>
                          )}
                        </section>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Meta & Tech */}
                  <div className="space-y-12">
                    {/* Actions */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
                      >
                        Visit Live Platform
                        <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}

                    {/* Key Metrics */}
                    <section className="glass-card p-8 rounded-[2rem] border-white/5">
                      <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">By The Numbers</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {caseStudy.metrics.map((metric: any, idx: number) => (
                          <div key={idx}>
                            <div className="text-2xl md:text-3xl font-black text-white">{metric.value}</div>
                            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                      <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Technical Architecture</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techTags.map((tag: string, idx: number) => (
                          <span 
                            key={idx} 
                            className="px-4 py-2 rounded-xl bg-slate-800/50 border border-white/10 text-sm font-mono text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
