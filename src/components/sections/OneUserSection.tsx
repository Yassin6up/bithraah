'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Heart, TrendingUp, Megaphone, ArrowRight, CheckCircle2, Layers, Cpu, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = [
    {
        title: 'المفكر',
        en: 'THE THINKER',
        desc: 'الرؤية والابتكار',
        details: 'صياغة المستقبل وبناء الاستراتيجيات',
        Icon: Lightbulb,
    },
    {
        title: 'الداعم',
        en: 'THE SUPPORTER',
        desc: 'القوة والتمكين',
        details: 'شريك النجاح والدعم المستمر',
        Icon: Heart,
    },
    {
        title: 'المستثمر',
        en: 'THE INVESTOR',
        desc: 'النمو والأثر',
        details: 'صناعة الفرص وتعظيم العوائد',
        Icon: TrendingUp,
    },
    {
        title: 'المسوق',
        en: 'THE MARKETER',
        desc: 'الصوت والصدى',
        details: 'توسيع الآفاق والوصول للعالم',
        Icon: Megaphone,
    },
];

const features = [
    { title: 'محفظة موحدة', desc: 'جميع أصولك واستثماراتك في مكان واحد آمن', icon: Layers },
    { title: 'تنقل فوري', desc: 'انتقل بين أدوارك بضغطة زر دون إعادة تسجيل', icon: Cpu },
    { title: 'خصوصية ذكية', desc: 'بيانات كل دور مفصولة ومحمية بالكامل', icon: Shield },
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
                stagger: 0.15,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: { trigger: '.cards-grid-pro', start: 'top 85%' },
            });

            gsap.from('.feature-row', {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: { trigger: '.features-container', start: 'top 80%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#050505',
                padding: '140px 24px',
                position: 'relative',
                overflow: 'hidden',
                direction: 'rtl',
                borderBottom: '1px solid #111',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 80, marginBottom: 100 }}>
                    {/* Editorial Header */}
                    <div>
                        <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 16 }}>
                            02 — المبدأ الأساسي
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
                            <span style={{ color: '#444' }}>أدوار متعددة.</span>
                        </h2>
                        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, maxWidth: 500 }}>
                            نؤمن بأن المبتكر لا يجب أن يقيد. نظامنا الموحد يمنحك حرية التنقل بين أدوارك المختلفة بسلاسة مطلقة، مما يتيح لك التركيز على ما تتقنه حقاً.
                        </p>
                    </div>

                    {/* Features List (New "Finished" Content) */}
                    <div className="features-container" style={{ display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center' }}>
                        {features.map((f, i) => (
                            <div key={i} className="feature-row" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                                <div style={{ width: 48, height: 48, background: '#0A0A0A', border: '1px solid #1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                    <f.icon size={20} color="#fff" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: 18, color: '#fff', marginBottom: 4, fontWeight: 500 }}>{f.title}</h4>
                                    <p style={{ fontSize: 14, color: '#666' }}>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dynamic Cards Layout */}
                <div className="cards-grid-pro" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 24,
                }}>
                    {roles.map((role, i) => (
                        <div
                            key={i}
                            className="role-card-pro"
                            style={{
                                height: 320,
                                background: '#080808',
                                border: '1px solid #1A1A1A',
                                padding: 32,
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
                                <role.Icon size={24} style={{ color: '#fff' }} strokeWidth={1} />
                            </div>

                            <div>
                                <h3 style={{ fontSize: 24, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{role.title}</h3>
                                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginBottom: 24 }}>{role.en}</p>

                                <div style={{ width: '100%', height: 1, background: '#1A1A1A', marginBottom: 24 }} />

                                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{role.details}</p>

                                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                                    <ArrowRight size={16} color="#444" style={{ transform: 'rotate(180deg)' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom System Bar */}
                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#333',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    borderTop: '1px solid #111',
                    paddingTop: 24,
                    direction: 'ltr',
                }}>
                    <span>UNIFIED IDENTITY SYSTEM</span>
                    <span>BITHRAH PLATFORM © 2026</span>
                </div>

            </div>
        </section>
    );
}
