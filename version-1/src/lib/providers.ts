import api from './api';

export function createProvider(provider: Provider, token: string) {
    const { razonSocial, rut, direccion } = provider;
    return api.post('/proveedores', { razonSocial, rut, direccion },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getProviders(token: string) {
    return api.get('/proveedores',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getProviderById(id: string, token: string) {
    return api.get(`/proveedores/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}
export function updateProvider(provider: Provider, token: string) {
    const { id, razonSocial, rut, direccion } = provider;
    return api.put(`/proveedores/${id}`, { razonSocial, rut, direccion },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteProvider(id: string, token: string) {
    return api.delete(`/proveedores/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/proveedores/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'proveedores.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}