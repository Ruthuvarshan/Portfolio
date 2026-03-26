import React, { useEffect, useRef, useState } from 'react'
import { Tilt } from 'react-tilt'
import { ShoppingCart, Wind, BarChart, Gamepad2, Brain, Database, LayoutGrid, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const featuredProjects = [
    {
        emoji: <ShoppingCart size={28} color="var(--text-main)" />,
        title: 'Retail POS System',
        description: 'A comprehensive Retail Point of Sales (POS) system designed to streamline inventory management, sales tracking, and transaction processing. Built with an emphasis on advanced database management techniques, offering high-efficiency data flow for retail scenarios.',
        stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        github: 'https://github.com/Ruthuvarshan/Retail-POS-system---Advanced',
        demo: null,
    },
    {
        emoji: <BarChart size={28} color="var(--text-main)" />,
        title: 'Next Gen Target Marketing',
        description: 'An innovative AI-driven generative framework for real-time, emotion-aware advertisement creation. It dynamically maps real-time live audience analytics to highly customized algorithmic marketing outputs, maximizing click-through and engagement rates.',
        stack: ['Python', 'AI/ML Analytics', 'Marketing APIs'],
        github: 'https://github.com/Ruthuvarshan/Next-Gen-target-marketing',
        demo: null,
    },
    {
        emoji: <Brain size={28} color="var(--text-main)" />,
        title: 'Cognitive Guardian',
        description: 'An ambitious hardware/software ecosystem aiming to set a new global standard for tourist safety. It leverages behavioral pattern tracking and early anomaly detection to trigger rapid incident responses in remote areas with poor or no cellular signal.',
        stack: ['Python', 'TensorFlow', 'NLP', 'Flask'],
        github: 'https://github.com/Ruthuvarshan/Cognitive-Guardian',
        demo: null,
    },
]

const moreProjects = [
    {
        emoji: '📊',
        title: 'Chalkboard Analytics Dashboard',
        description: 'Interactive BI dashboard built with IBM Cognos visualizing student, teacher, and institutional performance metrics.',
        stack: ['IBM Cognos', 'SQL', 'Data Modeling'],
        github: 'https://github.com/Ruthuvarshan/CBA_BI',
    },
    {
        emoji: '🏦',
        title: 'Next Gen Loan',
        description: 'ML model predicting loan approval decisions and detecting fraudulent applications using ensemble learning techniques.',
        stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/Ruthuvarshan/Next_Gen_Loan',
    },
]

export default function Projects() {
    const sectionRef = useRef(null)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.project-card')
                        cards.forEach((card, i) => {
                            card.style.opacity = '0'
                            card.style.transform = 'translateY(40px)'
                            setTimeout(() => {
                                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
                                card.style.opacity = '1'
                                card.style.transform = 'translateY(0)'
                            }, i * 120)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="section projects" ref={sectionRef}>
            {/* ── Rich Animated Background ── */}
            <div className="projects__video-bg">
                <div className="projects__animated-bg" />
            </div>

            {/* Hex grid overlay */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, zIndex: 1, pointerEvents: 'none' }}
                preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
                {/* Web strands */}
                <line x1="0" y1="0" x2="600" y2="450" stroke="white" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="400" y2="900" stroke="white" strokeWidth="0.5" />
                <line x1="1200" y1="0" x2="600" y2="450" stroke="white" strokeWidth="0.8" />
                <line x1="1200" y1="0" x2="800" y2="900" stroke="white" strokeWidth="0.5" />
                <line x1="600" y1="0" x2="600" y2="900" stroke="white" strokeWidth="0.3" />
                <line x1="0" y1="450" x2="1200" y2="450" stroke="white" strokeWidth="0.3" />
                {/* Concentric arcs */}
                {[100, 200, 300, 400, 500].map(r => (
                    <ellipse key={r} cx="600" cy="450" rx={r * 1.5} ry={r} fill="none" stroke="white" strokeWidth="0.4" />
                ))}
                {/* Cross-hatch nodes */}
                {[150, 300, 450, 600, 750, 900, 1050].map(x =>
                    [150, 300, 450, 600, 750].map(y => (
                        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="rgba(230,36,41,0.5)" />
                    ))
                )}
            </svg>

            {/* Floating glow orbs */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,36,41,0.07) 0%, transparent 70%)', animation: 'floatOrb 12s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', animation: 'floatOrb 16s ease-in-out infinite reverse' }} />
                <div style={{ position: 'absolute', top: '50%', left: '42%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', animation: 'floatOrb 10s ease-in-out infinite 3s' }} />
            </div>

            <div className="projects__web-overlay" />

            {/* ── Content ── */}
            <div className="projects__content">
                <div className="container">
                    <div className="projects__header">
                        <p className="section-tag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <LayoutGrid size={14} /> My Work
                        </p>
                        <h2 className="section-title">
                            Featured <span className="red">Projects</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 500, margin: '0.75rem auto 0' }}>
                            Real-world projects built with passion, precision, and a little web-slinging.
                        </p>
                    </div>

                    {/* ── Featured (3-columns) ── */}
                    <div className="projects__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {featuredProjects.map((project, i) => (
                            <ProjectCard key={i} {...project} featured />
                        ))}
                    </div>

                    {/* ── Divider + Show More ── */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '3rem 0 1.5rem' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                        <button
                            onClick={() => setShowMore(p => !p)}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid rgba(230,36,41,0.4)', background: 'rgba(230,36,41,0.08)', color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                        >
                            {showMore ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                            {showMore ? 'Hide' : 'More'} Projects
                        </button>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                    </div>

                    {/* ── More Projects (compact list) ── */}
                    <AnimatePresence>
                        {showMore && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', paddingBottom: '1rem' }}>
                                    {moreProjects.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="glass-card"
                                            style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                <span style={{ fontSize: '1.4rem' }}>{p.emoji}</span>
                                                <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>{p.title}</h3>
                                            </div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>{p.description}</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                                {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
                                            </div>
                                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link project-link--github" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', alignSelf: 'flex-start', marginTop: 'auto' }}>
                                                <Github size={13} /> GitHub
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ emoji, title, description, stack, github, demo }) {
    const { characterTheme } = useTheme()

    return (
        <Tilt options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.15 }} className="project-card-tilt-wrapper">
            <div className="project-card">
                {/* Hover Icon */}
                <div className="project-card__spider">
                    {characterTheme === 'spider' ? (
                        <img src="/spiderman_image.png" alt="Spider-Man" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                        <img src="/green-dragon-logo.png" alt="Dragon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    )}
                </div>

                <span className="project-card__emoji">{emoji}</span>
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>

                <div className="project-card__stack">
                    {stack.map(tag => (
                        <span key={tag} className="stack-tag">{tag}</span>
                    ))}
                </div>

                <div className="project-card__links">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="project-link project-link--github" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Github size={14} /> GitHub
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link project-link--demo" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <ExternalLink size={14} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </Tilt>
    )
}
