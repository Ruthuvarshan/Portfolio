import React, { useEffect, useRef } from 'react'
import { History } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const timelineData = [
    {
        year: '2023',
        era: 'Sprouting',
        title: 'First Roots in Code',
        desc: 'Learned C as my first language and got exposure to programming fundamentals across all engineering code domains. This was the beginning — the spark that lit the fire.',
        tags: ['C', 'Programming Fundamentals', 'Engineering Basics'],
    },
    {
        year: '2024',
        era: 'Learning',
        title: 'Expanding the Stack',
        desc: 'Dived deep into Java, Python, and core CS foundations. Explored data science tools like Pandas, NumPy, and Scikit-learn, opening the door to AI & ML projects.',
        tags: ['Java', 'Python', 'DSA', 'Pandas', 'NumPy', 'Scikit-learn'],
    },
    {
        year: '2025',
        era: 'Power',
        title: 'Data & Analytics Era',
        desc: 'Mastered databases, SQL, and algorithm design. Gained industry-grade analytics skills with IBM Cognos Analytics, IBM SPSS Modeler, and Scala with Spark for big data processing.',
        tags: ['DBMS', 'SQL', 'DAA', 'IBM Cognos', 'IBM SPSS', 'Scala', 'Spark'],
    },
    {
        year: '2026',
        era: 'Dev-Verse',
        title: 'Full-Stack & Mobile',
        desc: 'Entered the world of full-stack and mobile development — from mobile app development to building rich web interfaces with HTML, CSS, JavaScript, and React.js.',
        tags: ['Mobile App Dev', 'HTML', 'CSS', 'JavaScript', 'React.js'],
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
