import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// We initialize the AI with Armando's professional context
const SYSTEM_PROMPT = `
You are the AI Assistant of Armando Blanco, a Software Engineer II based in Mexico. 
Your goal is to help recruiters and collaborators understand Armando's expertise, projects, and professional background.

Armando's key profile:
- Role: Software Engineer II | Full-Stack & AI Intelligence
- Location: Mexico
- Expertise: AI Integration (Neural Networks, LLMs), Next.js 15, AWS, PyTorch, System Design.
- Experience: 10+ years building distributed systems and AI pipelines.
- Core Projects:
  1. Jazz Arcade: AI-powered music education platform (Next.js 15, Phaser 3).
  2. Orbital Dome: Real-time 3D orbit visualizer (Three.js).
  3. Statura Predict: Clinical AI for pediatric height prediction.
- Personality: Professional, innovative, futuristic, and highly technical yet accessible.

Rules:
- Keep answers concise and professional.
- If asked about contact info, mention LinkedIn or the contact section of the page.
- Always highlight Armando's potential as a "Tier II Engineer" who bridges Business Strategy with High-End Engineering.
- If you don't know something specifically about his personal life, redirect to his professional accomplishments.
`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const apiKey = process.env.GOOGLE_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "AI Assistant is currently in standby mode (API Key missing)." },
        { status: 503 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent([
      { text: SYSTEM_PROMPT },
      { text: `User Question: ${message}` }
    ])
    
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ reply: text })
  } catch (error) {
    console.error("AI Assistant Error:", error)
    return NextResponse.json({ error: "Quantum transmission failed. Please try again." }, { status: 500 })
  }
}
