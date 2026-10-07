"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Instagram, Loader2, Play } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { contentChannel } from "@/data/portfolioData"

const TIKTOK_EMBED_SRC = "https://www.tiktok.com/embed.js"
const EMBED_TIMEOUT_MS = 15000

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"

function TikTokLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

const PROFILE_ICONS: Record<string, React.ReactNode> = {
  TikTok: <TikTokLogo className="w-5 h-5 shrink-0" />,
  Instagram: <Instagram size={20} className="shrink-0" aria-hidden="true" />,
}

type FeedState = "idle" | "loading" | "ready" | "error"

export function ContentChannel() {
  const { title, intro, brand, description, tiktok, profiles } = contentChannel
  const [feed, setFeed] = useState<FeedState>("idle")
  const panelRef = useRef<HTMLDivElement>(null)
  const embedRef = useRef<HTMLDivElement>(null)

  // Click-to-load: TikTok's script (and its cookies) are only requested after
  // the visitor asks for the feed. The blockquote is injected outside React's
  // tree because embed.js replaces it with an iframe.
  useEffect(() => {
    if (feed !== "loading" || !embedRef.current) return
    const container = embedRef.current

    // The facade button just unmounted — keep keyboard focus inside the panel.
    panelRef.current?.focus()

    container.innerHTML = `<blockquote class="tiktok-embed" cite="${tiktok.url}" data-unique-id="${tiktok.handle}" data-embed-type="creator" style="max-width:780px;min-width:288px;margin:0 auto;"><section><a target="_blank" rel="noopener noreferrer" href="${tiktok.url}?refer=creator_embed">@${tiktok.handle}</a></section></blockquote>`

    // Keep the loading status until TikTok's iframe has actually painted.
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe")
      if (!iframe) return
      observer.disconnect()
      iframe.addEventListener("load", () => setFeed("ready"), { once: true })
    })
    observer.observe(container, { childList: true, subtree: true })

    // No iframe by now → blocked. An iframe that never fires "load" still ends
    // the loading state so the spinner can't hang.
    const timeout = window.setTimeout(() => {
      setFeed(container.querySelector("iframe") ? "ready" : "error")
    }, EMBED_TIMEOUT_MS)

    const script = document.createElement("script")
    script.src = TIKTOK_EMBED_SRC
    script.async = true
    script.onerror = () => setFeed("error")
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
      script.remove()
    }
  }, [feed, tiktok.url, tiktok.handle])

  return (
    <section id="content" aria-labelledby="content-title" className="py-24 relative z-10 bg-slate-900/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader id="content-title" title={title} />
        <p className="text-slate-300 text-base leading-relaxed max-w-3xl mb-12 -mt-4 font-light">
          {intro}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch"
        >
          {/* Channel card */}
          <div className="lg:col-span-2 min-w-0 flex flex-col glass rounded-[2rem] p-6 sm:p-8">
            <p lang="es" className="text-lg sm:text-xl font-bold text-white mb-3 text-balance">
              {brand}
            </p>
            <p lang="es" className="text-slate-300 leading-relaxed mb-8 font-light">
              {description}
            </p>

            <ul className="flex flex-col gap-3 mt-auto">
              {profiles.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 w-full min-w-0 min-h-[44px] px-5 py-3 rounded-xl bg-blue-950/40 border border-blue-900/40 text-slate-200 hover:text-white hover:bg-blue-600/10 hover:border-blue-500/50 transition-colors ${focusRing}`}
                  >
                    {PROFILE_ICONS[profile.icon]}
                    <span className="flex flex-col min-w-0 leading-tight">
                      <span className="font-semibold">{profile.name}</span>
                      <span className="text-sm text-slate-400 truncate">{profile.handle}</span>
                    </span>
                    <ExternalLink size={16} className="ml-auto shrink-0 text-slate-400" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TikTok feed — facade until the visitor opts in */}
          <div
            ref={panelRef}
            tabIndex={-1}
            aria-label="Latest TikTok videos"
            className="lg:col-span-3 min-w-0 flex flex-col glass rounded-[2rem] overflow-hidden focus:outline-none"
          >
            {feed === "idle" ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-5 px-6 py-10 sm:p-10 min-h-[280px] sm:min-h-[340px] [@media(max-height:500px)]:min-h-0 [@media(max-height:500px)]:py-6 [@media(max-height:500px)]:gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300">
                  <TikTokLogo className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Latest videos on TikTok</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Watch my newest AI news videos right here — always up to date.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFeed("loading")}
                  className={`px-6 py-3 min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-2 transition-colors shadow-xl shadow-blue-500/20 ${focusRing}`}
                >
                  <Play size={18} aria-hidden="true" />
                  Load my latest videos
                </button>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  Loads content from TikTok, which may set its own cookies.{" "}
                  <Link href="/privacy" className={`text-blue-400 hover:underline underline-offset-2 rounded ${focusRing}`}>
                    Privacy Policy
                  </Link>
                </p>
              </div>
            ) : (
              <div className="sm:p-4">
                <div role="status" aria-live="polite">
                  {feed === "loading" && (
                    <p className="flex items-center justify-center gap-2 text-sm text-slate-400 py-6">
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Loading TikTok…
                    </p>
                  )}
                  {feed === "error" && (
                    <div className="flex flex-col items-center justify-center text-center gap-4 px-6 py-10 min-h-[280px]">
                      <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
                        TikTok couldn&apos;t load here — it may be blocked by your browser or an extension.
                      </p>
                      <a
                        href={tiktok.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center gap-2 transition-colors ${focusRing}`}
                      >
                        <TikTokLogo className="w-5 h-5" />
                        Watch on TikTok
                        <ExternalLink size={16} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </div>
                  )}
                </div>
                <div
                  ref={embedRef}
                  className={feed === "error" ? "hidden" : feed === "loading" ? "min-h-[280px]" : undefined}
                />
                {/* Always-available exit: TikTok can fail inside its own iframe
                    (rate limits, region blocks) where we can't detect it. */}
                {feed !== "error" && (
                  <div className="flex justify-center px-6 py-4">
                    <a
                      href={tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 min-h-[44px] px-4 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors ${focusRing}`}
                    >
                      <TikTokLogo className="w-4 h-4" />
                      Open @{tiktok.handle} on TikTok
                      <ExternalLink size={14} aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
