import { For, Show } from "solid-js"

function SkeletonTable() {
    return (
        <div role="status" class="relative overflow-x-auto animate-pulse">
            <table class="w-full text-sm text-left text-gray-500 :text-gray-400">
                <thead>
                    <tr class="h-16 w-full text-sm leading-none text-gray-800 bg-gray-100 border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <th class="font-normal text-left pl-4"> </th>
                        <th class="font-normal text-left pl-4"> </th>
                        <th class="font-normal text-left pl-4"> </th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default function Table({ data }) {
    let keys = [];
    if (data[0] != undefined) {
        keys = Object.keys(data[0]);
    }
    else {
        keys = [];
    }

    const hideToast = () => {
        let toast = document.getElementById("toast-success")
        toast.classList.add("opacity-0")
        toast.classList.add("scale-90")
        setTimeout(() => {
            toast.classList.add("hidden")
        }, 200)
    }
    function copyToClipboard(event: Event) {
        const { innerText: value } = event.target as HTMLTableCellElement
        navigator.clipboard.writeText(value)

        const toast = document.getElementById("toast-success")
        toast.classList.remove("hidden")
        toast.classList.remove("opacity-0")
        toast.classList.remove("scale-90")
        setTimeout(() => {
            hideToast()
        }, 2000)
    }

    return (
        <Show when={keys} fallback={<SkeletonTable />}>
            <div id="toast-success" class="hidden absolute left-1/2 bottom-12 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 mb-4 text-gray-700 bg-white rounded-lg shadow transition-all ease-in-out duration-200 opacity-0 scale-90" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">Valor copiado al portapapeles.</div>
                <button onClick={hideToast} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div class="relative overflow-x-auto max-h-[60vh]">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead>
                        <tr class="h-16 w-full text-sm leading-none text-gray-800 bg-gray-100 border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                            <For each={keys}>
                                {item => <th class="text-left px-4 uppercase">{item}</th>}
                            </For>
                        </tr>
                    </thead>
                    <tbody class="w-full">
                        <For each={data}>
                            {
                                item => <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                                    <For each={Object.keys(item)}>
                                        {
                                            key =>
                                                key === 'Active' ?
                                                    <td class="pl-4 cursor-pointer">
                                                        <span class={`inline-block h-4 w-full rounded-full ${item[key] ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    </td>
                                                    :
                                                    key === 'ActiveSessionId' ?
                                                        item[key] === "" || item[key] == null ?
                                                            <td class="pl-4 cursor-pointer" onClick={copyToClipboard}>No hay sesiones activas</td>
                                                            :
                                                            <td class="pl-4 cursor-pointer" onClick={copyToClipboard}>{item[key]}</td>
                                                        :
                                                        <td class="pl-4 cursor-pointer" onClick={copyToClipboard}>{item[key]}</td>
                                        }
                                    </For>
                                </tr>
                            }
                        </For>
                    </tbody>
                </table>
            </div>
        </Show>
    )
}
