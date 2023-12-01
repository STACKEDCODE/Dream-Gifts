import { Navbar, Footer } from "../components/Layout"

export default function Login() {
    return (
        <main>
            <Navbar />
            <div class="h-screen grid justify-items-center place-content-center">
                <div class="max-w-md p-6 bg-white">
                    <h2 class="text-2xl font-semibold mb-4 dark:bg-white-500">Iniciar sesión</h2>
                    <div id="login-form">
                        <div class="mb-4">
                            <label html-for="email">Nombre de usuario o Email</label>
                            <input
                                type="text"
                                id="email"
                                class="w-full focus:ring-green-500 dark:text-white dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-transparent rounded-md focus:outline-none focus:ring focus:border-green-300 text-black"
                                required
                                autocomplete='off'
                            />
                        </div>
                        <div class="mb-4">
                            <label html-for="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                class="w-full focus:ring-green-500 dark:text-white dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-transparent rounded-md focus:outline-none focus:ring focus:border-green-300 text-black"
                                required
                                autocomplete='off'
                            />
                        </div>
                        <div class="py-4 text-center text-green-500">
                            <a href="/">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <div class="mb-4">
                            <button
                                class="w-full focus:ring-green-500 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:bg-green-600"
                            >
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}