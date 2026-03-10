"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const FloatingShapeBackground = dynamic(
  () => import("@/app/components/ui/FloatingShape").then(m => ({ default: m.FloatingShapeBackground })),
  { ssr: false }
)

const SERVICES = [
  {
    serial: "I",
    symbol: "◆",
    title: "Interactive Web Development",
    description:
      "Building responsive, high-performance web applications with modern frameworks. From landing pages to full-stack systems — clean architecture, smooth interactions, and pixel-precise UI.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    serial: "II",
    symbol: "✦",
    title: "3D Web Experiences",
    description:
      "Crafting immersive browser-native 3D environments. Custom WebGL scenes, interactive models, physics-driven interfaces and post-processing pipelines that push what the web can feel like.",
    stack: ["Three.js", "React Three Fiber", "WebGL", "Blender", "@react-three/postprocessing"],
  },
  {
    serial: "III",
    symbol: "✉",
    title: "Python & ML Development",
    description:
      "Developing Python systems for data processing, ML model pipelines, and intelligent automation. Bridging the gap between data science and production-ready implementation.",
    stack: ["Python", "Machine Learning", "Data Processing", "Model Development"],
  },
  {
    serial: "IV",
    symbol: "⚜",
    title: "UI/UX Design & Prototyping",
    description:
      "Designing clean, purposeful interfaces grounded in usability. From wireframes to high-fidelity prototypes — translating ideas into tangible, tested experiences with intentional motion.",
    stack: ["Figma", "Design Systems", "Prototyping", "Motion Design"],
  },
  {
    serial: "V",
    symbol: "▲",
    title: "Backend & API Development",
    description:
      "Building RESTful APIs and database-integrated server systems. Scalable, well-structured backends that power complex frontend applications with reliability.",
    stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
]

export default function ServicesPage() {
  useEffect(() => {
    const prev = document.body.style.minHeight
    document.body.style.minHeight = "fit-content"
    return () => { document.body.style.minHeight = prev }
  }, [])

  return (
    <div
      className="relative w-screen min-h-screen overflow-x-hidden"
      style={{ background: "#000000" }}
    >
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <FloatingShapeBackground />
      </div>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 100%)",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.09) 20%, rgba(255,255,255,0.09) 80%, transparent)",
            top: "55%",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-20 w-full text-center"
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "clamp(4rem, 12vw, 11rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8fafc",
            }}
          >
            SERVICES
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
              color: "#565656",
              marginTop: "1rem",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            &ldquo;What I bring to the table.&rdquo;
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full">
          {SERVICES.map((svc, i) => {
            const isLastOdd =
              SERVICES.length % 2 !== 0 && i === SERVICES.length - 1
            return (
              <div key={svc.serial} className={isLastOdd ? "lg:col-span-2" : ""}>
                <ServiceCard svc={svc} delay={0.15 * (i + 1)} />
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 sm:mt-20 flex items-center justify-between w-full"
        >
          <NavLink href="/" label="← BACK TO HOME" />
          <NavLink href="/connect" label="LET'S CONNECT →" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "0.75rem",
            color: "#7C837E",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          © 2026 fayaz.engineering
        </motion.p>
      </div>
    </div>
  )
}

function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof SERVICES)[number]
  delay: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const bc = isHovered ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.15)"

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-7 cursor-default"
      style={{
        borderRadius: "14px",
        border: isHovered
          ? "1px solid rgba(255,255,255,0.85)"
          : "1px solid rgba(148,163,184,0.2)",
        background: isHovered
          ? "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(248,250,252,0.52) 50%, rgba(255,255,255,0.62) 100%)"
          : "linear-gradient(135deg, rgba(245,246,247,0.18) 0%, rgba(248,250,252,0.13) 50%, rgba(241,245,249,0.18) 100%)",
        boxShadow: isHovered
          ? "0 0 70px rgba(255,255,255,0.72), 0 0 120px rgba(255,255,255,0.45), inset 0 0 52px rgba(255,255,255,0.28)"
          : "0 0 18px rgba(148,163,184,0.1)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, borderRadius: "14px",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px", pointerEvents: "none",
      }} />

      {isHovered && (
        <motion.div
          initial={{ top: "-3px" }}
          animate={{ top: "105%" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", left: 0, right: 0, height: "2px",
            background: "linear-gradient(to right, transparent, rgba(0,0,0,0.12), transparent)",
            pointerEvents: "none", zIndex: 2,
          }}
        />
      )}

      <div style={{ position:"absolute", top:8, left:8, width:10, height:10,
        borderTop:`1px solid ${bc}`, borderLeft:`1px solid ${bc}`, transition:"border-color 0.4s" }} />
      <div style={{ position:"absolute", top:8, right:8, width:10, height:10,
        borderTop:`1px solid ${bc}`, borderRight:`1px solid ${bc}`, transition:"border-color 0.4s" }} />
      <div style={{ position:"absolute", bottom:8, left:8, width:10, height:10,
        borderBottom:`1px solid ${bc}`, borderLeft:`1px solid ${bc}`, transition:"border-color 0.4s" }} />
      <div style={{ position:"absolute", bottom:8, right:8, width:10, height:10,
        borderBottom:`1px solid ${bc}`, borderRight:`1px solid ${bc}`, transition:"border-color 0.4s" }} />

      <div className="flex items-start justify-between mb-4" style={{ position:"relative", zIndex:1 }}>
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily:"Cinzel, serif", fontSize:"0.55rem", letterSpacing:"0.25em",
            color: isHovered ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.22)", transition:"color 0.4s" }}>
            [{svc.serial}]
          </span>
          <div className="flex items-center gap-1.5">
            <div style={{ width:5, height:5, borderRadius:"50%",
              background: isHovered ? "#22c55e" : "rgba(255,255,255,0.18)",
              boxShadow: isHovered ? "0 0 5px #22c55e" : "none", transition:"all 0.4s" }} />
            <span style={{ fontFamily:"Cinzel, serif", fontSize:"0.48rem", letterSpacing:"0.18em",
              color: isHovered ? "rgba(0,0,0,0.38)" : "rgba(255,255,255,0.18)", transition:"color 0.4s" }}>
              {isHovered ? "ACTIVE" : "AVAILABLE"}
            </span>
          </div>
        </div>
        <span style={{ fontSize:"1.2rem",
          color: isHovered ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)", transition:"color 0.4s" }}>
          {svc.symbol}
        </span>
      </div>

      <h3 style={{
        fontFamily:"Cinzel, serif", fontSize:"clamp(0.95rem, 1.8vw, 1.28rem)", fontWeight:600,
        color: isHovered ? "#000000" : "#f8fafc", letterSpacing:"0.06em",
        marginBottom:"0.28rem", lineHeight:1.25, transition:"color 0.4s",
        position:"relative", zIndex:1,
      }}>
        {svc.title}
      </h3>

      <div style={{
        height:"1px",
        background: isHovered
          ? "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.05), rgba(0,0,0,0.1))"
          : "linear-gradient(to right, rgba(255,255,255,0.07), rgba(255,255,255,0.03), rgba(255,255,255,0.07))",
        marginBottom:"0.82rem", transition:"background 0.4s", position:"relative", zIndex:1,
      }} />

      <p style={{
        fontFamily:"var(--font-geist-sans), sans-serif", fontSize:"0.82rem",
        color: isHovered ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.42)",
        lineHeight:1.75, marginBottom:"1.1rem", transition:"color 0.4s",
        position:"relative", zIndex:1,
      }}>
        {svc.description}
      </p>

      <div className="flex flex-wrap gap-1.5" style={{ position:"relative", zIndex:1 }}>
        {svc.stack.map((tag) => (
          <span key={tag} style={{
            fontFamily:"Cinzel, serif", fontSize:"0.5rem", letterSpacing:"0.1em",
            color: isHovered ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.28)",
            background: isHovered ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.03)",
            border: isHovered ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.08)",
            padding:"3px 7px", borderRadius:"3px", transition:"all 0.4s",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "Cinzel, serif",
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.32)",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "rgba(255,255,255,0.32)")
      }
    >
      {label}
    </Link>
  )
}
