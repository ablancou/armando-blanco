import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ConsentBanner } from "@/components/ConsentBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.armandoblanco.dev"),
  title: {
    default:
      "Armando Blanco — Senior AI + Full-Stack Engineer | Next.js 15, PyTorch, LLMs",
    template: "%s | Armando Blanco",
  },
  description:
    "12+ years shipping high-complexity systems. Next.js 15, Python/PyTorch, LLMs, Three.js/WebGL, AWS. Clinical AI, gamified EdTech, real-time 3D engines. Available for senior remote roles and high-impact consulting.",
  keywords: [
    "Senior Software Engineer",
    "AI Engineer",
    "LLM Engineer",
    "Full-Stack Engineer",
    "Next.js 15",
    "PyTorch",
    "Three.js",
    "WebGL",
    "AWS",
    "TypeScript",
    "Clinical AI",
    "Mexico City",
    "Remote",
  ],
  authors: [{ name: "Armando Blanco", url: "https://www.armandoblanco.dev" }],
  creator: "Armando Blanco",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.armandoblanco.dev",
    siteName: "Armando Blanco",
    title: "Armando Blanco — Senior AI + Full-Stack Engineer",
    description:
      "Senior engineer · 12+ yrs · Next.js 15, PyTorch, LLMs, Three.js/WebGL, AWS · Clinical AI & EdTech · Remote-first.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Armando Blanco — Senior AI + Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armando Blanco — Senior AI + Full-Stack Engineer",
    description:
      "12+ yrs · Next.js 15, PyTorch, LLMs, Three.js/WebGL · Clinical AI & EdTech · Remote.",
    images: ["/og-image.png"],
    creator: "@armandoblanco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://www.armandoblanco.dev" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Armando Blanco",
                "jobTitle": "Senior AI + Full-Stack Engineer",
                "url": "https://jazzarcade.com",
                "sameAs": [
                  "https://github.com/ablancou",
                  "https://www.linkedin.com/in/armandoblanco"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mexico City",
                  "addressCountry": "MX"
                },
                "knowsAbout": [
                  "Software Engineering",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Full-Stack Development",
                  "Next.js",
                  "Python"
                ]
              })
            }}
          />
          <InteractiveBackground />
          {children}
          <ConsentBanner />
      </body>
    </html>
  );
}
