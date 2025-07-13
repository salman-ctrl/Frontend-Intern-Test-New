import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function CrudTable({
    items,
    onDelete,
    currentPage,
    totalPages,
    searchQuery,
    onSearchChange,
    loading
}) {
    const [searchParams] = useSearchParams()
    const [confirmDelete, setConfirmDelete] = useState(null)

    const handleDelete = (id) => {
        if (confirmDelete === id) {
            onDelete(id)
            setConfirmDelete(null)
        } else {
            setConfirmDelete(id)
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">CRUD Data</h2>
                <Link
                    to={`/crud?action=create&page=${currentPage}&search=${encodeURIComponent(searchQuery || '')}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Add New
                </Link>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    disabled={loading}
                />
            </div>

            {loading ? (
                <div className="text-center py-8">Loading...</div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800 border dark:border-gray-700">
                            <thead>
                                <tr className="dark:text-white">
                                    <th className="p-3 border-b dark:border-gray-700">Name</th>
                                    <th className="p-3 border-b dark:border-gray-700">Email</th>
                                    <th className="p-3 border-b dark:border-gray-700">Role</th>
                                    <th className="p-3 border-b dark:border-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-4 text-center">
                                            No data found
                                        </td>
                                    </tr>
                                ) : (
                                    items.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            <td className="p-3 border-b dark:border-gray-700">{item.name}</td>
                                            <td className="p-3 border-b dark:border-gray-700">{item.email}</td>
                                            <td className="p-3 border-b dark:border-gray-700">{item.role}</td>
                                            <td className="p-3 border-b dark:border-gray-700 space-x-2">
                                                <Link
                                                    to={`/crud?action=edit&id=${item.id}&page=${currentPage}&search=${encodeURIComponent(
                                                        searchQuery || ''
                                                    )}`}
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="text-red-600 dark:text-red-400 hover:underline"
                                                    disabled={loading}
                                                >
                                                    {confirmDelete === item.id ? 'Confirm?' : 'Delete'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-4">
                            <nav className="flex space-x-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <Link
                                        key={page}
                                        to={`/crud?page=${page}&search=${encodeURIComponent(searchQuery || '')}`}
                                        className={`px-3 py-1 rounded ${currentPage === page
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}