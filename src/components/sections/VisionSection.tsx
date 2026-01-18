'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

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
                padding: 'clamp(80px, 12vh, 160px) 24px',
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>

                    {/* Main Text Content */}
                    <div style={{ maxWidth: 700 }}>
                        <p className="vision-line" style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            color: '#666',
                            marginBottom: 32,
                            display: 'block'
                        }}>
                            02 — الملخص التنفيذي
                        </p>

                        <h2 className="vision-line" style={{
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            fontWeight: 300,
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            color: '#fff',
                            marginBottom: 40,
                        }}>
                            منصة رقمية ذكية<br />
                            <span style={{ color: '#888' }}>لاختبار الأفكار في بيئة واقعية.</span>
                        </h2>

                        <div className="vision-line" style={{ paddingRight: 24, borderRight: '1px solid #333' }}>
                            <p style={{
                                fontSize: 18,
                                color: '#AAA',
                                lineHeight: 1.8,
                                fontWeight: 300,
                                marginBottom: 24
                            }}>
                                بذرة منصة رقمية ذكية مصممة لسلوك البيئة التي تختبر فيها الأفكار والمشاريع بشكل واقعي قبل اتخاذ قرارات الدعم أو الاستثمار. تجمع بين المجتمع، الحملات، الدعم، التفاوض، الاستثمار، التسويق، الذكاء الاصطناعي، وحماية الملكية الفكرية داخل منظومة واحدة متكاملة.
                            </p>
                            <span style={{ fontSize: 12, color: '#444', fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</span>
                        </div>
                    </div>

                    {/* Side Box Note */}
                    <div className="vision-line" style={{
                        background: '#080808',
                        border: '1px solid #1A1A1A',
                        padding: 40,
                        position: 'relative',
                    }}>
                        <div style={{ position: 'absolute', top: -10, right: 20, background: '#050505', padding: '0 10px', fontSize: 10, color: '#4DFFF3', fontFamily: 'monospace' }}>
                            NOTE
                        </div>
                        <p style={{ fontSize: 16, color: '#fff', lineHeight: 1.7, marginBottom: 20 }}>
                            بذرة لا تُقيّم المشاريع ولا تصدر توصيات استثمارية، بل تخلق بيئة منظمة تجعل السوق نفسه أداة الاختبار.
                        </p>
                        <span style={{ fontSize: 12, color: '#444', fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</span>
                    </div>

                </div>

            </div>
        </section>
    );
}
