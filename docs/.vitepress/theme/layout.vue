<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, ref } from 'vue'

import { useData } from 'vitepress'
// import Header from './header.vue'

const { isDark: darkTheme } = useData()

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
    if (!enableTransitions() || !window?.localStorage) {
        darkTheme.value = !darkTheme.value
        return
    }

    const lastSwitch = window.localStorage.getItem('theme-switch')
    if (lastSwitch !== null && !isNaN(+lastSwitch)) {
        const lastSwitchTime = +lastSwitch

        if (Date.now() - lastSwitchTime > 3 * 60 * 1000) {
            if (document.documentElement.classList.contains('-animated'))
                document.documentElement.classList.remove('-animated')
        } else {
            document.documentElement.classList.add('-animated')
        }
    }

    window.localStorage.setItem('theme-switch', Date.now().toString())
})
</script>

<template>
    <link rel="preload" as="image" href="/assets/hero.png" fetchpriority="high">
    <DefaultTheme.Layout>
        <template #doc-top>
            <Ray
                class="h-[220px] top-0 left-0 opacity-25 dark:opacity-[.55] pointer-events-none"
                static
            />
        </template>
    </DefaultTheme.Layout>
</template>

<style>
:root {
    --switch-duration: 1.75s;
    --switch-name: scale;
}

.-animated {
    --switch-duration: 1s;
    --switch-name: scale-fast;
}

::view-transition-group(root) {
    animation-timing-function: var(--expo-in);
    z-index: 100;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
    animation: var(--switch-name) var(--switch-duration);
}

@keyframes scale {
    0% {
        mask-size: 0;
    }
    10% {
        mask-size: 50vmax;
    }
    90% {
        mask-size: 50vmax;
    }
    100% {
        mask-size: 2000vmax;
    }
}

@keyframes scale-fast {
    0% {
        mask-size: 0;
    }
    10% {
        mask-size: 50vmax;
    }
    80% {
        mask-size: 50vmax;
    }
    100% {
        mask-size: 2000vmax;
    }
}

.VPSwitchAppearance {
    width: 22px !important;
}

.VPSwitchAppearance .check {
    transform: none !important;
}

html.dark {
    @apply bg-slate-900;
}
</style>
