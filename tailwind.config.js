/** @type {import('tailwindcss').Config} */
module.exports = {
    preflight: false,
    content: ['components/**/*.vue', 'docs/**/*.md', 'docs/.vitepress/theme/*.vue'],
    darkMode: 'class',
    theme: {
        extend: {}
    },
    variants: {
        extend: {
          transform: ['hover', 'focus'],
          backgroundColor: ['hover', 'focus'],
          boxShadow: ['hover', 'focus'],
        },
      },
    plugins: [
        require('daisyui')
    ]
}
