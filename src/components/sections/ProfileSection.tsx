'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Layers, Award, BarChart3, Globe, Zap, Target, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.profile-item', {
                x: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: { trigger: '.profile-container', start: 'top 80%' },
            });

            gsap.from('.community-item', {
                x: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: { trigger: '.community-container', start: 'top 80%' },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#050505',
                padding: 'clamp(60px, 8vh, 140px) 24px',
                direction: 'rtl',
                position: 'relative'
            }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{ marginBottom: 100 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        07 — الهوية
                    </span>
                    <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#fff' }}>البروفايل والمجتمع</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 80 }}>

                    {/* Subsection: Profile */}
                    <div className="profile-container">
                        <h3 style={{ fontSize: 32, color: '#fff', marginBottom: 40, borderBottom: '1px solid #222', paddingBottom: 20 }}>البروفايل الشخصي</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {[
                                { label: 'بذرة', desc: 'تعريف شخصي بالمستخدم', icon: User },
                                { label: 'اهتمامات', desc: 'مجالات الاهتمام والتخصص', icon: Target },
                                { label: 'سجل النشاطات', desc: 'تاريخ الدعم والمشاركات', icon: ActivityIcon },
                                { label: 'الحملات', desc: 'عرض الحملات الحالية والسابقة', icon: Layers },
                                { label: 'شارات وإنجازات', desc: 'رموز تقدير مرئية', icon: Award },
                                { label: 'أشكال بصرية', desc: 'تخصيص الهوية المرئية', icon: Zap },
                            ].map((item, i) => (
                                <div key={i} className="profile-item" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                    <div style={{ width: 48, height: 48, background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <item.icon size={20} color="#fff" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 18, color: '#fff', marginBottom: 4 }}>{item.label}</h4>
                                        <p style={{ fontSize: 14, color: '#666' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span style={{ fontSize: 10, color: '#333', fontFamily: 'monospace', display: 'block', marginTop: 40 }}>بذرة نسخه ٢٠٠٠٠</span>
                    </div>

                    {/* Subsection: Community */}
                    <div className="community-container">
                        <h3 style={{ fontSize: 32, color: '#fff', marginBottom: 40, borderBottom: '1px solid #222', paddingBottom: 20 }}>المجتمعات</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {[
                                { label: 'مجتمع عام', desc: 'للنقاش وتبادل الأفكار العامة', icon: Globe },
                                { label: 'مجتمعات متخصصة', desc: 'حسب المجالات والاهتمامات', icon: Users },
                                { label: 'عرض الحملات', desc: 'داخل المجتمعات المناسبة', icon: Layers },
                                { label: 'لوحات صدارة', desc: 'عامة ولكل مجتمع', icon: BarChart3 },
                            ].map((item, i) => (
                                <div key={i} className="community-item" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                    <div style={{ width: 48, height: 48, background: '#111', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <item.icon size={20} color="#4DFFF3" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 18, color: '#fff', marginBottom: 4 }}>{item.label}</h4>
                                        <p style={{ fontSize: 14, color: '#666' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="community-item" style={{ marginTop: 40, padding: 32, background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
                                    الترتيب يعتمد على قيمة حقيقية: دعم قوي، حملات مكتملة، تسويق ناجح، تفاعل نوعي
                                </p>
                            </div>
                        </div>
                        <span style={{ fontSize: 10, color: '#333', fontFamily: 'monospace', display: 'block', marginTop: 40 }}>بذرة نسخه ٢٠٠٠٠</span>
                    </div>

                </div>

                {/* Footer Quote */}
                <div style={{ textAlign: 'center', marginTop: 100 }}>
                    <p style={{ fontSize: 24, fontStyle: 'italic', color: '#666' }}>"البروفايل ليس سيرة ذاتية تقليدية… بل هوية حية داخل البيئة."</p>
                </div>

            </div>
        </section>
    );
}

function ActivityIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
