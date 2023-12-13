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
    let keys = null;
    if (data[0] != undefined) keys = Object.keys(data[0]);
    console.log(keys)
    return (
        <Show when={keys} fallback={<SkeletonTable />}>
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
                            {item => <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 :bg-gray-800 :text-gray-400 :border-gray-700">
                                <For each={Object.keys(item)}>
                                    {key => <td class="pl-4">{item[key]}</td>}
                                </For>
                            </tr>}
                        </For>
                    </tbody>
                </table>
            </div>
        </Show>
    )
}
