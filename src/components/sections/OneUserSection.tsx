'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, FileText, Wallet, Users, Activity, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const principles = [
    {
        title: 'مستخدم واحد',
        desc: 'هوية موحدة لكل شخص على المنصة',
        Icon: User,
    },
    {
        title: 'بروفايل واحد',
        desc: 'ملف شخصي شامل يعكس كل الأنشطة',
        Icon: FileText,
    },
    {
        title: 'محفظة واحدة',
        desc: 'نظام مالي موحد لجميع المعاملات',
        Icon: Wallet,
    },
    {
        title: 'أدوار متعددة',
        desc: 'تتشكل الأدوار تلقائيًا من السلوك الفعلي',
        Icon: Users,
    },
    {
        title: 'مؤشرات ذكية',
        desc: 'السوق + المجتمع + AI = إشارات لا قرارات',
        Icon: Activity,
    },
];

export default function OneUserSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.role-card-pro', {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: { trigger: '.cards-grid-pro', start: 'top 85%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#050505',
                padding: 'clamp(60px, 10vh, 100px) 24px',
                position: 'relative',
                overflow: 'hidden',
                direction: 'rtl',
                borderBottom: '1px solid #111',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>

                {/* Header */}
                <div style={{ marginBottom: 80, textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 16 }}>
                        05 — المبدأ الجوهري
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(40px, 5vw, 64px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: 32,
                    }}>
                        هوية واحدة.<br />
                        <span style={{ color: '#444' }}>منظومة متكاملة.</span>
                    </h2>
                    <span style={{ fontSize: 12, color: '#444', fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</span>
                </div>

                {/* Core Principles Grid */}
                <div className="cards-grid-pro" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 24,
                }}>
                    {principles.map((p, i) => (
                        <div
                            key={i}
                            className="role-card-pro"
                            style={{
                                height: 240,
                                background: '#080808',
                                border: '1px solid #1A1A1A',
                                padding: 24,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.4s ease',
                                cursor: 'default',
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#333';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = '#0C0C0C';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#1A1A1A';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = '#080808';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>{(i + 1).toString().padStart(2, '0')}</span>
                                <p.Icon size={24} style={{ color: '#fff' }} strokeWidth={1} />
                            </div>

                            <div>
                                <h3 style={{ fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{p.title}</h3>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{p.desc}</p>
                                <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace', display: 'block', marginTop: 12 }}>بذرة نسخه ٢٠٠٠٠</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Quote */}
                <div style={{
                    marginTop: 60,
                    borderTop: '1px solid #111',
                    paddingTop: 40,
                    textAlign: 'center',
                }}>
                    <p style={{ fontSize: 18, color: '#fff', fontWeight: 300, maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
                        "لا يوجد تصنيف مسبق لمستخدم كمستثمر أو صاحب مشروع. الدور يتكون تلقائيًا من تصرفاته داخل المنصة."
                    </p>
                </div>

            </div>
        </section>
    );
}
