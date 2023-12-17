import { Navbar, Content, Footer } from "../components/Layout"
import { createSale, getSales, deleteSale, exportExcel } from "../lib/sales";
import { getClients } from "../lib/clients";
import { createEffect, createSignal } from "solid-js";
import { Show, For } from "solid-js";
import Table from "../components/Tabla"
import styles from "../styles"
export default function Ventas() {
    let name = "crear-venta";
    const openModal = () => {
        const modal = document.getElementById(name)
        modal.classList.remove("hidden")
    }
    const [sales, setSales] = createSignal([])
    const [clients, setClients] = createSignal([])
    const [loading, setLoading] = createSignal(true)
    const token = sessionStorage.getItem("token")

    const fetchSales = async () => {
        setLoading(() => true)
        const sales = await getSales(token).then((response) => { return response.data })
        const clients = await getClients(token).then((response) => { return response.data })
        setSales(() => sales)
        setClients(() => clients)
        setLoading(() => false)
    }

    createEffect(async () => {
        fetchSales()
    })

    function ModalAñadir({ name }) {
        const closeModal = () => {
            const modal = document.getElementById(name)
            modal.classList.add("hidden")
        }
        const handleSubmit = async (event: Event): Promise<void> => {
            event.preventDefault();
            const { folio, fecha, idCliente, valorNeto } = event.target as HTMLFormElement
            let sale: Sale = {
                folio: folio.value,
                fecha: fecha.value,
                idCliente: idCliente.value,
                valorNeto: valorNeto.value
            }
            await createSale(sale, token).then(
                () => fetchSales()
            ).catch((error) => {
                console.log(error)
            })
            fetchSales()
            closeModal()
        }
        return (
            <div id={name} class="hidden fixed top-0 bg-black/50 overflow-hidden grid justify-items-center place-content-center z-50 w-full md:inset-0 h-[calc(100%)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <form onSubmit={handleSubmit} class="relative bg-white rounded-lg shadow">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Registrar Venta
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={closeModal}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* interface Sale {
                            id?: string;
                            folio: string;
                            fecha: Date;
                            idCliente: string;
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
                                <label for="idCliente" class="block mb-2 text-sm font-medium text-gray-900">Cliente</label>
                                <select name="idCliente" id="idCliente" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                    <option value="">Seleccione un cliente</option>
                                    <For each={clients()}>
                                        {(client) => (
                                            <option value={client.id}>{client.rut}</option>
                                        )}
                                    </For>
                                </select>
                            </div>
                            {/* valorNeto */}
                            <div class="flex flex-col mb-4">
                                <label for="valorNeto" class="block mb-2 text-sm font-medium text-gray-900">Valor Neto</label>
                                <input type="number" name="valorNeto" id="valorNeto" placeholder="Valor Neto" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
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

    const deleteItem = async (event: Event): Promise<void> => {
        event.preventDefault();
        const { delete: id } = event.target as HTMLFormElement
        await deleteSale(id.value, token).then(
            () => fetchSales()
        ).catch((error) => {
            console.log(error)
        })
    }

    const downloadExcel = async (event: Event): Promise<void> => {
        event.preventDefault();
        await exportExcel(token).catch((error) => { console.log(error) })
    }

    return (
        <main>
            <Navbar />
            <Content>
                <ModalAñadir name={name} />
                <div class="grid grid-cols-3 gap-2">
                    <button type="button" class={styles.buttonDefault} onClick={openModal}>Agregar venta</button>
                    <form onSubmit={deleteItem}>
                        <div class="relative">
                            <input type="search" id="delete" class={styles.buttonOutlineDefault} placeholder="N° Entrega" required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-4 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">Eliminar Entrega</button>
                        </div>
                    </form>
                    <button type="button" class={styles.buttonDefault} onClick={downloadExcel}>Exportar a planilla</button>
                </div>
                <Show when={loading()}>
                    <div class="text-center">
                        <div role="status">
                            <svg aria-hidden="true" class="inline h-64 text-gray-100 animate-spin fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </Show>
                <Show when={!loading()}>
                    <Table data={sales()} />
                </Show>
            </Content>
            <Footer />
        </main>
    )
}