export default function HomePage() {
    return (
        <div className="min-h-screen container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Welcome to <span className="text-blue-800 dark:text-blue-300">Aksamedia</span> Dashboard
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
                    Your comprehensive solution for user management and data operations with advanced features and security.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-center md:text-gray-100 dark:text-gray-500">
                    Powerful Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Secure Authentication</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Robust login/logout system with session persistence and protected routes.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Dark/Light Mode</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Automatic theme switching based on system preference with manual override.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">CRUD Operations</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Full Create, Read, Update, Delete functionality with search and pagination.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">User Profile</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Edit and manage your profile information with real-time updates.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">State Management</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Persistent state across page refreshes for seamless user experience.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Secure & Reliable</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Built with modern security practices and reliable data handling.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Explore all the features and manage your data efficiently with our intuitive dashboard.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition-colors">
                    Explore Dashboard
                </button>
            </section>
        </div>
    )
}