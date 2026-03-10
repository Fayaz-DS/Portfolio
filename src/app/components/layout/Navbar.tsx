"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  { href: "/",         label: "HOME",     num: "00" },
  { href: "/about",    label: "ABOUT",    num: "01" },
  { href: "/projects", label: "EXHIBIT",  num: "02" },
  { href: "/services", label: "SERVICES", num: "03" },
  { href: "/connect",  label: "CONNECT",  num: "04" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  if (pathname === "/" || pathname === "/about") return null

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="fixed top-6 right-6 z-[1000002] flex flex-col items-center justify-center gap-[6px] w-11 h-11 rounded-full bg-black/55 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors duration-300"
      >
        <span
          className="block h-px w-5 bg-white transition-all duration-400 origin-center"
          style={{
            transform: open ? "translateY(7px) rotate(45deg)" : "none",
            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
          }}
        />
        <span
          className="block h-px w-5 bg-white transition-all duration-300"
          style={{
            opacity: open ? 0 : 1,
            transform: open ? "scaleX(0)" : "scaleX(1)",
            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
          }}
        />
        <span
          className="block h-px w-5 bg-white transition-all duration-400 origin-center"
          style={{
            transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </button>

      <div
        className="fixed inset-0 z-[1000001] bg-neutral-950 flex flex-col overflow-hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="w-full h-px bg-white/8" />

        <nav className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 py-4 border-b border-white/8 hover:border-white/25 transition-colors duration-200"
              style={{
                opacity:    open ? 1 : 0,
                transform:  open ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${open ? 120 + i * 65 : 0}ms,
                             transform 0.5s cubic-bezier(0.4,0,0.2,1) ${open ? 120 + i * 65 : 0}ms,
                             border-color 0.2s`,
              }}
            >
              <span className="text-[10px] font-mono text-neutral-600 tracking-[0.3em] select-none w-7 shrink-0">
                {item.num}
              </span>

              <span
                className="font-['Cinzel',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight transition-colors duration-250"
                style={{
                  color: pathname === item.href ? "#ffffff" : "rgb(64,64,64)",
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = pathname === item.href ? "#ffffff" : "rgb(64,64,64)")}
              >
                {item.label}
              </span>

              <span className="ml-auto text-neutral-700 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
                ↗
              </span>
            </Link>
          ))}
        </nav>

        <div className="px-8 md:px-20 lg:px-32 pb-8 pt-4 flex items-center justify-between">
          <span className="text-[10px] text-neutral-700 tracking-[0.45em] uppercase font-mono">
            Syed Fayaz Mehdi
          </span>
          <span className="text-[10px] text-neutral-700 tracking-[0.35em] uppercase font-mono">
            Portfolio &copy; 2026
          </span>
        </div>
      </div>
    </>
  )
}
