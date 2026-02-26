import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WebCursor from './components/WebCursor'

export default function App() {
    return (
        <div className="app">
            <WebCursor />
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
