'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.hero-word', {
                y: 100,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power4.out',
                delay: 0.2,
            });

            gsap.from('.hero-meta', {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 1,
            });

            gsap.to('.hero-bg-grad', {
                y: '20%',
                opacity: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
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
                height: '100vh',
                background: '#050505',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 24px',
            }}
        >
            {/* Ambient Background */}
            <div className="hero-bg-grad" style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle at 50% 30%, rgba(181, 108, 255, 0.08) 0%, transparent 60%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: 1400,
                width: '100%',
                margin: '0 auto',
                position: 'relative',
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)',
                gap: 60,
                alignItems: 'end',
            }}>
                {/* Main Typography */}
                {/* Main Typography */}
                <div>
                    <div style={{ overflow: 'hidden', marginBottom: 20 }}>
                        <h1 style={{
                            fontSize: 'clamp(60px, 9vw, 140px)',
                            fontWeight: 800,
                            lineHeight: 0.9,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            margin: 0,
                            direction: 'rtl',
                        }}>
                            <span className="hero-word" style={{ display: 'inline-block' }}>بذرة</span><br />
                        </h1>
                        <p className="hero-word" style={{
                            fontSize: 'clamp(20px, 3vw, 32px)',
                            fontWeight: 400,
                            color: '#AAA',
                            marginTop: 16,
                            direction: 'rtl'
                        }}>
                            بيئة ذكية لدعم وتمكين الأفكار والمشاريع
                        </p>
                    </div>

                    <div className="hero-meta" style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 40, direction: 'rtl', flexWrap: 'wrap' }}>
                        <button className="btn-primary-pro" style={{
                            padding: '16px 32px',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            fontSize: 16,
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            fontFamily: 'inherit',
                        }}>
                            ابدأ الآن
                            <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button style={{
                            padding: '16px 32px',
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid #333',
                            fontSize: 16,
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}>
                            تواصل معنا
                        </button>
                        <button style={{
                            padding: '16px 32px',
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid #333',
                            fontSize: 16,
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}>
                            اطلب عرض المنصة
                        </button>
                    </div>
                </div>

                {/* Right Metadata */}
                <div className="hero-meta" style={{
                    paddingBottom: 20,
                    borderLeft: '1px solid #222',
                    paddingLeft: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: '100%',
                    textAlign: 'right',
                    alignItems: 'flex-end',
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, fontSize: 12, color: '#555', fontFamily: 'monospace', direction: 'ltr', textAlign: 'right' }}>
                        <div>
                            <span style={{ display: 'block', color: '#888', marginBottom: 4 }}>الإصدار</span>
                            بذرة نسخه ٢٠٠٠٠
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Ticker */}
            <div className="hero-meta" style={{
                position: 'absolute',
                bottom: 40,
                left: 0,
                width: '100%',
                borderTop: '1px solid #111',
                paddingTop: 20,
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: 40,
                paddingRight: 40,
                color: '#444',
                fontSize: 10,
                letterSpacing: '0.1em',
                flexDirection: 'row-reverse',
            }}>
                <span>تصفح لتكتشف المزيد</span>
                <span>بذرة © 2026</span>
            </div>

            <style jsx>{`
                @media (max-width: 1000px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="border-left"] {
                        border-left: none !important;
                        padding-left: 0 !important;
                        padding-top: 40px;
                        border-top: 1px solid #222;
                    }
                }
            `}</style>
        </section>
    );
}
