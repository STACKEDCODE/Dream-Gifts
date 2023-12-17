import api from "./api";

export function createUser(user: User, token: string) {
    const { nombres, apellidos, username, email, password } = user;
    return api.post('/User', { FirstName: nombres, LastName: apellidos, username, EmailAddress: email, password },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getUsers(token: string) {
    return api.get('/User?page=1',
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getUser(id: string, token: string) {
    return api.get(`/User/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function updateUser(user: User, token: string) {
    const { id, nombres, apellidos, username, email, password } = user;
    return api.put(`/User/${id}`, { FirstName: nombres, LastName: apellidos, username, EmailAddress: email, password },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function deleteUser(id: string, token: string) {
    return api.delete(`/User/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getMyInfo(token: string) {
    return api.get('/User/@me',
        { headers: { Authorization: `Bearer ${token}` } });
}

export async function exportExcel(token: string) {
    const link = document.createElement('a');
    return api.get('/User/csv',
        { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            link.href = url;
            link.setAttribute('download', 'User.csv');
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.error('Hubo un error al obtener el recurso: ', error);
        });
}