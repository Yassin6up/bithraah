'use client';

import { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus, Mail, Info, Briefcase } from 'lucide-react';

const navLinks = [
    { label: 'الرئيسية', href: '#' },
    { label: 'عن بذرة', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'تواصل معنا', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: isScrolled ? 20 : 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isScrolled ? '85%' : '100%',
                    maxWidth: isScrolled ? '1200px' : '100%',
                    zIndex: 1000,
                    padding: isScrolled ? '12px 24px' : '16px 48px',
                    background: isScrolled
                        ? 'rgba(8, 10, 16, 0.85)'
                        : 'linear-gradient(180deg, rgba(8, 10, 16, 0.9) 0%, transparent 100%)',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    borderRadius: isScrolled ? '16px' : '0',
                    border: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: 1400,
                    margin: '0 auto',
                }}>
                    {/* Logo */}
                    <a href="#" style={{ textDecoration: 'none' }}>
                        <h1 className="gradient" style={{
                            fontSize: isScrolled ? 24 : 28,
                            fontWeight: 900,
                            transition: 'font-size 0.3s ease',
                        }}>
                            بذرة
                        </h1>
                    </a>

                    {/* Desktop Navigation */}
                    <nav style={{
                        alignItems: 'center',
                        gap: 32,
                    }} className="hidden md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    color: 'rgba(237, 235, 255, 0.7)',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#4DFFF3'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(237, 235, 255, 0.7)'}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div style={{ alignItems: 'center', gap: 12 }} className="hidden md:flex">
                        <button
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '10px 20px',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: 10,
                                color: 'var(--light)',
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#B56CFF';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(181, 108, 255, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <LogIn size={16} />
                            تسجيل الدخول
                        </button>

                        <button
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '10px 20px',
                                background: 'linear-gradient(135deg, #4DFFF3, #2dd4bf)',
                                border: 'none',
                                borderRadius: 10,
                                color: '#080A10',
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(77, 255, 243, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <UserPlus size={16} />
                            إنشاء حساب
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--light)',
                            cursor: 'pointer',
                            padding: 8,
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(8, 10, 16, 0.98)',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 24,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.4s ease',
                    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            color: 'var(--light)',
                            textDecoration: 'none',
                            fontSize: 24,
                            fontWeight: 600,
                        }}
                    >
                        {link.label}
                    </a>
                ))}

                <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                    <button className="btn btn-ghost" onClick={() => setIsMobileMenuOpen(false)}>
                        <LogIn size={18} />
                        تسجيل الدخول
                    </button>
                    <button className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <UserPlus size={18} />
                        إنشاء حساب
                    </button>
                </div>
            </div>
        </>
    );
}
