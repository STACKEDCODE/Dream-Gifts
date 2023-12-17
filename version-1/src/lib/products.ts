import api from './api';

export function createProduct(product: Product, token: string) {
    const { nombre, valor, stock, idCategorias } = product;
    return api.post('/productos', { nombre, valor, stock, idCategorias },
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
    const { id, nombre, valor, stock, idCategorias } = product;
    return api.put(`/productos/${id}`, { nombre, valor, stock, idCategorias },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteProduct(id: string, token: string) {
    return api.delete(`/productos/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}


export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/productos/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'productos.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}