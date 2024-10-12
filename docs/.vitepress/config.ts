import { defineConfig } from 'vitepress'

import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const description =
    'Supercharged Gameplay Experience!'

export default defineConfig({
    lang: 'en-US',
    title: 'Moonsveil',
    description,
    ignoreDeadLinks: true,
    lastUpdated: true,
    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        codeTransformers: [transformerTwoslash()]
    },
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
    head: [
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ],
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/moonsveil-rounded-b.png'
            }
        ],
        [
            'meta',
            {
                property: 'og:image:width',
                content: '1920'
            }
        ],
        [
            'meta',
            {
                property: 'og:image:height',
                content: '1080'
            }
        ],
        [
            'meta',
            {
                property: 'twitter:card',
                content: 'summary_large_image'
            }
        ],
        [
            'meta',
            {
                property: 'og:title',
                content: 'Moonsveil'
            }
        ],
        [
            'meta',
            {
                property: 'og:description',
                content: description || 'Supercharged Gameplay Experience!'
            }
        ]
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: '/assets/moonsveil.png',
        nav: [
            {
                text: 'Devlog',
                link: '/devlog'
            },
            {
                text: 'Download',
                link: '/download'
            },
            {
                text: 'Donation',
                items: [
                  { text: 'Ko-fi', link: 'https://ko-fi.com/moonsveil' },
                  { text: 'Boosty', link: 'https://boosty.to/moonsveil' }
                ]
              }
        ],
        outline: {
            level: [2, 3],
            label: 'Outline'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/moonsveil' },
            { icon: 'discord', link: 'https://discord.gg/arvZCMJ7vG' },
            { icon: 'youtube', link: 'https://www.youtube.com/@axtondrej' }
        ]
    }
})
