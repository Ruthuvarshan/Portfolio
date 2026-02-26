import React, { useEffect, useRef, useState } from 'react'

export default function WebCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const trailsRef = useRef([])
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const lastTrailTime = useRef(0)
    const [trails, setTrails] = useState([])
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

    useEffect(() => {
        if (isMobile) return

        let ringX = -100, ringY = -100
        let rafId

        const onMouseMove = (e) => {
            const { clientX: x, clientY: y } = e

            // Dot follows immediately
            if (dotRef.current) {
                dotRef.current.style.left = x + 'px'
                dotRef.current.style.top = y + 'px'
            }

            // Ring lags slightly via RAF
            ringX += (x - ringX) * 0.12
            ringY += (y - ringY) * 0.12

            if (ringRef.current) {
                ringRef.current.style.left = ringX + 'px'
                ringRef.current.style.top = ringY + 'px'
            }

            // Create web trail dots
            const now = Date.now()
            if (now - lastTrailTime.current > 60) {
                lastTrailTime.current = now
                const id = now
                setTrails(prev => [...prev.slice(-12), { id, x, y }])
                setTimeout(() => {
                    setTrails(prev => prev.filter(t => t.id !== id))
                }, 500)
            }
        }

        const smooth = () => {
            if (ringRef.current) {
                ringRef.current.style.left = ringX + 'px'
                ringRef.current.style.top = ringY + 'px'
            }
            rafId = requestAnimationFrame(smooth)
        }

        window.addEventListener('mousemove', onMouseMove)
        rafId = requestAnimationFrame(smooth)

        // Cursor grow on hover over interactive elements
        const onHoverIn = () => {
            if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'
            if (ringRef.current) {
                ringRef.current.style.width = '50px'
                ringRef.current.style.height = '50px'
                ringRef.current.style.borderColor = 'var(--primary)'
            }
        }
        const onHoverOut = () => {
            if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
            if (ringRef.current) {
                ringRef.current.style.width = '32px'
                ringRef.current.style.height = '32px'
                ringRef.current.style.borderColor = 'var(--primary-glow)'
            }
        }

        const interactives = document.querySelectorAll('a, button, .skill-item, .project-card')
        interactives.forEach(el => {
            el.addEventListener('mouseenter', onHoverIn)
            el.addEventListener('mouseleave', onHoverOut)
        })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(rafId)
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', onHoverIn)
                el.removeEventListener('mouseleave', onHoverOut)
            })
        }
    }, [])

    if (isMobile) return null

    return (
        <div className="custom-cursor">
            <div className="cursor-dot" ref={dotRef}>
                {/* Hollow Knight Nail SVG */}
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-45deg)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
                    {/* Blade */}
                    <path d="M 50 10 Q 55 40 55 70 L 45 70 Q 45 40 50 10 Z" fill="#E2E8F0" stroke="var(--text-main)" strokeWidth="2" />
                    {/* Hilt */}
                    <rect x="40" y="70" width="20" height="8" rx="4" fill="var(--text-dim)" />
                    <rect x="46" y="78" width="8" height="15" fill="var(--text-dim)" />
                    {/* Wraps */}
                    <line x1="46" y1="82" x2="54" y2="80" stroke="var(--bg-main)" strokeWidth="2" />
                    <line x1="46" y1="87" x2="54" y2="85" stroke="var(--bg-main)" strokeWidth="2" />
                    {/* Nail detail/crack */}
                    <path d="M 50 30 Q 52 40 48 50" stroke="var(--bg-secondary)" strokeWidth="1.5" fill="none" />
                </svg>
            </div>
            <div className="cursor-ring" ref={ringRef} />
            {trails.map(trail => (
                <div
                    key={trail.id}
                    className="cursor-trail"
                    style={{ left: trail.x, top: trail.y }}
                />
            ))}
        </div>
    )
}
