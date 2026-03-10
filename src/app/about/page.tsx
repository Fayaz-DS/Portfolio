'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import About from '../components/sections/About';

export default function AboutPage() {
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;

            if (scrollTop + clientHeight >= scrollHeight - 50) {
                router.push('/model');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [router]);

    return (
        <main className="relative">
            <div 
                className="fixed inset-0"
                style={{
                    background: '#000000',
                    zIndex: 0,
                }}
            >
            </div>
            <section className="relative" style={{ zIndex: 1 }}>
                <About />
            </section>
        </main>
    );
}
