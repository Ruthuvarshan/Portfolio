import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatbotFAB() {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Speech bubble */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px 12px 0 12px',
                            padding: '0.5rem 1rem', color: 'white', fontSize: '0.85rem',
                            fontWeight: 600, whiteSpace: 'nowrap',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}
                    >
                        Hello! 👋
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Robot FAB Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: '64px', height: '64px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, var(--primary), #8B5CF6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem', boxShadow: '0 0 30px rgba(230,36,41,0.5)',
                }}
            >
                🤖
            </motion.button>
        </div>
    )
}
