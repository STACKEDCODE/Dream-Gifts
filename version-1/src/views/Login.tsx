import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
import { login } from "../lib/auth";
import { Navbar, Content, Footer } from "../components/Layout"

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = createStore<Credentials>({
        username: "",
        password: ""
    });

    const updateFormField = (fieldName: string) => (event: Event) => {
        const inputElement = event.currentTarget as HTMLInputElement;
        setCredentials({
            [fieldName]: inputElement.value
        });
    };

    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        login(credentials).then((response) => {
            if (response.status === 200) {
                let token: string = response.data.Data;
                sessionStorage.setItem("token", token);
                navigate("/");
            } else {
                alert("Error en las credenciales");
            }
        });
    };

    return (
        <main>
            <Navbar />
            <Content>
                <div class="grid justify-items-center place-content-center">
                    <div class="max-w-md p-6 bg-white">
                        <h2 class="text-2xl font-semibold mb-4 :bg-white-500">Iniciar sesión</h2>
                        <form onSubmit={handleSubmit} id="login-form">
                            <div class="mb-4">
                                <label html-for="username">Nombre de usuario o Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    class="w-full focus:ring-green-500 :text-white :bg-gray-700 px-4 py-2 border border-gray-300 :border-transparent rounded-md focus:outline-none focus:ring focus:border-green-300 text-black"
                                    required
                                    autocomplete='off'
                                    value={credentials.username}
                                    onChange={updateFormField("username")}
                                />
                            </div>
                            <div class="mb-4">
                                <label html-for="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="w-full focus:ring-green-500 :text-white :bg-gray-700 px-4 py-2 border border-gray-300 :border-transparent rounded-md focus:outline-none focus:ring focus:border-green-300 text-black"
                                    required
                                    autocomplete='off'
                                    value={credentials.password}
                                    onChange={updateFormField("password")}
                                />
                            </div>
                            <div class="py-4 text-center text-green-500">
                                <a href="/">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <div class="mb-4">
                                <input
                                    type="submit"
                                    class="w-full focus:ring-green-500 bg-green-400 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:bg-green-600"
                                    value="Iniciar sesión"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </Content>
            <Footer />
        </main>
    )
}