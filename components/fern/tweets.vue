<template>
    <article id="people-tweets" class="fern-gap">
        <h2 class="sm:text-center text-4xl font-semibold text-gray-700 dark:text-gray-300 leading-[3rem]">
            Powered by
            <span class="text-gradient from-rose-400 to-orange-400">Donations</span
            ><br />from the
            <span class="text-gradient from-rose-400 to-amber-400"
                >Community</span
            > &
            <span class="text-gradient from-teal-400 to-blue-600"
                >Our Team</span
            >
        </h2>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-12 pb-8">
            <div class="flex flex-col gap-3 lg:mt-12">
                <Tweet
                    id="rchyx"
                    user="Rchyx"
                    image="/tweets/rchyx.webp"
                    content="Blockman Forge is coming along really well. Development’s smooth, and everything’s looking great. We’re excited and hope it becomes one of the best games out there."
                    href="https://guns.lol/rchyx"
                />
                <Tweet
                    id="greenbmgo"
                    user="Green"
                    image="/tweets/green.webp"
                    content="We can't wait for you to join our world and explore what we've built, full of creativity and challenges. Stay tuned for more updates and get ready to forge your adventure!"
                    href=""
                />
            </div>
            <div class="flex flex-col gap-3">
                <Tweet
                    id=".p_zero"
                    user="Drej"
                    image="/tweets/drej.webp"
                    content="Blockman Forge is my very first project, and I’m excited to see it grow and evolve beyond my expectations!"
                    href="https://guns.lol/drej"
                />
                <Tweet
                    id="unknown"
                    user="Unknown"
                    image="/tweets/unknown.webp"
                    content="This is a great game, I will choose Blockman Forge over Blockman GO!"
                    href=""
                />
            </div>
            <div class="flex flex-col gap-3 lg:mt-6">
                <Tweet
                    id="zvyne.1"
                    user="Zvyne"
                    image="/tweets/zvyne.webp"
                    content="Blockman Forge is a step ahead of tradition. Here, you can experience real cross-culture between Minecraft and Blockmango. I'm glad to be an early friend of this lovely mission, supporting this journey !"
                    href=""
                />
                <Tweet
                    id="notendyet"
                    user="Marko"
                    image="/tweets/marko.webp"
                    content="Blockman Forge is a step ahead of tradition. Here, you can experience real cross-culture between Minecraft and Blockmango. I'm glad to be an early friend of this lovely mission, supporting this journey !"
                    href=""
                />
            </div>
        </section>
    </article>
</template>

<script setup lang="ts">
import Tweet from './tweet.vue'
</script>

<style>
#people-tweets {
    @apply flex flex-col max-w-5xl w-full my-8 mx-auto;
}
</style>
