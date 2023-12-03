import { Navbar, Content, Footer } from "../components/Layout"
import Table from "../components/Tabla"
import styles from "../styles"
export default function Ventas() {
    return (
        <main>
            <Navbar />
            <Content>
                <div class="grid grid-cols-3">
                    <button type="button" class={styles.buttonDefault}>Agregar venta</button>
                    <button type="button" class={styles.buttonOutlineDefault}>Buscar venta</button>
                    <button type="button" class={styles.buttonDefault}>Exportar a planilla</button>
                </div>
                <Table data={{}} />
            </Content>
            <Footer />
        </main>
    )
}