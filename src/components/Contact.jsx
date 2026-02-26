import React, { useState, useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Loader, Flame } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const formRef = useRef(null)
    const { characterTheme } = useTheme()

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSending(true)
        // Simulate send
        setTimeout(() => {
            setSending(false)
            setSent(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setSent(false), 5000)
        }, 1800)
    }

    return (
        <section id="contact" className="section contact">
            {/* Star/particle background */}
            <div className="contact__bg-stars" />

            {/* Web strands decorative */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 200, opacity: 0.07, zIndex: 1, pointerEvents: 'none' }}
                viewBox="0 0 1200 200" preserveAspectRatio="none">
                <line x1="100" y1="0" x2="600" y2="200" stroke="white" strokeWidth="0.8" />
                <line x1="300" y1="0" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
                <line x1="600" y1="0" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
                <line x1="900" y1="0" x2="600" y2="200" stroke="white" strokeWidth="0.5" />
                <line x1="1100" y1="0" x2="600" y2="200" stroke="white" strokeWidth="0.8" />
                <circle cx="600" cy="200" r="6" fill="none" stroke="#E62429" strokeWidth="1.5" opacity="0.8" />
            </svg>

            <div className="container contact__content">
                <div className="contact__split">
                    {/* Left – info */}
                    <div className="contact__left">
                        {/* Signal */}
                        <div className="contact__signal">
                            <div className="signal-beam" />
                            <div className="signal-beam" />
                            <div className="signal-beam" />
                            {characterTheme === 'spider' ? (
                                <svg className="signal-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                    {/* City skyline silhouette */}
                                    <rect fill="var(--bg-secondary)" x="0" y="80" width="120" height="40" />
                                    <rect fill="var(--bg-main)" x="5" y="65" width="15" height="55" />
                                    <rect fill="var(--bg-main)" x="25" y="72" width="12" height="48" />
                                    <rect fill="var(--bg-main)" x="42" y="60" width="18" height="60" />
                                    <rect fill="var(--bg-main)" x="65" y="68" width="14" height="52" />
                                    <rect fill="var(--bg-main)" x="84" y="74" width="12" height="46" />
                                    <rect fill="var(--bg-main)" x="100" y="62" width="16" height="58" />
                                    {/* Spider signal beam */}
                                    <path d="M 60 20 L 20 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
                                    <path d="M 60 20 L 40 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.4" />
                                    <path d="M 60 20 L 60 80" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                                    <path d="M 60 20 L 80 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.4" />
                                    <path d="M 60 20 L 100 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
                                    {/* Spider Image */}
                                    <image href="/spiderman_image.png" x="45" y="5" width="30" height="30" />
                                </svg>
                            ) : (
                                <svg className="signal-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                    {/* Mountain silhouette */}
                                    <path d="M 0 120 L 20 70 L 40 100 L 70 50 L 100 90 L 120 60 L 120 120 Z" fill="var(--bg-secondary)" />
                                    {/* Dragon eye signal */}
                                    <path d="M 60 20 L 30 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
                                    <path d="M 60 20 L 50 80" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                                    <path d="M 60 20 L 70 80" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                                    <path d="M 60 20 L 90 80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
                                    {/* Dragon Logo Graphic */}
                                    <image href="/green-dragon-logo.png" x="45" y="5" width="30" height="30" />
                                </svg>
                            )}
                        </div>

                        <p className="signal-click-hint" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            {characterTheme === 'spider' ? <><Send size={16} /> Send a Signal</> : <><Flame size={16} /> Summon the Dragon</>}
                        </p>

                        <h2 className="section-title contact__title">
                            Let's <span className="red">Connect</span>
                        </h2>
                        <p className="contact__sub">
                            Looking for an AI & DS developer for your team? Let's build something amazing together.
                        </p>

                        <ul className="contact__info-list">
                            <li>
                                <span className="info-icon"><Mail size={18} /></span>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruthuvarshan18@gmail.com" target="_blank" rel="noopener noreferrer">ruthuvarshan18@gmail.com</a>
                            </li>
                            <li>
                                <span className="info-icon"><Linkedin size={18} /></span>
                                <a href="https://www.linkedin.com/in/ruthuvarshan-elango/" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/ruthuvarshan-elango
                                </a>
                            </li>
                            <li>
                                <span className="info-icon"><Github size={18} /></span>
                                <a href="https://github.com/ruthuvarshan" target="_blank" rel="noopener noreferrer">
                                    github.com/ruthuvarshan
                                </a>
                            </li>
                            <li>
                                <span className="info-icon"><MapPin size={18} /></span>
                                <a href="https://maps.app.goo.gl/1SExyAxyfT1hAgbq9" target="_blank" rel="noopener noreferrer">Salem, Tamil Nadu, India</a>
                            </li>
                            <li>
                                <span className="info-icon"><span style={{ fontWeight: 'bold' }}>#</span></span>
                                <a href="tel:+916379333049">+91 6379333049</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right – form */}
                    <div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            {sent ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <div style={{ marginBottom: '1rem', color: 'var(--red)', display: 'flex', justifyContent: 'center' }}>
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--red)', marginBottom: '0.5rem' }}>
                                        Message Sent!
                                    </h3>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                                        Your signal has been received. I'll swing by soon!
                                    </p>
                                </div>
                            ) : (
                                <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.9rem', letterSpacing: 2, color: 'var(--text-main)' }}>
                                            Send a Message
                                        </h3>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            id="name" name="name" type="text"
                                            placeholder="Peter Parker"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            id="email" name="email" type="email"
                                            placeholder="peter@dailybugle.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message" name="message"
                                            placeholder={characterTheme === 'spider' ? "With great power comes great responsibility..." : "Wisdom is an omnipotent weapon..."}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        style={{ width: '100%', textAlign: 'center', opacity: sending ? 0.7 : 1 }}
                                        disabled={sending}
                                    >
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                            {sending ? (
                                                <><Loader className="spin" size={16} /> {characterTheme === 'spider' ? 'Shooting Web...' : 'Breathing Fire...'}</>
                                            ) : (
                                                <><Send size={16} /> {characterTheme === 'spider' ? 'Send Signal' : 'Send Scroll'}</>
                                            )}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
