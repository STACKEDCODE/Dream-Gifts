import { A } from "@solidjs/router"

export default function KPI() {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <KpiPlazos />
            <Presupuesto />
            <Ventas />
        </div>
    )
}

function KPICard({ title, value }) {
    return (
        <A href="/entregas" class="block text-center p-6 border border-gray-200 bg-white hover:bg-gray-100 :bg-gray-800 :border-gray-700 :hover:bg-gray-700">
            <h1 class="text-xl font-bold :text-white text-gray-800 pb-4">{title}: {value}%</h1>
            <div class="w-full bg-gray-200 h-4">
                <div class='bg-[#7ED955] h-4' style={{ width: `${value}%` }}></div>
            </div>
        </A>
    )
}

export function KpiPlazos() {
    return (
        <KPICard title="KPI entregas completadas" value="13.72" />
    )
}

export function Presupuesto() {
    return (
        <KPICard title="Presupuesto P2023" value="50" />
    )
}

export function Ventas() {
    return (
        <KPICard title="Meta de ventas P2023" value="70" />
    )
}