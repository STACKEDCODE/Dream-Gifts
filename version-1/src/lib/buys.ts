import api from './api';

export function createBuy(buy: Buy, token: string) {
    const { folio, fecha, idProveedor, valorNeto } = buy;
    return api.post('/compras', { folio, fecha, idProveedor, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getBuys(token: string) {
    return api.get('/compras',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getBuyById(id: string, token: string) {
    return api.get(`/compras/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateBuy(buy: Buy, token: string) {
    const { id, folio, idProveedor, valorNeto } = buy;
    return api.put(`/compras/${id}`, { folio, idProveedor, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteBuy(id: string, token: string) {
    return api.delete(`/compras/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/compras/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}