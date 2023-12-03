import { Navbar, Content, Footer } from "../components/Layout"
import Table from "../components/Tabla"
import styles from "../styles"
export default function Productos() {
    return (
        <main>
            <Navbar />
            <Content>
                <div class="grid grid-cols-3">
                    <button type="button" class={styles.buttonDefault}>Agregar producto</button>
                    <button type="button" class={styles.buttonOutlineDefault}>Buscar producto</button>
                    <button type="button" class={styles.buttonDefault}>Exportar a planilla</button>
                </div>
                <Table data={{}} />
            </Content>
            <Footer />
        </main>
    )
}