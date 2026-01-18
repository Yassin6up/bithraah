'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.cta-title', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: { trigger: section, start: 'top 70%' },
            });

            gsap.to('.cta-bg', {
                scale: 1.1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                height: '80vh',
                background: '#050505',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                direction: 'rtl',
            }}
        >
            {/* Cinematic Background */}
            <div className="cta-bg" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                zIndex: 0,
            }} />

            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 800, padding: '0 24px' }}>
                <p style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                    color: '#666',
                    marginBottom: 32,
                    textTransform: 'uppercase'
                }}>
                    هل أنت مستعد؟
                </p>

                <h2 className="cta-title" style={{
                    fontSize: 'clamp(56px, 10vw, 120px)',
                    fontWeight: 800,
                    lineHeight: 0.9,
                    color: '#fff',
                    marginBottom: 60,
                    letterSpacing: '-0.04em',
                }}>
                    انضم إلى<br />
                    <span style={{ color: '#4DFFF3' }}>الثورة</span>
                </h2>

                <button
                    style={{
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        padding: '24px 48px',
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 16,
                        transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    ابدأ رحلتك الآن
                    <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>

            <div style={{
                position: 'absolute',
                bottom: 40,
                left: 0,
                width: '100%',
                textAlign: 'center',
                fontSize: 11,
                color: '#444',
                letterSpacing: '0.1em',
                direction: 'ltr',
            }}>
                LIMITED EARLY ACCESS · 2026
            </div>
        </section>
    );
}
