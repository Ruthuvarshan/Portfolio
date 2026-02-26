import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <h1 className="text-4xl font-bold mb-12 text-center">
                Get In <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Touch</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <p className="text-xl text-gray-300">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-full text-[var(--primary)]">
                                <Phone size={24} />
                            </div>
                            <span className="text-lg">+91 6379 333 049</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-full text-[var(--primary)]">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg">ruthuvarshan18@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-full text-[var(--primary)]">
                                <MapPin size={24} />
                            </div>
                            <span className="text-lg">Salem, Tamil Nadu, India</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
