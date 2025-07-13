import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import CrudTable from '../components/CrudTable'
import CrudForm from '../components/CrudForm'
import { getItems, addItem, updateItem, deleteItem } from '../utils/crud'

const ITEMS_PER_PAGE = 5

export default function CrudPage() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1)
    const [action, setAction] = useState(searchParams.get('action'))
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        const data = getItems()
        setItems(data)
    }, [])

    useEffect(() => {
        let result = [...items]

        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            result = result.filter(item =>
                item.name.toLowerCase().includes(query) ||
                item.email.toLowerCase().includes(query) ||
                item.role.toLowerCase().includes(query)
            )
        }

        setFilteredItems(result)
        setCurrentPage(1)
    }, [items, searchQuery])

    useEffect(() => {
        const actionParam = searchParams.get('action')
        const idParam = searchParams.get('id')

        if (actionParam === 'edit' && idParam) {
            const item = items.find(i => i.id === idParam)
            if (item) {
                setEditItem(item)
                setAction('edit')
            }
        } else if (actionParam === 'create') {
            setAction('create')
            setEditItem(null)
        } else {
            setAction(null)
            setEditItem(null)
        }
    }, [searchParams, items])

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handleAdd = (newItem) => {
        const addedItem = addItem(newItem)
        setItems([...items, addedItem])
        navigate('/crud')
    }

    const handleUpdate = (updatedItem) => {
        const updated = updateItem(editItem.id, updatedItem)
        setItems(items.map(item => item.id === updated.id ? updated : item))
        navigate(`/crud?page=${currentPage}&search=${searchQuery}`)
    }

    const handleDelete = (id) => {
        deleteItem(id)
        setItems(items.filter(item => item.id !== id))
    }

    const handleSearchChange = (query) => {
        setSearchQuery(query)
        navigate(`/crud?page=1&search=${query}`)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
        navigate(`/crud?page=${page}&search=${searchQuery}`)
    }

    const handleCancel = () => {
        navigate(`/crud?page=${currentPage}&search=${searchQuery}`)
    }

    return (
        <div className="container mx-auto p-4">
            {action ? (
                <CrudForm
                    itemToEdit={editItem}
                    onSubmit={action === 'create' ? handleAdd : handleUpdate}
                    onCancel={handleCancel}
                />
            ) : (
                <CrudTable
                    items={paginatedItems}
                    onDelete={handleDelete}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                />
            )}
        </div>
    )
}