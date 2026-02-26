import React, { useEffect, useRef } from 'react'
import { Tilt } from 'react-tilt'
import { ShoppingCart, Wind, BarChart, Gamepad2, Brain, Coffee, LayoutGrid, Github, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
    {
        emoji: <ShoppingCart size={28} color="var(--text-main)" />,
        title: 'Retail POS System',
        description: 'A full-featured Point of Sale system with inventory management, billing, and real-time sales reporting for retail environments.',
        stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        github: 'https://github.com/Ruthuvarshan/Retail-POS-system---Advanced',
        demo: null,
    },
    {
        emoji: <Wind size={28} color="var(--text-main)" />,
        title: 'Next Gen Loan',
        description: 'ML model predicting loan approval and fraud detection.',
        stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/Ruthuvarshan/Next_Gen_Loan',
        demo: null,
    },
    {
        emoji: <BarChart size={28} color="var(--text-main)" />,
        title: 'Chalkboard Analytics Dashboard',
        description: 'Interactive business intelligence dashboard built with IBM Cognos, visualizing student, teacher, and performance metrics.',
        stack: ['IBM Cognos', 'SQL', 'Data Modeling'],
        github: 'https://github.com/Ruthuvarshan/CBA_BI',
        demo: null,
    },
    {
        emoji: <Gamepad2 size={28} color="var(--text-main)" />,
        title: 'Next Gen Target Marketing',
        description: 'AI ad generation tool mapping audience analytics to highly targeted marketing output.',
        stack: ['AI', 'Python', 'Marketing API'],
        github: 'https://github.com/Ruthuvarshan/Next-Gen-target-marketing',
        demo: null,
    },
    {
        emoji: <Brain size={28} color="var(--text-main)" />,
        title: 'Cognitive Guardian (Ongoing)',
        description: 'Tourist safety protection system tracking patterns for early anomaly detection in areas with no cellular signal.',
        stack: ['Python', 'TensorFlow', 'NLP', 'Flask'],
        github: 'https://github.com/Ruthuvarshan/Cognitive-Guardian',
        demo: null,
    },
]

export default function Projects() {
    const sectionRef = useRef(null)

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
            {/* Animated web background */}
            <div className="projects__video-bg">
                <div className="projects__animated-bg" />
            </div>
            <div className="projects__web-overlay" />

            {/* Animated web strands */}
            <svg
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, zIndex: 1, pointerEvents: 'none' }}
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 1200 800"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Web strands from corners */}
                <line x1="0" y1="0" x2="600" y2="400" stroke="white" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="400" y2="800" stroke="white" strokeWidth="0.5" />
                <line x1="1200" y1="0" x2="600" y2="400" stroke="white" strokeWidth="0.8" />
                <line x1="1200" y1="0" x2="800" y2="800" stroke="white" strokeWidth="0.5" />
                <line x1="600" y1="0" x2="600" y2="800" stroke="white" strokeWidth="0.3" />
                {/* Concentric arcs */}
                {[80, 160, 240, 320, 400].map(r => (
                    <ellipse key={r} cx="600" cy="400" rx={r * 1.5} ry={r} fill="none" stroke="white" strokeWidth="0.4" />
                ))}
            </svg>

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

                    <div className="projects__grid">
                        {projects.map((project, i) => (
                            <ProjectCard key={i} {...project} />
                        ))}
                    </div>
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
