import { Navbar, Content, Footer } from "../components/Layout"
import Table from "../components/Tabla"
import styles from "../styles"
export default function Compras() {
    return (
        <main>
            <Navbar />
            <Content>
                <div class="grid grid-cols-3">
                    <button type="button" class={styles.buttonDefault}>Agregar compra</button>
                    <button type="button" class={styles.buttonOutlineDefault}>Buscar compra</button>
                    <button type="button" class={styles.buttonDefault}>Exportar a planilla</button>
                </div>
                <Table data={{}} />
            </Content>
            <Footer />
        </main>
    )
}