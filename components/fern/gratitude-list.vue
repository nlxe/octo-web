<template>
    <Ray class="h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50" />
    <article id="gratitude-list" class="fern-gap">
        <h2 class="text-5xl text-center font-medium leading-[3.5rem] mb-6">
            Our Grateful
            <span class="text-gradient from-rose-400 to-amber-400">Team</span>
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-10">
            Celebrating the incredible contributions of our team members at Blockman Forge.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <Card
                v-for="member in members"
                :key="member.id"
                :id="member.id"
                :name="member.name"
                :role="member.role"
                :image="member.image"
                :message="member.message"
            />
        </div>
    </article>
</template>

<script setup lang="ts">
import Card from '../fern/gratitude-card.vue';
import Ray from '../fern/ray.vue';

const members = [
    {
        id: 'owner',
        name: 'Drej (Axton)',
        role: '[ Owner ]',
        message: 'A huge thank you to our amazing community!',
        image: '/tweets/drej.webp'
    },
    {
        id: 'co-owner',
        name: 'Rchyx',
        role: '[ Co-Owner ]',
        message: 'Together, we\'re cooking something truly special in Blockman Forge!',
        image: '/tweets/rchyx.webp'
    },
    {
        id: 'co-owner',
        name: 'Zvyne',
        role: '[ Co-Owner ]',
        message: 'Every block you place and every idea you share helps us shape Blockman Forge! Thank you!',
        image: '/tweets/zvyne.webp'
    },
    {
        id: 'executive',
        name: 'Nlxe',
        role: '[ Project Executive ]',
        message: 'Can\'t sleep tonight; we are preparing for the future in Blockman Forge!',
        image: '/tweets/neluxe.webp'
    },
    {
        id: 'moderator',
        name: 'Arief',
        role: '[ Moderator ]',
        message: 'Excited for the community to play Blockman Forge!',
        image: '/tweets/arief.webp'
    },
    {
        id: 'donator',
        name: 'Unknown',
        role: '[ Donator ]',
        message: 'Place Holder',
        image: '/tweets/unknown.webp'
    }
];
</script>

<style scoped>
#gratitude-list {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

h2 {
    margin-bottom: 10px;
}

.grid {
    display: grid;
    gap: 20px;
}

.card {
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.text-gradient {
    background: linear-gradient(90deg, rgba(255, 65, 108, 1), rgba(255, 189, 65, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
