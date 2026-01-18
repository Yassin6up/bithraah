'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Activity, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'تحليل السلوك', desc: 'فهم أنماط تفاعلك', Icon: Activity, color: '#B56CFF' },
    { title: 'التعلم المستمر', desc: 'تطور مع احتياجاتك', Icon: Brain, color: '#4DFFF3' },
    { title: 'توصيات ذكية', desc: 'حلول في الوقت المثالي', Icon: Sparkles, color: '#C77DFF' },
];

export default function AISection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const ring = ringRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to(bg, {
                y: '-25%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Ring scale on scroll
            gsap.from(ring, {
                scale: 0.7,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ring,
                    start: 'top 80%',
                },
            });

            // Ring rotation on scroll
            gsap.to(ring, {
                rotate: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Features reveal
            gsap.from('.ai-feature', {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ai-features',
                    start: 'top 85%',
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section" style={{ background: '#080A10' }}>
            {/* Background */}
            <div ref={bgRef} className="parallax-bg">
                <div className="glow-orb" style={{ width: 700, height: 700, top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: '#B56CFF' }} />
                <div className="grid-pattern" />
            </div>

            <div className="container" style={{ textAlign: 'center' }}>
                {/* Header */}
                <p className="label" style={{ marginBottom: 16 }}>التقنية</p>
                <h2 className="h2 gradient" style={{ marginBottom: 16 }}>الذكاء الاصطناعي السلوكي</h2>
                <p className="body" style={{ maxWidth: 500, margin: '0 auto 64px' }}>
                    تقنية تفهم احتياجاتك قبل أن تعبر عنها
                </p>

                {/* Ring Animation */}
                <div ref={ringRef} className="ring-container" style={{ margin: '0 auto 64px' }}>
                    <div className="ring ring-1" />
                    <div className="ring ring-2" />
                    <div className="ring ring-3" />

                    {/* Center Icon */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(77, 255, 243, 0.2) 0%, transparent 70%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Brain size={36} style={{ color: '#4DFFF3' }} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="ai-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 800, margin: '0 auto' }}>
                    {features.map((f) => (
                        <div key={f.title} className="ai-feature" style={{ textAlign: 'center' }}>
                            <div className="icon-box" style={{
                                margin: '0 auto 20px',
                                background: `${f.color}12`,
                                borderColor: `${f.color}25`
                            }}>
                                <f.Icon size={28} style={{ color: f.color }} strokeWidth={1.5} />
                            </div>
                            <h3 className="h3" style={{ color: f.color, marginBottom: 8, fontSize: 20 }}>{f.title}</h3>
                            <p className="body" style={{ fontSize: 15 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tagline */}
                <p className="h3 gradient" style={{ marginTop: 64 }}>ذكاء يتجاوز التوقعات</p>
            </div>
        </section>
    );
}
