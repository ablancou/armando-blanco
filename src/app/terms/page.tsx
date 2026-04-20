import React from "react"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <FileText size={24} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms & Conditions</h1>
        </div>
        
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-slate-300 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Platform Purpose</h2>
            <p>
              This digital portfolio serves as a professional showcase of Armando Blanco&apos;s expertise in Software Engineering, AI Integration, and Data Architecture. It is intended for recruitment, collaboration, and educational demonstration purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Intellectual Property</h2>
            <p>
              All code, documentation, and specific experimental designs (including Jazz Arcade, Orbital Dome, and Statura Predict) remain the intellectual property of Armando Blanco unless otherwise specified by prior contractual agreements. Reproduction or unauthorized use of these specific engineering artifacts is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Visual Assets and Branding</h2>
            <p>
              The custom 3D engines, animations, and high-fidelity UI/UX design found here are original creations. All third-party brand logos (LinkedIn, GitHub, etc.) are used for identification and social linking purposes under the principle of fair use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Disclaimer of Performance</h2>
            <p>
              While every effort is made to optimize this site for all devices, performance may vary based on hardware capabilities (specifically for 3D/WebGL experiences). We are not responsible for any technical issues resulting from the use of this high-performance interface.
            </p>
          </section>

          <footer className="pt-8 border-t border-white/5 text-sm text-slate-500">
            Last Updated: March 2026. Designed for Senior AI + Full-Stack Engineer recruitment in world-class organizations.
          </footer>
        </div>
      </div>
    </main>
  )
}
