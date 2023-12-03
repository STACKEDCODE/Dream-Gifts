import api from "./api";

export const login = (credentials: Credentials) => {
    const { username, password } = credentials;
    return api.post("/auth/login", { username, password });
};

export const logout = () => {
    return api.delete("/auth/logout", {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    });
};