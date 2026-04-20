"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, 
  Briefcase, 
  Cpu, 
  Mail, 
  Home,
  MessageSquare,
  Upload
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Contact", href: "#contact", icon: MessageSquare },
  { name: "Share", icon: Upload, isAction: true },
]

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: "Armando Blanco | Senior AI + Full-Stack Engineer",
      text: "Check out Armando Blanco's portfolio - Elite Senior AI + Full-Stack Engineer specializing in AI and Full-Stack development.",
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error("Error sharing:", err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
        className={cn(
          "flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl glass border border-white/10 transition-all duration-500",
          scrolled ? "bg-slate-900/80 scale-95 sm:scale-100 shadow-2xl" : "bg-transparent border-transparent shadow-none scale-100 sm:scale-105"
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isHovered = hovered === item.name
          const isShare = item.name === "Share"

          const content = (
            <div className="relative">
              <Icon 
                size={18} 
                className={cn(
                  "transition-all duration-300",
                  isHovered ? "text-blue-400 scale-110" : "text-slate-400"
                )}
              />
              
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-slate-800 text-slate-100 text-[10px] font-medium whitespace-nowrap pointer-events-none border border-slate-700 shadow-xl"
                  >
                    {isShare && copied ? "Copied!" : item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          )

          const commonProps = {
            className: "relative p-2 sm:p-3 group outline-none cursor-pointer",
            onMouseEnter: () => setHovered(item.name),
            onMouseLeave: () => setHovered(null),
          }

          return (
            <React.Fragment key={item.name}>
              {item.isAction ? (
                <button {...commonProps} onClick={handleShare}>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-blue-500/10 rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  {content}
                  {/* Indicator dot */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.5
                    }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                  />
                </button>
              ) : (
                <a {...commonProps} href={item.href}>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-blue-500/10 rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  {content}
                  {/* Indicator dot */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.5
                    }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                  />
                </a>
              )}
            </React.Fragment>
          )
        })}
      </motion.nav>
    </div>
  )
}
