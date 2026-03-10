"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const FloatingShapeBackground = dynamic(
  () => import("@/app/components/ui/FloatingShape").then(m => ({ default: m.FloatingShapeBackground })),
  { ssr: false }
)


function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.5rem", height: "1.5rem" }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.5rem", height: "1.5rem" }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

const EMAIL_USER = "userc5630"
const EMAIL_DOMAIN = "gmail.com"

const CHANNELS = [
  {
    serial: "I",
    label: "GitHub",
    sub: "@Fayaz-DS",
    href: "https://github.com/Fayaz-DS",
    Icon: GitHubIcon,
  },
  {
    serial: "II",
    label: "LinkedIn",
    sub: "Syed Fayaz Mehdi",
    href: "https://www.linkedin.com/in/fayazmehdi1916",
    Icon: LinkedInIcon,
  },
  {
    serial: "III",
    label: "Email",
    sub: `${EMAIL_USER} [at] ${EMAIL_DOMAIN}`,
    href: `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`,
    Icon: MailIcon,
  },
]


export default function ConnectPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    const prev = document.body.style.minHeight
    document.body.style.minHeight = "fit-content"
    return () => { document.body.style.minHeight = prev }
  }, [])

  return (
    <div
      className="relative w-screen min-h-screen"
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

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 flex flex-col items-center">

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
            CONNECT
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
            &ldquo;Open to collaboration, conversation, and opportunity.&rdquo;
          </motion.p>
        </motion.div>

                <div className="mb-10 sm:mb-16 w-full">
          {CHANNELS.map(({ serial, label, sub, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex items-center justify-between py-6 border-b"
              style={{
                borderColor:
                  hoveredIdx === i
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.07)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <div className="flex items-center gap-5">
                                <span
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.22)",
                    minWidth: "1.5rem",
                  }}
                >
                  {serial}
                </span>

                                <motion.div
                  animate={{
                    color:
                      hoveredIdx === i ? "#f8fafc" : "rgba(255,255,255,0.28)",
                    scale: hoveredIdx === i ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.div>

                                <div>
                  <div
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                      fontWeight: 600,
                      color:
                        hoveredIdx === i ? "#f8fafc" : "rgba(255,255,255,0.55)",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.22)",
                      letterSpacing: "0.1em",
                      marginTop: "3px",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </div>

                            <motion.span
                animate={{
                  x: hoveredIdx === i ? 0 : -12,
                  opacity: hoveredIdx === i ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#f8fafc",
                }}
              >
                →
              </motion.span>
            </motion.a>
          ))}
        </div>

                <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 w-full"
          style={{
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, rgba(245,246,247,0.18) 0%, rgba(248,250,252,0.13) 50%, rgba(241,245,249,0.18) 100%)",
            border: "1px solid rgba(148,163,184,0.2)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 0 18px rgba(148,163,184,0.1)",
          }}
        >
                    <div style={{
            position: "absolute", inset: 0, borderRadius: "14px",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "20px 20px", pointerEvents: "none",
          }} />

                    <div style={{ position:"absolute", top:8, left:8, width:10, height:10,
            borderTop:"1px solid rgba(255,255,255,0.18)", borderLeft:"1px solid rgba(255,255,255,0.18)" }} />
          <div style={{ position:"absolute", top:8, right:8, width:10, height:10,
            borderTop:"1px solid rgba(255,255,255,0.18)", borderRight:"1px solid rgba(255,255,255,0.18)" }} />
          <div style={{ position:"absolute", bottom:8, left:8, width:10, height:10,
            borderBottom:"1px solid rgba(255,255,255,0.18)", borderLeft:"1px solid rgba(255,255,255,0.18)" }} />
          <div style={{ position:"absolute", bottom:8, right:8, width:10, height:10,
            borderBottom:"1px solid rgba(255,255,255,0.18)", borderRight:"1px solid rgba(255,255,255,0.18)" }} />

                    <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            AVAILABILITY STATUS
          </div>

                    <div className="flex items-center gap-3 mb-4" style={{ position:"relative", zIndex:1 }}>
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgb(34,197,94)",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "0.72rem",
                color: "rgba(34,197,94,0.9)",
                letterSpacing: "0.12em",
              }}
            >
              WELCOMING OPPORTUNITIES
            </span>
          </div>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.75,
              position: "relative",
              zIndex: 1,
            }}
          >
            Currently open to freelance work, collaborations, and full-time
            opportunities. Whether you have a project in mind or just want to
            talk shop — reach out through any channel above.
          </p>
        </motion.div>

                <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex items-center justify-between w-full"
        >
          <NavLink href="/services" label="← SERVICES" />
          <NavLink href="/" label="HOME →" />
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
