<template>
    <a
        class="flex flex-col w-full h-full rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 p-4 gap-3 text-gray-500 dark:text-gray-300 transition-colors"
    >
        <header class="flex flex-col items-center">
            <img loading="lazy" class="w-24 h-24 rounded-full mb-2" :src="image" alt="profile picture" />
            <div class="flex flex-col text-base text-center">
                <p class="font-bold text-gray-700 dark:text-gray-300">{{ name }}</p>
                <p class="text-gray-500 dark:text-gray-400 text-sm">{{ role }}</p>
            </div>
        </header>
        <p class="text-base whitespace-pre-line text-center mt-2">
            {{ message }}
        </p>
    </a>
</template>

<script setup lang="ts">
defineProps({
    id: String,
    name: String,
    role: String,
    image: String,
    message: String
})
</script>

<style scoped>
a {
    @apply transition ease-in-out duration-200 transform hover:-translate-y-1;
}
</style>
