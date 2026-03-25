"use client"

import React from "react"
import { motion } from "framer-motion"
import { certifications } from "@/data/portfolioData"
import { Code2, Database, Activity, Shield, ArrowRight, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, any> = {
  Code2,
  Database,
  Activity,
  Shield,
  Award
}

const colorMap = {
  blue: "border-blue-500/30 text-blue-400 group-hover:border-blue-500/60 group-hover:shadow-blue-500/20",
  emerald: "border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/60 group-hover:shadow-emerald-500/20",
  rose: "border-rose-500/30 text-rose-400 group-hover:border-rose-500/60 group-hover:shadow-rose-500/20",
  amber: "border-amber-500/30 text-amber-400 group-hover:border-amber-500/60 group-hover:shadow-amber-500/20",
}

const gradientMap = {
  blue: "from-blue-500/10 to-blue-900/10",
  emerald: "from-emerald-500/10 to-emerald-900/10",
  rose: "from-rose-500/10 to-rose-900/10",
  amber: "from-amber-500/10 to-amber-900/10",
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-black tracking-widest text-blue-500 uppercase mb-4">Elite Upskilling</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Advanced Generative AI <span className="text-slate-500">Certifications</span></h3>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl">
            Domain-specific mastery validated by CodeSignal, bridging theoretical AI with enterprise application architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon] || Award;
            const colorClass = colorMap[cert.color as keyof typeof colorMap];
            const gradientBg = gradientMap[cert.color as keyof typeof gradientMap];
            
            return (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "group relative overflow-hidden flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border transition-all shadow-xl",
                  colorClass
                )}
              >
                {/* Background ambient glow */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  gradientBg
                )} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-slate-400">Issued by: <strong className="text-slate-200">{cert.issuer}</strong></span>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-bold tracking-wide transition-transform group-hover:translate-x-2">
                  View Credential <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  )
}
