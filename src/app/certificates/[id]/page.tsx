import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Home, Download, ExternalLink } from "lucide-react"
import { certifications } from "@/data/portfolioData"
import { cn } from "@/lib/utils"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const cert = certifications.find(c => c.id === id);

  if (!cert) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col overflow-hidden">
      {/* Premium Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/#certifications" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all text-sm font-medium group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Regresar</span>
          </Link>
          <div className="hidden sm:flex h-8 w-px bg-white/10 mx-2" />
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-white tracking-tight">{cert.title}</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{cert.issuer}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
            <Link 
                href="/" 
                className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
                title="Home"
            >
                <Home size={20} />
            </Link>
            <a 
                href={cert.link} 
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/5"
            >
                <Download size={18} />
                <span className="hidden sm:inline">Descargar PDF</span>
            </a>
            <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white transition-all"
                title="Open in new tab"
            >
                <ExternalLink size={20} />
            </a>
        </div>
      </nav>

      {/* PDF Viewer Container */}
      <div className="flex-1 mt-20 p-4 sm:p-6 lg:p-8 flex flex-col">
        <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 relative group">
          {/* Ambient Glow */}
          <div className="absolute inset-x-0 -top-40 h-80 bg-blue-500/10 blur-[120px] pointer-events-none" />
          
          <iframe 
            src={`${cert.link}#toolbar=0&navpanes=0`} 
            className="w-full h-full border-none rounded-3xl"
            title={cert.title}
          />

          {/* Loading Overlay (hidden when iframe loads) */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Secure Viewer Active</span>
             </div>
          </div>
        </div>
        
        {/* Mobile Info Bar */}
        <div className="mt-4 sm:hidden px-4 py-3 rounded-2xl bg-white/5 border border-white/5">
             <h2 className="text-xs font-bold text-white mb-1">{cert.title}</h2>
             <p className="text-[10px] text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
        </div>
      </div>
    </main>
  );
}
