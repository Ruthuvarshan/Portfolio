import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Python', level: 75, category: 'Language' },
        { name: 'C', level: 70, category: 'Language' },
        { name: 'Java', level: 70, category: 'Language' },
        { name: 'HTML', level: 85, category: 'Language' },
        { name: 'Data Structures', level: 80, category: 'Concept' },
        { name: 'OOP', level: 85, category: 'Concept' },
        { name: 'Data Analytics', level: 65, category: 'Concept' },
        { name: 'IBM Cloud', level: 60, category: 'Tool' },
        { name: 'Watson Studio', level: 55, category: 'Tool' },
        { name: 'Microsoft Azure', level: 60, category: 'Tool' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <h1 className="text-4xl font-bold mb-12 text-center">
                Technical <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Profiency</span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Language', 'Concept', 'Tool'].map((category) => (
                    <div key={category} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">{category}s</h2>
                        <div className="space-y-6">
                            {skills.filter(s => s.category === category).map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-8">Soft Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Leadership', 'Strategic Planning', 'Problem Solving', 'Communication'].map((skill) => (
                        <span key={skill} className="px-6 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
