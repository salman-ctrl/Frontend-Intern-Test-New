const STORAGE_KEY = 'crud_data'

export const getItems = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

export const addItem = (item) => {
    const items = getItems()
    const newItem = { ...item, id: Date.now().toString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...items, newItem]))
    return newItem
}

export const updateItem = (id, updatedItem) => {
    const items = getItems()
    const updatedItems = items.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
    )
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems))
    return updatedItems.find(item => item.id === id)
}

export const deleteItem = (id) => {
    const items = getItems()
    const filteredItems = items.filter(item => item.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredItems))
    return filteredItems
}