import { Produccion, Plazos } from "../components/Graphs"
import { Navbar, Content, Footer } from "../components/Layout"
import KPI from "../components/KPI"
export default function Home() {
    return (
        <main>
            <Navbar />
            <Content>
                <div class="flex flex-col space-y-4">
                    <KPI />
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 ">
                        <Produccion />
                        <Plazos />
                    </div>
                </div>
            </Content>
            <Footer />
        </main>
    )
}