"use client"

import * as THREE from "three"
import React, { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, TrackballControls } from "@react-three/drei"

const skills = [
  "Next.js", "React", "TypeScript", "Three.js", "AI", "PyTorch", 
  "Python", "AWS", "Machine Learning", "Microservices", "System Design",
  "DevOps", "GraphQL", "Tailwind", "Node.js", "PostgreSQL", "Swift"
]

function Word({ children, ...props }: any) {
  const color = new THREE.Color("#94a3b8")
  const fontProps = { font: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff', fontSize: 0.25, letterSpacing: -0.05, lineHeight: 1 }
  const ref = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  const over = (e: any) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
      ref.current.color.lerp(color.set("#94a3b8").set(hovered ? "#60a5fa" : "#94a3b8"), 0.1)
    }
  })

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked", children)}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}

function Cloud({ count = 4, radius = 5 }) {
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    
    let index = 0
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          skills[index % skills.length]
        ])
        index++
      }
    }
    return temp
  }, [count, radius])

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </>
  )
}

export function SkillCloud() {
  return (
    <div className="w-full h-[600px] relative pointer-events-auto">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 40 }}>
        <fog attach="fog" args={["#020617", 0, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float rotationIntensity={1} floatIntensity={1} speed={2}>
           <Cloud count={5} radius={6} />
        </Float>
        <TrackballControls noPan noZoom rotateSpeed={2} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
         <div className="w-[400px] h-[400px] border border-blue-500/10 rounded-full animate-pulse-slow" />
      </div>
    </div>
  )
}
