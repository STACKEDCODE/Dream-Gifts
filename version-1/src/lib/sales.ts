import api from "./api";

export function createSale(sale: Sale, token: string) {
    const { folio, idCliente, fecha, valorNeto } = sale;
    return api.post("/venta", { folio, idCliente, fecha, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getSales(token: string) {
    return api.get("/venta",
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getSaleById(id: string, token: string) {
    return api.get(`/venta/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateSale(sale: Sale, token: string) {
    const { id, folio, idCliente, fecha, valorNeto } = sale;
    return api.put(`/venta/${id}`, { folio, idCliente, fecha, valorNeto },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteSale(id: string, token: string) {
    return api.delete(`/venta/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/venta/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'venta.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}