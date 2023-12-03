function SkeletonTable() {
    return (
        <div role="status" class="relative overflow-x-auto animate-pulse">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead>
                    <tr class="h-16 w-full text-sm leading-none text-gray-800 bg-gray-100 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <th class="font-normal text-left pl-4"> </th>
                        <th class="font-normal text-left pl-4"> </th>
                        <th class="font-normal text-left pl-4"> </th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                        <td class="pl-4"> </td>
                    </tr>
                    <tr class="h-14 text-sm leading-none text-gray-800 bg-white border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
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
    if (data == null) return (
        <SkeletonTable />
    )
    else {
        try {
            return (
                <div class="relative overflow-x-auto max-h-[60vh]">
                    <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead>
                            <tr class="h-16 w-full text-sm leading-none text-gray-800 bg-gray-100 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                {
                                    data[0] && Object.keys(data[0]).map((key) => {
                                        return (
                                            <th class="text-left px-4 uppercase">{key}</th>
                                        )
                                    }
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            {
                                data.map((item) => {
                                    return (
                                        (item.diasFaltantes > 10 || item.plazo == "+10 Días") ?
                                            <tr class="h-14 text-sm leading-none text-gray-900 bg-sky-400 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                                {
                                                    Object.keys(item).map((key) => {
                                                        return (
                                                            item[key].length == 24 ?
                                                                <td class="pl-4">{new Date(item[key]).toISOString().substring(0, 10)}</td>
                                                                :
                                                                item[key] == item.diasFaltantes ?
                                                                    <td class="pl-4">{item[key] + ' dias restantes'}</td>
                                                                    :
                                                                    <td class="pl-4">{item[key]}</td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                            :
                                            (item.diasFaltantes < 10 && item.diasFaltantes > 0 || item.plazo == "-10 Días") ?
                                                <tr class="h-14 text-sm leading-none text-gray-900 bg-green-400 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                                    {
                                                        Object.keys(item).map((key) => {
                                                            return (
                                                                item[key].length == 24 ?
                                                                    <td class="pl-4">{new Date(item[key]).toISOString().substring(0, 10)}</td>
                                                                    :
                                                                    item[key] == item.diasFaltantes ?
                                                                        <td class="pl-4">{item[key] + ' dias restantes'}</td>
                                                                        :
                                                                        <td class="pl-4">{item[key]}</td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                                :
                                                (item.diasFaltantes == 0 || item.plazo == "Hoy") ?
                                                    <tr class="h-14 text-sm leading-none text-gray-900 bg-orange-400 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                                        {
                                                            Object.keys(item).map((key) => {
                                                                return (
                                                                    item[key].length == 24 ?
                                                                        <td class="pl-4">{new Date(item[key]).toISOString().substring(0, 10)}</td>
                                                                        :
                                                                        item[key] == item.diasFaltantes ?
                                                                            <td class="pl-4">{'Se entrega hoy'}</td>
                                                                            :
                                                                            <td class="pl-4">{item[key]}</td>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                    :
                                                    (item.diasFaltantes < 0 || item.plazo == "Atrasados") ?
                                                        <tr class="h-14 text-sm leading-none text-gray-900 bg-red-400 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                                            {
                                                                Object.keys(item).map((key) => {
                                                                    return (
                                                                        item[key].length == 24 ?
                                                                            <td class="pl-4">{new Date(item[key]).toISOString().substring(0, 10)}</td>
                                                                            :
                                                                            item[key] == item.diasFaltantes ?
                                                                                <td class="pl-4">{Math.abs(item[key]) + ' días atrasados'}</td>
                                                                                :
                                                                                <td class="pl-4">{item[key]}</td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                        :
                                                        <tr class="h-14 text-md font-bold leading-none text-gray-800 bg-gray-200 border-b border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                                                            {
                                                                Object.keys(item).map((key) => {
                                                                    return (
                                                                        item[key].length == 24 ?
                                                                            <td class="pl-4">{new Date(item[key]).toISOString().substring(0, 10)}</td>
                                                                            :
                                                                            item[key] == item.diasFaltantes ?
                                                                                <td class="pl-4">{item[key]}</td>
                                                                                :
                                                                                <td class="pl-4">{item[key]}</td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>)
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        catch {
            return <SkeletonTable />
        }
    }
}