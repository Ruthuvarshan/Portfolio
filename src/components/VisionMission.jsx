import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function VisionMission() {
    return (
        <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">My Vision &amp; <span className="red">Mission</span></h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Driven by purpose, guided by innovation</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                    <FlipCard
                        title="Vision"
                        front="Click to reveal vision"
                        back="To become a leading AI & Data Science engineer who bridges the gap between raw data and real-world impact — building intelligent systems that empower communities, drive innovation, and solve humanity's most complex challenges through the power of technology."
                        accentColor="var(--primary)"
                    />
                    <FlipCard
                        title="Mission"
                        front="Click to reveal mission"
                        back="To continuously grow as a developer by building scalable, ethical, and production-ready AI solutions. I commit to contributing to open-source, mentoring peers, and delivering measurable value through every project I undertake — from data pipelines to full-stack deployments."
                        accentColor="purple"
                    />
                </div>
            </div>
        </section>
    )
}

function FlipCard({ title, front, back, accentColor }) {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            onClick={() => setFlipped(!flipped)}
            style={{ perspective: '1000px', cursor: 'pointer', height: '280px' }}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div style={{
                    position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '1.5rem', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', padding: '2rem',
                    backdropFilter: 'blur(12px)', textAlign: 'center',
                    boxShadow: `0 0 30px rgba(0,0,0,0.3)`,
                    borderTop: `2px solid ${accentColor === 'purple' ? '#8B5CF6' : 'var(--primary)'}`
                }}>
                    <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>⭐</span>
                    <h3 style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.5rem', color: accentColor === 'purple' ? '#8B5CF6' : 'var(--primary)', marginBottom: '0.5rem' }}>{title}</h3>
                    <div style={{ width: '40px', height: '2px', background: accentColor === 'purple' ? '#8B5CF6' : 'var(--primary)', borderRadius: '2px', marginBottom: '1rem' }}></div>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{front}</p>
                </div>

                {/* Back */}
                <div style={{
                    position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: accentColor === 'purple' ? 'rgba(139,92,246,0.1)' : 'rgba(230,36,41,0.08)',
                    border: `1px solid ${accentColor === 'purple' ? 'rgba(139,92,246,0.4)' : 'rgba(230,36,41,0.4)'}`,
                    borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '2.5rem', backdropFilter: 'blur(12px)', textAlign: 'center',
                }}>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>{back}</p>
                </div>
            </motion.div>
        </div>
    )
}
