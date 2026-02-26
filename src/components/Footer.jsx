import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const socialLinks = [
    { label: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/ruthuvarshan' },
    { label: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ruthuvarshan' },
    { label: 'Email', icon: <Mail size={20} />, href: 'mailto:ruthuvarshan@gmail.com' },
]

export default function Footer() {
    const { characterTheme } = useTheme()

    return (
        <footer className="footer">
            <div className="footer__inner">
                {/* Web SVG decoration */}
                <svg viewBox="0 0 400 20" style={{ width: '100%', maxWidth: 400, opacity: 0.15 }}>
                    <line x1="0" y1="10" x2="400" y2="10" stroke="#E62429" strokeWidth="0.5" strokeDasharray="4 6" />
                    {[60, 140, 200, 260, 340].map(x => (
                        <circle key={x} cx={x} cy="10" r="3" fill="none" stroke="#E62429" strokeWidth="0.8" />
                    ))}
                </svg>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="footer__logo">
                        Ruthu<span className="red">varshan</span>
                    </span>
                </div>

                <p className="footer__tagline">
                    {characterTheme === 'spider' ? '"With Great Power Comes Great Code" — Into the Dev-Verse' : '"Wisdom is an omnipotent weapon" — Enter the Dungeon'}
                </p>

                <div className="footer__social">
                    {socialLinks.map(({ label, icon, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}>
                            {icon}
                        </a>
                    ))}
                </div>

                <p className="footer__copy">
                    © 2026 Ruthuvarshan · Built with React + Vite · Designed in the Dev-Verse
                </p>
            </div>
        </footer>
    )
}
