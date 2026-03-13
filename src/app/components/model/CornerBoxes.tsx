"use client"

import { motion, AnimatePresence } from "motion/react"
import Lenis from "lenis"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

const EMAIL_USER   = "userc5630"
const EMAIL_DOMAIN = "gmail.com"

const INFO = {
  name:      "Syed Fayaz Mehdi",
  role:      "Computer Science Undergraduate | AI-ML & Interactive Web Systems",
  location:  "Hyderabad, India",
  github:    "https://github.com/Fayaz-DS",
  linkedin:  "https://www.linkedin.com/in/fayazmehdi1916",
  bio:       "Computer science undergraduate focused on AI, ML, and software development. I build interactive web applications, 3D web interfaces, and Python-based systems with project-first engineering discipline.",
  available: true,
}

const CURRENT_LEARNING_FOCUS = [
  "Python for Machine Learning",
  "Data processing workflows",
  "Model development fundamentals",
  "Building AI project portfolios",
]

const CORE_STRENGTHS = [
  "Interactive web applications with React + TypeScript",
  "3D web interfaces and cursor-driven interactions",
  "Python project development and ML workflow foundations",
  "Linux-first tooling with practical deployment mindset",
]

const AREAS_OF_INTEREST = [
  "Artificial Intelligence",
  "Machine Learning Engineering",
  "Interactive Web Applications",
  "3D Web Experiences",
  "Software Engineering Systems",
]

const DEVELOPMENT_ENVIRONMENTS = [
  "Windows Development Environment",
  "Ubuntu Linux (Dual Boot Setup)",
]

const PROGRAMMING_LANGUAGES = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/docs/Web/HTML" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/docs/Web/CSS" },
  { name: "TSX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/learn/writing-markup-with-jsx" },
]

const SKILLS: Record<string, Array<{ name: string; icon: string; url: string }>> = {
  "Craft & Design": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org/" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", url: "https://threejs.org/" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
    { name: "GSAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg", url: "https://gsap.com/" },
  ],
  "Foundation": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com/" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org/" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com/" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://restfulapi.net/" },
  ],
  "Instruments": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com/" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://www.figma.com/" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com/" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
  ],
}

const SOCIALS = [
  { label: "GitHub",    sub: "@Fayaz-DS",        href: INFO.github,                    Icon: GitHubIcon   },
  { label: "LinkedIn",  sub: "Syed Fayaz Mehdi", href: INFO.linkedin,                  Icon: LinkedInIcon },
  { label: "Twitter/X", sub: "@FayazMehdi05",        href: "https://twitter.com/",         Icon: XIcon        },
  { label: "Email",     sub: `${EMAIL_USER} [at] ${EMAIL_DOMAIN}`,  href: `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`,  Icon: MailIcon     },
]

const RESUME = {
  education: [
    { year: "2023-2027", degree: "Bachelor of Technology – Computer Science Engineering", institution: "Osmania University" },
    { year: "Current", degree: "3rd Year, 5th Semester", institution: "Expected Graduation: 2027" },
  ],
  experience: [
    { year: "2024-Present", role: "Interactive 3D Portfolio Development", company: "Personal Project" },
    { year: "2024", role: "Cursor Tracking 3D Character System", company: "Blender & Web Integration" },
    { year: "2023", role: "Recipe Recommendation Application", company: "Python Development" },
    { year: "In Dev", role: "Interactive 3D Museum Portfolio", company: "Immersive Web Experience" },
  ],
  downloadUrl: "/FAYAZ.docx",
  lastUpdated: "March 2026",
}

const BOX_CONFIGS = [
  { id: 1, serial: "I",   label: "ABOUT",    symbol: "◆",   pos: "top-10 left-10",     origin: "top left"     },
  { id: 2, serial: "II",  label: "MASTERY",  symbol: "✦",   pos: "top--245 right--1870",    origin: "top right"    },
  { id: 3, serial: "III", label: "SOCIAL'S",  symbol: "✉",   pos: "bottom--290 left-10",  origin: "bottom left"  },
  { id: 4, serial: "IV",  label: "TESTAMENT", symbol: "⚜",   pos: "bottom--30 right--1868", origin: "bottom right" },
]

function Brackets({ animated = false }: { animated?: boolean }) {
  const base = "absolute w-5 h-5 transition-all duration-500"
  const col  = animated ? "border-[#c9a827]" : "border-[#c9a827]/40"
  return (
    <>
      <span className={`${base} top-2.5 left-2.5  border-t border-l ${col}`} />
      <span className={`${base} top-2.5 right-2.5 border-t border-r ${col}`} />
      <span className={`${base} bottom-2.5 left-2.5  border-b border-l ${col}`} />
      <span className={`${base} bottom-2.5 right-2.5 border-b border-r ${col}`} />
    </>
  )
}

