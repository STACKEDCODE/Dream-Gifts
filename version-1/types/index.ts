interface Credentials {
    username: string;
    password: string;
}

interface Category {
    id?: string;
    nombre: string;
}

interface Client {
    id?: string;
    rut: string;
    nombres: string;
    apellidos: string;
}

interface Buy {
    id?: string;
    folio: string;
    fecha: Date;
    idProveedor: string;
    valorNeto: number;
}

interface User {
    id?: string;
    username: string;
    password: string;
    email: string;
    nombres: string;
    apellidos: string;
}

interface Product {
    id?: string;
    nombre: string;
    valor: number;
    stock: number;
    idCategorias: string[];
}

interface Provider {
    id?: string;
    rut: string;
    razonSocial: string;
    direccion: string;
}

interface Sale {
    id?: string;
    folio: string;
    fecha: Date;
    idCliente: string;
    listaProductos?: string[];
    valorNeto: number;
}

interface Delivery {
    id?: string;
    idVenta: string;
    fecha: Date;
    direccion: string;
    valor: number;
    estado: string;
}