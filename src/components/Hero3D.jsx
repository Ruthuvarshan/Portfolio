import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Preload } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'

function AbstractShape() {
    const meshRef = useRef()
    const { characterTheme } = useTheme()

    const color = characterTheme === 'spider' ? '#E62429' : '#10B981'

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
        }
    })

    return (
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} scale={1.8}>
                <icosahedronGeometry args={[1, 2]} />
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.5}
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                    wireframe={true}
                />
            </mesh>
            <mesh scale={1.75}>
                <icosahedronGeometry args={[1, 2]} />
                <meshBasicMaterial color="#0a0a0a" />
            </mesh>
        </Float>
    )
}

export default function Hero3D() {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px', cursor: 'pointer', zIndex: 2 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AbstractShape />
                <Preload all />
            </Canvas>
        </div>
    )
}
