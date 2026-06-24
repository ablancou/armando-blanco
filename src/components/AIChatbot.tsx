"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Sparkles, Bot, User } from "lucide-react"

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([
    { role: "assistant", content: "Hey there! 👋 I'm Armando's AI assistant. Ask me anything — his projects, his stack, the 3D games and academies, his AI work, or the kind of role he's looking for. Where would you like to start?" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [messages])

  const QA_MAP = [
    {
      category: "AI Specialization",
      keywords: ["ai", "machine learning", "pytorch", "genai", "llm", "gemini", "claude", "perplexity", "antigravity", "grok", "neural", "models", "intelligence"],
      response: "Armando is a specialist in **Generative AI** and **LLM Orchestration**. He works with a diverse toolset including **Antigravity**, **Claude**, **Perplexity**, **Gemini**, and **Grok**. He focuses on building practical, high-impact AI solutions, from **clinical diagnostic neural networks** (PyTorch) to AI-powered educational platforms."
    },
    {
      category: "APIs & Integration",
      keywords: ["api", "rest", "graphql", "integration", "endpoint", "fetch", "axios", "webhook", "webrtc", "request"],
      response: "He has deep experience with **RESTful APIs** and real-time integrations. In **Orbital Dome**, he used the **Open-Meteo API** (weather) and the **NASA DSN API** (telemetry). In **Jazz Arcade**, he integrated **Gemini's AI API** and used **WebRTC** for AR camera features."
    },
    {
      category: "Cloud & AWS",
      keywords: ["cloud", "aws", "amplify", "serverless", "lambda", "cognito", "infrastructure", "devops", "deploy", "hosting", "iaas", "paas", "cicd", "pipelines"],
      response: "Armando is an **AWS specialist**. He architected **Jazz Arcade** using **AWS Amplify** for global scalability. His expertise includes managing **Cognito** for secure auth, **Lambda** for serverless functions, and implementing **Infrastructure as Code (IaC)** for robust CI/CD pipelines."
    },
    {
      category: "Frontend & Web",
      keywords: ["frontend", "react", "nextjs", "next.js", "typescript", "tailwind", "css", "framermotion", "framer", "ux", "ui", "styling", "responsive"],
      response: "Armando builds with **Next.js 15** and **TypeScript**. He's an expert in **Framer Motion** for high-performance animations and **UI Engineering**. He prioritize type-safe, accessible, and ultra-responsive frontend architectures."
    },
    {
      category: "Backend & Data",
      keywords: ["backend", "python", "node", "nodejs", "database", "sql", "postgresql", "data", "pandas", "etl", "processing", "scipy", "server"],
      response: "His backend expertise spans **Python** and **Node.js**. He has built several **clinical data pipelines (ETL)** and predictive tools using **pandas** and **scipy**. He focuses on building reliable, high-integrity data systems."
    },
    {
      category: "Seniority & Background",
      keywords: ["senior", "seniority", "years", "experience", "background", "history", "career", "Senior AI + Full-Stack Engineer", "mexico", "leadership", "lead"],
      response: "With 12+ years of professional experience, Armando is a seasoned technologist specializing in Full-Stack & AI development. He is currently focused on high-scale Senior AI + Full-Stack Engineer roles where he can apply his expertise in system architecture, clinical diagnostics, and cloud infrastructure."
    },
    {
      category: "Continuous Learning & Problem Solving",
      keywords: ["certifications", "certificates", "certs", "leetcode", "hackerrank", "codesignal", "sololearn", "algorithms", "solving", "challenges", "study", "learning", "80", "diplomas"],
      response: "Armando is a high-velocity learner with **over 80 technical certifications**. He has a strong algorithmic foundation with **dozens of challenges solved on LeetCode and HackerRank**, and certifications from **CodeSignal** and **SoloLearn**. This discipline ensures he builds high-performance, optimized solutions."
    },
    {
      category: "Professional Foundation",
      keywords: ["marketing", "manager", "hospitals", "angeles", "sedatu", "head of department", "master", "maestría", "business", "administration", "leadership", "jefe"],
      response: "Armando's engineering approach is informed by a strong foundation in **Project Management and leadership**. Having served in strategic management roles (including **Hospital Angeles** and **SEDATU**), he brings a high level of professional maturity, effective communication, and a unique ability to align technical solutions with organizational goals."
    },
    {
      category: "3D & Graphics",
      keywords: ["3d", "threejs", "three.js", "webgl", "graphics", "rendering", "orbital", "satellite", "astronomy", "canvas", "opengl"],
      response: "He is a specialist in **Three.js** and **WebGL**. His project **Orbital Dome** is a high-performance 3D engine that renders 100,000+ stars and real-time satellite telemetry using **SGP4 mathematical models** purely in the browser."
    },
    {
      category: "3D Games & Interactive",
      keywords: ["game", "games", "gaming", "racing", "racer", "drive", "soccer", "football", "tennis", "surf", "world cup", "worldcup", "aetherlynx", "coastline", "playable", "arcade"],
      response: "Armando builds **browser-native 3D games** with Three.js/WebGL — no install required. Highlights include **Coastline Drive** (a procedurally-generated Acapulco racer built entirely in code), **The Tennis Game** (real physics, tournaments and cinematic replays), **Aetherlynx** (wave-based space combat), plus **3D Soccer**, **Surf 3D** and **WorldCupVault** (an interactive World Cup archive in 7 languages)."
    },
    {
      category: "3D Learning Academies",
      keywords: ["anatomy", "genetics", "dna", "crispr", "molecular", "academy", "academies", "atlas", "education", "learning", "chess", "interactive 3d", "study"],
      response: "Armando created a suite of **interactive 3D learning academies**: **Genetics 3D Academy** (the central dogma of molecular biology — replication, transcription, translation and CRISPR — in real-time 3D), **Anatomy 3D Academy** (a dissectible atlas of ~90 human structures), and **Chess 3D Academy** (a 3D board with a theory-based move advisor). These are data-science & education projects, not medical services."
    },
    {
      category: "Health & Science",
      keywords: ["health", "medical", "clinical", "diagnostic", "statura", "pediatric", "height", "lab", "biological", "genomic"],
      response: "Armando has a unique background in **Clinical AI**. He developed **Statura Predict**, a pure-Python (Reflex) clinical tool for height predictions, and has built diagnostic pipelines for labs to transform genomic data into medical insights."
    },
    {
      category: "Education & Impact",
      keywords: ["education", "teaching", "pedagogy", "jazz arcade", "music", "sight-reading", "theory", "tutor"],
      response: "He architected **Jazz Arcade**, a gold standard music education platform. He integrated an **AI Jazz Tutor (Gemini)** and built a custom notation suite that translates MIDI/JSON into standard sheet music dynamically."
    },
    {
      category: "Architecture & System Design",
      keywords: ["architecture", "system design", "scale", "reliability", "distributed", "microservices", "optimization", "scalability"],
      response: "Armando emphasizes **System Design** and **Scalability**. He approaches every project as an 'Engineering Artifact', prioritizing security, high-load optimization, and maintainability in multi-disciplinary teams."
    },
    {
      category: "Tech Stack",
      keywords: ["tech", "stack", "tools", "languages", "toolkit", "technology", "development", "build"],
      response: "Armando's core toolkit includes **Python (AI/Data)**, **Next.js 15 (Full-Stack)**, **TypeScript**, and **AWS (Infrastructure)**. He is an expert in **PyTorch** for neural research, **Three.js/WebGL** for interactive 3D, and the **GenAI** ecosystem (Gemini, Claude, Grok)."
    }
  ]

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || input
    if (!query.trim() || isLoading) return

    setInput("")
    setMessages(prev => [...prev, { role: "user", content: query }])
    setIsLoading(true)

    // Simulate network delay for a more authentic 'AI' feel
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800))

    const lowerQuery = query.toLowerCase()

    // Scoring logic
    let bestMatch: any = null
    let maxScore = 0

    for (const item of QA_MAP) {
      let score = 0
      for (const kw of item.keywords) {
        if (lowerQuery.includes(kw)) {
          score += 1
          if (lowerQuery.split(/\s+/).includes(kw)) score += 1
        }
      }
      if (score > maxScore) {
        maxScore = score
        bestMatch = item
      }
    }

    // Conversational scaffolding so the canned answers feel more natural and varied.
    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]
    const intros = ["", "", "Great question — ", "Sure thing! ", "Absolutely. ", "Happy to dig into that. "]
    const followUps = [
      "",
      "",
      " Anything else you'd like to explore?",
      " Want me to point you to a specific project?",
      " Curious about something else?",
    ]

    let reply = ""
    if (maxScore > 0 && bestMatch) {
      reply = pick(intros) + bestMatch.response + pick(followUps)
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("hire") || lowerQuery.includes("email") || lowerQuery.includes("linkedin") || lowerQuery.includes("available") || lowerQuery.includes("reach")) {
      reply = "Definitely — the best way to reach Armando is through his LinkedIn (linked at the bottom of the page) or the contact section. He's currently open to senior AI + full-stack roles and high-impact consulting. Want me to summarize his strengths for a role you have in mind?"
    } else if (lowerQuery.includes("project") || lowerQuery.includes("portfolio") || lowerQuery.includes("build") || lowerQuery.includes("work")) {
      reply = "He's shipped a lot! A few favorites: Jazz Arcade (an AI-powered music-education platform with 3D didactic games), Orbital Dome (a real-time 3D satellite & sky engine), a SmartMedCalc data-science suite, and a whole collection of browser 3D games. Which area interests you — AI, 3D, data science, or games?"
    } else if (lowerQuery.includes("hi") || lowerQuery.includes("hello") || lowerQuery.includes("hey") || lowerQuery.length < 4) {
      reply = "Hey! 👋 Ask me about Armando's AI work, his 3D engines and games, the data-science projects, his cloud/AWS architecture, or what role he's after. What sounds interesting?"
    } else {
      reply = "Good question! I'm a lightweight assistant, so I'm sharpest on a few topics: Armando's AI & LLM work, his Three.js/WebGL engines, the 3D games and learning academies, his cloud/AWS architecture, his 80+ certifications, or the kind of role he's looking for. Which of those would help?"
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
        className="fixed bottom-24 right-4 sm:bottom-32 sm:right-8 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center shadow-2xl shadow-blue-900/40 border border-white/20 group overflow-hidden"
      >
        {/* MI-styled scanning effect */}
        <motion.div 
          animate={{ 
            top: ["-100%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-20"
        />
        <div className="absolute inset-0 bg-blue-900/20 rounded-full animate-pulse opacity-50" />
        <Bot size={28} className="relative z-10 text-blue-100" />
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
                <div 
                  key={i} 
                  ref={i === messages.length - 1 ? lastMessageRef : null}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-[2rem] rounded-tr-sm shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-800/80 text-slate-100 border border-white/5 rounded-[2rem] rounded-tl-sm shadow-xl backdrop-blur-md'
                  }`}>
                    {m.content.replace(/\*\*/g, '')}
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
                <button onClick={() => handleSend("AI Specialization")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">AI Specialization</button>
                <button onClick={() => handleSend("Certs & Algorithms")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">Certs & Algorithms</button>
                <button onClick={() => handleSend("Tech Stack")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">Tech Stack</button>
                <button onClick={() => handleSend("APIs & Cloud")} className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20 transition-colors">APIs & Cloud</button>
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
