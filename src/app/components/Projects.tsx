"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, PointerLockControls } from "@react-three/drei"
import Character from "../projects/Character"

export default function Projects() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 50 }}>
        <color attach="background" args={["#0b0b0f"]} />
        <fog attach="fog" args={["#0b0b0f", 5, 30]} />

        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#111118" />
        </mesh>

        <Suspense fallback={null}>
          <Character />
        </Suspense>

        <PointerLockControls />
      </Canvas>
    </div>
  )
}
