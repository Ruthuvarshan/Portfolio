import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Trophy, Award } from 'lucide-react'

const coreAchievements = [
    {
        emoji: '🚀', year: '2024', title: 'SIH – College Level Selection',
        category: 'Hackathon',
        desc: 'Participated in Smart India Hackathon (SIH) and got selected at the college level, showcasing an innovative AI-driven problem solution to a national panel.',
        color: '#E62429'
    },
    {
        emoji: '♻️', year: '2024', title: 'Vice President – Sustainable Engineering Club',
        category: 'Leadership',
        desc: 'Serving as Vice President of the Sustainable Engineering Club, leading initiatives that promote eco-friendly tech solutions and sustainable development practices.',
        color: '#10B981'
    },
    {
        emoji: '🎤', year: '2024', title: '5+ Technical Events, 1350+ Participants',
        category: 'Organizing',
        desc: 'Conducted and coordinated 5+ technical events through the student club, collectively drawing over 1000 participants in intra-college and 350+ participants from inter-college events.',
        color: '#8B5CF6'
    },
    {
        emoji: '🥈', year: '2024', title: '2nd Place – Bug Hunt',
        category: 'Competition',
        desc: 'Placed second in the Coding Bug Hunt event at Eshwar College Thiran Event. Competed against peers in identifying and fixing critical bugs under time pressure.',
        color: '#F7DF1E'
    },
]

const certificationGroups = [
    {
        platform: 'Microsoft Learn',
        icon: '🪟',
        color: '#0089D6',
        certs: [
            { title: 'Azure AI Fundamentals: Generative AI', desc: 'Covers Azure Cognitive Services, generative model deployment, and cloud-based AI service integration.' },
            { title: 'Azure Fundamentals: Describe Azure architecture and services', desc: 'Core architectural components, regions, availability zones, and resources in Azure.' },
            { title: 'Azure Fundamentals: Describe Azure management and governance', desc: 'Cost management, security tools, governance methodologies, and compliance standards.' },
            { title: 'Develop your own custom copilots with Azure AI Studio', desc: 'Building custom conversational agents and orchestrating LLMs within Azure.' },
            { title: 'Azure AI Fundamentals: Computer Vision', desc: 'Image processing, object detection, and utilizing pre-built cognitive vision models.' },
            { title: 'Azure AI Fundamentals: Document Intelligence and Knowledge Mining', desc: 'Extracting insights from text, forms, and documents using Azure AI Search.' },
            { title: 'Azure Fundamentals: Describe cloud concepts', desc: 'Cloud computing models, principles of high availability, scalability, and security basics.' },
        ]
    },
    {
        platform: 'AWS Educate',
        icon: '🌩️',
        color: '#F59E0B',
        certs: [
            { title: 'Introduction to Cloud 101', desc: 'Core AWS services, cloud computing concepts, S3, EC2, IAM fundamentals and the shared responsibility model.' },
        ]
    },
    {
        platform: 'NPTEL',
        icon: '🎓',
        color: '#F97316',
        certs: [
            { title: 'Joy of Computing Using Python', desc: 'Fundamentals of Python programming through creative and problem-solving-based exercises.' },
            { title: 'Problem Solving Through Programming in C', desc: 'Algorithmic thinking and structured problem-solving using the C language.' },
            { title: 'Industry 4.0 & Industrial Internet of Things', desc: 'Smart manufacturing, cyber-physical systems, sensor networks, and IIoT frameworks.' },
            { title: 'Introduction to Information Retrieval and Social Networks', desc: 'Search algorithms, indexing, ranking models, and social graph analysis techniques.' },
        ]
    },
    {
        platform: 'Other Courses',
        icon: '📜',
        color: '#EF4444',
        certs: [
            { title: 'Cyber Threat Management', desc: 'Threat intelligence, vulnerability assessment, incident response strategies, and enterprise security frameworks.' },
        ]
    },
]

export default function Achievements() {
    return (
        <section id="achievements" className="section" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
            <div className="container">

                {/* ── Core Achievements ── */}
                <div className="text-center mb-12">
                    <p className="section-tag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                        <Trophy size={14} /> Recognition
                    </p>
                    <h2 className="section-title">My <span className="red">Achievements</span></h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Recognition & milestones on my innovation journey</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
                    {coreAchievements.map((a, i) => (
                        <AchievementCard key={i} {...a} />
                    ))}
                </div>

                {/* ── Divider ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                        <Award size={16} /> Certifications
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                </div>

                {/* ── Certifications by Platform ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {certificationGroups.map((group, gi) => (
                        <CertGroup key={gi} {...group} />
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
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>{emoji}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-orbitron)' }}>{year}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{title}</h3>
            </div>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.03)',
                    borderTop: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer',
                    color, fontSize: '0.78rem', fontWeight: 600, border: 'none', transition: 'background 0.2s'
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
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ padding: '1rem 1.5rem 1.5rem', color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.7' }}>{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

function CertGroup({ platform, icon, color, certs }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '1.75rem', borderLeft: `4px solid ${color}` }}
        >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, fontSize: '1rem', color, marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{icon}</span> {platform}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certs.map((c, i) => (
                    <div key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(255,255,255,0.07)' }}>
                        <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>📄 {c.title}</p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: '1.6' }}>{c.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

