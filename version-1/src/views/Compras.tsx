import { Navbar, Content, Footer } from "../components/Layout"
import Table from "../components/Tabla"
import styles from "../styles"
export default function Compras() {
    let name = "crear-compra";
    const openModal = () => {
        const modal = document.getElementById(name)
        modal.classList.remove("hidden")
    }
    return (
        <main>
            <Navbar />
            <Content>
                <ModalAñadir name={name} />
                <div class="grid grid-cols-3">
                    <button type="button" class={styles.buttonDefault} onClick={openModal}>Agregar compra</button>
                    <button type="button" class={styles.buttonOutlineDefault}>Buscar compra</button>
                    <button type="button" class={styles.buttonDefault}>Exportar a planilla</button>
                </div>
                <Table data={{}} />
            </Content>
            <Footer />
        </main>
    )
}

function ModalAñadir({ name }) {
    const closeModal = () => {
        const modal = document.getElementById(name)
        modal.classList.add("hidden")
    }
    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <div id={name} class="hidden fixed top-0 bg-black/50 overflow-hidden grid justify-items-center place-content-center z-50 w-full md:inset-0 h-[calc(100%)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <form onSubmit={handleSubmit} class="relative bg-white rounded-lg shadow">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Registrar Compra
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={closeModal}>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* interface Buy {
                        id?: string;
                        folio: string;
                        fecha: Date;
                        idProveedor: string;
                        listaProductos: string[];
                        valorNeto: number;
                    } */}

                    <div class="grid md:grid-cols-2 md:gap-6 p-4">

                        <div class="flex flex-col mb-4">
                            <label for="folio" class="block mb-2 text-sm font-medium text-gray-900">Folio</label>
                            <input type="text" name="folio" id="folio" placeholder="folio" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label for="fecha" class="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                            <input type="date" name="fecha" id="fecha" placeholder="fecha" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label for="idProveedor" class="block mb-2 text-sm font-medium text-gray-900">Proveedor</label>
                            <select name="idProveedor" id="idProveedor" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                <option value="">Seleccionar</option>
                                <option value="">Proveedor 1</option>
                                <option value="">Proveedor 2</option>
                                <option value="">Proveedor 3</option>
                            </select>
                        </div>

                        <div class="flex flex-col mb-4">
                            <label for="listaProductos" class="block mb-2 text-sm font-medium text-gray-900">Productos</label>
                            <select name="listaProductos" id="listaProductos" required multiple class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                <option value="">Seleccionar</option>
                                <option value="">Producto 1</option>
                                <option value="">Producto 2</option>
                                <option value="">Producto 3</option>
                            </select>
                        </div>

                        <div class="flex flex-col mb-4">
                            <label for="valorNeto" class="block mb-2 text-sm font-medium text-gray-900">Valor Neto</label>
                            <input type="number" name="valorNeto" id="valorNeto" placeholder="valorNeto" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
                        </div>
                    </div>

                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <input type="submit" class="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="Guardar" />
                        <button onClick={closeModal} type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}