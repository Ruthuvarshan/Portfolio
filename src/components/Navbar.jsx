import React, { useState, useEffect } from 'react'
import { Sun, Moon, Flame, Bug } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { colorMode, characterTheme, toggleColorMode, toggleCharacterTheme } = useTheme()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    {/* Mythical Magic Sword Logo */}
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                        {/* Glowing Aura */}
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="4 8" />
                        {/* Blade */}
                        <path d="M 50 10 L 45 30 L 45 65 L 50 75 L 55 65 L 55 30 Z" fill="currentColor" opacity="0.9" />
                        <path d="M 50 10 L 45 30 L 45 65 L 50 75 Z" fill="rgba(255,255,255,0.4)" />
                        {/* Crossguard */}
                        <path d="M 30 65 L 70 65 L 65 72 L 50 70 L 35 72 Z" fill="currentColor" />
                        {/* Hilt & Pommel */}
                        <rect x="47" y="70" width="6" height="15" fill="currentColor" opacity="0.8" />
                        <circle cx="50" cy="88" r="4" fill="var(--primary)" />
                        {/* Magic Sparkles */}
                        <path d="M 35 25 L 38 32 L 31 29 Z" fill="var(--primary)" opacity="0.8" />
                        <path d="M 65 45 L 68 52 L 61 49 Z" fill="var(--primary)" opacity="0.8" />
                    </svg>
                    Ruthu<span>.</span>dev
                </a>

                {/* Desktop links */}
                <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a>
                        </li>
                    ))}
                    {/* Theme Toggles */}
                    <li className="navbar__toggles">
                        <button onClick={toggleColorMode} className="theme-toggle-btn" aria-label="Toggle Light/Dark Mode" title="Toggle Light/Dark Mode">
                            {colorMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button onClick={toggleCharacterTheme} className="theme-toggle-btn" aria-label="Toggle Character Theme" title="Toggle Character Theme">
                            {characterTheme === 'spider' ? <Bug size={18} /> : <Flame size={18} />}
                        </button>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="navbar__menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                    <span style={{ opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                </button>
            </div>
        </nav>
    )
}
