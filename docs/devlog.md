---
title: devlog
layout: page
sidebar: false
editLink: false
search: false
head:
    - - meta
      - property: 'og:title'
        content: Blog - Blockman Forge

    - - meta
      - name: 'description'
        content: Update of Blockman Forge from our Developers

    - - meta
      - property: 'og:description'
        content: News & Updates from our Developers of Blockman Forge!
---

<script setup>
    import Blogs from '../components/blog/Landing.vue'
</script>

<Blogs
  :blogs="[
	  {
	    title: '🌟 Version 1.0.0 - Grown-up\'s Paradise 🌟',
	    detail: 'Join our legendary Discord Server to embark on this thrilling journey and stay on the cutting edge of updates! Your adventure awaits...',
      href: 'https://discord.gg/arvZCMJ7vG'
	  }
  ]"
/>
