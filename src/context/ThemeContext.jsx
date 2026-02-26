import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    // Default to dark mode, spider theme (matches original design)
    const [colorMode, setColorMode] = useState('dark') // 'light' | 'dark'
    const [characterTheme, setCharacterTheme] = useState('spider') // 'spider' | 'dragon'

    useEffect(() => {
        // Construct the theme string (e.g., 'spider-dark')
        const currentTheme = `${characterTheme}-${colorMode}`
        // Apply it to the HTML element
        document.documentElement.setAttribute('data-theme', currentTheme)
    }, [colorMode, characterTheme])

    const toggleColorMode = () => {
        setColorMode(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const toggleCharacterTheme = () => {
        setCharacterTheme(prev => prev === 'spider' ? 'dragon' : 'spider')
    }

    return (
        <ThemeContext.Provider value={{ colorMode, characterTheme, toggleColorMode, toggleCharacterTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
