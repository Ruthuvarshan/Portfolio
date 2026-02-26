import React, { useEffect, useRef } from 'react'
import { History } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const timelineData = [
    {
        year: '2023',
        era: 'Origins',
        title: 'The Learning Phase',
        desc: 'Built a strong foundation in Python, Java, Data Structures & Algorithms, and web fundamentals. Started exploring AI/ML concepts and frameworks.',
        tags: ['Python', 'Java', 'DSA', 'HTML/CSS'],
    },
    {
        year: '2024',
        era: 'Rise',
        title: 'ML Projects Era',
        desc: 'Completed major ML projects including Wind Turbine Power Prediction and Cognitive Guardian. Delved deep into data science and model development.',
        tags: ['Scikit-learn', 'Pandas', 'TensorFlow', 'MySQL'],
    },
    {
        year: '2025',
        era: 'Power',
        title: 'Dashboards & Architecture',
        desc: 'Built analytics dashboards with IBM Cognos, developed the full-stack POS System, and gained hands-on experience with cloud and DevOps tools.',
        tags: ['IBM Cognos', 'PHP', 'React', 'Docker'],
    },
    {
        year: '2026',
        era: 'Dev-Verse',
        title: 'AI Developer & Beyond',
        desc: 'Targeting placements as an AI & DS Developer. Building production-ready intelligent systems, contributing to open source, and mastering system design.',
        tags: ['AI/ML', 'System Design', 'Open Source', 'Leadership'],
    },
]

export default function Timeline() {
    const sectionRef = useRef(null)
    const { characterTheme } = useTheme()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1'
                        entry.target.style.transform = 'translateY(0)'
                    }
                })
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        )

        const items = sectionRef.current?.querySelectorAll('.timeline__item')
        items?.forEach((item, i) => {
            item.style.opacity = '0'
            item.style.transform = 'translateY(40px)'
            item.style.transition = `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`
            observer.observe(item)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section id="timeline" className="section timeline" ref={sectionRef}>
            <div className="container">
                <div className="timeline__header">
                    <p className="section-tag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <History size={14} /> Journey
                    </p>
                    <h2 className="section-title">
                        My <span className="red">{characterTheme === 'spider' ? 'Dev-Verse' : 'Dragon'}</span> Timeline
                    </h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 500, margin: '0.75rem auto 0' }}>
                        {characterTheme === 'spider' ? 'Every hero has an origin story. This is mine.' : 'Forged in the fires of code. This is my journey.'}
                    </p>
                </div>

                <div className="timeline__track">
                    {timelineData.map((item, i) => (
                        <div className="timeline__item" key={item.year}>
                            {/* Portal node */}
                            <div className="timeline__portal">
                                <div className="portal-ring" />
                                <div className="portal-ring-inner" />
                                <div className="portal-center">
                                    <span className="portal-year">{item.year}</span>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="timeline__card">
                                <p className="timeline__era">{item.era}</p>
                                <h3 className="timeline__title">{item.title}</h3>
                                <p className="timeline__desc">{item.desc}</p>
                                <div className="timeline__tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="stack-tag">{tag}</span>
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
