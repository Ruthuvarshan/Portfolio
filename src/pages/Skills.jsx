import React from 'react';
import { motion } from 'framer-motion';
import '../components/marquee.css';

const Skills = () => {
    // Array for the Marquee from Resume Data
    const techSkills = [
        { name: 'Python', icon: 'python' },
        { name: 'C', icon: 'c' },
        { name: 'Java', icon: 'openjdk' },
        { name: 'React', icon: 'react' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'IBM Cloud', icon: 'ibmcloud' },
        { name: 'Azure', icon: 'microsoftazure' },
        { name: 'SPSS', icon: 'ibm' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' }
    ];

    // Array for the Concepts & Soft Skills from Resume Data
    const concepts = [
        { name: 'Data Structures', level: 80 },
        { name: 'OOP', level: 85 },
        { name: 'Data Analytics', level: 65 }
    ];

    const softSkills = [
        'Leadership', 
        'Strategic Planning', 
        'Problem Solving', 
        'Communication', 
        'Critical thinking', 
        'Collaboration'
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <h1 className="text-4xl font-bold mb-12 text-center">
                Technical <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Proficiency</span>
            </h1>

            {/* Marquee Section */}
            <div className="mb-20 overflow-hidden w-full relative">
                {/* Fade overlays for smooth entry/exit */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-[200%] animate-marquee">
                    {/* First Map */}
                    <div className="flex w-1/2 justify-around">
                        {techSkills.map((skill, index) => (
                            <div key={`skill-1-${index}`} className="skill-logo-card">
                                <img src={`https://cdn.simpleicons.org/${skill.icon}`} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Repeated Map for seamless loop */}
                    <div className="flex w-1/2 justify-around">
                        {techSkills.map((skill, index) => (
                            <div key={`skill-2-${index}`} className="skill-logo-card">
                                <img src={`https://cdn.simpleicons.org/${skill.icon}`} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Concepts and Soft Skills Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Concepts */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 glass-card">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Concepts</h2>
                    <div className="space-y-6">
                        {concepts.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    {/* <span className="text-gray-400">{skill.level}%</span> */}
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                                        style={{ backgroundColor: 'var(--primary)' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 glass-card">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Soft Skills</h2>
                    <div className="flex flex-wrap gap-4 mt-6">
                        {softSkills.map((skill) => (
                            <span key={skill} className="px-5 py-2 rounded-full border border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
