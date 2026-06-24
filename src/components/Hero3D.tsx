"use client"

import React, { useMemo, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Float, MeshDistortMaterial, Icosahedron, Sparkles } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

/**
 * Hero3D — immersive but lightweight Three.js scene rendered behind the hero copy.
 *
 * Design goals:
 *  - On-brand (blue / emerald) and subtle: it must never fight the foreground text.
 *  - Performance-first: particle count + DPR scale down on small screens, and the
 *    whole scene falls back to a static frame when the user prefers reduced motion.
 *  - Pointer parallax for a sense of depth (disabled when reduced-motion is set).
 *
 * Rendered via a dynamic ssr:false import in page.tsx so the WebGL context is only
 * created in the browser.
 */

function ParticleField({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Points>(null)

  // Distribute points inside a sphere shell for a galaxy-like cloud.
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 2.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current || reducedMotion) return
    ref.current.rotation.y += delta * 0.04
    ref.current.rotation.x += delta * 0.015
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

function CoreOrb({ reducedMotion }: { reducedMotion: boolean }) {
  const orb = useRef<THREE.Mesh>(null)
  const mat = useRef<any>(null)

  // Endpoints for the "breathing" color cycle (blue ⇄ cyan).
  const colors = useMemo(() => ({
    colorA: new THREE.Color("#3b82f6"),   // blue-500
    colorB: new THREE.Color("#22d3ee"),   // cyan-400
    emA: new THREE.Color("#2563eb"),       // blue-600
    emB: new THREE.Color("#38bdf8"),       // sky-400
  }), [])

  useFrame((state, delta) => {
    if (reducedMotion) return
    if (orb.current) {
      orb.current.rotation.y += delta * 0.12
      orb.current.rotation.z += delta * 0.05
    }
    if (mat.current) {
      // Slow sine ramp 0→1→0 so the hue eases back and forth, never popping.
      const t = (Math.sin(state.clock.elapsedTime * 0.35) + 1) / 2
      mat.current.color.lerpColors(colors.colorA, colors.colorB, t)
      mat.current.emissive.lerpColors(colors.emA, colors.emB, t)
    }
  })

  return (
    <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={reducedMotion ? 0 : 0.35} floatIntensity={reducedMotion ? 0 : 0.55}>
      {/* Single smooth wireframe orb — clean, with bloom + breathing color doing the work. */}
      <Icosahedron ref={orb} args={[1.2, 12]}>
        <MeshDistortMaterial
          ref={mat}
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={0.45}
          roughness={0.2}
          metalness={0.9}
          distort={reducedMotion ? 0.06 : 0.18}
          speed={reducedMotion ? 0 : 1.1}
          wireframe
        />
      </Icosahedron>
    </Float>
  )
}

function SceneContents({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)

  // Subtle pointer parallax: ease the whole scene toward the cursor.
  useFrame((state) => {
    if (!group.current || reducedMotion) return
    const targetX = state.pointer.y * 0.15
    const targetY = state.pointer.x * 0.25
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#93c5fd" />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#22d3ee" />
      <CoreOrb reducedMotion={reducedMotion} />
      <ParticleField count={count} reducedMotion={reducedMotion} />
      {/* Premium floating glints around the orb. */}
      <Sparkles
        count={reducedMotion ? 18 : 40}
        scale={6}
        size={2.4}
        speed={reducedMotion ? 0 : 0.4}
        opacity={0.7}
        color="#7dd3fc"
      />
    </group>
  )
}

export default function Hero3D() {
  const [count, setCount] = useState(2600)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5])

  useEffect(() => {
    // Tune the scene to the device once we're in the browser.
    const isMobile = window.innerWidth < 768
    setCount(isMobile ? 900 : 2600)
    setDpr(isMobile ? [1, 1.25] : [1, 1.5])

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={dpr}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <SceneContents count={count} reducedMotion={reducedMotion} />
        {/* Cinematic glow on the orb + sparkles. Skipped under reduced-motion to keep it calm/cheap. */}
        {!reducedMotion && (
          <EffectComposer>
            <Bloom
              intensity={1.1}
              luminanceThreshold={0.18}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
      {/* Fade the scene into the page so it sits behind the hero copy without distraction. */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/70" />
    </div>
  )
}
