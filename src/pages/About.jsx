import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Bio Section */}
                <div>
                    <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">About Me</span>
                    </h1>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            I am an adaptable and proactive individual with a positive attitude, passionate about solving challenges through creative thinking and teamwork.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Currently pursuing my Bachelor of Technology in Artificial Intelligence and Data Science, I am eager to apply my skills in real-world scenarios and contribute to innovative solutions.
                        </p>
                    </div>
                </div>

                {/* Timeline Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <GraduationCap className="text-[var(--primary)]" /> Education
                    </h2>
                    <div className="space-y-8 pl-4 border-l-2 border-[var(--primary)] border-opacity-30">
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></div>
                            <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                            <p className="text-[var(--primary)]">2023 - 2027</p>
                            <p className="text-gray-400 mt-1">M.Kumarasamy College of Engineering</p>
                            <p className="text-gray-500 text-sm mt-1">Artificial Intelligence and Data Science</p>
                        </div>

                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--secondary)] shadow-[0_0_10px_var(--secondary)]"></div>
                            <h3 className="text-xl font-bold">Graduated High School</h3>
                            <p className="text-[var(--secondary)]">2021 - 2023</p>
                            <p className="text-gray-400 mt-1">Bharathiyar Hi-Tech International School (CBSE)</p>
                        </div>
                    </div>

                    {/* Certifications Preview - Could be here or its own section, putting brief list here */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Award className="text-[var(--secondary)]" /> Key Certifications
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--secondary)] transition-colors">
                                Microsoft Azure AI Fundamentals: Generative AI
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--secondary)] transition-colors">
                                NPTEL: Industry 4.0 & IIoT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
