'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // reveal lines
            gsap.utils.toArray('.vision-line').forEach((line: any) => {
                gsap.from(line, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 90%',
                    },
                });
            });

            gsap.to('.vision-bg-orb', {
                y: '30%',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#050505',
                padding: '160px 24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                direction: 'rtl',
            }}
        >
            {/* Abstract Background */}
            <div className="vision-bg-orb" style={{
                position: 'absolute',
                top: '-10%',
                left: '-5%',
                width: 800,
                height: 800,
                background: 'radial-gradient(circle, rgba(181, 108, 255, 0.03) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0,
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'flex-start' }}>

                    {/* Left: Huge Typographic Statement */}
                    <div style={{ maxWidth: 700 }}>
                        <p className="vision-line" style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            color: '#666',
                            marginBottom: 32,
                            display: 'block'
                        }}>
                            01 — الرؤية والفلسفة
                        </p>

                        <h2 className="vision-line" style={{
                            fontSize: 'clamp(48px, 6vw, 84px)',
                            fontWeight: 300,
                            lineHeight: 1,
                            letterSpacing: '-0.03em',
                            color: '#fff',
                            marginBottom: 40,
                        }}>
                            بناء نظام بيئي<br />
                            <span style={{ color: '#333' }}>يكسر القيود.</span>
                        </h2>

                        <div className="vision-line" style={{ paddingRight: 24, borderRight: '1px solid #333' }}>
                            <p style={{
                                fontSize: 24,
                                color: '#AAA',
                                lineHeight: 1.5,
                                fontWeight: 300,
                                marginBottom: 24
                            }}>
                                "بذرة ليست مجرد منصة، بل هي البنية التحتية الجديدة للاقتصاد الرقمي في المنطقة."
                            </p>
                        </div>
                    </div>

                    {/* Right: Pillars List */}
                    <div style={{ paddingTop: 40 }}>
                        {[
                            { num: '01', title: 'الثقة المطلقة', desc: 'نظام لا مركزي يضمن الشفافية' },
                            { num: '02', title: 'الأمان الفائق', desc: 'حماية سيبرانية بمعايير عالمية' },
                            { num: '03', title: 'الابتكار الحر', desc: 'بيئة خصبة لنمو الأفكار الجريئة' }
                        ].map((item, i) => (
                            <div key={i} className="vision-line" style={{
                                marginBottom: 40,
                                borderTop: '1px solid #1A1A1A',
                                paddingTop: 24,
                                display: 'flex',
                                gap: 24,
                                opacity: 0.7,
                                transition: 'opacity 0.3s',
                            }}>
                                <span style={{ fontSize: 12, fontWeight: 700, color: '#444' }}>{item.num}</span>
                                <div>
                                    <h3 style={{ fontSize: 18, color: '#fff', marginBottom: 8, fontWeight: 500 }}>{item.title}</h3>
                                    <p style={{ fontSize: 14, color: '#666' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
