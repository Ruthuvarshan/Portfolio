import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Wrench } from 'lucide-react'

const languages = [
    { name: 'HTML & CSS', pct: 60 },
    { name: 'Python', pct: 60 },
    { name: 'JavaScript', pct: 50 },
    { name: 'Java', pct: 75 },
    { name: 'C', pct: 70 },
]

const tools = [
    { name: 'IBM Cloud', pct: 70 },
    { name: 'Microsoft Azure', pct: 60 },
    { name: 'Git & GitHub', pct: 85 },
    { name: 'React', pct: 40 },
    { name: 'Scikit-learn / TensorFlow', pct: 30 },
]

export default function SkillBars() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2.5rem 0' }}>
            <SkillGroup title="Programming Languages" icon={<Code2 size={20} />} skills={languages} color="var(--primary)" />
            <SkillGroup title="Tools & Platforms" icon={<Wrench size={20} />} skills={tools} color="#6366f1" />
        </div>
    )
}

function SkillGroup({ title, icon, skills, color }) {
    return (
        <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, marginBottom: '1.75rem', color }}>
                {icon} {title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {skills.map((s) => (
                    <div key={s.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>{s.name}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{s.pct}%</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.07)', borderRadius: '9999px', overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                                style={{
                                    height: '100%',
                                    background: `linear-gradient(to right, ${color}, ${color === 'var(--primary)' ? '#ff6b6b' : '#8B5CF6'})`,
                                    borderRadius: '9999px',
                                    boxShadow: `0 0 10px ${color}`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
