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