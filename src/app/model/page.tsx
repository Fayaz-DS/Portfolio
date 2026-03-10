"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing"
import { useState, useEffect, Suspense } from "react"
import * as THREE from "three"
import EyeModel from "../components/model/EyeModel"
import CornerBoxes from "../components/model/CornerBoxes"
import FallingBeams from "../components/model/FallingBeams"

function CameraController() {
  const { camera } = useThree()
  useEffect(() => {
    const update = () => {
      const cam = camera as THREE.PerspectiveCamera
      if (window.innerWidth < 480) {
        cam.fov = 85
      } else if (window.innerWidth < 768) {
        cam.fov = 70
      } else {
        cam.fov = 50
      }
      cam.updateProjectionMatrix()
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [camera])
  return null
}

export default function Page(){

const [hovered,setHovered]=useState<number|null>(null)
const [active,setActive]=useState<number|null>(null)

useEffect(()=>{
  const html = document.documentElement
  const prevHtmlOverflow = html.style.overflow
  const prevBodyOverflow = document.body.style.overflow
  const preventScroll = (e: Event) => {
    const panelScroll = document.querySelector("[data-panel-scroll]")
    if (panelScroll && panelScroll.contains(e.target as Node)) return
    e.preventDefault()
  }

  html.style.overflow = "hidden"
  document.body.style.overflow = "hidden"
  window.addEventListener("wheel", preventScroll, { passive: false })
  window.addEventListener("touchmove", preventScroll, { passive: false })

  return ()=>{
    window.removeEventListener("wheel", preventScroll)
    window.removeEventListener("touchmove", preventScroll)
    html.style.overflow = prevHtmlOverflow
    document.body.style.overflow = prevBodyOverflow
  }
},[])

return(
<div className="relative w-screen h-screen overflow-hidden"
  style={{
    background: '#09080a'
  }}
>

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(rgba(180,150,80,0.045) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
    }}
  />

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(160,125,45,0.07) 0%, transparent 100%)",
    }}
  />

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 35%, rgba(5,4,6,0.92) 100%)",
    }}
  />

  <FallingBeams />

  <Canvas
    camera={{position:[0,0,10],fov:50}}
    className="absolute inset-0"
    gl={{
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.75,
      antialias: true,
    }}
  >
    <ambientLight intensity={0.34} color="#2a1e0e" />

    <directionalLight
      position={[5, 3, 4]}
      intensity={1.1}
      color="#f0e8d0"
    />

    <directionalLight
      position={[-4, 2, -2]}
      intensity={0.55}
      color="#c8ba90"
    />

    <pointLight
      position={[0, -3, 3]}
      intensity={0.32}
      color="#7a6440"
      distance={20}
      decay={2}
    />

    <spotLight
      position={[2, 4, 6]}
      intensity={0.45}
      angle={0.3}
      penumbra={1}
      color="#f8f0e0"
    />

    <fog attach="fog" args={['#1a1610', 8, 18]} />

    <CameraController />
    <Suspense fallback={null}>
      <EyeModel hovered={hovered}/>
    </Suspense>

    <EffectComposer>
      <Bloom
        luminanceThreshold={0.45}
        luminanceSmoothing={0.85}
        intensity={0.45}
        radius={0.65}
      />
      <ToneMapping />
    </EffectComposer>
  </Canvas>

  <div className="absolute inset-0 pointer-events-none z-[5]">

    <div className="absolute top-5 left-5 w-12 h-12 border-t-[1px] border-l-[1px] border-[#c9a827]/25" />
    <div className="absolute top-5 right-5 w-12 h-12 border-t-[1px] border-r-[1px] border-[#c9a827]/25" />
    <div className="absolute bottom-5 left-5 w-12 h-12 border-b-[1px] border-l-[1px] border-[#c9a827]/25" />
    <div className="absolute bottom-5 right-5 w-12 h-12 border-b-[1px] border-r-[1px] border-[#c9a827]/25" />

    <div className="absolute top-5 left-5 w-1 h-1 bg-[#c9a827]/40" />
    <div className="absolute top-5 right-5 w-1 h-1 bg-[#c9a827]/40" />
    <div className="absolute bottom-5 left-5 w-1 h-1 bg-[#c9a827]/40" />
    <div className="absolute bottom-5 right-5 w-1 h-1 bg-[#c9a827]/40" />

    <div className="absolute top-6 left-1/2 -translate-x-1/2">
      <p className="text-[9px] text-[#c9a827]/28 font-mono tracking-[0.45em] uppercase whitespace-nowrap">Sovereign Vision System</p>
    </div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <p className="text-[8px] text-[#c9a827]/18 font-mono tracking-[0.35em] whitespace-nowrap">SFM-MMXXVI // v1.0</p>
    </div>

    <div className="absolute left-6 top-1/2 -translate-y-1/2">
      <p className="text-[8px] text-[#c9a827]/15 font-mono tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">OPTIC CHAMBER</p>
    </div>

    <div className="absolute right-6 top-1/2 -translate-y-1/2">
      <p className="text-[8px] text-[#c9a827]/15 font-mono tracking-widest [writing-mode:vertical-rl] whitespace-nowrap">GAZE · OBSERVED</p>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border border-[#c9a827]/10" />
        <div className="absolute inset-6 rounded-full border border-[#c9a827]/7" />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-transparent to-[#c9a827]/20" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-t from-transparent to-[#c9a827]/20" />
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-px w-4 bg-gradient-to-r from-transparent to-[#c9a827]/20" />
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-px w-4 bg-gradient-to-l from-transparent to-[#c9a827]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#c9a827]/25" />
      </div>
    </div>

    <div
      className="absolute left-0 right-0 h-px"
      style={{
        background: "linear-gradient(to right, transparent, rgba(180,148,60,0.06) 20%, rgba(180,148,60,0.06) 80%, transparent)",
        top: "55%",
      }}
    />
  </div>

  <div className="absolute inset-0 pointer-events-none z-10">
    <CornerBoxes
      hovered={hovered}
      setHovered={setHovered}
      active={active}
      setActive={setActive}
    />
  </div>

</div>
)
}
