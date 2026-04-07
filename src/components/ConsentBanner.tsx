"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ShieldCheck, X } from "lucide-react"

export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("system-access-authorized")
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("system-access-authorized", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="glass overflow-hidden rounded-2xl border border-blue-500/30 shadow-2xl p-6 relative">
            {/* MI Laser Scan Animation */}
            <motion.div
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent z-20"
            />
            
            <div className="flex gap-4 items-start relative z-10">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <ShieldCheck className="text-blue-400" size={20} />
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  System Authorization
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  By continuing to navigate this engineering platform, you acknowledge our professional 
                  <Link href="/privacy" className="text-blue-400 hover:underline mx-1">Privacy Policy</Link> 
                  and 
                  <Link href="/terms" className="text-blue-400 hover:underline mx-1">Terms of Service</Link>.
                </p>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Authorize Access</span>
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors border border-white/5"
                    aria-label="Dismiss"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
