"use client"

const BEAMS = [
  { left: "4%",   width: 1,   height: 200, duration: 3.8, delay: 0.0,  opacity: 0.28, silver: false },
  { left: "10%",  width: 1,   height: 160, duration: 5.2, delay: 1.4,  opacity: 0.16, silver: true  },
  { left: "17%",  width: 1,   height: 240, duration: 4.1, delay: 3.0,  opacity: 0.22, silver: false },
  { left: "24%",  width: 1.5, height: 180, duration: 6.5, delay: 0.7,  opacity: 0.11, silver: true  },
  { left: "31%",  width: 1,   height: 200, duration: 3.5, delay: 2.2,  opacity: 0.20, silver: false },
  { left: "39%",  width: 1,   height: 280, duration: 5.8, delay: 0.4,  opacity: 0.13, silver: true  },
  { left: "47%",  width: 1,   height: 160, duration: 4.4, delay: 1.9,  opacity: 0.24, silver: false },
  { left: "55%",  width: 1,   height: 220, duration: 3.9, delay: 3.6,  opacity: 0.18, silver: true  },
  { left: "62%",  width: 1.5, height: 190, duration: 5.0, delay: 0.9,  opacity: 0.13, silver: false },
  { left: "70%",  width: 1,   height: 250, duration: 4.7, delay: 2.5,  opacity: 0.21, silver: true  },
  { left: "77%",  width: 1,   height: 170, duration: 3.6, delay: 1.1,  opacity: 0.16, silver: false },
  { left: "84%",  width: 1,   height: 210, duration: 6.0, delay: 0.3,  opacity: 0.11, silver: true  },
  { left: "90%",  width: 1,   height: 180, duration: 4.3, delay: 2.8,  opacity: 0.19, silver: false },
  { left: "96%",  width: 1,   height: 230, duration: 5.5, delay: 1.6,  opacity: 0.14, silver: true  },
]

export default function FallingBeams() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {BEAMS.map((beam, i) => {
        const r = beam.silver ? 200 : 195
        const g = beam.silver ? 202 : 162
        const b = beam.silver ? 210 :  38

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: beam.left,
              top: 0,
              width: `${beam.width}px`,
              height: `${beam.height}px`,
              background: `linear-gradient(to bottom,
                transparent 0%,
                rgba(${r},${g},${b},${beam.opacity * 0.35}) 20%,
                rgba(${r},${g},${b},${beam.opacity}) 50%,
                rgba(${r},${g},${b},${beam.opacity * 0.35}) 80%,
                transparent 100%
              )`,
              boxShadow: `0 0 ${Math.round(beam.width * 5)}px rgba(${r},${g},${b},${beam.opacity * 0.5})`,
              animation: `sfm-beam-fall ${beam.duration}s linear ${beam.delay}s infinite`,
            }}
          />
        )
      })}

      <style>{`
        @keyframes sfm-beam-fall {
          0%   { transform: translateY(-350px); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(calc(100vh + 350px)); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
