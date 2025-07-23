// src/components/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react'

import { useTheme } from '../hooks/useTheme'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    )
}