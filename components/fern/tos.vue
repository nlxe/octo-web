<template>
    <Ray class="h-[30vh] -inset-0 left-0 opacity-30 dark:opacity-[.55] pointer-events-none" style="top: -80px;" />
    <article id="tos" class="relative">
        <div class="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 w-full mb-6 sm:mb-12">
            <h2 class="text-5xl sm:text-6xl text-left text-gray-700 dark:text-gray-300 font-medium leading-[3.5rem] sm:leading-[4.5rem]">
                <span class="text-gray-500 dark:text-gray-400 font-medium text-xl">Terms of Service</span><br />
                <span class="text-gradient from-teal-400 to-blue-600">Blockman Forge</span>
            </h2>
            <p class="w-full sm:w-1/2 lg:max-w-lg lg:w-full lg:pr-24 dark:text-gray-400 dark:font-medium">
                <span class="inline-block mb-2">Your acceptance is important.</span><br />
                These Terms of Service govern your access and use of our services. By using our services, you agree to comply with these terms.
            </p>
        </div>

        <div class="list">
            <section>
                <h3>1. Introduction</h3>
                <p>Hey there! Thanks for using Blockman Forge, a community-driven project created by Velaire. By using Blockman Forge, you're agreeing to these Terms of Service ("Terms"). Please read them carefully before using Blockman Forge.</p>
            </section>
            <section>
                <h3>2. Intellectual Property</h3>
                <p>Blockman Forge is a fork of the classic Blockman GO, built upon the 10039 engine. While we are inspired by Blockman GO, we have made significant changes and improvements to create a unique gaming experience. Therefore, while the inspiration is drawn from Blockman GO, Blockman Forge is not a direct copy of it, making our development legal. We do not own the rights to Blockman GO, and this is not a private server. All intellectual property rights, including but not limited to characters, names, places, and other aspects of Blockman GO, remain with their respective owners.</p>
            </section>
            <section>
                <h3>3. Using Blockman Forge</h3>
                <p>Blockman Forge is for entertainment purposes only. Don't use it for commercial or malicious purposes, and don't try to damage, disable, overburden, or impair the game or interfere with anyone else's use of it.</p>
            </section>
            <section>
                <h3>4. Your Account</h3>
                <p>If you create an account, you're responsible for keeping it safe and secure. Don't share your password or account info with anyone, and let us know if you think someone's using your account without permission.</p>
            </section>
            <section>
                <h3>5. User-Generated Content</h3>
                <p>When you upload content to Blockman Forge, you're giving us permission to use, modify, and distribute it to make the game better. You still own the content, but we need this permission to make sure everything runs smoothly.</p>
            </section>
            <section>
                <h3>6. Device ID Usage</h3>
                <p>To enhance the security of your account, we may use your device ID to prevent unauthorized access. When device lock is enabled, only authorized devices will be able to log in to your account. This helps us ensure that unknown individuals cannot access your account.</p>
            </section>
            <section>
                <h3>7. Device Location</h3>
                <p>We may collect your device location to optimize your experience by connecting you to the nearest server based on your geographical region. This helps improve game performance and ensures a smoother gameplay experience.</p>
            </section>
            <section>
                <h3>8. No Warranty</h3>
                <p>Blockman Forge is provided "as is" and "as available." We don't promise that it'll be perfect, and we're not responsible if it doesn't work as expected.</p>
            </section>

            <section>
                <h3>9. Liability</h3>
                <p>We're not liable for any damages or losses arising from your use of Blockman Forge. You agree to hold us harmless from any claims, demands, or damages arising from your use of the game.</p>
            </section>
            <section>
                <h3>10. Termination</h3>
                <p>We can terminate or suspend your access to Blockman Forge at any time, without notice, if we think you've violated these Terms.</p>
            </section>
            <section>
                <h3>11. Changes to Terms</h3>
                <p>We can change these Terms at any time. If we do, we'll let you know by posting an updated version on our website. Your continued use of Blockman Forge after any changes to these Terms will mean you accept the revised Terms.</p>
            </section>
        </div>
        <h5 class="text-right text-base mt-6 text-gray-400/75">
            By using Blockman Forge, you acknowledge that you've read, understood, and agree to be bound by these Terms.<br/><br/>
            Thanks for playing! We're glad you're part of the Blockman Forge community. Let's have fun and be respectful to each other!
        </h5>
    </article>
</template>

<script setup>
import Ray from '../fern/ray.vue'
import '../tailwind.css'
</script>

<style scoped>
#tos {
    @apply relative max-w-5xl w-full mx-auto mt-4 mb-12 p-4; /* Add padding here */

    & > .list {
        @apply grid gap-4 z-10;

        & > section {
            @apply relative flex flex-col w-full rounded-3xl p-6 border border-r-blue-100 border-b-purple-100 border-t-purple-200 border-l-blue-200 dark:border-r-blue-300/40 dark:border-b-purple-300/40 dark:border-t-purple-400/50 dark:border-l-blue-400/40 transform hover:-translate-y-2 transition-all ease-out duration-200 dark:text-gray-400;
            box-shadow: 0 7px 40px rgba(48, 160, 255, 0.075);

            &:hover {
                box-shadow: 0 12px 55px rgba(223, 160, 255, 0.2);
            }

            html.dark & {
                box-shadow: 0 7px 40px rgba(48, 160, 255, 0.15);

                &:hover {
                    box-shadow: 0 12px 55px rgba(223, 160, 255, 0.25);
                }
            }

            & > h3 {
                @apply text-2xl font-medium text-gray-700 dark:text-gray-300;
            }
        }
    }
}
</style>
