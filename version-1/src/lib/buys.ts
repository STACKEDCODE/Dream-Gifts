import api from './api';

export function createBuy(buy: Buy, token: string) {
    const { folio, idProveedor, listaProductos, valorNeto } = buy;
    return api.post('/compras', { folio, idProveedor, listaProductos, valorNeto },
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
    const { id, folio, idProveedor, listaProductos, valorNeto } = buy;
    return api.put(`/compras/${id}`, { folio, idProveedor, listaProductos, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteBuy(id: string, token: string) {
    return api.delete(`/compras/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}
