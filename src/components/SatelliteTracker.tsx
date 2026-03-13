"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Radio, Target, Activity } from "lucide-react"

export function SatelliteTracker() {
  const [count, setCount] = useState(14582)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [scanning, setScanning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) - 1)
      setLastUpdate(new Date())
    }, 3000)

    const scanInterval = setInterval(() => {
      setScanning(prev => !prev)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(scanInterval)
    }
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="glass-card p-6 rounded-[2rem] border-white/5 bg-slate-900/40 relative overflow-hidden h-full flex flex-col justify-between group"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Globe size={20} className="text-blue-400 animate-pulse-slow" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tighter">Orbital Assets</h4>
              <p className="text-[10px] text-slate-500 font-mono">NORAD LIVE FEED</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${scanning ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-slate-600'} transition-all`} />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
              {scanning ? 'Targeting' : 'Standby'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
            <div className="text-[10px] text-blue-400 font-mono mb-1">REAL-TIME COUNT</div>
            <div className="text-3xl font-black text-white tabular-nums tracking-tighter">
              {count.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-950/30 rounded-lg p-2 border border-white/5">
               <div className="text-[8px] text-slate-500 uppercase mb-1">Signal</div>
               <div className="flex items-center gap-1">
                 <Radio size={12} className="text-emerald-400" />
                 <span className="text-xs font-mono text-emerald-400">98.4%</span>
               </div>
             </div>
             <div className="bg-slate-950/30 rounded-lg p-2 border border-white/5">
               <div className="text-[8px] text-slate-500 uppercase mb-1">Latency</div>
               <div className="flex items-center gap-1">
                 <Activity size={12} className="text-blue-400" />
                 <span className="text-xs font-mono text-blue-400">12ms</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-4 mt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-[8px] font-mono text-slate-600">
          <span>COSMOSVIEW ENGINE v2.4</span>
          <span>LAT: 19.4326° N</span>
        </div>
        <div className="mt-1 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/3 bg-blue-500/50 blur-[2px]" 
          />
        </div>
      </div>

      {/* Futuristic Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/20 blur-[4px] animate-scanline pointer-events-none" />
    </motion.div>
  )
}
