import { createStore } from 'solid-js/store';
import { SolidApexCharts } from 'solid-apexcharts';

const responsiveConfig = [
    {
        breakpoint: 1370,
        options: {
            chart: {
                width: 400
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 1080,
        options: {
            chart: {
                width: 490
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 790,
        options: {
            chart: {
                width: 480
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 750,
        options: {
            chart: {
                width: 420
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 690,
        options: {
            chart: {
                width: 350
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 480,
        options: {
            chart: {
                width: 330
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 395,
        options: {
            chart: {
                width: 250
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 300,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }
]

export function Produccion() {
    const [options] = createStore({
        chart: {
            id: 'Produccion'
        },
        xaxis: {
            categories: ["San valentin", "Halloween", "Aniversarios", "Cumpleaños"],
        },
        colors: ['#7ED957', '#00BF63'],
        responsive: responsiveConfig,
    });
    const [series] = createStore({
        list: [
            {
                name: '2022',
                data: [5, 7, 5, 14],
            },
            {
                name: '2023',
                data: [5, 4, 10, 20],
            },
        ]
    });

    return (
        <div class='grid justify-items-center gap-2 block text-center p-6 border border-gray-200 bg-white'>
            <h1 class='transition-all lg:text-2xl md:text-xl sm:text-lg font-bold text-[#30473B]'>Frecuencia de ventas semestrales 2022/2023</h1>
            <SolidApexCharts class='transition-all' width="505" type="bar" options={options} series={series.list} />
        </div>
    )
}

export function Plazos() {
    const [options] = createStore({
        chart: {
            id: 'Produccion'
        },
        colors: ['#9EEC6C', '#8FDE5C', '#78CF40', '#5BB63C'],
        responsive: responsiveConfig,
        labels: ['Más de 15 días', 'Menos de 15 días', 'Hoy', 'Atrasados'],
        legend: {
            position: 'bottom',
        },
    });

    const [series] = createStore({
        series: [44, 55, 13, 33],
    });

    return (
        <div class='grid justify-items-center gap-2 block text-center p-6 border border-gray-200 bg-white'>
            <h1 class='transition-all lg:text-2xl md:text-xl sm:text-lg font-bold text-[#30473B]'>Plazos de entrega</h1>
            <SolidApexCharts class='transition-all' width="505" type="pie" options={options} series={series.series} />
        </div>
    )
}