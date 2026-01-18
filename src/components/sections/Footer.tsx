'use client';

import { Twitter, Instagram, Linkedin, Send, Mail } from 'lucide-react';

const socials = [
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Send, href: '#' },
];

export default function Footer() {
    return (
        <footer style={{
            background: '#040608',
            padding: '80px 24px',
            position: 'relative',
        }}>
            {/* Top Border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(181, 108, 255, 0.2), transparent)',
            }} />

            <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                {/* Logo */}
                <h3 className="h2 gradient" style={{ marginBottom: 8 }}>بذرة</h3>
                <p className="label" style={{ letterSpacing: '0.25em', marginBottom: 24 }}>BITHRAH</p>

                <p className="body" style={{ marginBottom: 32 }}>
                    منصة رقمية ذكية للابتكار والاستثمار
                </p>

                {/* Socials */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
                    {socials.map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Icon size={18} style={{ color: 'var(--muted)' }} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>

                {/* Email */}
                <a
                    href="mailto:hello@bithrah.com"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        color: 'var(--muted)',
                        textDecoration: 'none',
                        marginBottom: 32,
                    }}
                >
                    <Mail size={16} strokeWidth={1.5} />
                    hello@bithrah.com
                </a>

                {/* Divider */}
                <div className="line-h" style={{ width: 48, margin: '0 auto 24px' }} />

                {/* Copyright */}
                <p className="label">© 2026 بذرة | Bithrah</p>
            </div>
        </footer>
    );
}
