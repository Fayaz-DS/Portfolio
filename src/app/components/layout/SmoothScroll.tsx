"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/model") return

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      infinite: false,
    })

    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [pathname])

  return null
}
