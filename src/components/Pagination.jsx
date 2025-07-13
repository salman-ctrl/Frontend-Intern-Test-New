import { Link } from 'react-router-dom'

export default function Pagination({ currentPage, totalPages, searchQuery }) {
    if (totalPages <= 1) return null

    return (
        <div className="flex justify-center mt-4">
            <nav className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Link
                        key={page}
                        to={`?page=${page}&search=${searchQuery || ''}`}
                        className={`px-3 py-1 rounded ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                    >
                        {page}
                    </Link>
                ))}
            </nav>
        </div>
    )
}