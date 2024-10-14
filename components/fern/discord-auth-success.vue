<template>
  <link rel="preload" as="image" href="/assets/discord-hero.png" fetchpriority="high"/>
  <Ray class="h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50" />
  <div id="splash" class="pointer-events-none absolute top-[-70vh] max-w-full justify-center w-full h-screen opacity-25 block gradient"></div>

  <header
      class="relative flex flex-col justify-center items-center w-full px-6 pt-6 md:pt-0 mb-16 md:mb-8 overflow-hidden"
      style="min-height: calc(100vh - 64px)"
  >
      <img
          src="/assets/discord-hero.png"
          alt="Text logo flying Blockman"
          class="max-w-[70ch] w-full object-contain object-left md:object-center mr-auto md:mr-0"
          style="aspect-ratio: 1.5 / 1"
      />
      <h2
          class="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-400 mb-6"
      >
          Connected Successfully
      </h2>
      <h3
          class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 !leading-normal text-left md:text-center w-full max-w-2xl"
      >
          You've successfully connected your Discord account to Blockman Forge.
          Enjoy the full community experience with enhanced security and community-driven features.
      </h3>
      <section
          class="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto gap-4 mt-10 mb-12"
      >
          <a
              class="text-white font-semibold text-lg bg-pink-400 dark:bg-pink-500 px-6 py-2.5 rounded-full transition-transform transform hover:scale-110 focus:scale-110"
              href="/"
          >
              Home
          </a>
          <a
              class="font-semibold text-pink-400 px-8 py-2.5 rounded-3xl bg-pink-400/10 dark:bg-pink-500/25 transition-transform transform hover:scale-110 focus:scale-110"
              href="https://ko-fi.com/moonsveil"
          >
              Support Us
          </a>
      </section>
  </header>
</template>

<script setup>
import Ray from './ray.vue'
</script>

<style>
.gradient {
  width: 1100px;
  height: 1100px;
}

.gradient {
  background: radial-gradient(
      ellipse at center,
      #d7e0ff 0%,
      #eaecff 35%,
      transparent 70%
  );
}

.dark .gradient {
  background: radial-gradient(
      ellipse at center,
      #797ee199 0%,
      transparent 70%
  );
}

a {
  transition: transform 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
a:hover, a:focus {
  transform: scale(1.1);
}

#hero-get-started, #hero-copy {
@apply transform hover:scale-110 focus:scale-110;
transition: transform .35s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
</style>
