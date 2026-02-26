import React, { useEffect, useRef, useState } from 'react'
import { Eye } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// Generate rain drops with parallax depth
function RainLayer() {
    const drops = Array.from({ length: 80 }, (_, i) => {
        // Create 3 "layers" of depth for parallax
        const zLayer = Math.random()
        const isForeground = zLayer > 0.8
        const isBackground = zLayer < 0.3

        return {
            id: i,
            left: `${Math.random() * 100}%`,
            height: isForeground ? `${80 + Math.random() * 100}px` : `${40 + Math.random() * 60}px`,
            width: isForeground ? '2px' : '1px',
            duration: isForeground ? `${0.4 + Math.random() * 0.3}s` : `${0.7 + Math.random() * 0.5}s`,
            delay: `${Math.random() * 3}s`,
            opacity: isForeground ? 0.4 + Math.random() * 0.3 : (isBackground ? 0.1 : 0.2 + Math.random() * 0.2),
            zIndex: isForeground ? 20 : 2,
            filter: isBackground ? 'blur(2px)' : 'none'
        }
    })

    return (
        <div className="rain-container">
            {drops.map(drop => (
                <div
                    key={drop.id}
                    className="rain-drop"
                    style={{
                        left: drop.left,
                        width: drop.width,
                        height: drop.height,
                        animationDuration: drop.duration,
                        animationDelay: drop.delay,
                        opacity: drop.opacity,
                        zIndex: drop.zIndex,
                        filter: drop.filter
                    }}
                />
            ))}
        </div>
    )
}

// Shockwave on land
function Shockwave({ active }) {
    if (!active) return null
    return (
        <>
            <div className="shockwave-ring" style={{ width: 80, height: 80, bottom: '28%', left: '50%', transform: 'translateX(-50%)', position: 'absolute' }} />
            <div className="shockwave-ring" style={{ width: 120, height: 40, bottom: '27%', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', animationDelay: '0.1s', position: 'absolute' }} />
        </>
    )
}

export default function Hero() {
    const [shockwave, setShockwave] = useState(false)
    const { characterTheme } = useTheme()

    useEffect(() => {
        const t = setTimeout(() => setShockwave(true), 1800)
        return () => clearTimeout(t)
    }, [])

    const scrollToProjects = (e) => {
        e.preventDefault()
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToContact = (e) => {
        e.preventDefault()
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero">
            {/* Skyline SVG background */}
            <div className="hero__skyline" />
            {/* Dark gradient overlay */}
            <div className="hero__bg" />
            {/* Web grid overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1, opacity: 0.025,
                backgroundImage: `
          repeating-linear-gradient(0deg, rgba(245,245,245,1) 0px, rgba(245,245,245,1) 1px, transparent 1px, transparent 80px),
          repeating-linear-gradient(90deg, rgba(245,245,245,1) 0px, rgba(245,245,245,1) 1px, transparent 1px, transparent 80px),
          repeating-linear-gradient(45deg, rgba(245,245,245,1) 0px, rgba(245,245,245,1) 1px, transparent 1px, transparent 113px),
          repeating-linear-gradient(135deg, rgba(245,245,245,1) 0px, rgba(245,245,245,1) 1px, transparent 1px, transparent 113px)`
            }} />
            {/* Rain */}
            <RainLayer />
            {/* Shockwave */}
            <Shockwave active={shockwave} />

            {/* Content */}
            <div className="hero__content">
                {/* Falling Icon */}
                <div className="hero__spider-icon">
                    {characterTheme === 'spider' ? (
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#0D0D0D', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src="/spiderman_image.png" alt="Spider-Man" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        </div>
                    ) : (
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#0D0D0D', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src="/green-dragon-logo.png" alt="Dragon" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        </div>
                    )}
                </div>

                <p className="hero__tag">
                    {characterTheme === 'spider' ? 'Portfolio — Into the Dev-Verse' : 'Portfolio — Enter the Dungeon'}
                </p>

                <h1 className="hero__name">
                    Ruthu<span className="highlight">varshan</span>
                </h1>

                <p className="hero__role">AI & Data Science Developer ✦ Full-Stack Engineer</p>

                <p className="hero__tagline">
                    {characterTheme === 'spider' ? '"With Great Power Comes Great Code"' : '"Unleash the Power of Code"'}
                </p>

                {/* Animated typing text */}
                <TypingText strings={[
                    'Building intelligent systems',
                    'Crafting data-driven solutions',
                    'Turning coffee into code',
                    'Engineering the future',
                ]} />

                <div className="hero__cta-group" style={{ marginTop: '2rem' }}>
                    <a href="#projects" className="btn-primary" onClick={scrollToProjects} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Eye size={18} /> View My Projects
                    </a>
                    <a href="#contact" className="btn-secondary" onClick={scrollToContact}>
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="hero__scroll-hint">
                <span>Scroll</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    )
}

function TypingText({ strings }) {
    const [displayed, setDisplayed] = useState('')
    const [idx, setIdx] = useState(0)
    const [typing, setTyping] = useState(true)
    const charIdx = useRef(0)

    useEffect(() => {
        let timeout
        const current = strings[idx]
        if (typing) {
            if (charIdx.current < current.length) {
                timeout = setTimeout(() => {
                    setDisplayed(current.slice(0, charIdx.current + 1))
                    charIdx.current++
                }, 60)
            } else {
                timeout = setTimeout(() => setTyping(false), 2000)
            }
        } else {
            if (charIdx.current > 0) {
                timeout = setTimeout(() => {
                    charIdx.current--
                    setDisplayed(current.slice(0, charIdx.current))
                }, 35)
            } else {
                setIdx(i => (i + 1) % strings.length)
                setTyping(true)
            }
        }
        return () => clearTimeout(timeout)
    }, [displayed, typing, idx])

    return (
        <div style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'var(--text-dim)',
            marginTop: '0.5rem',
            height: '1.5em',
        }}>
            {displayed}
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--primary)', marginLeft: 2 }}>|</span>
        </div>
    )
}
