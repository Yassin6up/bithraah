'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Lock, Eye, Fingerprint, AlertTriangle, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'منع الاحتيال', desc: 'تقنيات متطورة لكشف ومنع محاولات الاحتيال قبل وقوعها', Icon: AlertTriangle, color: '#FF6B6B' },
    { title: 'الخصوصية المطلقة', desc: 'بياناتك محمية بتشفير من طرف إلى طرف مع سيطرة كاملة', Icon: Lock, color: '#4DFFF3' },
    { title: 'الحماية السلوكية', desc: 'نظام ذكي يتعرف على أنماط استخدامك الفريدة', Icon: Eye, color: '#B56CFF' },
    { title: 'حماية الهوية', desc: 'تحقق متعدد المستويات لضمان سلامة هويتك الرقمية', Icon: Fingerprint, color: '#5CE1E6' },
];

const stats = [
    { value: '256-bit', label: 'تشفير متقدم' },
    { value: '24/7', label: 'مراقبة أمنية' },
    { value: '99.9%', label: 'نسبة الحماية' },
];

export default function SecuritySection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Only keep scan line animation (no opacity animations on cards)
            gsap.to('.scan-line', {
                left: '100%',
                duration: 3,
                ease: 'power1.inOut',
                repeat: -1,
                repeatDelay: 2,
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#0A0C14',
                padding: '100px 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background */}
            <div style={{ position: 'absolute', width: 700, height: 700, top: '30%', left: '50%', transform: 'translateX(-50%)', background: '#4DFFF3', borderRadius: '50%', filter: 'blur(180px)', opacity: 0.06 }} />

            {/* Scan Line */}
            <div className="scan-line" style={{ position: 'absolute', top: 0, bottom: 0, left: '-10%', width: 2, background: 'linear-gradient(to bottom, transparent, #4DFFF3, transparent)', boxShadow: '0 0 30px #4DFFF3', opacity: 0.5, zIndex: 5 }} />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 50 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237, 235, 255, 0.5)', marginBottom: 14 }}>الأمان</p>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, background: 'linear-gradient(135deg, #B56CFF, #4DFFF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 14 }}>
                        الحماية الفائقة
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(237, 235, 255, 0.6)', maxWidth: 550, margin: '0 auto' }}>
                        نظام أمان متكامل مبني على أحدث تقنيات الحماية والذكاء الاصطناعي
                    </p>
                </div>

                {/* Shield + Stats */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 60, marginBottom: 50, flexWrap: 'wrap' }}>
                    <div className="shield-box" style={{ position: 'relative', width: 160, height: 160 }}>
                        <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(77, 255, 243, 0.25)', borderRadius: '50%', animation: 'spin 20s linear infinite' }} />
                        <div style={{ position: 'absolute', inset: 25, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77, 255, 243, 0.12) 0%, transparent 70%)' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShieldCheck size={60} style={{ color: '#4DFFF3' }} strokeWidth={1} />
                        </div>
                    </div>

                    <div className="stats-row" style={{ display: 'flex', gap: 40 }}>
                        {stats.map((s) => (
                            <div key={s.label} className="stat-box" style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#4DFFF3', marginBottom: 4 }}>{s.value}</p>
                                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(237, 235, 255, 0.4)', textTransform: 'uppercase' }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {features.map((f) => (
                        <div key={f.title} className="feature-card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: 24, background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 14 }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${f.color}12`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <f.Icon size={22} style={{ color: f.color }} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 6 }}>{f.title}</h3>
                                <p style={{ fontSize: 14, color: 'rgba(237, 235, 255, 0.6)', lineHeight: 1.7 }}>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div style={{ textAlign: 'center', marginTop: 50, padding: 24, background: 'rgba(77, 255, 243, 0.03)', border: '1px solid rgba(77, 255, 243, 0.08)', borderRadius: 14, maxWidth: 550, margin: '50px auto 0' }}>
                    <Database size={26} style={{ color: '#4DFFF3', marginBottom: 10 }} />
                    <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, color: '#EDEBFF' }}>بياناتك ملكك أنت فقط</p>
                    <p style={{ fontSize: 14, color: 'rgba(237, 235, 255, 0.55)' }}>لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث</p>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 700px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
