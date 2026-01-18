'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertOctagon, HelpCircle, FileWarning, SearchX, XCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const challenges = [
    { title: 'بيئات غير محمية', desc: 'الأفكار تُطرح في بيئات مفتوحة بدون ضمانات حماية، مما يعرضها للنسخ والسرقة.', Icon: AlertOctagon },
    { title: 'صعوبة قياس الجدية', desc: 'لا توجد آلية واضحة لقياس الاهتمام الحقيقي والجدية الفعلية من المهتمين والمستثمرين.', Icon: HelpCircle },
    { title: 'تفاوض غير منضبط', desc: 'التفاوض يحدث خارج المنصات الرسمية بدون ضبط أو توثيق، مما يخلق مخاطر قانونية.', Icon: FileWarning },
    { title: 'دعم بدون قيمة واضحة', desc: 'الدعم غالبًا غير مرتبط بقيمة محددة أو مقابل ملموس للداعمين.', Icon: SearchX },
    { title: 'قرارات انطباعية', desc: 'القرارات الاستثمارية مبنية على انطباعات شخصية لا على إشارات سلوكية حقيقية وبيانات قابلة للقياس.', Icon: XCircle },
];

export default function ChallengeSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.chal-card', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.chal-grid', start: 'top 85%' },
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
                direction: 'rtl',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{ marginBottom: 80 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        03 — التحدي
                    </span>
                    <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#fff', maxWidth: 800, lineHeight: 1.1 }}>
                        المشكلة التي <span style={{ color: '#FF4D4D' }}>نحلها.</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="chal-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 24,
                }}>
                    {challenges.map((c, i) => (
                        <div key={i} className="chal-card" style={{
                            background: '#0A0A0A',
                            border: '1px solid #1A1A1A',
                            padding: 40,
                            borderRadius: 0,
                            transition: 'border-color 0.3s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#333'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
                        >
                            <c.Icon size={32} color="#FF4D4D" style={{ marginBottom: 24 }} strokeWidth={1.5} />
                            <h3 style={{ fontSize: 20, color: '#fff', marginBottom: 12 }}>{c.title}</h3>
                            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.6 }}>{c.desc}</p>
                            <span style={{ fontSize: 10, color: '#333', fontFamily: 'monospace', display: 'block', marginTop: 24 }}>بذرة نسخه ٢٠٠٠٠</span>
                        </div>
                    ))}
                </div>

                {/* Footer Strong Conclusion */}
                <div style={{ marginTop: 80, borderTop: '1px solid #1A1A1A', paddingTop: 40 }}>
                    <h4 style={{ fontSize: 24, color: '#fff', marginBottom: 8 }}>النتيجة</h4>
                    <p style={{ fontSize: 18, color: '#888' }}>
                        ضبابية في اتخاذ القرار وهدر للوقت والفرص والموارد.
                    </p>
                    <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace', display: 'block', marginTop: 12 }}>بذرة نسخه ٢٠٠٠٠</span>
                </div>

            </div>
        </section>
    );
}
