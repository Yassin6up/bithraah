'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const midRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const mid = midRef.current;
        const content = contentRef.current;
        const particles = particlesRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            // Background parallax - slowest
            gsap.to(bg, {
                y: '30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Mid layer parallax
            gsap.to(mid, {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Particles parallax
            gsap.to(particles, {
                y: '15%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Content parallax - fastest fade
            gsap.to(content, {
                y: '50%',
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '80% top',
                    scrub: 1,
                },
            });

            // Entrance animations
            gsap.from('.hero-label', { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
            gsap.from('.hero-title', { y: 60, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
            gsap.from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8, delay: 0.6 });
            gsap.from('.hero-desc', { y: 30, opacity: 0, duration: 0.8, delay: 0.8 });
            gsap.from('.hero-btns', { y: 30, opacity: 0, duration: 0.8, delay: 1 });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section" style={{ background: '#080A10' }}>
            {/* Background Layer - Gradient & Grid */}
            <div ref={bgRef} className="parallax-bg">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 20%, rgba(181, 108, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(77, 255, 243, 0.08) 0%, transparent 50%)'
                    }}
                />
                <div className="grid-pattern" />
            </div>

            {/* Mid Layer - Glow Orbs */}
            <div ref={midRef} className="parallax-mid">
                <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', right: '-10%', background: '#B56CFF' }} />
                <div className="glow-orb" style={{ width: 500, height: 500, bottom: '-15%', left: '-10%', background: '#4DFFF3' }} />
            </div>

            {/* Particles Layer */}
            <div ref={particlesRef} className="particles">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.1 + Math.random() * 0.2,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content Layer */}
            <div ref={contentRef} className="container" style={{ textAlign: 'center' }}>
                {/* Seed Icon - Hidden */}
                {/* 
                <div style={{ marginBottom: 48 }}>
                    ...seed icon code...
                </div>
                */}

                <p className="hero-label label" style={{ marginBottom: 16 }}>منصة الابتكار الرقمي · 2026</p>

                <h1 className="hero-title h1" style={{ marginBottom: 24 }}>
                    <span className="gradient">انتهى التسجيل المبكر</span>
                </h1>

                <p className="hero-subtitle h3" style={{ marginBottom: 16, color: 'rgba(237, 235, 255, 0.8)' }}>
                    موعدنا مع <span style={{ color: '#4DFFF3' }}>بذرة</span> قريبًا
                </p>

                <p className="hero-desc body" style={{ maxWidth: 500, margin: '0 auto 48px' }}>
                    منصة رقمية ذكية بهوية واحدة، وأمان فائق، وذكاء اصطناعي سلوكي
                </p>

                <div className="hero-btns" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary">
                        <Sparkles size={20} />
                        تابعنا
                        <ArrowLeft size={20} />
                    </button>
                    <button className="btn btn-ghost">
                        تواصل معنا
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-dot" />
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
        </section>
    );
}
