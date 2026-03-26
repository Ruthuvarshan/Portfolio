import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WebCursor from './components/WebCursor'
import Particles3D from './components/Particles3D'

export default function App() {
    return (
        <div className="app">
            <Particles3D />
            <WebCursor />
            <Navbar />
            <main>
                <Hero />
                <VisionMission />
                <Skills />
                <Projects />
                <Achievements />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
