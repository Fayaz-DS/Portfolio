"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
      style={{ transform: "translate(-999px, -999px)" }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/85 shadow-[0_0_8px_rgba(203,213,225,0.3)]" />

      </div>
    </div>
  )
}
