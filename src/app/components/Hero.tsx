import { GravityStarsBackground } from "./backgrounds/gravity-stars";

export const GravityStarsBackgroundDemo = () => {
  return (
    <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
  );
};

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
        <a href="https://github.com/Fayaz-DS/Syed-Fayaz-Mehdi.git" rel="noopener noreferrer" target="_blank" className="btn-flip" data-back="Documentation" data-front="Documentation"></a>
        <img src="git.png" alt="GitHub Logo" className="git-logo" />
        <a href="#" rel="noopener noreferrer" target="_blank" className="btn-flip0" data-back="ring up" data-front="RING up"></a>
        <img src="arrow.png" alt="Arrow Logo" className="arrow-logo" />
      </div>
      <div className="begins">
        <p>Plain books conceal depth.</p>
      </div>
      <div className="scroll">
        <p>SCROLL TO</p>
        <p>THE BEGINNING</p>
      </div>
      <div className="line"></div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <GravityStarsBackground className="w-full h-full" style={{ color:'#000000', width: '100%', height: '100%' }} />
      </div>
    </section>
  );
}
