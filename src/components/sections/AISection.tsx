'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlus, Heart, Handshake, Briefcase, Share2, Users, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const activities = [
    { title: 'نشر الأفكار', desc: 'إطلاق حملات وعرض مشاريع جديدة', icon: UserPlus },
    { title: 'دعم الحملات', desc: 'تقديم الدعم مقابل مكافآت ومنتجات', icon: Heart },
    { title: 'التفاوض الاستثماري', desc: 'فتح باب المفاوضات الجادة', icon: Handshake },
    { title: 'تقديم الخدمات', desc: 'التفاوض على تقديم خدمات متخصصة', icon: Briefcase },
    { title: 'التسويق', desc: 'الترويج عبر روابط الإحالة', icon: Share2 },
    { title: 'المشاركة المجتمعية', desc: 'التفاعل في المجتمعات المتخصصة', icon: Users },
];

export default function AISection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.ai-card', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: { trigger: '.ai-grid', start: 'top 80%' },
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
                position: 'relative',
                overflow: 'hidden',
                color: '#fff',
                direction: 'rtl',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80,
                    borderBottom: '1px solid #222', paddingBottom: 40, flexWrap: 'wrap', gap: 40
                }}>
                    <div>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 16, display: 'block' }}>
                            06 — نموذج المستخدم الديناميكي
                        </span>
                        <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', maxWidth: 600 }}>
                            نظام يفهمك<br />
                            <span style={{ color: '#4DFFF3' }}>من سلوكك.</span>
                        </h2>
                    </div>
                    <div style={{ maxWidth: 500 }}>
                        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.7 }}>
                            في بذرة لا توجد حسابات مصنفة مسبقًا. يوجد مستخدم واحد مرن يستطيع في الوقت نفسه القيام بأدوار متعددة حسب احتياجاته واهتماماته. النظام يفهم المستخدم من سلوكه الفعلي، لا من وصفه لنفسه.
                        </p>
                        <span style={{ fontSize: 12, color: '#444', fontFamily: 'monospace', display: 'block', marginTop: 12 }}>بذرة نسخه ٢٠٠٠٠</span>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="ai-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 1,
                    background: '#222', // Grid lines color
                    border: '1px solid #222',
                }}>
                    {activities.map((item, i) => (
                        <div key={i} className="ai-card" style={{
                            background: '#080808',
                            padding: 40,
                            height: 240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            transition: 'background 0.3s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#0C0C0C'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#080808'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <item.icon size={32} color="#4DFFF3" strokeWidth={1} />
                                <ArrowUpRight size={20} color="#333" style={{ transform: 'rotate(180deg)' }} />
                            </div>

                            <div>
                                <h3 style={{ fontSize: 20, marginBottom: 8, fontWeight: 500 }}>{item.title}</h3>
                                <p style={{ fontSize: 14, color: '#666' }}>{item.desc}</p>
                            </div>

                            <div style={{
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                                fontSize: 9,
                                color: '#333',
                                fontFamily: 'monospace',
                                direction: 'ltr'
                            }}>
                                ROLE_ACT_{i + 1} :: ENABLED
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
