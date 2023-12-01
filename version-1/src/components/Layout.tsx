import { A } from "@solidjs/router";
import { BellIcon, HomeIcon, UserIcon, GiftIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon } from "./Icons";
import styles from "../styles";

export function Navbar() {
    // const token = sessionStorage.getItem('token');
    let token = true;
    return (
        <div class="bg-[#38D484] dark:bg-gray-800 border-b dark:border-gray-800 fixed top-0 w-full">
            <div class="mx-auto flex items-center justify-between p-4">
                <A href="/" class="flex items-center">
                    <GiftIcon style={styles.icon} />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">DreamGifts</span>
                </A>
                {
                    token ?
                        <div class="font-medium flex flex-row space-x-8 mt-0 p-0">
                            <A href="/notifications" class="relative border-0 hover:text-green-700 p-0 dark:text-white">
                                <BellIcon style={styles.icon} />

                            </A>
                            <A href="/chat" class="relative border-0 hover:text-green-700 p-0 dark:text-white">
                                <ChatBubbleLeftRightIcon style={styles.icon} />

                            </A>
                        </div>
                        :
                        <></>
                }
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <footer class="bg-[#737373] dark:bg-gray-800 fixed bottom-0 w-full border-t dark:border-gray-800">
            <div class="flex items-center justify-center p-4">
                <span class="self-center text-lg whitespace-nowrap text-white">DreamGifts© 2023. Powered by <A href="https://stackedcode.cl" class="underline">StackedCode</A></span>
            </div>
        </footer>
    )
}