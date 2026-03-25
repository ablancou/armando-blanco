"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Sparkles, Bot, User } from "lucide-react"

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([
    { role: "assistant", content: "Hello! I'm Armando's AI persona. How can I help you explore his work today?" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const QA_DATABASE: Record<string, string> = {
    stack: "Armando's primary stack focuses on robust, modern architecture and AI integration. He builds with Next.js 15, TypeScript, Python, PyTorch, and scales using AWS (Amplify, Serverless). He also has extensive experience in WebGL with Three.js.",
    experience: "Armando brings over a decade of cross-disciplinary expertise. Since 2014, he has operated as a Full-Stack Software Developer & Data Scientist, designing everything from clinical Machine Learning pipelines to high-traffic educational web applications.",
    projects: "His flagship engineering artifacts include 'Jazz Arcade' (an AI-powered full-stack education platform), 'Orbital Dome' (a real-time 3D SGP4 satellite tracking engine), and clinical neural networks for medical diagnostics.",
    contact: "You can reach Armando directly via his LinkedIn profile or through the contact details provided in his professional resume. He is currently available for Software Engineer II roles.",
    default: "I am Armando's simulated portfolio assistant. While I can't generate dynamic answers right now, you can ask me about his 'Tech Stack', 'Experience', 'Projects' or 'Contact info'—or simply select one of the quick options below."
  }

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || input
    if (!query.trim() || isLoading) return

    setInput("")
    setMessages(prev => [...prev, { role: "user", content: query }])
    setIsLoading(true)

    // Simulate network delay for a more authentic 'AI' feel
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800))

    let reply = QA_DATABASE.default
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("stack") || lowerQuery.includes("tech") || lowerQuery.includes("framework")) {
      reply = QA_DATABASE.stack
    } else if (lowerQuery.includes("experience") || lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("years")) {
      reply = QA_DATABASE.experience
    } else if (lowerQuery.includes("project") || lowerQuery.includes("portfolio") || lowerQuery.includes("build")) {
      reply = QA_DATABASE.projects
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("hire") || lowerQuery.includes("email") || lowerQuery.includes("linkedin")) {
      reply = QA_DATABASE.contact
    }

    setMessages(prev => [...prev, { role: "assistant", content: reply }])
    setIsLoading(false)
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-4 sm:bottom-32 sm:right-8 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 border border-white/20 group"
      >
        <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
        <Bot size={28} className="relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-4 sm:bottom-32 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[400px] sm:h-[500px] glass rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                  <Sparkles size={18} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">Armando AI</h4>
                  <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-[2rem] rounded-tr-sm shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-800/80 text-slate-100 border border-white/5 rounded-[2rem] rounded-tl-sm shadow-xl backdrop-blur-md'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/80 p-5 rounded-[2rem] rounded-tl-sm border border-white/5 flex gap-1.5 shadow-xl backdrop-blur-md">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages[messages.length - 1].role === "assistant" && !isLoading && (
              <div className="px-6 pb-2 flex flex-wrap gap-2">
                <button onClick={() => handleSend("Tech Stack")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">Tech Stack</button>
                <button onClick={() => handleSend("Experience")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">Experience</button>
                <button onClick={() => handleSend("Projects")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">Projects</button>
              </div>
            )}

            {/* Input Form */}
            <div className="p-6 pt-4 border-t border-white/5 bg-slate-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Armando's experience..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-0 disabled:scale-75 disabled:pointer-events-none duration-200"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
