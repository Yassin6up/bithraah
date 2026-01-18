'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gem, Box, Wrench, Clock, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const rewards = [
    { title: 'دعم مقابل مكافأة', desc: 'مكافآت حصرية للداعمين الأوائل', icon: Gem },
    { title: 'دعم مقابل منتج', desc: 'الحصول على المنتج النهائي', icon: Box },
    { title: 'دعم مقابل خدمة', desc: 'خدمات متخصصة من صاحب المشروع', icon: Wrench },
    { title: 'دعم مقابل ميزة مستقبلية', desc: 'مزايا خاصة عند إطلاق المشروع', icon: Clock },
];

export default function SupportSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.sup-card', {
                scale: 0.95,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: { trigger: '.sup-grid', start: 'top 85%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#050505',
                padding: 'clamp(80px, 10vh, 140px) 24px',
                direction: 'rtl',
                position: 'relative',
                borderTop: '1px solid #111',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{ marginBottom: 80, maxWidth: 800 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        09 — الدعم
                    </span>
                    <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 32 }}>الدعم مقابل مكافأة</h2>

                    <p style={{ fontSize: 18, color: '#AAA', lineHeight: 1.8 }}>
                        الدعم في بذرة ليس دعمًا معنويًا أو تبرعًا خيريًا...<br />
                        <span style={{ color: '#fff' }}>هو استثمار حقيقي من الداعم في فكرة يؤمن بها مقابل قيمة ملموسة يحصل عليها.</span>
                    </p>
                    <span style={{ fontSize: 12, color: '#444', fontFamily: 'monospace', display: 'block', marginTop: 24 }}>بذرة نسخه ٢٠٠٠٠</span>
                </div>

                {/* Grid */}
                <div className="sup-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 24
                }}>
                    {rewards.map((r, i) => (
                        <div key={i} className="sup-card" style={{
                            background: '#0A0A0A',
                            border: '1px solid #1A1A1A',
                            padding: 32,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: 20,
                            transition: 'border-color 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4DFFF3'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
                        >
                            <div style={{ width: 56, height: 56, background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <r.icon size={24} color="#fff" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: 18, color: '#fff', marginBottom: 8 }}>{r.title}</h3>
                                <p style={{ fontSize: 14, color: '#666' }}>{r.desc}</p>
                            </div>
                            <span style={{ fontSize: 10, color: '#333', fontFamily: 'monospace', marginTop: 'auto' }}>بذرة نسخه ٢٠٠٠٠</span>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div style={{ marginTop: 80, background: '#080808', border: '1px solid #1A1A1A', padding: 24, borderRadius: 0, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <Info size={24} color="#4DFFF3" style={{ flexShrink: 0, marginTop: 4 }} />
                    <div>
                        <p style={{ fontSize: 16, color: '#DDD', lineHeight: 1.6 }}>
                            القيمة واضحة للطرفين: الداعم يعرف بالضبط ماذا سيحصل عليه، وصاحب الحملة يحصل على إشارة اهتمام حقيقية قابلة للقياس والتحليل.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
