'use client';
import { useState } from "react";
import Hero from "./components/Hero";
import IntroReveal from "./components/backgrounds/IntroReveal";
import FlowingMenu from "./components/backgrounds/FlowingMenu";

const demoItems = [
  { link: '/about', text: 'ABOUT', image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '/projects', text: 'EXHIBIT', image: 'https://images.unsplash.com/photo-1611312517546-e8e01f0d4699?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'TESTAMENT', image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'SERVICES', image: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
  textColor="#ffffff"
  bgColor="#060010"
  marqueeBgColor="#ffffff"
  marqueeTextColor="#060010"
  borderColor="#ffffff"
/>
</div>

export default function Page() {
    const [showHero, setShowHero] = useState(false);

    return (
        <main className="relative">
            <div 
                className="fixed inset-0"
                style={{
                    background: 'linear-gradient(to bottom, #F5F6F7 25%, #C1C4C8 50%, #7B7F85 75%, #2B2E33 100%)',
                    zIndex: 0,
                }}
            >
            </div>
            <section className="relative min-h-screen" style={{ zIndex: 1 }}>
                {!showHero && <IntroReveal onComplete={() => setShowHero(true)} />}
                {showHero && <Hero />}
                {showHero && <FlowingMenu items={demoItems} />}
            </section>
        </main>
    );
}