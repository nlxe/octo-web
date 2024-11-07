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
                    id="neluxe"
                    user="Nlxe"
                    image="/tweets/neluxe.webp"
                    content="It's time to start new gaming series, new amazing stuffs that you still didn't see them."
                    href="https://guns.lol/nlxe"
                />
                <Tweet
                    id="wynedeutxsch"
                    user="Wayne"
                    image="/tweets/wayne.webp"
                    content="Blockman Go Forge is better than Ultra Go because it offers enhanced modding capabilities and greater creative freedom for players"
                    href="https://guns.lol/wayn3"
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
                <Tweet
                    id="ariefplayzzz"
                    user="Arief"
                    image="/tweets/arief.webp"
                    content="Blockman Forge is the best sandbox game out there also bringing back the nostalgic feel of Blockman GO while offering endless creative possibilities to the game."
                    href=""
                />
                <Tweet
                    id="uno.raman"
                    user="R4man"
                    image="/tweets/uno-raman.webp"
                    content="I love blockman forge becasue the modern design and gameplay just catches my (and my friend's) eye! The customization options allow for freedom and creativity, the mascots and UI are interesting to say the least. This version is just BETTER than blockman go and i will switch over to Blockman Forge!"
                    href="https://rneo.neocities.org"
                />
            </div>
            <div class="flex flex-col gap-3 lg:mt-6">
                <Tweet
                    id="zvyne.1"
                    user="Zvyne"
                    image="/tweets/zvyne.webp"
                    content="Blockman forge is at times getting difficulties but still preserving which is making it quite an impeccable team and we also drive to add stuff which quite literally will astonish you by having better security,game play and more"
                    href=""
                />
                
                <Tweet
                    id="notendyet"
                    user="Marko"
                    image="/tweets/marko.webp"
                    content="Blockman Forge is a step ahead of tradition. Here, you can experience real cross-culture between Minecraft and Blockmango. I'm glad to be an early friend of this lovely mission, supporting this journey !"
                    href=""
                />
                <Tweet
                    id="despacitospiderr"
                    user="Ryu"
                    image="/tweets/ryu.webp"
                    content="Blockman Forge is a game with its own aesthetic. The game is very good looking if you ask me, the game is very stable and virus-free. Overall I would prefer Blockman Forge rather than the other BG private servers."
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
