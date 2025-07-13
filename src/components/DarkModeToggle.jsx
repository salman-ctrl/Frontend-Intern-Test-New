export default function DarkModeToggle({ darkMode, setDarkMode }) {
    const toggleMode = () => {
        const newMode = darkMode === 'dark' ? 'light' : 'dark'
        setDarkMode(newMode)
    }

    const setSystemMode = () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setDarkMode(prefersDark ? 'dark' : 'light')
    }

    return (
        <div className="flex  items-center">
            <button
                onClick={toggleMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                title={darkMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {darkMode === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
                onClick={setSystemMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Use system preference"
            >
                💻
            </button>
        </div>
    )
}