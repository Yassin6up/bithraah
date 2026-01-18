'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Heart, TrendingUp, Megaphone, User, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = [
    { title: 'مفكر', sub: 'THINKER', desc: 'صاحب الفكرة والرؤية الابتكارية الذي يضع الأساس ويقود المشروع نحو النجاح', Icon: Lightbulb, color: '#B56CFF' },
    { title: 'داعم', sub: 'SUPPORTER', desc: 'الشريك الاستراتيجي الذي يقدم الدعم والمساندة والخبرة في رحلة النمو', Icon: Heart, color: '#4DFFF3' },
    { title: 'مستثمر', sub: 'INVESTOR', desc: 'الممول الذي يؤمن بالإمكانات ويساهم في تحقيق النمو المستدام', Icon: TrendingUp, color: '#C77DFF' },
    { title: 'مسوق', sub: 'MARKETER', desc: 'الاستراتيجي الذي ينشر الرسالة ويوسع نطاق التأثير والوصول', Icon: Megaphone, color: '#5CE1E6' },
];

const benefits = [
    'محفظة رقمية موحدة لجميع أدوارك',
    'تبديل الأدوار بسلاسة دون إنشاء حسابات جديدة',
    'إدارة مركزية لجميع مشاريعك واستثماراتك',
    'خصوصية وأمان على مستوى كل دور',
];

export default function OneUserSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#080A10',
                padding: '100px 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background */}
            <div style={{ position: 'absolute', width: 600, height: 600, top: '20%', right: '-15%', background: '#B56CFF', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.08 }} />
            <div style={{ position: 'absolute', width: 400, height: 400, bottom: '10%', left: '5%', background: '#4DFFF3', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.06 }} />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="ou-header" style={{ textAlign: 'center', marginBottom: 50 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237, 235, 255, 0.5)', marginBottom: 14 }}>المبدأ الأساسي</p>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, background: 'linear-gradient(135deg, #B56CFF, #4DFFF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 14 }}>
                        مبدأ المستخدم الواحد
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(237, 235, 255, 0.6)', maxWidth: 500, margin: '0 auto' }}>
                        في بذرة، أنت لست بحاجة لحسابات متعددة. هوية واحدة تمنحك جميع الأدوار
                    </p>
                </div>

                {/* Concept Visual */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 50, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 28px', background: 'rgba(181, 108, 255, 0.1)', border: '1px solid rgba(181, 108, 255, 0.25)', borderRadius: 12 }}>
                        <User size={22} style={{ color: '#B56CFF' }} />
                        <span style={{ fontSize: 16, fontWeight: 600, color: '#EDEBFF' }}>حساب واحد</span>
                    </div>
                    <span style={{ fontSize: 28, color: 'rgba(237, 235, 255, 0.3)' }}>→</span>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {roles.map((r) => (
                            <span key={r.title} style={{ padding: '8px 18px', background: `${r.color}15`, border: `1px solid ${r.color}35`, borderRadius: 8, color: r.color, fontWeight: 600, fontSize: 13 }}>{r.title}</span>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="cards-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, marginBottom: 50 }}>
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="role-card"
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                borderRadius: 16,
                                padding: '28px 20px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div style={{
                                width: 56,
                                height: 56,
                                margin: '0 auto 20px',
                                borderRadius: 14,
                                background: `${role.color}12`,
                                border: `1px solid ${role.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <role.Icon size={26} style={{ color: role.color }} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, color: role.color, marginBottom: 4 }}>{role.title}</h3>
                            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(237, 235, 255, 0.4)', marginBottom: 14 }}>{role.sub}</p>
                            <p style={{ fontSize: 13, color: 'rgba(237, 235, 255, 0.6)', lineHeight: 1.7 }}>{role.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <div className="benefits-box" style={{ maxWidth: 550, margin: '0 auto', padding: 28, background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 16 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, textAlign: 'center', color: '#EDEBFF' }}>مميزات الهوية الموحدة</h3>
                    <div style={{ display: 'grid', gap: 14 }}>
                        {benefits.map((b, i) => (
                            <div key={i} className="benefit-row" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(77, 255, 243, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Check size={14} style={{ color: '#4DFFF3' }} />
                                </div>
                                <p style={{ fontSize: 14, color: 'rgba(237, 235, 255, 0.75)' }}>{b}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <p style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: 'rgba(237, 235, 255, 0.4)' }}>
                    <span style={{ color: '#B56CFF' }}>هوية واحدة</span> · <span style={{ color: '#4DFFF3' }}>إمكانيات لا محدودة</span>
                </p>
            </div>

            <style jsx>{`
        @media (max-width: 900px) {
          .cards-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .cards-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
