<template>
    <Ray class="h-[30vh] -top-16 -inset-0 left-0 opacity-30 dark:opacity-[.55] pointer-events-none" />
    
    <header class="flex flex-col justify-center items-center max-w-3xl gap-3 w-full mx-auto pt-20 pb-4">
        <h1 class="text-3xl md:text-4xl text-slate-700 dark:text-slate-100 font-semibold">
            Download Blockman Forge
        </h1>
        <p class="text-slate-500 dark:text-slate-300 text-lg md:text-xl">
            Choose your platform and Let's Go!
        </p>
    </header>

    <main class="flex flex-col gap-6 max-w-5xl w-full mx-auto my-12 px-4 sm:px-0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="relative flex flex-col w-full rounded-3xl p-8 border transform hover:-translate-y-2 transition-all ease-out duration-200 dark:text-gray-400 bg-white dark:bg-gray-900 border-r-blue-100 border-b-purple-100 border-t-purple-200 border-l-blue-200 dark:border-r-blue-300/40 dark:border-b-purple-300/40 dark:border-t-purple-400/50 dark:border-l-blue-400/40">
                <img src="/assets/android.png" alt="Android" class="mb-4 rounded-t-3xl w-full h-64 object-cover">
                <h3 class="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Android</h3>
                <h4 class="inline-block text-lg font-medium mt-1 mb-4 text-green-400">Download for Android</h4>
                <p class="text-sm md:text-base">We apologize, but this download is not available right now.</p>
                <div class="flex sm:justify-center my-4">
                    <a
                        class="inline-flex items-center text-white font-semibold bg-gradient-to-br from-blue-400 to-pink-500 rounded-full px-6 py-3 box-shadow shadow-cyan-400/40 shadow-lg transition-transform transform hover:scale-110 focus:scale-110"
                        href="#"
                    >
                        Download
                    </a>
                </div>
            </div>

            <div class="relative flex flex-col w-full rounded-3xl p-8 border transform hover:-translate-y-2 transition-all ease-out duration-200 dark:text-gray-400 bg-white dark:bg-gray-900 border-r-blue-100 border-b-purple-100 border-t-purple-200 border-l-blue-200 dark:border-r-blue-300/40 dark:border-b-purple-300/40 dark:border-t-purple-400/50 dark:border-l-blue-400/40">
                <img src="/assets/windows.png" alt="Windows" class="mb-4 rounded-t-3xl w-full h-64 object-cover">
                <h3 class="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Windows</h3>
                <h4 class="inline-block text-lg font-medium mt-1 mb-4 text-blue-400">Download for Windows</h4>
                <p class="text-sm md:text-base">We apologize, but this download is not available right now.</p>
                <div class="flex sm:justify-center my-4">
                    <a
                        class="inline-flex items-center text-white font-semibold bg-gradient-to-br from-blue-400 to-pink-500 rounded-full px-6 py-3 box-shadow shadow-cyan-400/40 shadow-lg transition-transform transform hover:scale-110 focus:scale-110"
                        href="#"
                    >
                        Download
                    </a>
                </div>
            </div>

            <div class="relative flex flex-col w-full rounded-3xl p-8 border transform hover:-translate-y-2 transition-all ease-out duration-200 dark:text-gray-400 bg-white dark:bg-gray-900 border-r-blue-100 border-b-purple-100 border-t-purple-200 border-l-blue-200 dark:border-r-blue-300/40 dark:border-b-purple-300/40 dark:border-t-purple-400/50 dark:border-l-blue-400/40">
                <img src="/assets/ios.png" alt="iOS" class="mb-4 rounded-t-3xl w-full h-64 object-cover">
                <h3 class="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">iOS</h3>
                <h4 class="inline-block text-lg font-medium mt-1 mb-4 text-teal-400">Download for iOS</h4>
                <p class="text-sm md:text-base">We apologize, but this download is not available right now.</p>
                <div class="flex sm:justify-center my-4">
                    <a
                        class="inline-flex items-center text-white font-semibold bg-gradient-to-br from-blue-400 to-pink-500 rounded-full px-6 py-3 box-shadow shadow-cyan-400/40 shadow-lg transition-transform transform hover:scale-110 focus:scale-110"
                        href="#"
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import Ray from '../fern/ray.vue'
import '../tailwind.css'

const downloadLinks = {
    android: '/artifactory/null.apk',
    windows: '/artifactory/installer.exe',
    ios: '/artifactory/null.ipa'
}
</script>
