'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Users, Briefcase, Gavel, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'عرض واضح', desc: 'عرض الأفكار بوضوح واحترافية داخل بيئة منظمة.', Icon: Radio },
    { title: 'مجتمع حقيقي', desc: 'تناقش الأفكار داخل مجتمع فاعل من المهتمين والخبراء.', Icon: Users },
    { title: 'دعم ملموس', desc: 'دعم المشاريع مقابل مكافآت أو منتجات أو خدمات حقيقية.', Icon: Briefcase },
    { title: 'تفاوض منضبط', desc: 'يتم التفاوض بشكل محمي وموثق داخل المنصة.', Icon: Gavel },
    { title: 'اختبار السوق', desc: 'تختبر الأفكار بسلوك السوق الفعلي لا بالكلام النظري.', Icon: ShieldCheck },
];

export default function SecuritySection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.to('.scan-line-pro', {
                top: '100%',
                duration: 2,
                ease: 'linear',
                repeat: -1,
            });

            gsap.from('.sol-card', {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: { trigger: '.sol-grid', start: 'top 80%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#080808',
                padding: 'clamp(80px, 10vh, 140px) 24px',
                position: 'relative',
                overflow: 'hidden',
                direction: 'rtl',
            }}
        >
            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 10 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        04 — الحل
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(36px, 5vw, 56px)',
                        fontWeight: 400,
                        color: '#fff',
                        letterSpacing: '-0.02em'
                    }}>
                        بذرة بيئة ذكية متكاملة
                    </h2>
                </div>

                {/* Main Grid */}
                <div className="sol-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 24,
                }}>
                    {features.map((f, i) => (
                        <div key={i} className="sol-card" style={{
                            background: '#050505',
                            border: '1px solid #1A1A1A',
                            padding: 32,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <div style={{ width: 40, height: 40, background: '#111', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <f.Icon size={20} color="#4DFFF3" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: 18, color: '#fff', marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                            <div style={{ fontSize: 10, color: '#333', marginTop: 'auto', fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div style={{ textAlign: 'center', marginTop: 80, padding: 20, border: '1px solid #1A1A1A', display: 'block', width: '100%', background: '#050505' }}>
                    <p style={{ fontSize: 14, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <ShieldCheck size={16} color="#4DFFF3" />
                        كل ذلك داخل منظومة مجتمعية محمية تضمن حقوق جميع الأطراف.
                    </p>
                    <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace', display: 'block', marginTop: 12 }}>بذرة نسخه ٢٠٠٠٠</span>
                </div>

            </div>
        </section>
    );
}
