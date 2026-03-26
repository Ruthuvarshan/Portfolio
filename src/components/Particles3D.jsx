import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
    const points = useRef()

    const particleCount = 700
    const [positions, colors] = useMemo(() => {
        const p = new Float32Array(particleCount * 3)
        const c = new Float32Array(particleCount * 3)
        const color1 = new THREE.Color("#E62429") // Primary Red
        const color2 = new THREE.Color("#8B5CF6") // Purple Accent
        
        for (let i = 0; i < particleCount; i++) {
            p[i * 3] = (Math.random() - 0.5) * 15
            p[i * 3 + 1] = (Math.random() - 0.5) * 15
            p[i * 3 + 2] = (Math.random() - 0.5) * 15

            // Mix colors
            const mixedColor = color1.clone().lerp(color2, Math.random())
            c[i * 3] = mixedColor.r
            c[i * 3 + 1] = mixedColor.g
            c[i * 3 + 2] = mixedColor.b
        }
        return [p, c]
    }, [])

    useFrame((state) => {
        if (!points.current) return
        points.current.rotation.y = state.clock.elapsedTime * 0.05
        points.current.rotation.x = state.clock.elapsedTime * 0.02
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    )
}

export default function Particles3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <ParticleField />
                <Preload all />
            </Canvas>
        </div>
    )
}
