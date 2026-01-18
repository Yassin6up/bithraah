'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to(bg, {
                y: '-20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Content reveal
            gsap.from('.cta-content > *', {
                y: 50,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cta-content',
                    start: 'top 75%',
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section" style={{ background: 'linear-gradient(180deg, #0A0C14 0%, #050608 100%)' }}>
            {/* Background */}
            <div ref={bgRef} className="parallax-bg">
                <div className="glow-orb" style={{ width: 800, height: 800, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#B56CFF', opacity: 0.1 }} />
                <div className="glow-orb" style={{ width: 500, height: 500, bottom: '-10%', left: '20%', background: '#4DFFF3' }} />
                <div className="grid-pattern" style={{ opacity: 0.015 }} />
            </div>

            {/* Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.15 + Math.random() * 0.15,
                        }}
                    />
                ))}
            </div>

            <div className="container cta-content" style={{ textAlign: 'center' }}>
                {/* Seed Icon */}
                <div style={{ marginBottom: 48 }}>
                    <div style={{ width: 60, height: 60, margin: '0 auto', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            inset: -16,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(77, 255, 243, 0.15) 0%, transparent 70%)',
                        }} />
                        <svg viewBox="0 0 60 60" style={{ width: '100%', height: '100%' }}>
                            <defs>
                                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4DFFF3" />
                                    <stop offset="100%" stopColor="#B56CFF" />
                                </linearGradient>
                            </defs>
                            <circle cx="30" cy="30" r="4" fill="url(#cg)" />
                            <path d="M30 14 C26 22, 26 28, 30 36 C34 28, 34 22, 30 14" fill="none" stroke="url(#cg)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M30 36 C24 40, 20 48, 24 54" fill="none" stroke="url(#cg)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M30 36 C36 40, 40 48, 36 54" fill="none" stroke="url(#cg)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <h2 className="h1" style={{ marginBottom: 24 }}>
                    <span className="gradient">بذرة</span>
                    <span style={{ color: 'var(--light)' }}>… </span>
                    <br />
                    <span style={{ color: 'rgba(237, 235, 255, 0.8)' }}>حيث تبدأ الأفكار بالنمو</span>
                </h2>

                <p className="body" style={{ maxWidth: 500, margin: '0 auto 48px' }}>
                    استعد لرحلة جديدة في عالم الابتكار والاستثمار
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
                    <button className="btn btn-primary">
                        <Rocket size={20} />
                        ابدأ الآن
                    </button>
                    <button className="btn btn-ghost">
                        <ExternalLink size={20} />
                        تابعنا
                    </button>
                </div>

                {/* Launch Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 24px',
                    borderRadius: 50,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <span className="label">موعد الإطلاق</span>
                    <span className="h3" style={{ color: '#4DFFF3' }}>2026</span>
                </div>
            </div>
        </section>
    );
}
