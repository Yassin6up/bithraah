'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Lock, Eye, Fingerprint, Activity, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'كشف الاحتيال', desc: 'تحليل فوري بالذكاء الاصطناعي', Icon: Activity },
    { title: 'التشفير الكامل', desc: 'حماية E2E لجميع البيانات', Icon: Lock },
    { title: 'البصمة السلوكية', desc: 'التحقق من الهوية عبر السلوك', Icon: Eye },
    { title: 'أمان الهوية', desc: 'منع انتحال الشخصية الرقمية', Icon: Fingerprint },
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

            gsap.from('.stat-num', {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                stagger: 0.2,
                scrollTrigger: { trigger: '.stats-grid-pro', start: 'top 80%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#080808',
                padding: '140px 24px',
                position: 'relative',
                overflow: 'hidden',
                direction: 'rtl',
            }}
        >
            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 10 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        03 — البنية التحتية الأمنية
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(36px, 5vw, 56px)',
                        fontWeight: 400,
                        color: '#fff',
                        letterSpacing: '-0.02em'
                    }}>
                        أمان لا يقبل المساومة.
                    </h2>
                </div>

                {/* Main Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 40,
                    alignItems: 'center'
                }}>

                    {/* Visual Side */}
                    <div style={{ position: 'relative', height: 400, background: '#050505', border: '1px solid #1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Scan Line */}
                        <div className="scan-line-pro" style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg, transparent, #4DFFF3, transparent)',
                            boxShadow: '0 0 10px #4DFFF3',
                            zIndex: 10
                        }} />

                        <ShieldCheck size={120} strokeWidth={0.5} color="#333" />

                        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#444', fontFamily: 'monospace', direction: 'ltr' }}>
                            <span>STATUS: ACTIVE</span>
                            <span>ENCRYPTION: AES-256</span>
                        </div>
                    </div>

                    {/* Data Side */}
                    <div>
                        {/* Values */}
                        <div className="stats-grid-pro" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60, direction: 'ltr', textAlign: 'right' }}>
                            <div>
                                <span className="stat-num" style={{ fontSize: 48, fontWeight: 300, color: '#fff', display: 'block' }}>99.9</span>
                                <span style={{ fontSize: 11, fontWeight: 700, color: '#555', letterSpacing: '0.1em' }}>% جاهزية</span>
                            </div>
                            <div>
                                <span style={{ fontSize: 48, fontWeight: 300, color: '#fff', display: 'block' }}>24/7</span>
                                <span style={{ fontSize: 11, fontWeight: 700, color: '#555', letterSpacing: '0.1em' }}>مراقبة حية</span>
                            </div>
                        </div>

                        {/* Features List */}
                        <div style={{ display: 'grid', gap: 24 }}>
                            {features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <div style={{ width: 32, height: 32, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                        <f.Icon size={16} color="#888" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{f.title}</h4>
                                        <p style={{ fontSize: 12, color: '#555' }}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer Note */}
                <div style={{ textAlign: 'center', marginTop: 80, padding: 20, border: '1px solid #1A1A1A', display: 'inline-block', width: '100%' }}>
                    <p style={{ fontSize: 12, color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, direction: 'ltr' }}>
                        <Database size={14} />
                        سيادة بياناتك مضمونة — بياناتك تبقى ملكك وحدك
                    </p>
                </div>

            </div>
        </section>
    );
}
