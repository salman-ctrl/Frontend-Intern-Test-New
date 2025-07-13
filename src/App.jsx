import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import AuthRoute from './components/AuthRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CrudPage from './pages/CrudPage'
import ProfilePage from './pages/ProfilePage'
import { checkAuth } from './utils/auth'

function App() {
  const [darkMode, setDarkMode] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedMode = localStorage.getItem('darkMode')

    if (savedMode === 'dark' || savedMode === 'light') {
      setDarkMode(savedMode)
    } else {
      setDarkMode(prefersDark ? 'dark' : 'light')
    }

    // Check if user is authenticated
    const authUser = checkAuth()
    if (authUser) setUser(authUser)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.toggle('dark', darkMode === 'dark')
      localStorage.setItem('darkMode', darkMode)
    }
  }, [darkMode])

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('auth')
  }

  const updateUserProfile = (updatedUser) => {
    setUser(updatedUser)
  }

  if (darkMode === null) return null // Wait for dark mode detection

  return (
    <div className={`min-h-screen overflow-x-hidden ${darkMode === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <BrowserRouter>
        <Navbar
          user={user}
          onLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Routes>
          <Route path="/login" element={
            user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />
          } />
          <Route path="/" element={<AuthRoute user={user}><HomePage /></AuthRoute>} />
          <Route path="/crud" element={<AuthRoute user={user}><CrudPage /></AuthRoute>} />
          <Route path="/profile" element={
            <AuthRoute user={user}>
              <ProfilePage user={user} onUpdate={updateUserProfile} />
            </AuthRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App