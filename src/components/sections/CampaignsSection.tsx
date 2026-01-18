'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, User, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CampaignsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.from('.camp-card', {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                scrollTrigger: { trigger: '.camp-grid', start: 'top 80%' },
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
                borderTop: '1px solid #111',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666', marginBottom: 20, display: 'block' }}>
                        08 — الحملات
                    </span>
                    <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff' }}>نظام الحملات المرن</h2>
                </div>

                {/* Comparison Grid */}
                <div className="camp-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 40
                }}>

                    {/* Basic Mode */}
                    <div className="camp-card" style={{
                        background: '#080808',
                        border: '1px solid #1A1A1A',
                        padding: 40,
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                            <div style={{ width: 48, height: 48, background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={24} color="#888" />
                            </div>
                            <h3 style={{ fontSize: 24, color: '#fff' }}>الوضع الأساسي</h3>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {[
                                'إنشاء حملة واحدة في وقت واحد',
                                'عرض احترافي للفكرة والمشروع',
                                'نظام دعم مقابل مكافآت متنوعة',
                                'فتح باب التفاوض مع المهتمين',
                                'عرض الحملات السابقة والإنجازات',
                                'لوحة تحكم أساسية لمتابعة الأداء'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: '#888' }}>
                                    <Check size={16} color="#444" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div style={{ fontSize: 10, color: '#333', marginTop: 40, fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</div>
                    </div>

                    {/* Dreamers / Thinkers Mode */}
                    <div className="camp-card" style={{
                        background: 'linear-gradient(180deg, #0A0A0A 0%, #050505 100%)',
                        border: '1px solid #333',
                        padding: 40,
                        position: 'relative',
                        boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ position: 'absolute', top: -1, right: 40, height: 2, width: 100, background: '#4DFFF3', boxShadow: '0 0 10px #4DFFF3' }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                            <div style={{ width: 48, height: 48, background: 'rgba(77, 255, 243, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Sparkles size={24} color="#4DFFF3" />
                            </div>
                            <h3 style={{ fontSize: 24, color: '#fff' }}>اشتراك الحالمون / المفكرون</h3>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {[
                                'تشغيل حملتين أو ثلاث بالتوازي',
                                'استوديو حملات متقدم باحترافية عالية',
                                'لوحة تحكم تفصيلية وتحليلات عميقة',
                                'مقارنة أداء الحملات المتعددة',
                                'أدوات تنظيم وعرض احترافية متقدمة',
                                'أولوية في الظهور والترويج'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: '#fff' }}>
                                    <Check size={16} color="#4DFFF3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div style={{ fontSize: 10, color: '#444', marginTop: 40, fontFamily: 'monospace' }}>بذرة نسخه ٢٠٠٠٠</div>
                    </div>

                </div>

            </div>
        </section>
    );
}
