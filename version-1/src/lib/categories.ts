import api from './api';

export function createCategory(category: Category, token: string) {
    const { nombre } = category;
    return api.post('/categorias', { nombre },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getCategories(token: string) {
    return api.get('/categorias',
        { headers: { Authorization: `Bearer ${token}` } });
}

function getCategoryById(id: string, token: string) {
    return api.get(`/categorias/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateCategory(category: Category, token: string) {
    const { id, nombre } = category;
    return api.put(`/categorias/${id}`, { nombre },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteCategory(id: string, token: string) {
    return api.delete(`/categorias/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}