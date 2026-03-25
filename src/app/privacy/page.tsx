import React from "react"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="noise-bg" />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Shield size={24} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
        </div>
        
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-slate-300 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Focus on Data Sovereignty</h2>
            <p>
              Your privacy is of paramount importance. This portfolio is designed as a high-fidelity technical showcase and does not engage in covert data collection, third-party tracking, or identity harvesting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Simulated AI Architecture</h2>
            <p>
              The "Armando AI" chatbot featured on this site operates using a **simulated logic tree**. Unlike standard AI assistants, it does not send your queries to external LLM providers (like OpenAI or Google) and does not store or process personal data from your conversations. All interactions are local and ephemeral.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">External Links and Assets</h2>
            <p>
              This site provides links to verified professional platforms (LinkedIn, GitHub, HackerRank, etc.). Once you navigate to these external services, their respective privacy policies apply. We do not control or assume responsibility for their data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Infrastructure & Cookies</h2>
            <p>
              We prioritize performance. This application is built with Next.js and hosted on Vercel. We do not use persistent cookies for marketing or user profiling. Minimal session data may be handled by the hosting infrastructure to ensure site stability and speed.
            </p>
          </section>

          <footer className="pt-8 border-t border-white/5 text-sm text-slate-500">
            Current Version: 1.0 (March 2026). For high-end professional inquiries, please contact Armando directly via LinkedIn.
          </footer>
        </div>
      </div>
    </main>
  )
}
