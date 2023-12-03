import api from "./api";

export function createSale(sale: Sale, token: string) {
    const { folio, idCliente, listaProductos, valorNeto } = sale;
    return api.post("/ventas", { folio, idCliente, listaProductos, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getSales(token: string) {
    return api.get("/ventas",
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getSaleById(id: string, token: string) {
    return api.get(`/ventas/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateSale(sale: Sale, token: string) {
    const { id, folio, idCliente, listaProductos, valorNeto } = sale;
    return api.put(`/ventas/${id}`, { folio, idCliente, listaProductos, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteSale(id: string, token: string) {
    return api.delete(`/ventas/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

