"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { BackgroundRippleEffect } from "@/app/projects/ui/background-ripple-effect"
import { EncryptedText } from "@/app/projects/ui/encrypted-text"

const FloatingShapeBackground = dynamic(
  () => import("@/app/components/ui/FloatingShape").then(m => ({ default: m.FloatingShapeBackground })),
  { ssr: false }
)

export default function ProjectsClient() {

  useEffect(() => {
    const html = document.documentElement
    const prevHtml = html.style.overflow
    const prevBody = document.body.style.overflow
    html.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    return () => {
      html.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [])

  return (
    <div className="dark fixed inset-0 overflow-hidden bg-neutral-950">

      <BackgroundRippleEffect />

      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <FloatingShapeBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center">

        <p className="text-[11px] tracking-[0.5em] uppercase">
          <EncryptedText
            text="PORTFOLIO EXHIBIT"
            encryptedClassName="text-neutral-700"
            revealedClassName="text-neutral-500"
            revealDelayMs={40}
          />
        </p>

        <h1 className="text-7xl font-bold leading-none tracking-tight md:text-9xl">
          <EncryptedText
            text="Projects"
            encryptedClassName="text-neutral-600"
            revealedClassName="text-white"
            revealDelayMs={110}
          />
        </h1>

        <p className="max-w-sm text-sm md:text-base">
          <EncryptedText
            text="Work in progress. Coming soon."
            encryptedClassName="text-neutral-700"
            revealedClassName="text-neutral-500"
            revealDelayMs={28}
          />
        </p>

        <p className="mt-4 text-[10px] tracking-widest uppercase">
          <EncryptedText
            text="Click the grid to ripple"
            encryptedClassName="text-neutral-800"
            revealedClassName="text-neutral-600"
            revealDelayMs={22}
          />
        </p>

      </div>
    </div>
  )
}

