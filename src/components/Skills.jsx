import React, { useEffect, useRef } from 'react'
import { Monitor, Server, Brain, Database, Cloud, Wrench, Zap } from 'lucide-react'

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Monitor size={18} />,
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Vite', 'Framer Motion'],
    },
    {
        title: 'Backend',
        icon: <Server size={18} />,
        skills: ['Python', 'Java', 'PHP', 'Node.js', 'REST APIs'],
    },
    {
        title: 'AI / ML',
        icon: <Brain size={18} />,
        skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'IBM Watson', 'NLP'],
    },
    {
        title: 'Databases',
        icon: <Database size={18} />,
        skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
    },
    {
        title: 'DevOps & Cloud',
        icon: <Cloud size={18} />,
        skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Vercel', 'CI/CD'],
    },
    {
        title: 'Tools',
        icon: <Wrench size={18} />,
        skills: ['IBM Cognos', 'Jupyter', 'VS Code', 'Figma', 'Postman'],
    },
]

export default function Skills() {
    const sectionRef = useRef(null)
    const itemRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.skill-item')
                        items.forEach((item, i) => {
                            setTimeout(() => item.classList.add('visible'), i * 80)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        const categories = sectionRef.current?.querySelectorAll('.skill-category')
        categories?.forEach(cat => observer.observe(cat))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <div className="skills__header">
                    <p className="section-tag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <Zap size={14} /> Arsenal
                    </p>
                    <h2 className="section-title">
                        Skills &amp; <span className="red">Technologies</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 500, margin: '0.75rem auto 0' }}>
                        Strands in my web — each skill woven together to build something extraordinary.
                    </p>
                </div>

                {/* Decorative web lines at top */}
                <WebDecoration />

                <div className="skills__categories">
                    {skillCategories.map((cat, ci) => (
                        <div className="skill-category" key={cat.title}>
                            <div className="skill-category__title">
                                <span>{cat.icon}</span> {cat.title}
                            </div>
                            <div className="skills-web-container">
                                <div className="skills-list">
                                    {cat.skills.map((skill, si) => (
                                        <span
                                            key={skill}
                                            className="skill-item"
                                            style={{ animationDelay: `${si * 0.08}s` }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function WebDecoration() {
    return (
        <svg
            viewBox="0 0 1200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 60, marginBottom: '3rem', opacity: 0.3 }}
        >
            {/* Horizontal strands */}
            <line x1="0" y1="10" x2="1200" y2="10" stroke="#E62429" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="0" y1="30" x2="1200" y2="30" stroke="#E62429" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="0" y1="50" x2="1200" y2="50" stroke="#E62429" strokeWidth="0.5" strokeDasharray="4 8" />
            {/* Diagonal strands */}
            {Array.from({ length: 20 }, (_, i) => (
                <line key={i}
                    x1={i * 63} y1="0"
                    x2={i * 63 - 40} y2="60"
                    stroke="rgba(245,245,245,0.2)" strokeWidth="0.4"
                />
            ))}
            {/* Anchor circles */}
            {[150, 350, 600, 850, 1050].map(x => (
                <circle key={x} cx={x} cy="30" r="4" fill="none" stroke="#E62429" strokeWidth="1" opacity="0.6" />
            ))}
        </svg>
    )
}
