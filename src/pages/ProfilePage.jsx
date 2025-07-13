import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth, login } from '../utils/auth'

export default function ProfilePage({ user, onUpdate }) {
    const [name, setName] = useState(user?.name || '')
    const [username, setUsername] = useState(user?.username || '')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            const authUser = checkAuth()
            if (!authUser) navigate('/login')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()

        // For simplicity, we're using the login function to update the user
        // In a real app, you'd have a separate update function
        const updatedUser = {
            ...user,
            name,
            username,
            password: password || user.password
        }

        // Update in "database" (localStorage)
        login(username, password || user.password)

        // Update in parent component
        onUpdate(updatedUser)

        setMessage('Profile updated successfully!')
        setTimeout(() => setMessage(''), 3000)
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Edit Profile</h1>
            {message && <p className="text-green-500 mb-4 text-center">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">New Password (leave blank to keep current)</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                    Update Profile
                </button>
            </form>
        </div>
    )
}