export const login = (username, password) => {
    // Static credentials
    const validCredentials = [
        { username: 'admin', password: 'admin123', name: 'Administrator' },
        { username: 'user', password: 'user123', name: 'Regular User' }
    ]

    const user = validCredentials.find(
        cred => cred.username === username && cred.password === password
    )

    if (user) {
        localStorage.setItem('auth', JSON.stringify(user))
        return user
    }

    return null
}

export const logout = () => {
    localStorage.removeItem('auth')
}

export const checkAuth = () => {
    const auth = localStorage.getItem('auth')
    return auth ? JSON.parse(auth) : null
}