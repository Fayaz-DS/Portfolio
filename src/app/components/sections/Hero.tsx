import Image from "next/image";
import dynamic from "next/dynamic";

const FloatingShapeBackground = dynamic(
  () => import("../ui/FloatingShape").then(m => ({ default: m.FloatingShapeBackground })),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="absolute inset-0">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '30vw',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontWeight: 600,
          fontFamily: 'Cinzel, serif',
          width: '100vw',
          whiteSpace: 'nowrap',
          flex: 1,
        }}>
          <span style={{ color: '#000000', flex: 1, textAlign: 'center' }}>F</span>
          <span style={{ color: '#000000', flex: 1, textAlign: 'center' }}>A</span>
          <span style={{ color: '#000000', flex: 1, textAlign: 'center' }}>Y</span>
          <span style={{ color: '#000000', flex: 1, textAlign: 'center' }}>A</span>
          <span style={{ color: '#000000', flex: 1, textAlign: 'center' }}>Z</span>
        </div>
      </div>
      <div className="hero-text">
        <h1>BEGINNING OF AN ERA</h1>
      </div>
      <div className="infring">
        <p>© 2026 fayaz.engineering</p>
      </div>
      <div>
        <a href="https://github.com/Fayaz-DS/Syed-Fayaz-Mehdi.git" rel="noopener noreferrer" target="_blank" className="btn-flip" data-back="Source Code" data-front="Documentation"></a>
        <Image src="/git.png" alt="GitHub Logo" className="git-logo" width={54} height={54} />
        <a href="/connect" className="btn-flip0" data-back="reach out" data-front="RING up"></a>
        <Image src="/arrow.png" alt="Contact" className="arrow-logo" width={54} height={54} />
      </div>
      <div className="begins">
        <p>"Plain books conceal depth."</p>
      </div>
      <div className="scroll">
        <p>SCROLL TO</p>
        <p>THE BEGINNING</p>
      </div>
      <div className="line"></div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <FloatingShapeBackground />
      </div>
    </section>
  );
}
