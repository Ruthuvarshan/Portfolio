import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'

function Earth() {
    const earthRef = useRef()
    const { characterTheme } = useTheme()

    // Rotate the Earth automatically
    useFrame(({ clock }) => {
        if (earthRef.current) {
            earthRef.current.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    const frameColor = characterTheme === 'spider' ? '#E62429' : '#10B981'

    return (
        <mesh ref={earthRef} scale={2}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#000000" />
            
            {/* Outline wireframe to look like a hologram */}
            <mesh>
                <sphereGeometry args={[1.002, 16, 16]} />
                <meshBasicMaterial color={frameColor} wireframe={true} transparent opacity={0.3} />
            </mesh>
            
            {/* Outer glow sphere */}
            <mesh>
                <sphereGeometry args={[1.1, 32, 32]} />
                <meshBasicMaterial color={frameColor} transparent opacity={0.05} />
            </mesh>
        </mesh>
    )
}

export default function Earth3D() {
    return (
        <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 4.5] }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <Earth />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
                <Preload all />
            </Canvas>
        </div>
    )
}
