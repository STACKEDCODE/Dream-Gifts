import api from "./api";

export function createUser(user: User, token: string) {
    const { nombres, apellidos, username, email, password } = user;
    return api.post('/usuarios', { nombres, apellidos, username, email, password },
        { headers: { Authorization: `Bearer ${token}` } });
}

export function getMyInfo(token: string) {
    return api.get('/usuarios/@me',
        { headers: { Authorization: `Bearer ${token}` } });
}