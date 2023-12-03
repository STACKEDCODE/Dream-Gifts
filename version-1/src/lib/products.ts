import api from './api';

export function createProduct(product: Product, token: string) {
    const { nombre, precio, idCategoria } = product;
    return api.post('/productos', { nombre, precio, idCategoria },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getProducts(token: string) {
    return api.get('/productos',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getProductById(id: string, token: string) {
    return api.get(`/productos/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateProduct(product: Product, token: string) {
    const { id, nombre, precio, idCategoria } = product;
    return api.put(`/productos/${id}`, { nombre, precio, idCategoria },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteProduct(id: string, token: string) {
    return api.delete(`/productos/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}