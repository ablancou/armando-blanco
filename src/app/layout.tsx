import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "🚀 Armando Blanco | Software Engineer II | Mexico",
  description: "Elite Software Engineer II based in Mexico. Specialist in AI integration, Next.js 15, and high-performance full-stack data architectures. 10+ years experience building scalable solutions.",
  keywords: ["Software Engineer II Mexico", "Full-Stack Developer Mexico", "Next.js Expert Mexico", "AI Engineer Mexico", "Armando Blanco Software"],
};

import { LanguageProvider } from "@/context/LanguageContext";

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
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Armando Blanco",
                "jobTitle": "Software Engineer II",
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
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
