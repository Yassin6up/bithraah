'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Network, Zap, GitBranch, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AISection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.to('.ai-grid-line', {
                backgroundPosition: '0% 100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });

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
                padding: '140px 24px',
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
                            04 — الذكاء السلوكي
                        </span>
                        <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', maxWidth: 600 }}>
                            ذكاء اصطناعي<br />
                            <span style={{ color: '#4DFFF3' }}>يفهمك.</span>
                        </h2>
                    </div>
                    <div style={{ maxWidth: 400 }}>
                        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.7 }}>
                            محرك ذكي يحلل الأنماط السلوكية ليقدم تجربة مخصصة بالكامل، يتطور معك ويتعلم من تفاعلاتك.
                        </p>
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
                    {[
                        { title: 'التحليل التنبؤي', desc: 'استباق الاحتياجات قبل ظهورها', icon: Network },
                        { title: 'المعالج العصبي', desc: 'معالجة فورية للبيانات المعقدة', icon: Cpu },
                        { title: 'التعلم المستمر', desc: 'تطور دائم مع كل تفاعل', icon: GitBranch },
                        { title: 'الأتمتة الذكية', desc: 'تنفيذ المهام الروتينية تلقائياً', icon: Zap },
                    ].map((item, i) => (
                        <div key={i} className="ai-card" style={{
                            background: '#080808',
                            padding: 40,
                            height: 280,
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
                                <h3 style={{ fontSize: 24, marginBottom: 8, fontWeight: 500 }}>{item.title}</h3>
                                <p style={{ fontSize: 14, color: '#666' }}>{item.desc}</p>
                            </div>

                            {/* Tech deco */}
                            <div style={{
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                                fontSize: 9,
                                color: '#333',
                                fontFamily: 'monospace',
                                direction: 'ltr'
                            }}>
                                NODE_0{i + 1} :: ACTIVE
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Tech Bar */}
                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    gap: 40,
                    paddingTop: 24,
                    borderTop: '1px solid #111',
                    fontSize: 12,
                    color: '#444',
                    fontFamily: 'monospace',
                    direction: 'ltr',
                }}>
                    <span>PROCESSING: 450 TFLOPS</span>
                    <span>ADAPTATION RATE: 98.4%</span>
                    <span>NEURAL LAYERS: 128</span>
                </div>

            </div>
        </section>
    );
}
