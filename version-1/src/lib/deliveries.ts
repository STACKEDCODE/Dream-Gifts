import api from './api';

export function createDelivery(delivery: Delivery, token: string) {
    const { idVenta, fecha, direccion, valor, estado } = delivery;
    return api.post('/delivery', { idVenta, fecha, direccion, valor, estado },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getDeliveries(token: string) {
    return api.get('/delivery',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getDeliveryById(id: string, token: string) {
    return api.get(`/delivery/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateDelivery(delivery: Delivery, token: string) {
    const { id, idVenta, fecha, direccion, valor, estado } = delivery;
    return api.put(`/delivery/${id}`, { idVenta, fecha, direccion, valor, estado },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteDelivery(id: string, token: string) {
    return api.delete(`/delivery/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/delivery/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'delivery.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}