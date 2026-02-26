import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const TypingEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <span className="text-xl md:text-2xl font-bold text-white border-r-2 border-[var(--primary)] pr-1 animate-pulse">
            {displayedText}
        </span>
    );
};

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-4">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Ruthuvarshan E</span>
                    </h1>
                    <TypingEffect text="Aspiring AI & Data Science Engineer" />
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto mt-4">
                        Building the future with intelligent solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/projects"
                            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
