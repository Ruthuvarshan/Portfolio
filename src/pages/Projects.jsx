import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Brick Breaker Game',
            description: 'An interactive game developed in Java showcasing object-oriented programming principles and GUI design skills.',
            tags: ['Java', 'Swing', 'OOP'],
            link: '#',
            github: '#'
        },
        {
            title: 'Business Intelligence Dashboard',
            description: 'A comprehensive dashboard to analyze student performance, attendance, and teaching effectiveness using IBM Cognos.',
            tags: ['IBM Cognos', 'Data Analytics', 'Visualization'],
            link: '#',
            github: '#'
        },
        {
            title: 'Retail Point of Sale',
            description: 'A PHP-MySQL powered Retail POS system featuring inventory control, billing, and customer transaction management.',
            tags: ['PHP', 'MySQL', 'Web Dev'],
            link: '#',
            github: '#'
        }
    ];

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.05,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <h1 className="text-4xl font-bold mb-12 text-center">
                Featured <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Projects</span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Tilt options={defaultOptions} key={index} className="h-full">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-full flex flex-col hover:border-[var(--primary)] transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <Code className="text-[var(--primary)]" size={32} />
                                <div className="flex gap-2">
                                    <a href={project.github} className="text-gray-400 hover:text-white"><Github size={20} /></a>
                                    <a href={project.link} className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
