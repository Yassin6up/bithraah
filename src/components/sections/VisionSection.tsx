'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.vision-content > *', {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: { trigger: '.vision-content', start: 'top 80%' },
            });

            gsap.from('.pillar-item', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                scrollTrigger: { trigger: '.pillars-grid', start: 'top 85%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    const pillars = [
        { ar: 'الثقة', en: 'Trust', color: '#B56CFF' },
        { ar: 'الأمان', en: 'Security', color: '#4DFFF3' },
        { ar: 'الابتكار', en: 'Innovation', color: '#C77DFF' },
    ];

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#0A0C14',
                padding: '100px 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                width: 500,
                height: 500,
                top: '10%',
                left: '-10%',
                background: '#B56CFF',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.1,
            }} />

            <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="vision-content" style={{ textAlign: 'center', marginBottom: 60 }}>
                    <p style={{
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(237, 235, 255, 0.5)',
                        marginBottom: 16,
                    }}>
                        الفلسفة
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #B56CFF, #4DFFF3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: 24,
                    }}>
                        رؤية منصة بذرة
                    </h2>
                    <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #B56CFF, #4DFFF3)', margin: '0 auto 40px' }} />

                    <p style={{
                        fontSize: 22,
                        fontWeight: 500,
                        lineHeight: 1.7,
                        marginBottom: 20,
                        color: '#EDEBFF',
                    }}>
                        <span style={{ background: 'linear-gradient(135deg, #B56CFF, #4DFFF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>بذرة</span> ليست منصة تقليدية — إنها نظام بيئي ذكي
                    </p>
                    <p style={{
                        fontSize: 16,
                        color: 'rgba(237, 235, 255, 0.6)',
                        maxWidth: 600,
                        margin: '0 auto',
                        lineHeight: 1.8,
                    }}>
                        نبني على أسس الثقة المطلقة والأمان الفائق وتقنيات الذكاء الاصطناعي المتقدمة
                    </p>
                </div>

                {/* Pillars */}
                <div className="pillars-grid" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 60,
                    flexWrap: 'wrap',
                }}>
                    {pillars.map((p) => (
                        <div key={p.ar} className="pillar-item" style={{ textAlign: 'center' }}>
                            <div style={{ width: 40, height: 2, background: p.color, margin: '0 auto 16px' }} />
                            <h3 style={{ fontSize: 24, fontWeight: 700, color: p.color, marginBottom: 6 }}>{p.ar}</h3>
                            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(237, 235, 255, 0.4)', textTransform: 'uppercase' }}>{p.en}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
