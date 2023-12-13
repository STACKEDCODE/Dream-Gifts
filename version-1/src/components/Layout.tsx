import { A, useLocation } from "@solidjs/router";
import { For, Show } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { CreditCardIcon, HomeIcon, UserIcon, GiftIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, UserGroupIcon } from "./Icons";
import styles from "../styles";
import 'flowbite';

export function Navbar() {
    const [token, setToken] = createSignal(sessionStorage.getItem('token'));
    onMount(() => {
        setToken(sessionStorage.getItem('token'));
    });
    return (
        <div class="bg-[#38D484] :bg-gray-800 fixed top-0 w-full z-50">
            <div class="mx-auto flex items-center justify-between p-4">
                <A href="/" class="flex items-center space-x-2">
                    <GiftIcon style={styles.icon} />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">DreamGifts</span>
                </A>
                <Show
                    when={token()}
                    fallback={<></>}
                >
                    <div class="font-medium flex flex-row space-x-8 mt-0 p-0">
                        <A href="/" class={styles.linkedNavigation}>
                        </A>
                        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6 fill-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    </div>
                </Show>
            </div>
        </div>
    )
}

export function Content({ children }) {
    const [token, setToken] = createSignal(sessionStorage.getItem('token'));
    onMount(() => {
        setToken(sessionStorage.getItem('token'));
    });
    const location = useLocation();
    const navigation = [
        {
            name: 'Inicio',
            href: '/',
            icon: HomeIcon
        },
        {
            name: 'Clientes',
            href: '/clientes',
            icon: UserIcon
        },
        {
            name: 'Productos',
            href: '/productos',
            icon: GiftIcon
        },
        {
            name: 'Compras',
            href: '/compras',
            icon: CreditCardIcon
        },
        {
            name: 'Ventas',
            href: '/ventas',
            icon: ChatBubbleLeftRightIcon
        },
        {
            name: 'Entregas',
            href: '/entregas',
            icon: CalendarDaysIcon
        },
        {
            name: 'Usuarios',
            href: '/usuarios',
            icon: UserGroupIcon
        }
    ]
    return (
        <div>
            <Show
                when={token()}
                fallback={<div class="py-24 px-4">
                    {children}
                </div>}
            >
                <aside id="default-sidebar" class="fixed pt-16 z-0 top-0 left-0 z-40 border-r w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div class="h-full px-3 py-8 xl:py-4 overflow-y-auto bg-white :bg-gray-800">
                        <ul class="space-y-2 font-medium">
                            <For
                                each={navigation}
                            >
                                {
                                    (item) => (
                                        <Show when={item.href === location.pathname}
                                            fallback={
                                                <A href={item.href} class="flex items-center p-2 rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group">
                                                    <item.icon style={styles.sideIcon} />
                                                    <span class="ml-2 text-2xl font-bold :text-white text-gray-600">{item.name}</span>
                                                </A>
                                            }
                                        >
                                            <A href={item.href} class="flex items-center p-2 rounded-lg bg-[#38D484] :text-white hover:bg-green-500 :hover:bg-gray-700 group">
                                                <item.icon style={styles.icon} />
                                                <span class="ml-2 text-2xl font-bold text-white">{item.name}</span>
                                            </A>
                                        </Show>
                                    )
                                }
                            </For>
                        </ul>
                    </div>
                </aside>
                <div class="py-24 px-4 sm:ml-64">
                    {children}
                </div>
            </Show>
        </div>
    )
}

export function Footer() {
    return (
        <footer class="bg-[#737373] :bg-gray-800 fixed bottom-0 w-full z-40">
            <div class="flex items-center justify-center xl:p-4 md:p-2">
                <span class="self-center whitespace-nowrap text-white">DreamGifts© 2023. Powered by <A href="https://stackedcode.cl" class="underline">StackedCode</A></span>
            </div>
        </footer>
    )
}