import { AxiosResponse } from 'axios';
import api from './api';

export function createClient(client: Client, token: string) {
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

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/clientes/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'clientes.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}