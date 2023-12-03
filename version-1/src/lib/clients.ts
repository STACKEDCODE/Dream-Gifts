import api from './api';

export function createClients(client: Client, token: string) {
    const { nombres, apellidos, rut } = client;
    return api.post('/clientes', { nombres, apellidos, rut },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getClients(token: string) {
    return api.get('/clientes',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getClientById(id: string, token: string) {
    return api.get(`/clientes/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateClient(client: Client, token: string) {
    const { id, nombres, apellidos, rut } = client;
    return api.put(`/clientes/${id}`, { nombres, apellidos, rut },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteClient(id: string, token: string) {
    return api.delete(`/clientes/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}