function AboutContent() {
  const [hoveredRole, setHoveredRole] = useState(false)

  return (
    <div className="w-full min-w-0 flex flex-col gap-6 md:gap-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] text-slate-800/40 uppercase mb-4 md:mb-5 font-light" style={{fontFamily: 'Cinzel, serif'}}>Personal Profile</p>
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-none text-slate-950/90 break-words" style={{fontFamily: 'Cinzel, serif'}}>{INFO.name}</h2>
        
        <motion.div
          onMouseEnter={() => setHoveredRole(true)}
          onMouseLeave={() => setHoveredRole(false)}
          animate={hoveredRole ? { x: 8 } : { x: 0 }}
          className={`text-lg md:text-2xl font-light mt-3 md:mt-4 transition-all duration-400 break-words ${hoveredRole ? 'text-slate-700' : 'text-slate-900/70'}`}
          style={{fontFamily: 'Cinzel, serif'}}
        >
          {INFO.role}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 md:gap-4"
      >
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-slate-100/30 to-slate-50/20 border border-slate-800/30 shadow-[0_0_15px_rgba(180,130,70,0.12)]"
        >
          <span className="text-slate-800/60">📍</span>
          <span className="text-sm text-slate-950/80 font-light">{INFO.location}</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-sm border shadow-[0_0_15px_rgba(180,130,70,0.12)]
            ${INFO.available 
              ? 'bg-gradient-to-br from-emerald-50/40 to-green-50/30 border-emerald-700/40' 
              : 'bg-gradient-to-br from-stone-50/20 to-stone-100/10 border-stone-600/20'
            }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${INFO.available ? 'bg-emerald-600 shadow-[0_0_8px_rgba(22,101,52,0.35)]' : 'bg-stone-400/50'}`}
          />
          <span className={`text-sm font-light ${INFO.available ? 'text-emerald-800/90' : 'text-stone-600/50'}`}>
            {INFO.available ? "Welcoming opportunities" : "Currently engaged"}
          </span>
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          href={INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-slate-100/30 to-slate-50/20 border border-slate-800/30 shadow-[0_0_15px_rgba(180,130,70,0.12)]"
        >
          <span className="text-slate-800/60">⌘</span>
          <span className="text-sm text-slate-950/80 font-light">GitHub / Fayaz-DS</span>
        </motion.a>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
        whileHover={{ y: -2, scale: 1.005 }}
        whileTap={{ scale: 0.99 }}
        href="/projects"
        className="w-full rounded-xl border-2 border-slate-800/35 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 px-4 md:px-5 py-3.5 md:py-4 shadow-[0_0_30px_rgba(30,41,59,0.35)] hover:shadow-[0_0_46px_rgba(30,41,59,0.5)] transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-3 md:gap-4 min-w-0">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-slate-200/70">Portfolio Action</p>
            <p className="text-sm md:text-lg font-light mt-1 break-words">View Work and Project Breakdowns</p>
          </div>
          <span className="text-xl md:text-2xl">→</span>
        </div>
      </motion.a>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="h-px bg-gradient-to-r from-transparent via-slate-800/25 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-slate-950/65 leading-relaxed text-base font-light hover:text-slate-950/85 transition-colors duration-300"
      >
        {INFO.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        <div className="rounded-lg border border-slate-800/20 bg-slate-50/30 px-3 py-2.5">
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-800/45">Academic Stage</p>
          <p className="text-sm text-slate-900/80 font-light mt-1">3rd Year (5th Semester)</p>
        </div>
        <div className="rounded-lg border border-slate-800/20 bg-slate-50/30 px-3 py-2.5">
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-800/45">Graduation Goal</p>
          <p className="text-sm text-slate-900/80 font-light mt-1">Expected 2027</p>
        </div>
        <div className="rounded-lg border border-emerald-700/35 bg-emerald-50/35 px-3 py-2.5">
          <p className="text-[10px] tracking-[0.25em] uppercase text-emerald-900/55">Opportunity</p>
          <p className="text-sm text-emerald-900/85 font-light mt-1">Open to AI/ML internships</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="p-4 rounded-xl border border-slate-800/20 bg-gradient-to-br from-slate-100/20 to-slate-50/10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-slate-800/50 mb-3">Current Learning Focus</p>
          <div className="space-y-1.5">
            {CURRENT_LEARNING_FOCUS.map((item) => (
              <p key={item} className="text-xs text-slate-900/65 font-light">- {item}</p>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800/20 bg-gradient-to-br from-slate-100/20 to-slate-50/10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-slate-800/50 mb-3">Core Engineering Strengths</p>
          <div className="space-y-1.5">
            {CORE_STRENGTHS.map((item) => (
              <p key={item} className="text-xs text-slate-900/65 font-light">- {item}</p>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.43 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="p-4 rounded-xl border border-slate-800/20 bg-gradient-to-br from-slate-100/20 to-slate-50/10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-slate-800/50 mb-3">Areas of Interest</p>
          <div className="flex flex-wrap gap-2">
            {AREAS_OF_INTEREST.map((item) => (
              <span key={item} className="text-[11px] px-2.5 py-1 rounded-full border border-slate-800/20 bg-slate-50/40 text-slate-900/70 font-light">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800/20 bg-gradient-to-br from-slate-100/20 to-slate-50/10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-slate-800/50 mb-3">Development Environments</p>
          <div className="space-y-1.5">
            {DEVELOPMENT_ENVIRONMENTS.map((item) => (
              <p key={item} className="text-xs text-slate-900/65 font-light">- {item}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function SkillsContent() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full min-w-0 flex flex-col gap-8 md:gap-12">
      <div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] tracking-[0.5em] text-slate-800/40 uppercase mb-5 font-light"
          style={{fontFamily: 'Cinzel, serif'}}
        >
          Mastery & Craft
        </motion.p>
        <motion.h2 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extralight text-slate-950/90 tracking-tight"
          style={{fontFamily: 'Cinzel, serif'}}
        >
          Expertise
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="grid gap-5"
      >
        <div className="p-5 rounded-xl border-2 border-slate-800/20 bg-gradient-to-br from-slate-100/20 via-slate-50/12 to-slate-100/20 shadow-[0_0_20px_rgba(120,80,40,0.12)]">
          <p className="text-[10px] tracking-[0.35em] uppercase text-slate-800/50 mb-4">Programming Languages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PROGRAMMING_LANGUAGES.map((lang) => (
              <a key={lang.name} href={lang.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-2 rounded-lg bg-stone-50/20 border border-slate-800/15 hover:border-slate-700/35 transition-colors">
                <Image src={lang.icon} alt={lang.name} width={28} height={28} className="object-contain" />
                <span className="text-[11px] text-slate-900/75 font-light">{lang.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="space-y-6">
        {Object.entries(SKILLS).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => { setHoveredCategory(null); setHoveredSkill(null) }}
            className={`
              relative overflow-hidden rounded-xl p-4 md:p-6 backdrop-blur-xl transition-all duration-700 group cursor-pointer
              border-2 border-transparent
              ${hoveredCategory === category
                ? 'bg-gradient-to-br from-slate-100/25 via-slate-50/15 to-slate-100/20 border-slate-800/40 shadow-[0_0_30px_rgba(120,80,40,0.15),inset_0_0_25px_rgba(180,130,70,0.06)]'
                : 'bg-gradient-to-br from-stone-50/8 via-slate-100/5 to-stone-50/5 border-slate-900/15 shadow-[0_0_15px_rgba(0,0,0,0.2)]'
              }
            `}
          >
            {hoveredCategory === category && (
              <motion.div
                layoutId={`skill-glow-${category}`}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-400/8 to-slate-600/10 blur-2xl"
              />
            )}

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={hoveredCategory === category ? { rotate: 90, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#c9a827] to-[#f5d060] shadow-[0_0_12px_rgba(201,168,39,0.65)]"
                />
                <h4 className={`text-lg font-light transition-all duration-400 ${hoveredCategory === category ? 'text-slate-950/90' : 'text-slate-950/60'}`}>
                  {category}
                </h4>
              </div>

              <motion.span
                animate={hoveredCategory === category ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-400 font-light ${
                  hoveredCategory === category
                    ? 'bg-slate-700/25 text-slate-900/90 border border-slate-800/50 shadow-[0_0_12px_rgba(120,80,40,0.15)]'
                    : 'bg-stone-50/15 text-slate-950/45 border border-slate-900/12'
                }`}
              >
                {skills.length}
              </motion.span>
            </div>

            <motion.div
              animate={{ width: hoveredCategory === category ? '100%' : '0%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-[#c9a827] via-[#f5d060] to-[#c9a827] mb-6 shadow-[0_0_10px_rgba(201,168,39,0.45)]"
            />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 relative z-10">
              {skills.map((skill, skillIndex) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (0.3 + index * 0.1) + (skillIndex * 0.05) }}
                    onMouseEnter={() => { setHoveredCategory(category); setHoveredSkill(skill.name) }}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      flex flex-col items-center gap-3 px-4 py-5 rounded-lg transition-all duration-400 relative group/skill cursor-pointer
                      ${hoveredSkill === skill.name
                        ? 'bg-slate-700/30 border border-slate-800/60 shadow-[0_0_20px_rgba(120,80,40,0.2)]'
                        : hoveredCategory === category
                        ? 'bg-stone-50/10 border border-slate-800/25 hover:bg-stone-50/15'
                        : 'bg-transparent border border-transparent hover:border-slate-900/20 hover:bg-stone-50/8'
                      }
                    `}
                  >
                  <div className="[perspective:1400px]">
                    <motion.div
                      animate={hoveredSkill === skill.name
                        ? { rotateX: -24, rotateY: 18, scale: 1.2, y: -8 }
                        : { rotateX: 0, rotateY: 0, scale: 1, y: 0 }
                      }
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-14 h-14 [transform-style:preserve-3d]"
                    >
                      <motion.div
                        animate={hoveredSkill === skill.name ? { rotateY: 359 } : { rotateY: 0 }}
                        transition={
                          hoveredSkill === skill.name
                            ? { duration: 1.15, ease: "linear", repeat: Number.POSITIVE_INFINITY }
                            : { duration: 0.2, ease: "easeOut" }
                        }
                        className="absolute inset-0 [transform-style:preserve-3d]"
                      >
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} depth layer`}
                          width={52}
                          height={52}
                          className="absolute left-1.5 top-1.5 object-contain opacity-22 blur-[2px]"
                          style={{ transform: 'translateZ(-20px)' }}
                        />
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} mid layer`}
                          width={52}
                          height={52}
                          className="absolute left-1 top-1 object-contain opacity-45 saturate-75"
                          style={{ transform: 'translateZ(-10px)' }}
                        />
                        <motion.div
                          animate={hoveredSkill === skill.name
                            ? { filter: 'drop-shadow(0 12px 22px rgba(71,85,105,0.52)) drop-shadow(0 0 28px rgba(226,232,240,0.55))' }
                            : { filter: 'drop-shadow(0 3px 8px rgba(71,85,105,0.2))' }
                          }
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0"
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={52}
                            height={52}
                            className="object-contain"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        animate={hoveredSkill === skill.name
                          ? { opacity: 0.7, scale: 1.06 }
                          : { opacity: 0.25, scale: 1 }
                        }
                        transition={{ duration: 0.25 }}
                        className="absolute -inset-2 rounded-full bg-slate-200/40 blur-xl"
                      />
                    </motion.div>
                  </div>

                  <span className={`text-xs text-center transition-all duration-400 ${hoveredSkill === skill.name ? 'text-slate-950/90 font-medium' : 'text-slate-950/65 font-light'}`}>
                    {skill.name}
                  </span>

                    {hoveredSkill === skill.name && (
                      <motion.div
                        layoutId={`skill-item-${skill.name}`}
                        className="absolute inset-0 bg-gradient-to-r from-slate-700/8 to-slate-800/8 rounded-lg -z-10"
                      />
                    )}
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-6 rounded-xl backdrop-blur-xl border-2 border-slate-800/20 bg-gradient-to-br from-slate-100/20 via-slate-50/12 to-slate-100/20 shadow-[0_0_35px_rgba(120,80,40,0.15),inset_0_0_30px_rgba(180,130,70,0.06)]"
      >
        <motion.div 
          whileHover={{ y: -5, scale: 1.05 }}
          className="text-center"
        >
          <p className="text-xs text-slate-800/50 mb-2 tracking-wider font-light uppercase" style={{fontFamily: 'Cinzel, serif'}}>Proficiencies</p>
          <p className="text-3xl font-light text-slate-950/85 tracking-tight" style={{fontFamily: 'Cinzel, serif'}}>{Object.values(SKILLS).flat().length}+</p>
        </motion.div>

        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-slate-800/25 to-transparent" />

        <motion.div 
          whileHover={{ y: -5, scale: 1.05 }}
          className="text-center"
        >
          <p className="text-xs text-slate-800/50 mb-2 tracking-wider font-light uppercase" style={{fontFamily: 'Cinzel, serif'}}>Disciplines</p>
          <p className="text-3xl font-light text-slate-950/85 tracking-tight" style={{fontFamily: 'Cinzel, serif'}}>{Object.keys(SKILLS).length}</p>
        </motion.div>

        <div className="col-span-3 h-px bg-gradient-to-r from-transparent via-slate-800/20 to-transparent" />

        <div className="col-span-3 text-center">
          <p className="text-xs text-slate-800/50 mb-2 tracking-wider font-light uppercase" style={{fontFamily: 'Cinzel, serif'}}>Development</p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c9a827] to-[#f5d060] shadow-[0_0_8px_rgba(201,168,39,0.55)]" />
            <p className="text-lg font-light text-slate-900/85" style={{fontFamily: 'Cinzel, serif'}}>Ever Refining</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function SocialsContent() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="w-full min-w-0 flex flex-col gap-8 md:gap-10 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-[11px] tracking-[0.5em] text-slate-800/40 uppercase mb-5 font-light" style={{fontFamily: 'Cinzel, serif'}}>Correspondence</p>
        <h2 className="text-4xl md:text-5xl font-extralight text-slate-950/90 tracking-tight" style={{fontFamily: 'Cinzel, serif'}}>Let&apos;s Connect</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-3"
      >
        {SOCIALS.map(({ label, sub, href, Icon }, idx) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink(label)}
            onMouseLeave={() => setHoveredLink(null)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + idx * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{ x: 4 }}
            className={`group flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm transition-all duration-700 border-2
              ${hoveredLink === label 
                ? 'bg-gradient-to-br from-slate-100/30 via-slate-50/20 to-slate-100/30 border-slate-800/40 shadow-[0_0_25px_rgba(120,80,40,0.2)]' 
                : 'bg-gradient-to-br from-stone-50/8 to-slate-100/5 border-slate-900/15 shadow-[0_0_15px_rgba(0,0,0,0.2)]'
              }`}
          >
            <motion.div 
              animate={hoveredLink === label ? { scale: 1.05, rotate: 3 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-all duration-500
                ${hoveredLink === label
                  ? 'text-[#c9a827] border-[#c9a827]/55 bg-[#c9a827]/10 shadow-[0_0_20px_rgba(201,168,39,0.30)]'
                  : 'text-slate-800/50 border-slate-900/20 bg-stone-50/8'
                }
              `}
            >
              <Icon />
            </motion.div>

            <div className="flex-1 min-w-0">
              <p className={`text-sm transition-all duration-500 font-light ${hoveredLink === label ? 'text-slate-950/90' : 'text-slate-950/70'}`}>
                {label}
              </p>
              <p className="text-xs text-slate-950/35 mt-0.5 font-light break-all">{sub}</p>
            </div>

            <motion.span 
              animate={hoveredLink === label ? { x: 4, opacity: 1 } : { x: 0, opacity: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`text-xl transition-all duration-500 ${hoveredLink === label ? 'text-slate-800' : 'text-slate-950/40'}`}
            >
              →
            </motion.span>

            {hoveredLink === label && (
              <motion.div
                layoutId={`social-glow-${label}`}
                className="absolute inset-0 bg-gradient-to-r from-slate-700/5 to-slate-800/5 rounded-xl -z-10"
              />
            )}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-5 rounded-xl backdrop-blur-xl border-2 border-[#c9a827]/18 bg-gradient-to-br from-[#c9a827]/6 to-slate-50/12 shadow-[0_0_25px_rgba(201,168,39,0.10)]"
      >
        <p className="text-xs text-slate-800/50 mb-4 tracking-wider font-light uppercase" style={{fontFamily: 'Cinzel, serif'}}>Present On</p>
        <div className="flex flex-wrap gap-2">
          {SOCIALS.slice(0, 3).map(({ label }) => (
            <motion.span
              key={label}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-[#c9a827]/12 to-[#f5d060]/10 border border-[#c9a827]/30 rounded-full text-slate-900/80 font-light shadow-[0_0_10px_rgba(201,168,39,0.12)]"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function ResumeContent() {
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null)
  const [hoveredExp, setHoveredExp] = useState<number | null>(null)

  return (
    <div className="w-full min-w-0 flex flex-col gap-8 md:gap-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-[11px] tracking-[0.5em] text-slate-800/40 uppercase mb-5 font-light" style={{fontFamily: 'Cinzel, serif'}}>Chronicle</p>
        <h2 className="text-4xl md:text-5xl font-extralight text-slate-950/90 tracking-tight" style={{fontFamily: 'Cinzel, serif'}}>Testament & Journey</h2>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c9a827] to-[#f5d060] shadow-[0_0_10px_rgba(201,168,39,0.60)]" />
            <p className="text-[11px] tracking-[0.35em] text-slate-800/50 uppercase font-light" style={{fontFamily: 'Cinzel, serif'}}>Education</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {RESUME.education.map((e, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredEdu(i)}
                onMouseLeave={() => setHoveredEdu(null)}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col gap-2 pl-4 pr-4 py-3 rounded-lg border-l-2 transition-all duration-600
                  ${hoveredEdu === i
                    ? 'bg-gradient-to-r from-[#c9a827]/8 to-slate-50/18 border-l-[#c9a827]/60 shadow-[0_0_15px_rgba(201,168,39,0.10)]'
                    : 'border-l-slate-900/20 hover:bg-stone-50/8'
                  }
                `}
              >
                <motion.span 
                  animate={hoveredEdu === i ? { color: 'rgb(120 80 40 / 0.8)' } : {}}
                  className="text-[10px] text-slate-800/40 font-light transition-colors duration-300"
                >
                  {e.year}
                </motion.span>
                <p className={`text-sm transition-all duration-300 font-light ${hoveredEdu === i ? 'text-slate-950/85' : 'text-slate-950/70'}`}>
                  {e.degree}
                </p>
                <p className="text-xs text-slate-950/35 font-light">{e.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c9a827] to-[#f5d060] shadow-[0_0_10px_rgba(201,168,39,0.60)]" />
            <p className="text-[11px] tracking-[0.35em] text-slate-800/50 uppercase font-light" style={{fontFamily: 'Cinzel, serif'}}>Experience</p>
          </div>

          <div className="flex flex-col gap-4">
            {RESUME.experience.map((e, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredExp(i)}
                onMouseLeave={() => setHoveredExp(null)}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col gap-2 pl-4 pr-4 py-3 rounded-lg border-l-2 transition-all duration-600
                  ${hoveredExp === i
                    ? 'bg-gradient-to-r from-[#c9a827]/8 to-slate-50/18 border-l-[#c9a827]/60 shadow-[0_0_15px_rgba(201,168,39,0.10)]'
                    : 'border-l-slate-900/20 hover:bg-stone-50/8'
                  }
                `}
              >
                <motion.span 
                  animate={hoveredExp === i ? { color: 'rgb(120 80 40 / 0.8)' } : {}}
                  className="text-[10px] text-slate-800/40 font-light transition-colors duration-300"
                >
                  {e.year}
                </motion.span>
                <p className={`text-sm transition-all duration-300 font-light ${hoveredExp === i ? 'text-slate-950/85' : 'text-slate-950/70'}`}>
                  {e.role}
                </p>
                <p className="text-xs text-slate-950/35 font-light">{e.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="h-px bg-gradient-to-r from-transparent via-slate-800/25 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-4"
      >
        <motion.a
          href={RESUME.downloadUrl}
          download
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a1408] to-[#221c0a] text-[#f0d890] rounded-lg text-sm font-light
            border border-[#c9a827]/45
            shadow-[0_0_18px_rgba(201,168,39,0.18)] hover:shadow-[0_0_32px_rgba(201,168,39,0.40),inset_0_0_20px_rgba(201,168,39,0.06)]
            transition-all duration-400 group"
        >
          <svg
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0-4-4m4 4 4-4M3 17v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" />
          </svg>
          Download CV
        </motion.a>

        <motion.a
          href={RESUME.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 px-6 py-3 border-2 border-slate-800/35 text-slate-900/80 rounded-lg text-sm font-light
            hover:border-slate-800/60 hover:text-slate-950/90 hover:bg-slate-700/10
            transition-all duration-300 shadow-[0_0_15px_rgba(120,80,40,0.12)]"
        >
          View Resume
          <span>
            →
          </span>
        </motion.a>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="ml-auto text-[10px] text-slate-950/30 font-light"
        >
          Updated {RESUME.lastUpdated}
        </motion.span>
      </motion.div>
    </div>
  )
}

const MOBILE_POSITIONS: Record<number, React.CSSProperties> = {
  1: { top: 20,    left:  0 },
  2: { top: -92,    right: -290 },
  3: { bottom: -340, left:  -0 },
  4: { bottom: -228, right: -290 },
}

export default function CornerBoxes({ hovered, setHovered, active, setActive }: any) {
  const activeCfg = BOX_CONFIGS.find(b => b.id === active)
  const panelScrollRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (active === null || !panelScrollRef.current) return

    const wrapper = panelScrollRef.current
    const content = (wrapper.firstElementChild as HTMLElement | null) ?? wrapper

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 0.82,
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
  }, [active])

  const close = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActive(null)
  }

  return (
    <>
      {BOX_CONFIGS.map(({ id, serial, label, symbol, pos }) => {
        if (active === id) return null
        const isHov = hovered === id

        const posStyle: any = {}
        pos.split(" ").forEach((token) => {
          if (token.startsWith("top-")) posStyle.top = Number(token.slice(4)) || 0
          else if (token.startsWith("right-")) posStyle.right = Number(token.slice(6)) || 0
          else if (token.startsWith("bottom-")) posStyle.bottom = Number(token.slice(7)) || 0
          else if (token.startsWith("left-")) posStyle.left = Number(token.slice(5)) || 0
        })

        const finalPosStyle = isMobile ? MOBILE_POSITIONS[id] : posStyle

        return (
          <motion.div
            key={id}
            onMouseEnter={() => !active && setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => { setActive(id); setHovered(null) }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={finalPosStyle}
            className={`
              pointer-events-auto fixed w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 m-0 cursor-pointer
              relative overflow-hidden group
              border transition-all duration-700 ease-out
              flex flex-col items-center justify-center gap-2
              ${isHov
                ? "bg-[rgba(16,12,4,0.92)] border-[#c9a827]/70 shadow-[0_0_55px_rgba(201,168,39,0.45),0_0_120px_rgba(201,168,39,0.18),inset_0_0_45px_rgba(201,168,39,0.08)]"
                : "bg-[rgba(10,8,3,0.80)] border-[#c9a827]/20 shadow-[0_0_22px_rgba(201,168,39,0.10),inset_0_0_16px_rgba(201,168,39,0.03)]"
              }
            `}
          >
            <motion.div
              animate={isHov ? { scale: 1.2, opacity: 0.55 } : { scale: 1, opacity: 0.15 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,39,0.22) 0%, rgba(201,168,39,0.05) 55%, transparent 100%)' }}
            />

            <motion.div
              animate={isHov ? { opacity: 0.5 } : { opacity: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#c9a827]/10 to-transparent pointer-events-none"
            />

            <Brackets animated={isHov} />

            {isHov && (
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a827]/80 to-transparent pointer-events-none shadow-[0_0_14px_rgba(201,168,39,0.65)]" />
            )}

            <div className={`absolute inset-0 transition-opacity duration-700 ${isHov ? 'opacity-[0.08]' : 'opacity-[0.06]'}`} style={{
              backgroundImage: 'linear-gradient(rgba(201,168,39,0.18) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(201,168,39,0.18) 0.5px, transparent 0.5px)',
              backgroundSize: '20px 20px'
            }} />

            <motion.div 
              animate={isHov ? { y: -4 } : { y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10"
            >
              <span className={`text-[10px] font-mono tracking-wider transition-all duration-500 ${isHov ? 'text-[#f5d060]/90' : 'text-[#c9a827]/45'}`} style={{fontFamily: 'Cinzel, serif'}}>
                [{serial}]
              </span>
            </motion.div>

            <motion.div 
              animate={isHov ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-1 sm:gap-2 z-10"
            >
              <span className={`block w-2 h-2 rounded-full transition-all duration-500 ${isHov ? 'bg-[#c9a827] shadow-[0_0_10px_rgba(201,168,39,0.9),0_0_20px_rgba(201,168,39,0.55)]' : 'bg-[#c9a827]/30 shadow-[0_0_6px_rgba(201,168,39,0.3)]'}`} />
              <span className={`hidden sm:block text-[9px] font-light transition-all duration-500 ${isHov ? 'text-[#f5d060]' : 'text-[#c9a827]/40'}`} style={{fontFamily: 'Cinzel, serif'}}>
                {isHov ? 'OPEN' : 'REST'}
              </span>
            </motion.div>

            <motion.div 
              animate={isHov ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative z-20"
            >
              <motion.span
                className={`block text-3xl sm:text-5xl md:text-6xl select-none transition-all duration-700 font-light ${isHov ? "text-[#f5d060] [text-shadow:0_0_25px_rgba(201,168,39,1),0_0_50px_rgba(201,168,39,0.5)]" : "text-[#c9a827]/55"}`}
                style={{fontFamily: 'Cinzel, serif'}}
              >
                {symbol}
              </motion.span>
              {isHov && (
                <motion.div
                  layoutId={`glow-${id}`}
                  className="absolute inset-0 blur-xl -z-10"
                  style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,39,0.28) 0%, transparent 70%)' }}
                />
              )}
            </motion.div>

            <span className={`w-8 h-px transition-all duration-700 ${isHov ? 'bg-[#c9a827]/70' : 'bg-[#c9a827]/20'}`} />
            <motion.span 
              animate={isHov ? { letterSpacing: "0.25em" } : { letterSpacing: "0.35em" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`text-[10px] select-none transition-all duration-700 font-semibold tracking-widest ${isHov ? "text-[#f5d060]" : "text-[#c9a827]/45"}`}
              style={{fontFamily: 'Cinzel, serif'}}
            >
              {label}
            </motion.span>

            {isHov && (
              <div className="absolute -inset-1.5 border border-[#c9a827]/40 rounded-lg pointer-events-none shadow-[0_0_20px_rgba(201,168,39,0.2)]" />
            )}

            <div className="absolute bottom-0 left-0 right-0 px-3 py-1 border-t border-[#c9a827]/15 bg-[rgba(201,168,39,0.04)]">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-[#c9a827]/45 font-mono tracking-widest">{isHov ? 'ENTER' : 'SEALED'}</span>
                <div className="flex gap-0.5 items-center">
                  <span className={`w-1 h-1 rounded-full transition-all duration-500 ${isHov ? 'bg-[#c9a827]' : 'bg-[#c9a827]/35'}`} />
                  <span className={`w-1 h-1 rounded-full transition-all duration-500 ${isHov ? 'bg-[#c9a827]/70' : 'bg-[#c9a827]/20'}`} />
                  <span className={`w-1 h-1 rounded-full transition-all duration-500 ${isHov ? 'bg-[#c9a827]/40' : 'bg-[#c9a827]/10'}`} />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#c9a827]/6 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        )
      })}

      <AnimatePresence>
        {active !== null && activeCfg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={close}
              className="pointer-events-auto fixed inset-0 z-40 bg-gradient-to-br from-stone-900/60 to-slate-950/50 backdrop-blur-xl cursor-pointer"
            />

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, transformOrigin: activeCfg.origin }}
              animate={{ opacity: 1, scale: 1, transformOrigin: activeCfg.origin }}
              exit={{ opacity: 0, scale: 0.95, transformOrigin: activeCfg.origin }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto fixed inset-0 z-50
                grid grid-rows-[auto_minmax(0,1fr)]
                backdrop-blur-3xl bg-gradient-to-br from-[#f5ede0]/97 via-[#f0e8d4]/95 to-[#f5ede0]/97
                border-2 border-[#c9a827]/35 shadow-[inset_0_0_150px_rgba(201,168,39,0.06),0_30px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(201,168,39,0.12)]
                rounded-2xl max-w-none max-h-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]"
              style={{ position: 'fixed' }}
            >
              <div className="absolute -inset-40 bg-gradient-to-r from-amber-300/6 via-yellow-200/4 to-amber-300/6 blur-3xl pointer-events-none" />

              <div className="absolute top-0 left-1/3 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-amber-400/5 via-transparent to-transparent blur-3xl pointer-events-none" />

              <Brackets animated={true} />

              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a827]/45 to-transparent pointer-events-none" />

              <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(160,130,60,0.12) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(160,130,60,0.12) 0.5px, transparent 0.5px)',
                  backgroundSize: '35px 35px'
                }}
              />

              <div className="absolute inset-3 rounded-[18px] border-2 border-[#c9a827]/20 pointer-events-none z-30 shadow-[inset_0_0_24px_rgba(201,168,39,0.06)]" />
              <div className="absolute inset-6 rounded-[14px] border border-[#c9a827]/12 pointer-events-none z-30" />

              <div className="relative z-10 px-5 md:px-10 lg:px-16 pt-10 md:pt-14 lg:pt-16 pb-6 md:pb-8 border-b border-slate-900/12">
                <div className="flex items-start justify-between gap-4 md:gap-8 min-w-0">
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="min-w-0"
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 min-w-0">
                      <span className="text-4xl md:text-5xl text-slate-900/70" style={{fontFamily: 'Cinzel, serif'}}>{activeCfg.symbol}</span>
                      <div className="w-px h-8 md:h-10 bg-gradient-to-b from-slate-800/50 via-slate-900/25 to-transparent" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-light text-slate-950/90 tracking-tight break-words" style={{fontFamily: 'Cinzel, serif'}}>
                      {activeCfg.label}
                    </h2>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
                      className="mt-3 md:mt-4 h-[2px] w-24 md:w-36 bg-gradient-to-r from-[#c9a827] via-[#f5d060] to-[#c9a827] rounded-full shadow-[0_0_20px_rgba(201,168,39,0.60),0_0_45px_rgba(201,168,39,0.28)]"
                    />
                  </motion.div>

                  <motion.button
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.05, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 0.2 }}
                    onClick={close}
                    className="shrink-0 mt-1 md:mt-4 w-10 h-10 md:w-12 md:h-12 border-2 border-slate-800/28 rounded-lg flex items-center justify-center
                      text-xl md:text-2xl text-slate-900/50 hover:text-[#c9a827] hover:border-[#c9a827]/50 hover:bg-[#c9a827]/8
                      transition-all duration-500 backdrop-blur-sm
                      hover:shadow-[0_0_20px_rgba(201,168,39,0.35),inset_0_0_15px_rgba(201,168,39,0.10)] group"
                  >
                    <span>✕</span>
                  </motion.button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                ref={panelScrollRef}
                data-panel-scroll
                className="relative z-10 min-h-0 w-full min-w-0 px-5 md:px-10 lg:px-16 py-8 md:py-10 overflow-y-auto overflow-x-hidden"
              >
                {active === 1 && <AboutContent />}
                {active === 2 && <SkillsContent />}
                {active === 3 && <SocialsContent />}
                {active === 4 && <ResumeContent />}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

