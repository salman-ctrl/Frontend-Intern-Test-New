import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar({ user, onLogout, darkMode, setDarkMode }) {
    return (
        <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="font-bold text-xl">Aksamedia</Link>

                {user && (
                    <div className="flex justify-center space-x-16 absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/crud" className="hover:underline">Employee</Link>
                        <Link to="/profile" className="hover:underline">Profile</Link>
                    </div>
                )}

                <div className="flex items-center space-x-4">
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    {user ? (
                        <DropdownMenu username={user.name} onLogout={onLogout} />
                    ) : (
                        <Link to="/login" className="hover:underline">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}