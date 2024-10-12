<script setup lang="ts">
import Hero from './hero.vue'
import Features from './features.vue'
import Tweets from './tweets.vue'
import Sponsors from './sponsor.vue'
import Future from './future.vue'
import BuiltWithLove from './built-with-love.vue'

import '../tailwind.css'
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Borel&display=swap"
        rel="stylesheet"
    />

    <div id="landing" class="dark:bg-gray-900/60">
        <Hero />
        <article class="flex flex-col gap-4 text-gray-500/80 dark:text-gray-400/90 leading-normal text-lg">
            <Tweets />
            <Sponsors />
            <Features />
            <Future />
            <BuiltWithLove />
        </article>
    </div>
</template>

<style>
#landing div[class*='language-'] > pre > code {
    display: block;
    width: -moz-fit-content;
    width: fit-content;
    min-width: 100%;
    line-height: 1.5rem;
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-block-color);
    transition: color 0.5s;
    font-size: 16px;
}

#landing div[class*='language-'] > pre {
    position: relative;
    z-index: 1;
    padding: 1em;
    background: transparent;
    overflow-x: auto;
}

#landing div[class*='language-'] > span.lang,
#landing div[class*='language-'] > button {
    display: none;
}

#landing div[class*='language-'] {
    border-radius: 8px;
    position: relative;
    overflow-x: auto;
    background-color: var(--vp-code-block-bg);
    transition: background-color 0.5s;
}

html.dark pre[class*='language-'] {
    @apply bg-slate-800;
}

html.dark {
    @apply bg-slate-900;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    background-color: transparent !important;
}
</style>
