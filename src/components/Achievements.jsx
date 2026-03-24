import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Trophy } from 'lucide-react'

const achievements = [
    {
        emoji: '☁️', year: '2024', title: 'IBM Cloud Internship',
        category: 'Internship',
        desc: 'Completed IBM SkillsBuild internship on IBM Cloud fundamentals, gaining hands-on experience with cloud deployment, containers, and AI services.',
        color: '#1261FE'
    },
    {
        emoji: '🏆', year: '2024', title: 'Hackathon Finalist',
        category: 'Competition',
        desc: 'Reached the finals in a national-level hackathon with an AI-driven solution, competing against 200+ teams.',
        color: '#F7DF1E'
    },
    {
        emoji: '📊', year: '2024', title: 'IBM Cognos Analytics',
        category: 'Certification',
        desc: 'Certified in IBM Cognos Analytics, building BI dashboards and predictive reports for academic and business datasets.',
        color: '#052FAD'
    },
    {
        emoji: '🧠', year: '2025', title: 'AI & ML Research',
        category: 'Research',
        desc: 'Ongoing research on applying transformer-based NLP models for anomaly detection in low-connectivity IoT environments.',
        color: '#8B5CF6'
    },
    {
        emoji: '🚀', year: '2025', title: 'Next Gen Target Marketing',
        category: 'Project',
        desc: 'Built an end-to-end AI ad generation platform leveraging marketing APIs and audience segmentation with Python.',
        color: '#E62429'
    },
    {
        emoji: '📱', year: '2025', title: 'Cognitive Guardian',
        category: 'Patent Pending',
        desc: 'Tourist safety system developed to detect anomalies without cellular signal. Patent application filed for the core ML architecture.',
        color: '#10B981'
    },
]

export default function Achievements() {
    return (
        <section className="section" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <p className="section-tag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <Trophy size={14} /> Recognition
                    </p>
                    <h2 className="section-title">My <span className="red">Achievements</span></h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Recognition & milestones on my innovation journey</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((a, i) => (
                        <AchievementCard key={i} {...a} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function AchievementCard({ emoji, year, title, category, desc, color }) {
    const [open, setOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: 0, overflow: 'hidden', borderTop: `3px solid ${color}` }}
        >
            {/* Card header */}
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>{emoji}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-orbitron)' }}>{year}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{title}</h3>
            </div>

            {/* Expandable dropdown */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.03)',
                    borderTop: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer',
                    color: color, fontSize: '0.8rem', fontWeight: 600, border: 'none',
                    transition: 'background 0.2s'
                }}
            >
                <span>{category}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={16} />
                </motion.div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ padding: '1rem 1.5rem 1.5rem', color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                            {desc}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
